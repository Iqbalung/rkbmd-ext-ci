<?php


defined('BASEPATH') OR exit('No direct script access allowed');

class Lembaga_keuangan extends MY_Controller {
	function __construct(){
		parent::__construct();
		$this->load->model('M_lembaga_keuangan');
		
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
		
		$res = $this->M_lembaga_keuangan->get($params);
		$out = array(
					'items' => $res->result(),
				);
		echo json_encode($out);
	}

	function save(){
		$params = array(
			'ID' => ifunsetempty($_POST,'ID',''),
			'NAMA' => ifunsetempty($_POST,'NAMA',''),
			'JENIS' => ifunsetempty($_POST,'JENIS',''),
			'TELP' => ifunsetempty($_POST, 'TELP',''),
			'PROFILE' => ifunsetempty($_POST, 'PROFILE',''),
			'PRODUK_LAYANAN' => ifunsetempty($_POST, 'PRODUK_LAYANAN',''),
			'ALAMAT' => ifunsetempty($_POST, 'ALAMAT','')
		);
		
		if($params['ID']==""){ 
			$res = $this->M_lembaga_keuangan->add($params);
				if($res){
					$out = array(
						'success' => true,
						'msg' => 'Berhasil Menyimpan' 
					);
				}	
		}else{
			$res = $this->M_lembaga_keuangan->upd($params);
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
		$res = $this->M_lembaga_keuangan->del($params);
		if($res){
					$out = array(
						'success' => true,
						'msg' => 'Berhasil Menghapus' 
					);
				}	
		echo json_encode($out);
	}



}