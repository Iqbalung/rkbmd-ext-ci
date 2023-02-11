<?php


defined('BASEPATH') OR exit('No direct script access allowed');

class Pelamar extends MY_Controller {
	function __construct(){
		parent::__construct();
		$this->load->model('M_pelamar');
		
	}

	
	
	function get()
	{

		$params = array(
			'JOB_ID' => ifunsetempty($_POST,'JOB_ID',''),
			'KEYWORD' => ifunsetempty($_POST,'KEYWORD',''),
		);

		if ($params["JOB_ID"]=="") {
			unset($params["JOB_ID"]);
		}

		if ($params["KEYWORD"]=="") {
			unset($params["KEYWORD"]);
		}
		$data=array();
		$to   = new DateTime('today');
		$res = $this->M_pelamar->get($params)->result_array();
		foreach ($res as $key) {
			$from = new DateTime($key['TANGGAL_LAHIR']);
			$key['UMUR'] = $from->diff($to)->y;
			$data[] = $key;

		}
		$out = array(
					'items' => $data,
				);
		echo json_encode($out);
	}

	function get_dokumen()
	{
		$params = array(
			'PEKERJA_ID' => ifunsetempty($_POST,'PEKERJA_ID',''),
			'KLASIFIKASI_ID' => json_decode(ifunsetempty($_POST,'KLASIFIKASI_ID',"['1.1.','1.2.','1.3.','1.4.','1.5.']"),true)
		);

		$res = $this->M_pelamar->get_dokumen($params);
		print_r($res->result_array());
	}

}