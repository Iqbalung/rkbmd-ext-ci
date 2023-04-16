<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class App extends MY_Controller {
	function __construct(){
		parent::__construct();
		$this->load->model('M_pekerja');
		$this->load->model('M_pengguna');
	}
	
	function get_viewmodel()
	{

		$out['USER'] = $this->user;
		$out['INSTANSI'] =array();	
		$out['akses'] = $this->get_akses($out['USER']['USERGROUP_ID']);
		$out['TAHUN'] = $this->session->userdata('TAHUN');
		$out['message'] = 'RKBMD Banjarnegara';
		echo json_encode($out);
	}

	function get_akses($usergroupid){

		/*1:admin, 2:admin pptkis, 3 recruter*/
		
		$fitur = array(
				'page_portal' => array(1,2,3),
				'portal_profile' => array(2,3),
				'page_tki' => array(1,2,3),
				'page_tki_filter_satker' => array(2),
				'page_profile_tki' => array(1,2,3),
				'page_profile_pptkis' => array(1,2),
				'page_job' => array(1,2),
				'menu_master' => array(1),
				'page_pengguna' => array(1),
				'page_kompetensi' => array(1),
				'page_wilayah' => array(1),
				'page_bidang' => array(1),
				'page_jabatan' => array(1),
				'page_barang' => array(1),
				'page_pptkis' => array(1),
				'page_job_owner' => array(1),
				'page_jblkln' => array(1),
				'page_lk' => array(1),
				'page_lsp' => array(1),
				'page_sarkes' => array(1),
				'page_asuransi' => array(1)
			);

		$akses=array();
		foreach ($fitur as $key => $value) {
			$akses[$key] = in_array($usergroupid, $value);
		}
		
		return $akses;
	}

}