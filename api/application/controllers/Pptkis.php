<?php


defined('BASEPATH') OR exit('No direct script access allowed');

class Pptkis extends MY_Controller {
	function __construct(){
		parent::__construct();
		$this->load->library('upload');
		$this->load->model(array('M_pptkis','M_pengguna'));
		
	}
	
	function get()
	{

		$params = array(
			'PPTKIS_ID' => ifunsetempty($_POST,'PPTKIS_ID',''),
			'PPTKIS_NAMA' => ifunsetempty($_POST,'PPTKIS_NAMA',''),
		);

		if ($params["PPTKIS_NAMA"]=="") {
			unset($params["PPTKIS_NAMA"]);
		}

		if (!$params["PPTKIS_ID"]) {
			unset($params["PPTKIS_ID"]);
		}
		
		$res = $this->M_pptkis->get($params);
		$out = array(
					'items' => $res->result(),
				);
		echo json_encode($out);
	}

	function get_by_id()
	{
		$params = array(
			'PPTKIS_ID' => ifunsetempty($_POST,'PPTKIS_ID',''),			
		);

		$data = array();
		$path = $this->config->item('upload_path')."/pptkis//";
		$res = $this->M_pptkis->get($params);
		if ($res->num_rows() == 1) {
			$data = $res->row_array();
			if (isset($data["PPTKIS_LOGO"])) {
				if (!file_exists($path.$data["PPTKIS_LOGO"])) {
					$data['PPTKIS_LOGO'] = "empty.png";
				}	
			}else{
				$data['PPTKIS_LOGO'] = "empty.png";
			}

			if (isset($data["PPTKIS_COVER"])) {				
				if (!file_exists($path.$data["PPTKIS_COVER"])) {
					$data['PPTKIS_COVER'] = "empty.png";
				}	
			}else{
				$data['PPTKIS_COVER'] = "empty.png";
			}

			if (isset($data["PPTKIS_STRUKTUR_ORGANISASI"])) {
				if (!file_exists($path.$data["PPTKIS_STRUKTUR_ORGANISASI"])) {
					$data['PPTKIS_STRUKTUR_ORGANISASI'] = "empty.png";
				}	
			}else{
				$data['PPTKIS_STRUKTUR_ORGANISASI'] = "empty.png";
			}
		}

		$out = array(
				'success' => true,
				'data' => $data,
				);
		
		echo json_encode($out);
	}

	function get_tree_satker($value='')
	{
		$params = array(
			'SATKER_ID' => ifunsetempty($_POST,'SATKER_ID',''),
		);
		$level = (int) substr_count($params['SATKER_ID'], '.');
		$is_tki = (int) ifunsetempty($_POST,'IS_TKI',0);
		$has_pegawai = (int) ifunsetempty($_POST,'HAS_PEGAWAI',0);
		$params['LEVEL'] = $level + 1;
		

		if($params['LEVEL']==1){
			$params['SATKER_ID']='';
		}
		$res = $this->M_pptkis->get_tree_satker($params);		


		$params['LEVEL_C'] = $params['LEVEL']+1;
		$data = array();
		if ($has_pegawai == 1 && $is_tki == 1) {
			$res_pegawai = $this->M_pptkis->get_pegawai($params);
			foreach ($res_pegawai->result() as $key => $value) {
				$value->leaf = true;	
				$value->SATKER_NAMA = $value->NAMA;
				$value->IS_PEGAWAI = true;
				$value->glyph = "xf1ae@fontAwesome";
				
				$data[] = $value;
			}			
		}

		foreach ($res->result() as $key => $value) {
			$params_c = array(
				'SATKER_ID' => $value->SATKER_ID,
				'LEVEL' => $params['LEVEL_C'],
				);
			$child = $this->M_pptkis->get_tree_satker($params_c);
			if($child->num_rows()==0){
				$value->leaf=true;				
			}else{
				$value->leaf=false;
			}
			$value->IS_PEGAWAI = false;
			$value->has_pegawai=false;	
			$value->id = $value->SATKER_ID;
			$value->glyph = "xf015@fontAwesome";
			if($value->SATKER_ID==''){
				$value->expanded = true;
			}
			$data[] = $value;
		}

		if ($is_tki == 1) {			
			$temp_data = $data;
			$data = array();
			foreach ($temp_data as $key => $value) {
				$value->is_satker=false;
				$params_pegawai = array(
					"SATKER_ID" => $value->SATKER_ID,
					);
				$res_pegawai = $this->M_pptkis->get_pegawai($params_pegawai);
				if (!$value->IS_PEGAWAI) {					
					if ($res_pegawai->num_rows() == 0) {
						$value->has_pegawai = false;

					}else{
						$value->has_pegawai = true;						
					}

					if ($value->leaf && !$value->has_pegawai) {
						$value->leaf=true;
					}else{
						$value->leaf=false;	
					}
				}
				$data[] = $value;
			}
		}
		
		$out = array(
					'items' => $data,
				);
		echo json_encode($out);
	}



