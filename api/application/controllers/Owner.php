<?php


defined('BASEPATH') OR exit('No direct script access allowed');

class Owner extends MY_Controller {
	function __construct(){
		parent::__construct();
		$this->load->model('M_jobowner');
		
	}
	
	function get()
	{
		$params = array(
			'OWNER_ID' => ifunsetempty($_POST,'OWNER_ID',''),
			'query' => ifunsetempty($_POST,'query',''),
			'OWNER_NAMA' => ifunsetempty($_POST,'OWNER_NAMA',''),
			'OWNER_ALAMAT_LENGKAP' => ifunsetempty($_POST,'OWNER_ALAMAT_LENGKAP',''),
			'OWNER_WEBSITE' => ifunsetempty($_POST,'OWNER_WEBSITE',''),
			'OWNER_NOMOR_TELEPHONE' => ifunsetempty($_POST,'OWNER_NOMOR_TELEPHONE',''),
		);


		if ($params["OWNER_NAMA"]=="") {
			unset($params["OWNER_NAMA"]);
		}
		if ($params["query"]=="") {
			unset($params["query"]);
		}

		if (!$params["OWNER_ID"]) {
			unset($params["OWNER_ID"]);
		}
		
		$res = $this->M_jobowner->get($params);
		$out = array(
					'items' => $res->result(),
				);
		echo json_encode($out);
	}

	function save(){
		$params = array(
			'OWNER_ID' => ifunsetempty($_POST,'OWNER_ID',''),
			'OWNER_NAMA' => ifunsetempty($_POST,'OWNER_NAMA',''),
			'OWNER_ALAMAT_LENGKAP' => ifunsetempty($_POST,'OWNER_ALAMAT_LENGKAP',''),
			'OWNER_WEBSITE' => ifunsetempty($_POST,'OWNER_WEBSITE',''),
			'OWNER_NOMOR_TELPHONE' => ifunsetempty($_POST,'OWNER_NOMOR_TELPHONE',''),
			'WILAYAH_ID' => ifunsetempty($_POST,'WILAYAH_ID',''),
			'UPDATE' => ifunsetempty($_POST, 'UPDATE',''),
		);
		
		if($params['UPDATE']==""){ 
			$res = $this->M_jobowner->add($params);
				if($res){
					$out = array(
						'success' => true,
						'msg' => 'Berhasil Menyimpan' 
					);
				}	
		}else{
			$res = $this->M_jobowner->upd($params);
			if($res){
					$out = array(
						'success' => true,
						'msg' => 'Berhasil Menyimpan' 
					);
			}	
		}		
		echo json_encode($out);
	}

	function del(){
		$params = array(
			'OWNER_ID' => ifunsetempty($_POST,'OWNER_ID',''),
		);
		$res = $this->M_jobowner->del($params);
		if($res){
					$out = array(
						'success' => true,
						'msg' => 'Berhasil Menghapus' 
					);
				}	
		echo json_encode($out);
	}



}