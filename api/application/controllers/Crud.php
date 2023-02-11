<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Crud extends CI_Controller {
	function __construct(){
		parent::__construct();
		$this->load->model('M_crud');
		$this->table_name=ifunset($_POST,'table_name','');
		if($this->table_name==''){
			$this->table_name=ifunset($_GET,'table_name','');
			if($this->table_name==''){
				$out = array(
					'success'=> false,
					'msg' => 'parameter table_name tidak terisi'
					);
				echo json_encode($out);
				exit;
			}
		}
		date_default_timezone_set("Asia/Bangkok");
	}

	public function index()
	{
		
	}

	function get(){
		$respon = $this->M_crud->get($this->table_name);
		$out=array(
				'success' => true,
				'items'=>$respon->result(),
				'count'=>$respon->num_rows()
			);
		echo json_encode($out);
	} 

	function get_where(){
		$data = $this->_get_post();
		$where = array('id'=>$data['id']);		
		$respon = $this->M_crud->get_where($this->table_name,$where);
		$out=array(
			'success' => true,
			'items'=>$respon->result(),				
			);
		echo json_encode($out);
	} 

	function insert(){
		$data = $this->_get_post();
		$respon = $this->M_crud->insert($this->table_name,$data);
		$out = $this->_respon($respon);
		echo json_encode($out);
	}

	function update(){
		$data = $this->_get_post();
		$respon = $this->M_crud->update($this->table_name,$data);
		$out = $this->_respon($respon);
		echo json_encode($out);
	}

	function save(){
		$data = $this->_get_post();

		if($data['id']==''){
			$respon = $this->M_crud->insert($this->table_name,$data);
			$data['id'] = $this->db->insert_id();
		}else{
			$where = array('id'=>$data['id']);
			unset($data['id']);
			$respon = $this->M_crud->update($this->table_name,$data,$where);	
			$data['id']	= $where['id'];	
		}		
		$out = $this->_respon($respon);
		$out['id'] = $data['id'];
		echo json_encode($out);
	}

	function save_child($table_name,$data){
		$params = array();			
		foreach ($data as $key => $value) {			
			if ($value != '') {
				$params[$key] = $value;
			}
		}		
		$res = $this->M_crud->insert($table_name,$params);
		$out = array(
				'success' => false
			);
		if ($res) {
			$out = array(
				'success' => true,
				'last_id' => $this->db->insert_id()
				);
		}
		return $out;
	}

	function upd_child($table_name,$data,$fk){
		$params = array();			
		$id = 0;
		foreach ($data as $key => $value) {			
			if ($value != '') {
				$params[$key] = $value;
			}
		}		
		$this->db->where($fk,$params[$fk]);
		$id = $params[$fk];
		unset($params[$fk]);
		$res = $this->M_crud->upd($table_name,$params);
		$out = array(
				'success' => false
			);
		if ($res) {
			$out = array(
				'success' => true,
				'last_id' => $id
				);
		}
		return $out;
	}

	function save2(){
		$parent_id = array();			
		$this->load->model('M_workflow_transaction_log');

		$data = $this->_get_post();		
		$data_files = $this->_get_file();						
		foreach ($data_files as $key => $value) {												
			$dokumen_id = $this->_insert_dokumen($value);
			if ($dokumen_id) {
				$data[$key] = $dokumen_id;
			}			
		}	
		if (isset($data['trx_number'])) {			
			/*if ($data['trx_number'] == '') {
				$data['trx_number'] = $this->M_workflow_transaction_log->get_last_gennumber($this->table_name,'trx_number','TN');			
			}*/
			$trx_number = $data['trx_number'];
		}else{
			$trx_number = '';
		}
		$this->db->trans_begin(); // Memulai transaction ke database
		$data['id'] = (int) $data['id'];
		$id = $data['id'];
		if (empty($data['id']) && $data['id'] == 0) {
			$id = 0;			
		}else{
			$update_active = array(				
				'active_sts' => 0,
				);
			$where_active = array(
				'id'=> $data['id'],
				);			
			$respon = $this->M_crud->update($this->table_name,$update_active,$where_active);		
		}		
		unset($data['id']);
		if(isset($data['active_sts'])){
			$data['active_sts'] = 1;
		}
		$respon = $this->M_crud->insert($this->table_name,$data);
		$data['id'] = $this->db->insert_id();		
		$data_childs = json_decode($_POST['data_childs'],True);

		$parent_id[$this->table_name][$id] = $data['id'];				
		foreach ($data_childs as $key => $value) {			
			$field_relation = array_keys($value['Field_Relation'][0]);
			foreach ($value['data'] as $index => $val) {
				$temp_id = $val['id'];
				/*if ($this->table_name == $value['Parent_Table'] ) {					
					if ($id != $val['parentId']) {
						$val['parentId'] = $id;
					}
				}*/
				if (count($field_relation) > 0) {					
					$val[$field_relation[0]] = $parent_id[$value['Parent_Table']][$val['parentId']];					
				}
				unset($val['parentId']);
				unset($val['id']);	
											
				$res = $this->save_child($value['Table_Name'],$val);
				/*if (count(explode(".", $temp_id)) > 1) {
					$res = $this->upd_child($value['Table_Name'],$val,'id');
				}else{				
				}*/
				if (!$res['success']) {
					$out = array(
						'success' => false,
						'msg' => 'Transaksi Gagal dilaksanakan'
						);
					echo json_encode($out);
					exit;
				}
				$parent_id[$value['Table_Name']][$temp_id] = $res['last_id'];					
			}						
		}		
		

		if ($this->db->trans_status() === false)
		{
		    $this->db->trans_rollback();
			$out = array(
				'success' => false,
				'msg' => 'Transaksi Gagal dilaksanakan'
			);
		}
		else
		{
		    $this->db->trans_commit();		    
			$out = array(
				'success' => true,
				'id' => $data['id'],
				'trx_number' => $trx_number,
				'msg' => 'Transaksi Berhasil dilaksanakan'
			);
		}
		
		echo json_encode($out);
	}

	function delete(){
		$where = $this->_get_post();
		$respon = $this->M_crud->delete($this->table_name,$where);
		$out = $this->_respon($respon);
		echo json_encode($out);
	}	

	function _get_post(){
		/*
		digunakan untuk mengeset kolom apa saja yg dipakai dan diambil dri post
		dri client contoh value : kolom1,kolom2 | dipisah menggunakan komah
		*/
		$params_set = ifunset($_POST,'params_set','');

		$data = array();
		if($params_set==''){
			$params = $_POST;
			foreach ($params as $key => $value) {
				$data[$key] = $value;
				unset($data['table_name']);
			}
		}else{
			$params = explode(',', $params_set);
			foreach ($params as $value) {
				$data[$value] = ifunset($_POST,$value,'');
			}
		}
		return $data;
	}

	protected function _insert_dokumen($data){
		$this->load->library('upload');
		$insert_id = false;
		$config = array(
			'upload_path'	=> $this->config->item('upload_path'),
			'allowed_types' => $this->config->item('allowed_types'),	
			'max_size'		=> $this->config->item('max_size_file'),
		);
		$this->_clear_tempupload();
		if(!empty($_FILES[$data['field_name']]['name']))
		{			
			$name = $_FILES[$data['field_name']]['name'];
			$filename = md5($name.time());
			$config['file_name'] = $filename;			
	        $this->upload->initialize($config);
    		$this->upload->do_upload($data['field_name']);
			$upload = $this->upload->data();					
			$params = array(								
				'file_name' => $upload['client_name'],
				'generated_name' => $filename.$upload['file_ext'],
				'date_created' => date("Y-m-d H.i.s"),
				'file_type' => $upload['file_type'],
				'size' => $upload['file_size'],
				);			
			$res = $this->M_crud->insert('c_dokument',$params);
			$insert_id = $this->db->insert_id();
		}		
		return $insert_id;
	}

	function _get_file(){
		/*
		digunakan untuk mengeset kolom apa saja yg dipakai dan diambil dri post
		dri client contoh value : kolom1,kolom2 | dipisah menggunakan komah
		*/
		$params_set = ifunset($_POST,'params_set','');		
		$data = array();
		if($params_set==''){
			$params = $_FILES;
			foreach ($params as $key => $value) {
				$data[$key] = $value;
				unset($data['table_name']);
			}
		}else{
			$params = explode(',', $params_set);
			foreach ($params as $value) {											
				$val = ifunset($_FILES,$value,'');				
				if (is_array($val)) {
					$data[$value] = $val;
					$data[$value]['field_name'] = $value;					
				}
			}
		}		
		return $data;
	}

	function _clear_tempupload(){
		$this->load->helper('file');		
		delete_files($this->config->item('upload_path').'/temp');
	}

	function _respon($in){
		if($in){
			$out = array(
				'success' => true,
				'msg' => 'Transaksi Berhasil dilaksanakan'
			);
		}else{
			$out = array(
				'success' => false,
				'msg' => 'Transaksi Gagal dilaksanakan'
				);
		}
		return $out;
	}
}