	function get_orgsatker($value='')
	{

		$res = $this->M_pptkis->get_orgsatker_murni()->result_array();
		$data = array();
		foreach ($res as $key) {
			$params['SATKER_ID'] =  $key['SATKER_ID'];
			$key['res_pegawai'] = $this->M_pptkis->get_pegawai($params)->result_array();
			foreach($key['res_pegawai'] as $key2){
				$key2['PPTKIS_ID'] = "3.3.";
			}
			$data[] = $key;
			
		}

		
		$out = array(
					'items' => $data,
				);
		echo json_encode($out);

		/*
			
		
			foreach ($res_pegawai->result() as $key => $value) {
				$value->leaf = true;	
				$value->SATKER_NAMA = $value->NAMA;
				$value->IS_PEGAWAI = true;
				$value->glyph = "xf1ae@fontAwesome";
				
				$data[] = $value;

			}
			print_r($data);			*/
		//$res_pegawai = $this->M_pptkis->get_orgsatker()->result();

			

		
	}

	function save(){
		$params = array(
			'PPTKIS_ID' => ifunsetempty($_POST,'PPTKIS_ID',''),
			'PPTKIS_NAMA' => ifunsetempty($_POST,'PPTKIS_NAMA',''),
			'PPTKIS_LEGALITAS' => ifunsetempty($_POST, 'PPTKIS_LEGALITAS',''),
			'PPTKIS_DES_PANJANG' => ifunsetempty($_POST, 'PPTKIS_DES_PANJANG',''),
			'PPTKIS_DES_PENDEK' => ifunsetempty($_POST, 'PPTKIS_DES_PENDEK',''),		
			'WILAYAH_ID' => ifunsetempty($_POST, 'WILAYAH_ID','')			
		);
		
		if($params['PPTKIS_ID']==""){ 
			$res = $this->M_pptkis->add($params);
			$id = $this->db->insert_id();
				if($res){
					$out = array(
						'success' => true,
						'msg' => 'Berhasil Menyimpan' 
					);
				}	
		}else{
			$res = $this->M_pptkis->upd($params);
			$id = $params['PPTKIS_ID'];
			if($res){
					$out = array(
						'success' => true,
						'msg' => 'Berhasil Menyimpan' 
					);
			}	
		}		

		$this->_insert_file($id,"PPTKIS_LOGO","LOGO");
		$this->_insert_file($id,"PPTKIS_COVER","COVER");
		$this->_insert_file($id,"PPTKIS_STRUKTUR_ORGANISASI","STRUKTUR_ORGANISASI");

		echo json_encode($out);
	}

	protected function _insert_file($id,$filed_name,$type){		
		$insert_id = false;
		$config = array(
			'upload_path'	=> $this->config->item('upload_path')."/pptkis",
			'allowed_types' => $this->config->item('allowed_types'),	
			"overwrite"=>true
			//'max_size'		=> $this->config->item('max_size_file'),
		);		
		$res = false;
		if(!empty($_FILES[$filed_name]['name']))
		{			
			$name = $_FILES[$filed_name]['name'];
			$filename = "PPTKIS_".$type."_".md5($id);
			$config['file_name'] = $filename;			
	        $this->upload->initialize($config);
    		$this->upload->do_upload($filed_name);    		
			$upload = $this->upload->data();								
			$params = array(								
				'PPTKIS_ID' => $id,
				$filed_name => $filename.$upload['file_ext'],				
				);			
			$res = $this->M_pptkis->upd($params);			
		}		
		return $res;
	}

	function del(){
		$params = array(
			'PPTKIS_ID' => ifunsetempty($_POST,'BARANG_ID',''),
		);
		$res = $this->M_pptkis->del($params);
		if($res){
					$out = array(
						'success' => true,
						'msg' => 'Berhasil Menghapus' 
					);
				}	
		echo json_encode($out);
	}

	function get_satker()
	{
		$params = array(
			'PPTKIS_ID' => ifunsetempty($_POST,'PPTKIS_ID',''),
			'SATKER_TIPE' => (int) ifunsetempty($_POST,'SATKER_TIPE',1),
		);
		$res = $this->M_pptkis->get_satker($params);
		$out = array(
			'items' => $res->result(),
		);
		echo json_encode($out);
	}

