<?php


defined('BASEPATH') OR exit('No direct script access allowed');

class Tingkatpendidikan extends MY_Controller {
	function __construct(){
		parent::__construct();
		$this->load->model('M_tingkatpendidikan');
		
	}
	
	function get()
	{

		$params = array(
			'PENDIDIKAN_ID' => ifunsetempty($_POST,'PENDIDIKAN_ID',''),
			'PENDIDIKAN_NAMA' => ifunsetempty($_POST,'PENDIDIKAN_NAMA',''),
		);

		if (!$params['PENDIDIKAN_ID']) {
			unset($params['PENDIDIKAN_ID']);
		}

		
		$res = $this->M_tingkatpendidikan->get($params);
		$out = array(
					'items' => $res->result(),
				);
		echo json_encode($out);
	}

	



}