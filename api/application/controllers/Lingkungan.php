<?php


defined('BASEPATH') OR exit('No direct script access allowed');

class Lingkungan extends MY_Controller {
	function __construct(){
		parent::__construct();
		$this->load->model('M_lingkungan');
		
	}
	
	function get()
	{
		$params = array(
			'JABATAN_ID' => ifunsetempty($_POST,'JABATAN_ID',''),
			'KLASIFIKASI_LING_ID' => ifunsetempty($_POST,'KLASIFIKASI_LING_ID',''),
			'KLASIFIKASI_LING_NAMA' => ifunsetempty($_POST,'KLASIFIKASI_LING_NAMA',''),
			'KLASIFIKASI_ITEM_NAMA' => ifunsetempty($_POST,'KLASIFIKASI_ITEM_NAMA',''),
			'KLASIFIKASI_ITEM_VALUE' => ifunsetempty($_POST,'KLASIFIKASI_ITEM_VALUE',''),
		);

	
		$res = $this->M_lingkungan->get($params);
		$out = array(
					'items' => $res->result(),
				);
		echo json_encode($out);
	}

	function get_job()
	{
		$params = array(
			'JOB_ID' => ifunsetempty($_POST,'JOB_ID',''),
			'KLASIFIKASI_LING_ID' => ifunsetempty($_POST,'KLASIFIKASI_LING_ID',''),
			'KLASIFIKASI_LING_NAMA' => ifunsetempty($_POST,'KLASIFIKASI_LING_NAMA',''),
			'KLASIFIKASI_ITEM_NAMA' => ifunsetempty($_POST,'KLASIFIKASI_ITEM_NAMA',''),
			'KLASIFIKASI_ITEM_VALUE' => ifunsetempty($_POST,'KLASIFIKASI_ITEM_VALUE',''),
		);

		if ($params["JOB_ID"]=="") {
			unset($params["JOB_ID"]);
		}

	
		$res = $this->M_lingkungan->get_job($params);
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