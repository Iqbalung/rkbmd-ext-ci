<?php


defined('BASEPATH') OR exit('No direct script access allowed');

class Asuransi extends MY_Controller {
	function __construct(){
		parent::__construct();
		$this->load->model('M_asuransi');
		
	}
	
	function get()
	{

		$params = array(
			'ID' => ifunsetempty($_POST,'ID',''),
			'NAMA' => ifunsetempty($_POST,'NAMA',''),
		);

		if ($params["NAMA"]=="") {
			unset($params["NAMA"]);
		}

		if (!$params["ID"]) {
			unset($params["ID"]);
		}
		
		$res = $this->M_asuransi->get($params);
		$out = array(
					'items' => $res->result(),
				);
		echo json_encode($out);
	}

	function save(){
		$params = array(
			'ID' => ifunsetempty($_POST,'ID',''),
			'NAMA' => ifunsetempty($_POST,'NAMA',''),
			'TELP' => ifunsetempty($_POST, 'TELP',''),
			'WEBSITE' => ifunsetempty($_POST,'WEBSITE',''),
			'PRODUK_LAYANAN' => ifunsetempty($_POST, 'PRODUK_LAYANAN',''),
			'PROFILE' => ifunsetempty($_POST, 'PROFILE',''),
			'ALAMAT' => ifunsetempty($_POST, 'ALAMAT','')
		);
		
		if($params['ID']==""){ 
			$res = $this->M_asuransi->add($params);
				if($res){
					$out = array(
						'success' => true,
						'msg' => 'Berhasil Menyimpan' 
					);
				}	
		}else{
			$res = $this->M_asuransi->upd($params);
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
			'ID' => ifunsetempty($_POST,'ID',''),
		);
		$res = $this->M_asuransi->del($params);
		if($res){
					$out = array(
						'success' => true,
						'msg' => 'Berhasil Menghapus' 
					);
				}	
		echo json_encode($out);
	}



}