	function save_satker(){
		$params = array(
			'SATKER_ID' => ifunsetempty($_POST,'SATKER_ID',''),
			'PPTKIS_ID' => ifunsetempty($_POST,'PPTKIS_ID',''),
			'SATKER_NAMA' => ifunsetempty($_POST,'SATKER_NAMA',''),
			'SATKER_TIPE' => ifunsetempty($_POST, 'SATKER_TIPE','1'),			
			'SATKER_TELP' => ifunsetempty($_POST,'SATKER_TELP',''),
			'SATKER_ALAMAT' => ifunsetempty($_POST,'SATKER_ALAMAT',''),
			'WILAYAH_ID' => ifunsetempty($_POST, 'WILAYAH_ID','')			
		);		

		if($params['SATKER_ID']==""){ 
			$new_id = $this->M_pptkis->get_satker_id($params)->first_row()->NEW;			
			$params['SATKER_ID'] = $params['PPTKIS_ID'].'.'. $new_id.'.';
			$res = $this->M_pptkis->add_satker($params);
				if($res){
					$out = array(
						'success' => true,
						'msg' => 'Berhasil Menyimpan' 
					);
				}	
		}else{
			$res = $this->M_pptkis->upd_satker($params);
			if($res){
					$out = array(
						'success' => true,
						'msg' => 'Berhasil Menyimpan' 
					);
			}	
		}		
		echo json_encode($out);
	}

	function del_satker(){
		$params = array(
			'SATKER_ID' => ifunsetempty($_POST,'SATKER_ID',''),
		);
		$res = $this->M_pptkis->del_satker($params);
		if($res){
					$out = array(
						'success' => true,
						'msg' => 'Berhasil Menghapus' 
					);
				}	
		echo json_encode($out);
	}


	function get_pegawai()
	{
		$params = array(			
			'SATKER_ID' => ifunsetempty($_POST,'SATKER_ID',''),
		);
		$res = $this->M_pptkis->get_pegawai($params);
		$out = array(
			'items' => $res->result(),
		);
		echo json_encode($out);
	}

	function save_pegawai(){
		$params_pengguna = array(
			'ID' => (int) ifunsetempty($_POST,'ID',0),			
			'NAMA' => ifunsetempty($_POST,'NAMA',''),
			'EMAIL' => ifunsetempty($_POST, 'EMAIL',''),			
			'PASSWORD' => ifunsetempty($_POST,'PASSWORD',''),
			'NO_TELP' => ifunsetempty($_POST,'NO_TELP',''),
			'ALAMAT_TINGGAL' => ifunsetempty($_POST,'ALAMAT_TINGGAL',''),
			'USERGROUP_ID' =>  ifunsetempty($_POST,'USERGROUP_ID',''),
			'ACTIVE' => 1,
		);		

		$params = array(
			//'ID' => ifunsetempty($_POST,'MAP_ID',''),
			'SATKER_ID' => ifunsetempty($_POST,'SATKER_ID',''),
			'PPTKIS_ID' => ifunsetempty($_POST,'PPTKIS_ID',''),
		);
		
		
		if($params_pengguna['ID'] == 0){ 
			$params_pengguna['PASSWORD'] = md5($params_pengguna['PASSWORD']);			
			$res = $this->M_pengguna->add($params_pengguna);
			$pengguna_id = $this->db->insert_id();
			$params['PENGGUNA_ID'] = $pengguna_id;
			$res = $this->M_pptkis->add_pegawai($params);
				if($res){
					$out = array(
						'success' => true,
						'msg' => 'Berhasil Menyimpan' 
					);
				}	
		}else{
			$res = $this->M_pengguna->upd($params_pengguna);
			if($res){
					$out = array(
						'success' => true,
						'msg' => 'Berhasil Menyimpan' 
					);
			}	
		}		
		echo json_encode($out);
	}

	function del_pegawai(){
		$params_pengguna = array(
			'ID' => ifunsetempty($_POST,'ID',''),
			'ACTIVE' => 0,
		);

		$params = array(
			'ID' => ifunsetempty($_POST,'MAP_ID',''),
		);
		$res = $this->M_pengguna->upd($params_pengguna);
		$res = $this->M_pptkis->del_pegawai($params);
		if($res){
					$out = array(
						'success' => true,
						'msg' => 'Berhasil Menghapus' 
					);
				}	
		echo json_encode($out);
	}


	function get_fasilitas()
	{
		$params = array(			
			'PPTKIS_ID' => ifunsetempty($_POST,'PPTKIS_ID',''),
		);
		$res = $this->M_pptkis->get_fasilitas($params);
		$out = array(
			'items' => $res->result(),
		);
		echo json_encode($out);
	}

