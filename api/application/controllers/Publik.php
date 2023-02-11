<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Publik extends CI_Controller {
	function __construct(){
		parent::__construct();
		$this->load->model('M_publik');

	}


	public function switching_lang($id){
		$this->session->userdata('language');
		$lang['language'] = $id;
		$this->session->set_userdata($lang);
		redirect('Publik');
	}

	public function index()
	{
		$data = array();

	
		$this->load->library('Template');
		
		$this->template->display('inc/beranda',$data);
	}

	public function view($view_value='')
	{
		$data = array();
			
		if($view_value=='bantuan'){
			$data['bantuan'] = $this->get_bantuan();
		}

		$this->load->library('Template');
		$this->template->display('inc/'.$view_value,$data);
	}

	function get_bantuan(){
		$out = $this->M_publik->get_bantuan();
		return $out;
	}

}	
