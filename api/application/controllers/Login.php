<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Login extends CI_Controller{

	function __construct()
	{
		parent::__construct();
		header('Access-Control-Allow-Origin: *'); 
	}

	

	function do_login(){
		
		header('Access-Control-Allow-Origin: *');
		header("Access-Control-Allow-Origin: *");
		header("Access-Control-Allow-Headers: Authorization, X-API-KEY, Origin,X-Requested-With, Content-Type, Accept, Access-Control-Requested-Method");
		header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PATCH, PUT, DELETE, get, post");
		$this->load->database();
		$params=array(
			'EMAIL'=> ifunset($_POST,'email','admin@traspac.co.id'),
			'PASSWORD'=> md5(ifunset($_POST,'password','b')),
			'ACTIVE' => 1
			);

		$this->db->select('PENGGUNA.*,USERGROUP,PENGGUNA_PPTKIS.PPTKIS_ID');
		$this->db->join('USERGROUP','PENGGUNA.USERGROUP_ID=USERGROUP.ID','LEFT');
		$this->db->join('PENGGUNA_PPTKIS','PENGGUNA.ID=PENGGUNA_PPTKIS.PENGGUNA_ID','LEFT');
		$this->db->where($params);
		$q=$this->db->get('PENGGUNA');
		$out = array(
			'success' => false,
			'msg' => 'Gagal Login'
		);
		
		if($q->num_rows()>0){
			$out['success'] = true;
			$out['msg'] = 'Berhasil Login';					
			$session_data = array();
			foreach ($q->first_row() as $key => $value) {
				$session_data[$key] = $value;
			}
			$session_data['is_login'] = true ;
			$out['data'] = $session_data;
			$this->session->set_userdata($session_data);
		}

		echo json_encode($out);
	}

	function do_login_front(){

		$params=array(
			'EMAIL'=> ifunset($_POST,'email',''),
			'PASSWORD'=> md5(ifunset($_POST,'password','')),
			'ACTIVE' => 1
			);


		$this->db->select('PENGGUNA.*,USERGROUP');
		$this->db->join('USERGROUP','PENGGUNA.USERGROUP_ID=USERGROUP.ID','LEFT');
		$this->db->where($params);
		$q=$this->db->get('PENGGUNA');
		$out = array(
			'success' => false,
			'msg' => 'Gagal Login'
		);

		
		if($q->num_rows()>0){
			$out['success'] = true;
			$out['msg'] = 'Berhasil Login';					
			$session_data = array();
			foreach ($q->first_row() as $key => $value) {
				$session_data[$key] = $value;
			}
			$session_data['is_login'] = true ;
			$out['data'] = $session_data;
			$this->session->set_userdata($session_data);
			//header("Location: ../../../ui/#portal"); /* Redirect browser */
		

		}

		//echo json_encode($out);
		
	}

	function is_login(){	
		$out = array();
		$out['is_login'] = false;
		$this->do_login_front();
		if($this->session->userdata('is_login')===true){
			$out['is_login'] = true;
			$out['user'] = array(
				'ID' => $this->session->userdata('ID'),
				'EMAIL' => $this->session->userdata('EMAIL'),
				'USERGROUP_ID' => $this->session->userdata('USERGROUP_ID'),
				'NAMA' => $this->session->userdata('NAMA'),
				'NO_TELP' => $this->session->userdata('NO_TELP'),
				'NO_KTP' => $this->session->userdata('NO_KTP'),
				'ALAMAT' => $this->session->userdata('ALAMAT_TINGGAL'),
				'DESKRIPSI' => $this->session->userdata(''),
				'PHOTO' => $this->session->userdata('PHOTO'),
				'USERGROUP' => $this->session->userdata('USERGROUP')
			);
		}
		echo json_encode($out);
	}

	function getuser(){
		$this->session->userdata('ID');
	}

	function keluar(){
		$this->session->sess_destroy();
	}

}