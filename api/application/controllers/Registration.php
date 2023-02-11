<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Registration extends Ci_Controller{

	function __construct()
	{
		parent::__construct();
		$this->load->model('M_registration');
		$this->load->library('email');
	}

	function index(){
		$data = array(
			'title' => 'Pendaftaran Agen', 
		);
		$this->load->view('/public/shared/header',$data);
		$this->load->view('/public/page/registration');
	}

	function registration_agen(){
		$data = array(
			'title' => 'Pendaftaran Agen', 
		);
		$this->load->view('/public/shared/header',$data);
		$this->load->view('/public/page/form_registration_tki');
	}

	function registration_agen_chalange(){
		$post = file_get_contents('php://input');
		$params = json_decode($post, true);
		$res = $this->M_registration->add_user($params);
		if($res){
		}else{
		}
		registration_success();
	}

	
	public function sendMail($email,$activation)
	{
		$config = array();
		$config['useragent']           = "CodeIgniter";
		//$config['mailpath']            = "/usr/bin/sendmail"; // or "/usr/sbin/sendmail"
		$config['protocol']            = "smtp";
		$config['smtp_host']           = "ssl://smtp.googlemail.com";
		$config['smtp_port']           = "465";
		$config['smtp_user']           = "el.fauzi.rachman.traspac@gmail.com";
		$config['smtp_pass']           = "009Logistic009";
		$config['mailtype'] = 'html';
		$config['charset']  = 'utf-8';
		$config['newline']  = "\r\n";
		$config['wordwrap'] = TRUE;

		$this->load->library('email');

		$this->email->initialize($config);
	    $message = '';        
		$this->email->set_newline("\r\n");
	    $data = array(
	      	'email' => $activation, );
		$this->email->from('alliances009@gmail.com',""); // change it to yours
		$this->email->to($email);// change it to yours
		$this->email->subject('Aktivasi Akun Koyoku');
		$this->data['data'] = $data;
		$message = $this->load->view('email', $data,TRUE); 
	    $this->email->message($message);
	    if($this->email->send()){
		    return true;
		}

	}

	function add_pekerja_chalange(){
			$params = array(
				'NAMA' => ifunsetempty($_POST,'NAMA',''),
				'PASSWORD' => ifunsetempty($_POST,'PASSWORD',''),
				'KONFIRMASI_PASSWORD' => ifunsetempty($_POST,'KONFIRMASI_PASSWORD',''),
				'TEMPAT_LAHIR' => ifunsetempty($_POST,'TEMPAT_LAHIR',''),
				'TANGGAL_LAHIR' => ifunsetempty($_POST,'TANGGAL_LAHIR',''),
				'ALAMAT_KTP' => ifunsetempty($_POST,'ALAMAT_KTP',''),
				'ALAMAT_TINGGAL' => ifunsetempty($_POST,'ALAMAT_TINGGAL',''),
				'NO_TELP' => ifunsetempty($_POST,'NO_TELP',''),
				'JENIS_KELAMIN' => ifunsetempty($_POST,'JENIS_KELAMIN',''),
				'NO_KTP' => ifunsetempty($_POST,'NO_KTP',''),
				'EMAIL' => ifunsetempty($_POST,'EMAIL',''),
		);
		$params['USERGROUP_ID'] = "4";
		if($params['PASSWORD']!=$params['KONFIRMASI_PASSWORD']){
			$out = array(
						'success' => false,
						'msg' => 'Sandi tidak sama',
			);
			echo json_encode($out);
			exit();

		}
		$params['PASSWORD'] = md5($params['PASSWORD']);
		$date = date_create();
		$params['UID'] = md5(date_timestamp_get($date));
		unset($params['NAMA_PANJANG']);
		$emailcheck = $params['EMAIL'];
		unset($params['KONFIRMASI_PASSWORD']);
		$emailcheck = $this->M_registration->getemail($emailcheck);

		if( $emailcheck->num_rows() == 0 ){
			$res = $this->M_registration->add_user($params);
			$id = $this->db->insert_id();
			$select = $this->M_registration->select($id);
		}else{
			$out = array(
						'success' => false,
						'msg' => 'Email Sudah Terdaftar Silahkan Gunakan Email Lain',
			);
			echo json_encode($out);
			exit();
		}
		if($res){
			$email = $select[0]['EMAIL'];
			$activation = $select[0]['UID'];
			$this->sendMail($email,$activation);
			$out = array(
						'success' => true,
						'msg' => 'Berhasil Menyimpan' 
					);
		}else{
			$out = array(
						'success' => false,
						'msg' => 'Koneksi Terputus',
					);
		}
		echo json_encode($out);

	}

	function add_pptkis_chalange(){
		$site_key = '6LcXjy4UAAAAAOQ_HRrYUHKnhn-mCx4oH_HlE2LH'; // Diisi dengan site_key API Google reCapthca yang sobat miliki
    	$secret_key = '6LcXjy4UAAAAAPuk8wACzimy_824ADESRpD2qTcQ'; // Diisi dengan secret_key API Google reCapthca yang sobat miliki
    	if(isset($_POST['g-recaptcha-response']))
        {
            	$api_url = 'https://www.google.com/recaptcha/api/siteverify?secret=' . $secret_key . '&response='.$_POST['g-recaptcha-response'];
            	$response = @file_get_contents($api_url);
            	$data = json_decode($response, true);
            
            $params = array(
				'NAMA' => ifunsetempty($_POST,'NAMA',''),
				'PASSWORD' => ifunsetempty($_POST,'PASSWORD',''),
				'KONFIRMASI_PASSWORD' => ifunsetempty($_POST,'KONFIRMASI_PASSWORD',''),
				'NO_TELP' => ifunsetempty($_POST,'NO_TELP',''),
				'EMAIL' => ifunsetempty($_POST,'EMAIL',''),
				'PPTKIS_NAMA' => ifunsetempty($_POST,'PPTKIS_NAMA',''),
				'PPTKIS_ALAMAT' => ifunsetempty($_POST,'PPTKIS_ALAMAT',''),
				'PPTKIS_DES_PENDEK' => ifunsetempty($_POST,'PPTKIS_DES_PENDEK',''),
				'PPTKIS_LEGALITAS' => ifunsetempty($_POST,'PPTKIS_LEGALITAS',''),
				'PPTKIS_NOMOR_TELPHONE' => ifunsetempty($_POST,'PPTKIS_NOMOR_TELPHONE',''),
				);
				if($params['PASSWORD']!=$params['KONFIRMASI_PASSWORD']){
					$out = array(
								'success' => false,
								'msg' => 'Sandi tidak sama',
					);
					echo json_encode($out);
					exit();

				}
				$params['PASSWORD'] = md5($params['PASSWORD']);
				$params['USERGROUP_ID'] = "2";
				$date = date_create();
				$params['UID'] = md5(date_timestamp_get($date));
				unset($params['NAMA_PANJANG']);
				$emailcheck = $params['EMAIL'];
				$emailcheck = $this->M_registration->getemail($emailcheck);
				unset($params['password']);
				unset($params['KONFIRMASI_PASSWORD']);
				if( $emailcheck->num_rows() == 0 ){
					$res = $this->M_registration->add_user($params);
					$id = $this->db->insert_id();
					$id_user  = $this->db->insert_id();
					$select = $this->M_registration->select($id);
					unset($params['USERGROUP_ID']);
					unset($params['UID']);
					$res = $this->M_registration->add_pptkis($params);
					$id_pptkis  = $this->db->insert_id();
					$id_satker  = "1.";
					$params['PENGGUNA_ID'] = $id_user;
					$params['SATKER_ID'] = $id_satker;
					$params['PPTKIS_ID'] = $id_pptkis;
					$res = $this->M_registration->add_pptkis_pengguna($params);
				}else{
					$out = array(
								'success' => false,
								'msg' => 'Email Sudah Terdaftar Silahkan Gunakan Email Lain',
					);
					echo json_encode($out);
					exit();
				}
	            if($data['success'])
	            {
	            	if($res){
					$email = $select[0]['EMAIL'];
					$activation = $select[0]['UID'];
					$this->sendMail($email,$activation);	
					$out = array(
								'success' => true,
								'msg' => 'Berhasil Menyimpan' 
							);

					}else{
						$out = array(
									'success' => false,
									'msg' => 'Berhasil Menyimpan' 
								);
					}
					echo json_encode($out);
	               
	                
	                
	            }else{
	                $out = array(
									'success' => false,
									'msg' => 'Silahkan Isi Captcha',
						);
						echo json_encode($out);
	            }
				
 
        }
 
		
	}

	function testemail(){
		$data = array(
      		'email' => 'test' 
      	);
		$this->load->view('email',$data);
	}

	function activation_chalange($uid){
		$res = $this->M_registration->setactive($uid);
		if($res){
			$params = array();
			$params['OLD'] = $uid;
			$date = date_create();
			$params['UID'] = md5(date_timestamp_get($date));
			$res = $this->M_registration->upduid($params);
			if($res > 0){
				header('Location: ../../../../public/#!/activate_success');
			}else{
				header('Location: ../../../../public/#!/activate_eror');
			}
		}else{
			header('Location: ../../../../public/#!/activate_eror');
		}
	}


}