	function save_fasilitas(){
		$params = array(
			'FASILITAS_ID' => ifunsetempty($_POST,'FASILITAS_ID',''),
			'PPTKIS_ID' => ifunsetempty($_POST,'PPTKIS_ID',''),
			'FASILITAS_NAMA' => ifunsetempty($_POST,'FASILITAS_NAMA',''),
			'FASILITAS_DESKRIPSI' => ifunsetempty($_POST,'FASILITAS_DESKRIPSI',''),					
		);

		$dokumen_id = $this->_insert_fasilitas("PPTKIS_FASITITAS","FASILITAS_DOKUMEN","/pptkis/fasilitas","10.");

		if ($dokumen_id) {
			$params['DOKUMEN_ID'] = $dokumen_id;
		}else{
			$out = array(
						'success' => false,
						'msg' => 'Hanya mengizinkan upload dokumen bertipe Gambar' 
					);
			echo json_encode($out);
			exit();

		}

		if($params['FASILITAS_ID']==""){ 						
			$res = $this->M_pptkis->add_fasilitas($params);
				if($res){
					$out = array(
						'success' => true,
						'msg' => 'Berhasil Menyimpan' 
					);
				}	
		}else{
			$res = $this->M_pptkis->upd_fasilitas($params);
			if($res){
					$out = array(
						'success' => true,
						'msg' => 'Berhasil Menyimpan' 
					);
			}	
		}		
		echo json_encode($out);
	}

	function del_fasilitas(){
		$params = array(
			'FASILITAS_ID' => ifunsetempty($_POST,'FASILITAS_ID',''),
		);
		$res = $this->M_pptkis->del_fasilitas($params);
		if($res){
			$out = array(
				'success' => true,
				'msg' => 'Berhasil Menghapus' 
			);
		}else{
			$out = array(
				'success' => false,
				'msg' => 'Gagal Menghapus' 
			);
		}
		echo json_encode($out);
	}


	function get_partner()
	{
		$params = array(			
			'PPTKIS_ID' => ifunsetempty($_POST,'PPTKIS_ID',''),
		);
		$res = $this->M_pptkis->get_partner($params);
		$tipe = array("","BLKLN","Lembaga Keuangan","Lembaga Sertifikasi Profesi","Sarana Kesehatan","Asuransi");
		$data = array();
		foreach ($res->result_array() as $key => $value) {
			$value["TIPE_NAMA"] = $tipe[$value["TIPE"]];
			$data[] = $value;
		}
		$out = array(
			'items' => $data,
		);
		echo json_encode($out);
	}

	function save_partner(){
		$params = array(
			'PPTKIS_PARTNER_ID' => ifunsetempty($_POST,'PPTKIS_PARTNER_ID',''),
			'PPTKIS_ID' => ifunsetempty($_POST,'PPTKIS_ID',''),
			'PARTNER_ID' => ifunsetempty($_POST,'PARTNER_ID',''),
			'TIPE' => ifunsetempty($_POST,'TIPE',''),			
		);		

		if($params['PPTKIS_PARTNER_ID']==""){ 						
			$res = $this->M_pptkis->add_partner($params);
				if($res){
					$out = array(
						'success' => true,
						'msg' => 'Berhasil Menyimpan' 
					);
				}	
		}else{
			$res = $this->M_pptkis->upd_partner($params);
			if($res){
					$out = array(
						'success' => true,
						'msg' => 'Berhasil Menyimpan' 
					);
			}	
		}		
		echo json_encode($out);
	}

	function del_partner(){
		$params = array(
			'PPTKIS_PARTNER_ID' => ifunsetempty($_POST,'PPTKIS_PARTNER_ID',''),
		);
		$res = $this->M_pptkis->del_partner($params);
		if($res){
			$out = array(
				'success' => true,
				'msg' => 'Berhasil Menghapus' 
			);
		}else{
			$out = array(
				'success' => false,
				'msg' => 'Gagal Menghapus' 
			);
		}
		echo json_encode($out);
	}


	

	function get_partner_bytype()
	{
		$table_name = ifunsetempty($_POST,"TABLE_NAME","");
		$data = array();
		$res = false;

		if (!empty($table_name)) {
			$res = $this->M_pptkis->get_partner_bytype($table_name);		
			$data = $res->result_array();
		}

		if($res){
			$out = array(
				'success' => true,
				'items' => $data,
				'msg' => 'Berhasil mengambil data' 
			);
		}else{
			$out = array(
				'success' => false,
				'msg' => 'Gagal mengambil data' 
			);
		}

		echo json_encode($out);
	}



}