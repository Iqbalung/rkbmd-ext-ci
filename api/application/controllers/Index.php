<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Login extends CI_Controller{

	function __construct()
	{
		parent::__construct();
		$this->load->model(array('m_usergroup','M_hak_akses'));
		header('Content-type: application/json');
        header('Access-Control-Allow-Origin: *');
	}

	function do_login(){

		$params=array(
			'UserName'=> ifunset($_POST,'UserName',''),
			'Pass'=> md5(ifunset($_POST,'Pass','')),
			'Active' => 1
			);
		$mdl = ifunset($_POST,'mdl','fe'); // fe | myerp

		$this->db->select("
				id,
				email,
				UserName,
				UserGroup,
				Kode_Akses,
				Last_Access,
				Jabatan,
				Kode_Area,
				Nama_Karyawan,
				Employee_ID,
				NIK,
				Departemen
			");
		$this->db->where($params);
		$q=$this->db->get('c_users');
		$out = array(
			'success' => false,
			'msg' => 'Gagal Login'
		);
		
		if($q->num_rows()>0){
			$out['success'] = true;
			$out['msg'] = 'Berhasil Login';					
			$data_user = array();
			$user = $this->get_employee_data($q->first_row()->Employee_ID);		

			foreach ($user->result_array() as $value) {
				foreach ($value as $key => $key_value) {					
					if (isset($data_user[$key])) {
						array_push($data_user[$key],$key_value);						
					}else{
						$data_user[$key] = array();
						array_push($data_user[$key],$key_value);
					}
				}
			}									
			$out['user_attribute'] = $this->get_employee_data($q->first_row()->Employee_ID,1)->row_array();
			$out['user_attribute_adhoc'] = $data_user;		
			$usergroup = array();
			$value_code = 0;
			if (isset($data_user['code'][0])) {				
				$value_code = $data_user['code'][0];
			}
			$params = array(
				'User_Code' => $value_code,
			);						
			$res = $this->m_usergroup->check_group_member($params);			
			array_push($usergroup, $value_code);

			$group = array();
			if ($res && $res->num_rows() > 0) {
				$group = $res->result_array();
			}
			foreach ($group as $key => $val) {				
				array_push($usergroup, $val['User_Group_ID']);
			}
			
			
			$out['usergroup'] = json_encode($usergroup);
			$out['data'] = $data_user;
			$out['kode_akses'] = $q->first_row()->Kode_Akses;
			$data_user['usergroup'] = $out['usergroup'];
			$data_user['kode_akses'] = $out['kode_akses'];
			$data_user['logged_in'] = 1;
			$this->session->set_userdata($data_user);
			$hak_akses = $this->M_hak_akses->get_hakakses();		
			$out['hak_akses'] = $hak_akses;
			if (!$hak_akses[$mdl]) {
				$out = array(
					'success' => false,
					'msg' => 'Tidak punya hak akses'
					);			
				$this->session->sess_destroy();
			}
		}

		echo json_encode($out);
	}

	

	function is_login(){	
		$data_user = array();	
		$mdl = ifunset($_POST,'mdl','fe'); 
		$logged_in = $this->session->userdata('logged_in');
		$kode_akses = $this->session->userdata('kode_akses'); /*1:emp, 2:conf, 3 audit */
		$out = array('isLogin'=>true);
		if(! isset($logged_in) or $logged_in != 1){
			$out = array('isLogin'=>false);
		}elseif($mdl=='myerp' && $kode_akses==1){
			$out = array('isLogin'=>false);
		}else{
			
			$id = $this->session->userdata('id');

			if (isset($id[0])) {
				$id = $id[0];
			}else{
				$id = 0;
			}

			$user = $this->get_employee_data($id);			
			foreach ($user->result_array() as $value) {
				foreach ($value as $key => $key_value) {					
					if (isset($data_user[$key])) {
						array_push($data_user[$key],$key_value);						
					}else{
						$data_user[$key] = array();
						array_push($data_user[$key],$key_value);
					}
				}
			}	
			$out['user_attribute'] = $this->get_employee_data($id,1)->row_array();
			$out['user_attribute_adhoc'] = $data_user;			

			$usergroup = array();
			$value_code = 0;
			if (isset($data_user['code'][0])) {				
				$value_code = $data_user['code'][0];
			}
			$params = array(
				'User_Code' => $value_code,
			);
			
			$res = $this->m_usergroup->check_group_member($params);			
			$usergroup = array($value_code);
			$group = array();
			if ($res && $res->num_rows() > 0) {
				$group = $res->result_array();
			}
			foreach ($group as $key => $val) {				
				array_push($usergroup, $val['User_Group_ID']);
			}
			$out['usergroup'] = json_encode($usergroup);
			$out['kode_akses'] = $this->session->userdata('kode_akses');
			$out['hak_akses'] = $this->M_hak_akses->get_hakakses();					
		}
		echo json_encode($out);
	}

	function get_employee_data($employeeid,$origin_sts = false){
		$this->db->where('id',$employeeid);
		if ($origin_sts) {			
			$this->db->where('origin_sts',$origin_sts);
		}
		$q=$this->db->get('vemployee');
		return $q;
	}

	function ubah_sandi()
	{
		$this->load->model('M_crud');
		$mdl = ifunset($_POST,'mdl','fe'); // fe | myerp
		$id = $this->session->userdata('id');

		if (isset($id[0])) {
			$id = $id[0];
		}else{
			$id = 0;
		}
		$params = array(
			'id' => $id,
			'Pass'=> md5(ifunset($_POST,'PassLama',''))
		);

		$res = $this->M_crud->get_where('c_users', $params);

		if ($res->num_rows() < 1) {
			$out = array(
				'success' => FALSE,
				'msg' => 'Kata Sandi lama salah'
			);

			echo json_encode($out);
			exit;
		}

		$params['Pass'] = md5(ifunset($_POST,'PassBaru',''));

		$res = $this->M_crud->update('c_users', $params, array('id' => $params['id']));

		if ($res) {
			$out = array(
				'success' => TRUE,
				'msg' => 'Kata Sandi berhasil dirubah'
			);
		}
		else {
			$out = array(
				'success' => FALSE,
				'msg' => 'Kata Sandi gagal dirubah'
			);
		}

		echo json_encode($out);
	}

	function keluar(){
		$this->session->sess_destroy();
		$this->cek_myerp();
	}

}