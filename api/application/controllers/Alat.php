<?php


defined('BASEPATH') OR exit('No direct script access allowed');

class Alat extends MY_Controller {
	function __construct(){
		parent::__construct();
		$this->load->model('M_alat');
		
	}
	
	function get()
	{
		$params = array(
			'JABATAN_ID' => ifunsetempty($_POST,'JABATAN_ID',''),
			'JOB_ID' => ifunsetempty($_POST,'JOB_ID',''),
			'ALAT_KERJA_ID' => ifunsetempty($_POST,'ALAT_KERJA_ID',''),
			'ALAT_KERJA_NAMA' => ifunsetempty($_POST,'ALAT_KERJA_NAMA',''),
		);

		if ($params["ALAT_KERJA_NAMA"]=="") {
			unset($params["ALAT_KERJA_NAMA"]);
		}

		if (!$params["ALAT_KERJA_ID"]) {
			unset($params["ALAT_KERJA_ID"]);
		}
		
		$res = $this->M_alat->get($params);
		$out = array(
					'items' => $res->result(),
				);
		echo json_encode($out);
	}

	function get_job()
	{
		$params = array(
			'JABATAN_ID' => ifunsetempty($_POST,'JABATAN_ID',''),
			'JOB_ID' => ifunsetempty($_POST,'JOB_ID',''),
			'ALAT_KERJA_ID' => ifunsetempty($_POST,'ALAT_KERJA_ID',''),
			'ALAT_KERJA_NAMA' => ifunsetempty($_POST,'ALAT_KERJA_NAMA',''),
		);

		if ($params["JOB_ID"]=="") {
			unset($params["JOB_ID"]);
		}

		if ($params["JABATAN_ID"]=="") {
			unset($params["JABATAN_ID"]);
		}
		
		$res = $this->M_alat->get_job($params);
		$out = array(
					'items' => $res->result(),
				);
		echo json_encode($out);
	}

	function save(){


		$params = array(
			'ALAT_KERJA_ID' => ifunsetempty($_POST,'ALAT_KERJA_ID',''),
			'ALAT_KERJA_NAMA' => ifunsetempty($_POST,'ALAT_KERJA_NAMA',''),
			'DATA_ALAT' => ifunsetempty($_POST,'DATA_ALAT',''),
		);

		
		print_r($alat);

		/*
		if($params['ALAT_KERJA_ID']==""){ 
			$res = $this->M_alat->add($params);
				if($res){
					$out = array(
						'success' => true,
						'msg' => 'Berhasil Menyimpan' 
					);
				}	
		}else{
			$res = $this->M_alat->upd($params);
			if($res){
					$out = array(
						'success' => true,
						'msg' => 'Berhasil Menyimpan' 
					);
			}	
		}		
		echo json_encode($out);*/
	}

	function del(){
		$params = array(
			'ALAT_KERJA_ID' => ifunsetempty($_POST,'ALAT_KERJA_ID',''),
		);
		$res = $this->M_alat->del($params);
		if($res){
					$out = array(
						'success' => true,
						'msg' => 'Berhasil Menghapus' 
					);
				}	
		echo json_encode($out);
	}



}