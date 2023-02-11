<?php


defined('BASEPATH') OR exit('No direct script access allowed');

class Blkln extends MY_Controller {
	function __construct(){
		parent::__construct();
		$this->load->model('M_blkln');
		
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
		
		$res = $this->M_blkln->get($params);
		$out = array(
					'items' => $res->result(),
				);
		echo json_encode($out);
	}

	function save(){		
		$params = array(
			'ID' => ifunsetempty($_POST,'ID',''),
			'NAMA' =>  ifunsetempty($_POST,'NAMA',''),
			'PROFILE' =>  ifunsetempty($_POST,'PROFILE',''),
			'TELP' =>  ifunsetempty($_POST,'TELP',''),
			'LEGALITAS' =>  ifunsetempty($_POST,'LEGALITAS',''),
			'AKREDITASI' =>  ifunsetempty($_POST,'AKREDITASI',''),
			'LAYANAN' =>  ifunsetempty($_POST,'LAYANAN',''),
			'ALAMAT' =>  ifunsetempty($_POST,'ALAMAT','')
		);
		
		if($params['ID']==""){ 
			$res = $this->M_blkln->add($params);
				if($res){
					$out = array(
						'success' => true,
						'msg' => 'Berhasil Menyimpan' 
					);
				}	
		}else{
			$res = $this->M_blkln->upd($params);
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
		$res = $this->M_blkln->del($params);
		if($res){
					$out = array(
						'success' => true,
						'msg' => 'Berhasil Menghapus' 
					);
				}	
		echo json_encode($out);
	}



}