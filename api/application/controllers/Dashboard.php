<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Dashboard extends MY_Controller {
	function __construct(){
		parent::__construct();
		$this->load->model('M_dashboard');
	}
	
	function get_pengajuan_skpd()
	{

		$params = array(
			'TAHUN' => ifunsetempty($_POST,'TAHUN', $this->session->userdata('TAHUN')),
		);

		$out = $this->M_dashboard->get_pengajuan_skpd($params);

		echo json_encode($out);
	}

	function get_realisasi_kegiatan()
	{

		$params = array(
			'TAHUN' => ifunsetempty($_POST,'TAHUN', $this->session->userdata('TAHUN')),
		);

		$out = $this->M_dashboard->get_realisasi_kegiatan($params);

		echo json_encode($out);
	}

	function get_rekap_rkpbmd()
	{

		$params = array(
			'TAHUN' => ifunsetempty($_POST,'TAHUN', $this->session->userdata('TAHUN')),
		);

		$out = $this->M_dashboard->get_rekap_rkpbmd($params);

		echo json_encode($out);
	}

}