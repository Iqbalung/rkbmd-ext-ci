<?php

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Authorization, X-API-KEY, Origin,X-Requested-With, Content-Type, Accept, Access-Control-Requested-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PATCH, PUT, DELETE, get, post");

class MY_Controller extends CI_Controller {

	
	function __construct()
	{
		header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Authorization, X-API-KEY, Origin,X-Requested-With, Content-Type, Accept, Access-Control-Requested-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PATCH, PUT, DELETE, get, post");
		parent::__construct();
		$this->is_login();
		$user = array();
		$this->get_data_user();
		

	}
	
	
	function get_data_user(){
		//session
		$this->user = array(
			'ID' => $this->session->userdata('ID'),
			'EMAIL' => $this->session->userdata('EMAIL'),
			'USERGROUP_ID' => $this->session->userdata('USERGROUP_ID'),
			'NAMA' => $this->session->userdata('NAMA'),
			'NO_TELP' => $this->session->userdata('NO_TELP'),
			'NO_KTP' => $this->session->userdata('NO_KTP'),
			'ALAMAT' => $this->session->userdata('ALAMAT_TINGGAL'),
			'DESKRIPSI' => $this->session->userdata(''),
			'PHOTO' => $this->session->userdata('PHOTO'),
			'USERGROUP' => $this->session->userdata('USERGROUP'),
			'IS_BIDANG_TELAAH' => $this->session->userdata('BIDANG_TELAAH')
		);

	}

	function is_login(){
		$is_login = $this->session->userdata('is_login');
		$out = array('msg'=>'Anda Belum Login');
		if($is_login==true){

		}else{
			echo json_encode($out);
			exit;
		}
	}
	/*
	WAREHOUSE DOCUMENT IQBAL & FAUZI 2017



	*/
	protected function _insert_dokumen($prfx,$field_name,$path,$klasifikasi_id){
		$this->load->library('upload');
		$insert_id = false;

		$config = array(
			'upload_path'	=> $this->config->item('upload_path').$path,
			'allowed_types' => $this->config->item('allowed_types'),	
			//'max_size'		=> $this->config->item('max_size_file'),
		);		
		if(!empty($_FILES[$field_name]['name']))
		{			
			
			$name = $_FILES[$field_name]['name'];
			$filename = $prfx.'_'.md5($name);
			$config['file_name'] = $filename;			
	        $this->upload->initialize($config);
    		$this->upload->do_upload($field_name);
			$upload = $this->upload->data();					
			$params = array(								
				'DOKUMEN_NAMA' => $upload['client_name'],
				'DOKUMEN_NAMA_GENERATE' => $filename.$upload['file_ext'],				
				'DOKUMEN_TIPE' => $upload['file_type'],
				'KLASIFIKASI_ID' => $klasifikasi_id,
				'DOKUMEN_UKURAN' => $upload['file_size'],
				);			
			$res = $this->db->insert('DOKUMEN',$params);
			$insert_id = $this->db->insert_id();
		}		
		return $insert_id;
	}
	protected function _insert_fasilitas($prfx,$field_name,$path,$klasifikasi_id){
		$this->load->library('upload');
		$insert_id = false;
		$config = array(
			'upload_path'	=> $this->config->item('upload_path').$path,
			'allowed_types' => $this->config->item('allowed_types'),	
			//'max_size'		=> $this->config->item('max_size_file'),
		);		
		if(!empty($_FILES[$field_name]['name']))
		{			
			$name = $_FILES[$field_name]['name'];
			$filename = $prfx.'_'.md5($name);
			$config['file_name'] = $filename;
			$config['allowed_types'] = 'PNG|png|JPG|jpg';			
	        $this->upload->initialize($config);
    		$this->upload->do_upload($field_name);
			$upload = $this->upload->data();					
			$params = array(								
				'DOKUMEN_NAMA' => $upload['client_name'],
				'DOKUMEN_NAMA_GENERATE' => $filename.$upload['file_ext'],				
				'DOKUMEN_TIPE' => $upload['file_type'],
				'KLASIFIKASI_ID' => $klasifikasi_id,
				'DOKUMEN_UKURAN' => $upload['file_size'],
				);
			
				$res = $this->db->insert('DOKUMEN',$params);
				$insert_id = $this->db->insert_id();

			
			
		}		
		return $insert_id;
	}							
								
		




}
