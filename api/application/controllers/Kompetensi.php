<?php


defined('BASEPATH') OR exit('No direct script access allowed');

class Kompetensi extends MY_Controller {
	function __construct(){
		parent::__construct();
		$this->load->model('M_kompetensi');
		
	}
	
	function get()
	{

		$params = array(
			'KOMPETENSI_ID' => ifunsetempty($_POST,'KOMPETENSI_ID',''),
			'JABATAN_ID' => ifunsetempty($_POST,'JABATAN_ID',''),
			'KOMPETENSI_NAMA' => ifunsetempty($_POST,'KOMPETENSI_NAMA',''),
			'KOMPETENSI_SLUG' => ifunsetempty($_GET,'slug',''),
			'BIDANG_ID' => ifunsetempty($_POST,'BIDANG_ID',''),
		);

		if ($params["KOMPETENSI_NAMA"]=="") {
			unset($params["KOMPETENSI_NAMA"]);
		}

		if ($params["BIDANG_ID"]=="") {
			unset($params["BIDANG_ID"]);
		}


		if($params["JABATAN_ID"]==""){
			unset($params["JABATAN_ID"]);
		}	

		if (!$params["KOMPETENSI_SLUG"]){
			unset($params["KOMPETENSI_SLUG"]);
		}
		
		$res = $this->M_kompetensi->get($params);
		$out = array(
					'items' => $res->result(),
				);
		echo json_encode($out);
	}

	function save(){
		$params = array(
			'KOMPETENSI_NAMA' => ifunsetempty($_POST,'KOMPETENSI_NAMA',''),
			'KOMPETENSI_SLUG' => slug(ifunsetempty($_POST,'KOMPETENSI_NAMA','')),
			'KOMPETENSI_ID' => ifunsetempty($_POST,'KOMPETENSI_ID',''),
			'BIDANG_ID' => ifunsetempty($_POST,'BIDANG_ID',''),
			'UPDATE' => ifunsetempty($_POST, 'UPDATE',''),
		);
		
		if($params['UPDATE']==""){ 
			$res = $this->M_kompetensi->add($params);
				if($res){
					$out = array(
						'success' => true,
						'msg' => 'Berhasil Menyimpan' 
					);
				}	
		}else{
			$res = $this->M_kompetensi->upd($params);
			if($res){
					$out = array(
						'success' => true,
						'msg' => 'Update Berhasil Menyimpan' 
					);
			}	
		}		
		echo json_encode($out);
	}

	function rsave(){
		$params = array(
			'KOMPETENSI_NAMA' => ifunsetempty($_POST,'KOMPETENSI_NAMA',''),
			'KOMPETENSI_SLUG' => slug(ifunsetempty($_POST,'KOMPETENSI_NAMA','')),
			'KOMPETENSI_ID' => ifunsetempty($_POST,'KOMPETENSI_ID',''),
			'BIDANG_ID' => ifunsetempty($_POST,'BIDANG_ID',''),
			'UPDATE' => ifunsetempty($_POST, 'UPDATE',''),
		);
		if($params['KOMPETENSI_ID']==''){
			$res = $this->M_kompetensi->add($params);
			if($res){
					$out = array(
						'success' => true,
						'msg' => 'Tambah data Berhasil' 
					);
			}
			echo json_encode($out);
		}else{
			$res = $this->M_kompetensi->upd($params);
			if($res){
					$out = array(
						'success' => true,
						'msg' => 'Update Berhasil Menyimpan' 
					);
			}
			echo json_encode($out);

		}	
				
			
	}

	function del(){
		$params = array(
			'KOMPETENSI_ID' => ifunsetempty($_POST,'KOMPETENSI_ID',''),
		);
		$res = $this->M_kompetensi->del($params);
		if($res){
					$out = array(
						'success' => true,
						'msg' => 'Berhasil Menghapus' 
					);
				}	
		echo json_encode($out);
	}



}