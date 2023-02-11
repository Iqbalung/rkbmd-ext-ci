<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Pekerja extends MY_Controller {
	function __construct(){
		parent::__construct();
		$this->load->library('upload');
		$this->load->model('M_pekerja');
		$this->load->model('M_pelamar');
		$this->load->model('M_pengguna');
	}
	
	function get()
	{
		$params = array(
			'SATKER_ID' => ifunsetempty($_POST,'SATKER_ID',''),
			'REKRUITER_ID' => ifunsetempty($_POST,'REKRUITER_ID',''),
			'NAMA' => ifunsetempty($_POST,'keyword',''),
			'start' => (int) ifunsetempty($_POST,'start',0),
			'page' => (int) ifunsetempty($_POST,'page',1),
			'limit' => (int) ifunsetempty($_POST,'limit',25),
		);

		if ($params["NAMA"]=="") {
			unset($params["NAMA"]);
		}

		if (!$params["SATKER_ID"]) {
			unset($params["SATKER_ID"]);
		}
		
		if ($this->user["PPTKIS_ID"]!="") {
			$params['PPTKIS_ID'] = $this->user['PPTKIS_ID'];
		}

		if ($this->user["USERGROUP_ID"]=="3") {
			$params['REKRUITER_ID'] = $this->user['ID'];
		}

		if ($params["REKRUITER_ID"]=="") {
			unset($params['REKRUITER_ID']);
		}
		$data=array();
		$res = $this->M_pekerja->get($params)->result_array();
		foreach ($res as $key) {
			$id = $key['ID'];
			$status = $this->M_pelamar->getsyarat($id)->result_array();
			$key['PENDIDIKAN_NAMA'] = $status[0]['PENDIDIKAN_NAMA'];
			$key['POSISI'] = $status[0]['POSISI'];
			$data[] = $key;			
		}
		unset($params["limit"]);
		unset($params["start"]);
		$res_count = $this->M_pekerja->get($params);
		$out = array(
			'count' => $res_count->num_rows(),
			'items' => $data
		);	
		echo json_encode($out);
	}

	function addtolamaran(){
		$params = array(
			'DATA'		=> ifunsetempty($_POST,'DATA',''),
			'JOB_ID'		=> ifunsetempty($_POST,'JOB_ID',''),
		);
		$status = '2.';
		$DATA = json_decode($params['DATA'],TRUE);

		foreach($DATA as $key) {
			$var =array();
			$var['ID'] = $key['LAMARAN_ID'];
			$var['PEKERJA_ID'] = $key['PEKERJA_ID'];
			$var['STATUS_ID'] = $status;
			$var['JOB_ID'] = $params['JOB_ID'];
			$res = $this->M_pekerja->addtolamaran($var);
		}
		if($res){
				$out = array(
						'success' => true,
						'msg' => 'Berhasil Menyimpan' 
					);
		}
		echo json_encode($out);
	}

	function get_by_id(){
		$params = array(
			'ID' => ifunsetempty($_POST,'ID','')
		);

		$res = $this->M_pekerja->get_by_id($params);
		$out = array(
					'success' =>true,
					'data' => $res->first_row(),
				);
		echo json_encode($out);
	}

	function getusergroup(){
		$res = $this->M_pekerja->usergroup();
		$out = array(
					'items' => $res->result(),
				);
		echo json_encode($out);
	}

	function get_klasifikasi(){
		$res = $this->M_pekerja->get_klasifikasi();
		$out = array(
					'items' => $res->result(),
				);
		echo json_encode($out);
	}

	function get_riw_kompetensi(){
		$params = array(
			"PENGGUNA_ID" =>ifunsetempty($_POST,"PEKERJA_ID","")
		);
		$kompetensi = $this->M_pekerja->get_kompetensi($params)->row()->KOMPETENSI;
		$kompetensi_id = $this->M_pekerja->get_kompetensi($params)->row()->KOMPETENSI_ID;
		$kompetensi = explode(",", $kompetensi);
		$kompetensi_id = explode(",", $kompetensi_id);
		$data=array();
		foreach ($kompetensi_id as $key => $value) {
				$temp = array('KOMPETENSI_ID' => $value,
							  'KOMPETENSI_NAMA' => $kompetensi[$key] );
				array_push($data, $temp);
			}
		$kompetensi = array('items' => $data );
		echo json_encode($kompetensi);

	}

	function test(){
		echo $this->session->userdata('USERGROUP_ID');
	}

	function get_riw_bidang(){
		$params = array(
			"PENGGUNA_ID" =>ifunsetempty($_POST,"PEKERJA_ID","")
		);
		$bidang = $this->M_pekerja->get_bidang($params)->row()->BIDANG;
		$bidang_id = $this->M_pekerja->get_bidang($params)->row()->BIDANG_ID;
		$bidang = explode(",", $bidang);
		$bidang_id = explode(",", $bidang_id);
		$data=array();
		foreach ($bidang_id as $key => $value) {
				$temp = array('BIDANG_ID' => $value,
							  'BIDANG_NAMA' => $bidang[$key] );
				array_push($data, $temp);
			}
		$bidang = array('items' => $data );
		echo json_encode($bidang);
	}

	function save(){
		$params = array(
			'ID'					=> ifunsetempty($_POST,'ID',''),
			'NAMA'					=> ifunsetempty($_POST,'NAMA',''),
			'EMAIL'					=> ifunsetempty($_POST,'EMAIL',''),
			'NO_KTP'				=> ifunsetempty($_POST,'NO_KTP',''),
			'NO_TELP'				=> ifunsetempty($_POST,'NO_TELP',''),
			'TEMPAT_LAHIR'			=> ifunsetempty($_POST,'TEMPAT_LAHIR',''),
			'TANGGAL_LAHIR'			=> ifunsetempty($_POST,'TANGGAL_LAHIR',''),
			'JENIS_KELAMIN'			=> ifunsetempty($_POST,'JENIS_KELAMIN',''),
			'WILAYAH_ID_KTP'		=> ifunsetempty($_POST,'WILAYAH_KTP_ID',''),
			'ALAMAT_KTP'			=> ifunsetempty($_POST,'ALAMAT_KTP',''),
			'WILAYAH_ID_TINGGAL'	=> ifunsetempty($_POST,'WILAYAH_TINGGAL_ID',''),
			'ALAMAT_TINGGAL'		=> ifunsetempty($_POST,'ALAMAT_TINGGAL',''),
			'WILAYAH_MINAT'			=> ifunsetempty($_POST,'WILAYAH_NAMA_MULTI',''),
			'WILAYAH_MINAT_ID'			=> ifunsetempty($_POST,'WILAYAH_ID_MULTI',''),
			'USERGROUP_ID'			=> 4,
			'ACTIVE'				=> 1,
			'KOMPETENSI_ID' => ifunsetempty($_POST,'id_kompetensi',''),
			'KOMPETENSI' => ifunsetempty($_POST,'text_kompetensi',''),
			'BIDANG_ID' => ifunsetempty($_POST,'id_bidang',''),
			'BIDANG' => ifunsetempty($_POST,'text_bidang',''),

		);
		if($params['KOMPETENSI_ID']=="null"){
			unset($params['KOMPETENSI_ID']);
			unset($params['KOMPETENSI']);
		}else{
			$params['KOMPETENSI_ID'] = implode(",", json_decode(ifunsetempty($_POST,'id_kompetensi','')));
		}
		if($params['BIDANG_ID']=="null"){
			unset($params['BIDANG_ID']);
			unset($params['BIDANG']);
		}else{
			$params['BIDANG_ID'] = implode(",", json_decode($params['BIDANG_ID']));
		}
			
		// proses pembuatan json bidang
		$id = $this->session->userdata('ID');
		$urg = $this->session->userdata('USERGROUP_ID');
		if($params['ID']==""){ 	
			$res = $this->M_pengguna->add($params);
			$id = $this->db->insert_id();
			$lamaran = array(
				'PEKERJA_ID'			=> $id,
				'PPTKIS_ID'				=> ifunsetempty($_POST,'PPTKIS_ID',''),
				'STATUS_ID'				=> "1.",			
			);
			if($urg==3){
				$lamaran['REKRUITER_ID'] = $this->session->userdata('ID');
			}else{
				$lamaran['REKRUITER_ID'] = "";
			}
			$res = $this->M_pekerja->penggunatolamaran($lamaran);
		}else{						
			$res = $this->M_pengguna->upd($params);
			$id = $params['ID'];			
		}		

		if ($res) {
			$out = array(
				'success' => true,
				'id' => $id,
				'msg' => 'Berhasil Menyimpan' 
			);
			echo json_encode($out);
			$data_kerja = json_decode(ifunsetempty($_POST,"data_kerja","[]"),true);
			$data_pendidikan = json_decode(ifunsetempty($_POST,"data_pend","[]"),true);
			
			$data_keluarga = json_decode(ifunsetempty($_POST,"data_keluarga","[]"),true);
			$this->_insert_file($id,"PHOTO","PHOTO");
			$this->_insert_file($id,"COVER","COVER");
			$res_kerja = $this->save_riw_kerja($data_kerja,$id);						
			$res_pendidikan = $this->save_riw_pendidikan($data_pendidikan,$id);
			$res_keluarga = $this->save_riw_keluarga($data_keluarga,$id);


		}

		
	}

	protected function _insert_file($id,$filed_name,$type){		
		$insert_id = false;
		$config = array(
			'upload_path'	=> $this->config->item('upload_path')."/tki/identitas",
			'allowed_types' => $this->config->item('allowed_types'),	
			"overwrite"=>true
			//'max_size'		=> $this->config->item('max_size_file'),
		);		
		$res = false;
		if(!empty($_FILES[$filed_name]['name']))
		{			
			$name = $_FILES[$filed_name]['name'];
			$filename = "PENGUNA_".$type."_".md5($id);
			$config['file_name'] = $filename;			
	        $this->upload->initialize($config);
    		$this->upload->do_upload($filed_name);    		
			$upload = $this->upload->data();								
			$params = array(								
				'ID' => $id,
				$filed_name => $filename.$upload['file_ext'],				
				);			
			$res = $this->M_pengguna->upd($params);			
		}		
		return $res;
	}

	function get_riw_kerja(){
		$params = array(
			"PEKERJA_ID" =>ifunsetempty($_POST,"PEKERJA_ID","")
		);

		$res = $this->M_pekerja->get_riw_kerja($params);
		$out = array(
			'success' => true,
			'items' => $res->result(),
		);
		echo json_encode($out);
	}

	function save_riw_kerja($data = array(),$id_parent)
	{
		$res = true;
		if (count($data) > 0) {			
			$list_id = array_column($data,"ID");			
			$params_delete = array(
				"PEKERJA_ID" => $id_parent,
				"LIST_ID" => array_filter($list_id)
				);			
			$res = $this->M_pekerja->del_riw_kerja($params_delete);	
			$dokumen_id = $this->_insert_dokumen("TKI_MEDIA","DOKUMEN_NAMA","/tki/media","3.");			
			$id = $this->db->insert_id();
			foreach ($data as $key => $value) {
				if(isset($value['id'])){
					unset($value['id']); // remove index id dari index grid extjs
				}
				$value["PEKERJA_ID"] = $id_parent;			
				$value["PENGALAMAN_ID"] = $value["ID"];
				unset($value["ID"]);
				if ($value["PENGALAMAN_ID"] == "") {
					$value['DOKUMEN_ID'] = $id;
					unset($value['DOKUMEN_NAMA']);
					unset($value['DOKUMEN_NAMA_GENERATE']);
					unset($value['DOKUMEN_TIPE']);
					unset($value['DOKUMEN_UKURAN']);
					unset($value['KLASIFIKASI_ID']);
					$res = $this->M_pekerja->add_riw_kerja($value);
				}else{
					unset($value['DOKUMEN_NAMA']);
					unset($value['DOKUMEN_NAMA_GENERATE']);
					unset($value['DOKUMEN_TIPE']);
					unset($value['DOKUMEN_UKURAN']);
					unset($value['KLASIFIKASI_ID']);
					$res = $this->M_pekerja->upd_riw_kerja($value);
				}

				if (!$res) {
					break;
				}
			}
		}
		return $res;
	}

	function get_riw_pendidikan(){
		$params = array(
			"ID_PEKERJA" =>ifunsetempty($_POST,"PEKERJA_ID","")
		);

		$res = $this->M_pekerja->get_riw_pendidikan($params);
		$out = array(
			'success' => true,
			'items' => $res->result(),
		);
		echo json_encode($out);
	}

	function save_riw_pendidikan($data = array(),$id_parent)
	{
		$res = true;

		if (count($data) > 0) {
			$list_id = array_column($data,"ID");			
			$params_delete = array(
				"ID_PEKERJA" => $id_parent,
				"LIST_ID" => array_filter($list_id)
				);
			$res = $this->M_pekerja->del_riw_pendidikan($params_delete);
			$dokumen_id = $this->_insert_dokumen("TKI_MEDIA","DOKUMEN_NAMA","/tki/media","3.");	
					$id = $this->db->insert_id();					
			foreach ($data as $key => $value) {
				if(isset($value['id'])){
					unset($value['id']); // remove index id dari index grid extjs
				}
				$value["ID_PEKERJA"] = $id_parent;
				$value["FORMAL_ID"] = $value["ID"];
				unset($value["ID"]);
				if ($value["FORMAL_ID"] == "") {
					$value['DOKUMEN_ID'] = $id;
					unset($value['DOKUMEN_NAMA']);
					unset($value['TPENDIDIKAN_ID']);
					$value['TPENDIDIKAN_ID'] = $value['PENDIDIKAN_ID'];
					$res = $this->M_pekerja->add_riw_pendidikan($value);
				}else{
					unset($value['DOKUMEN_NAMA']);
					unset($value['DOKUMEN_NAMA_GENERATE']);
					unset($value['DOKUMEN_TIPE']);
					unset($value['DOKUMEN_UKURAN']);
					unset($value['KLASIFIKASI_ID']);
					unset($value['TPENDIDIKAN_ID']);
					$value['TPENDIDIKAN_ID'] = $value['PENDIDIKAN_ID'];
					$res = $this->M_pekerja->upd_riw_pendidikan($value);
				}

				if (!$res) {
					break;
				}
			}
		}

		return $res;
	}

	function get_riw_keluarga(){
		$params = array(
			"PENGGUNA_ID" =>ifunsetempty($_POST,"PEKERJA_ID","")
		);

		$res = $this->M_pekerja->get_riw_keluarga($params);
		$out = array(
			'success' => true,
			'items' => $res->result(),
		);
		echo json_encode($out);
	}

	function save_riw_keluarga($data = array(),$id_parent)
	{
		$res = true;
		if (count($data) > 0) {
			$list_id = array_column($data,"ID");			
			$params_delete = array(
				"PENGGUNA_ID" => $id_parent,
				"LIST_ID" => array_filter($list_id)
				);
			$res = $this->M_pekerja->del_riw_keluarga($params_delete);		
			foreach ($data as $key => $value) {			
				if(isset($value['id'])){
					unset($value['id']); // remove index id dari index grid extjs
				}
				$value["PENGGUNA_ID"] = $id_parent;
				if ($value["ID"] == "") {
					$res = $this->M_pekerja->add_riw_keluarga($value);
				}else{
					$res = $this->M_pekerja->upd_riw_keluarga($value);
				}

				if (!$res) {
					break;
				}
			}
		}
		

		return $res;
	}

	function get_media(){
		$params = array(
			"PEKERJA_ID" =>ifunsetempty($_POST,"PEKERJA_ID","")
		);

		$res = $this->M_pekerja->get_media($params);
		$out = array(
			'success' => true,
			'items' => $res->result(),
		);
		echo json_encode($out);
	}

	function save_media(){
		$params = array(
			'ID' => ifunsetempty($_POST,'ID',''),
			'PEKERJA_ID' => ifunsetempty($_POST,'PEKERJA_ID',''),			
			'DOKUMEN_DESKRIPSI' => ifunsetempty($_POST,'DOKUMEN_DESKRIPSI',''),			
		);		
		$klasifikasi_id = ifunsetempty($_POST,'KLASIFIKASI_ID','1.');
		$out = array(
			'success' => false,
			'msg' => 'Gagal Menyimpan' 
		);

		$dokumen_id = $this->_insert_dokumen("TKI_MEDIA","PENGUNA_DOKUMEN","/tki/media",$klasifikasi_id);

		if ($dokumen_id) {
			$params['DOKUMEN_ID'] = $dokumen_id;
		}

		if($params['ID']==""){ 						
			$res = $this->M_pekerja->add_media($params);
				if($res){
					$out = array(
						'success' => true,
						'msg' => 'Berhasil Menyimpan' 
					);
				}	
		}else{
			$res = $this->M_pekerja->upd_media($params);
			if($res){
					$out = array(
						'success' => true,
						'msg' => 'Berhasil Menyimpan' 
					);
			}	
		}		
		echo json_encode($out);
	}

	function del_media(){
		$params = array(
			'ID' => ifunsetempty($_POST,'ID',''),
		);
		$res = $this->M_pekerja->del_media($params);
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

	function get_nonbekerja(){
		$params = array(
			'ID'					=> ifunsetempty($_POST,'ID',''),
			'KEYWORD'				=> ifunsetempty($_POST,'KEYWORD',''),
			'JENIS_KELAMIN'			=> ifunsetempty($_POST,'JENIS_KELAMIN',''),
			'USERGROUP_ID'			=> 4,
			'ACTIVE'				=> 1,
		);


		if ($params["KEYWORD"]=="") {
			unset($params["KEYWORD"]);
		}

		if ($params["ID"]=="") {
			unset($params["ID"]);
		}

		if (!$params["JENIS_KELAMIN"]) {
			unset($params["JENIS_KELAMIN"]);
		}
		if ($this->user["PPTKIS_ID"]!="") {
			$params['PPTKIS_ID'] = $this->user['PPTKIS_ID'];
		}
		$to   = new DateTime('today');
		$data=array();
		$res = $this->M_pekerja->get_nonbekerja($params)->result_array();
		foreach ($res as $key) {
			$status = $this->M_pelamar->getsyarat($key['PEKERJA_ID'])->result_array();
			$key['PENDIDIKAN_NAMA'] = $status[0]['PENDIDIKAN_NAMA'];
			$from = new DateTime($key['TANGGAL_LAHIR']);
			$key['POSISI'] = $status[0]['POSISI'];
			$key['UMUR'] = $from->diff($to)->y;
			$data[] = $key;
		}
		$out = array(
					'items' => $data,
		);
		echo json_encode($out);
		

	}

	function get_riw_pend_informal(){
		$params = array(
			'JOB_ID' => ifunsetempty($_POST,'JOB_ID',''),
			'LAMARAN_ID' => ifunsetempty($_POST,'LAMARAN_ID',''),
			'PENGGUNA_ID' => ifunsetempty($_POST,'PENGGUNA_ID',''),
		);

		$res = $this->M_pekerja->get_riw_pend_informal($params);
		$out = array(
					'items' => $res->result(),
				);
		echo json_encode($out);

	}
	

}