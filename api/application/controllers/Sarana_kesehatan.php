<?php


defined('BASEPATH') OR exit('No direct script access allowed');

class Sarana_kesehatan extends MY_Controller {
	function __construct(){
		parent::__construct();
		$this->load->model('M_sarana_kesehatan');
		
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
		
		$res = $this->M_sarana_kesehatan->get($params);
		$out = array(
					'items' => $res->result(),
				);
		echo json_encode($out);
	}

	function save(){
		$params = array(
			'ID' => ifunsetempty($_POST,'ID',''),
			'NAMA' => ifunsetempty($_POST,'NAMA',''),
			'LAYANAN' => ifunsetempty($_POST,'LAYANAN',''),
			'AKREDITASI' => ifunsetempty($_POST,'AKREDITASI',''),			
			'TELP' => ifunsetempty($_POST, 'TELP',''),
			'PROFILE' => ifunsetempty($_POST, 'PROFILE',''),
			'ALAMAT' => ifunsetempty($_POST, 'ALAMAT','')
		);
		
		if($params['ID']==""){ 
			$res = $this->M_sarana_kesehatan->add($params);
				if($res){
					$out = array(
						'success' => true,
						'msg' => 'Berhasil Menyimpan' 
					);
				}	
		}else{
			$res = $this->M_sarana_kesehatan->upd($params);
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
		$res = $this->M_sarana_kesehatan->del($params);
		if($res){
					$out = array(
						'success' => true,
						'msg' => 'Berhasil Menghapus' 
					);
				}	
		echo json_encode($out);
	}



}