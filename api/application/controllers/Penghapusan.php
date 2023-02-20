<?php


defined('BASEPATH') OR exit('No direct script access allowed');

class Penghapusan extends MY_Controller {
	function __construct(){
		parent::__construct();
		$this->load->model('M_penghapusan');
        
	}

	function get()
	{

		$params = array(
			'PENGHAPUSAN_ID' => ifunsetempty($_POST,'PENGHAPUSAN_ID',''),
			'BIDANG_ID' => ifunsetempty($_POST,'BIDANG_ID', $this->session->userdata('BIDANG_ID')),
			'TAHUN' => ifunsetempty($_POST,'TAHUN', $this->session->userdata('TAHUN')),
			'PENCARIAN' => ifunsetempty($_POST,'PENCARIAN',''),						
		);
		
		
		$out = $this->M_penghapusan->get($params);
		
		echo json_encode($out);
	}
	
	function save()
	{

		$params = array(
			'PENGHAPUSAN_ID' => ifunsetempty($_POST,'PENGHAPUSAN_ID',''),
			'BIDANG_ID' => ifunsetempty($_POST,'BIDANG_ID', $this->session->userdata('BIDANG_ID')),
			'TAHUN' => ifunsetempty($_POST,'TAHUN', $this->session->userdata('TAHUN')),
			'KEGIATAN_ID' => ifunsetempty($_POST,'KEGIATAN_ID',''),			
			'SUB_KEGIATAN_ID' => ifunsetempty($_POST,'SUB_KEGIATAN_ID',''),
			'STATUS' => (int) ifunsetempty($_POST,'STATUS', 0),
			'DATA_BARANG' => json_decode(ifunsetempty($_POST,'DATA_BARANG','[]'), true)			
		);

		if (empty($params["TAHUN"])) {			
			$params["TAHUN"] = date("Y");        		
		}      		
		
		$out = $this->M_penghapusan->save($params);
		
		echo json_encode($out);
	}

	function get_detail()
	{

		$params = array(
			'PENGHAPUSAN_ID' => base64_decode(ifunsetempty($_POST,'ROWID','')),			
		);
		
		
		$out = $this->M_penghapusan->get_detail($params);
		
		echo json_encode($out);
	}

	

}