<?php


defined('BASEPATH') OR exit('No direct script access allowed');

class Matauang extends MY_Controller {
	function __construct(){
		parent::__construct();
		$this->load->model('M_Matauang');
		
	}
	
	function get()
	{

		$params = array(
			'MATAUANG_ID' => ifunsetempty($_POST,'MATAUANG_ID',''),
			'MATAUANG_CAPTION' => ifunsetempty($_POST,'MATAUANG_CAPTION',''),
		);

		if (!$params["MATAUANG_ID"]) {
			unset($params["MATAUANG_ID"]);
		}
		
		$res = $this->M_Matauang->get($params);
		$out = array(
					'items' => $res->result(),
				);
		echo json_encode($out);
	}

	function save(){
		$params = array(
			'BARANG_ID' => ifunsetempty($_POST,'BARANG_ID',''),
			'BARANG_NAMA' => ifunsetempty($_POST,'BARANG_NAMA',''),
			'BARANG_CODE' => ifunsetempty($_POST, 'BARANG_CODE',''),
			'LEGALITAS' => ifunsetempty($_POST, 'LEGALITAS',''),
			'BARANG_SATUAN' => ifunsetempty($_POST, 'BARANG_SATUAN','')
		);
		
		if($params['BARANG_ID']==""){ 
			$res = $this->M_agency->add($params);
				if($res){
					$out = array(
						'success' => true,
						'msg' => 'Berhasil Menyimpan' 
					);
				}	
		}else{
			$res = $this->M_agency->upd($params);
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
			'BARANG_ID' => ifunsetempty($_POST,'BARANG_ID',''),
		);
		$res = $this->M_agency->del($params);
		if($res){
					$out = array(
						'success' => true,
						'msg' => 'Berhasil Menghapus' 
					);
				}	
		echo json_encode($out);
	}



}