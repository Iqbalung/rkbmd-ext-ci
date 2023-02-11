<?php


defined('BASEPATH') OR exit('No direct script access allowed');

class SubKompetensi extends MY_Controller {
	function __construct(){
		parent::__construct();
		$this->load->model('M_subkompetensi');
		
	}
	
	function get()
	{

		$params = array(
			'SUB_KOMPETENSI_ID' => ifunsetempty($_POST,'SUB_KOMPETENSI_ID',''),
			'JABATAN_ID' => ifunsetempty($_POST,'JABATAN_ID',''),
			'SUB_KOMPETENSI_NAMA' => ifunsetempty($_POST,'SUB_KOMPETENSI_NAMA',''),
			'KOMPETENSI_SLUG' => ifunsetempty($_GET,'slug',''),
			'KEGIATAN_ID' => ifunsetempty($_POST,'KEGIATAN_ID',''),
		);

		if ($params["SUB_KOMPETENSI_NAMA"]=="") {
			unset($params["SUB_KOMPETENSI_NAMA"]);
		}

		if ($params["KEGIATAN_ID"]=="") {
			unset($params["KEGIATAN_ID"]);
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
			'SUB_KOMPETENSI_NAMA' => ifunsetempty($_POST,'SUB_KOMPETENSI_NAMA',''),
			'KOMPETENSI_SLUG' => slug(ifunsetempty($_POST,'SUB_KOMPETENSI_NAMA','')),
			'SUB_KOMPETENSI_ID' => ifunsetempty($_POST,'SUB_KOMPETENSI_ID',''),
			'KEGIATAN_ID' => ifunsetempty($_POST,'KEGIATAN_ID',''),
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
			'SUB_KOMPETENSI_NAMA' => ifunsetempty($_POST,'SUB_KOMPETENSI_NAMA',''),
			'KOMPETENSI_SLUG' => slug(ifunsetempty($_POST,'SUB_KOMPETENSI_NAMA','')),
			'SUB_KOMPETENSI_ID' => ifunsetempty($_POST,'SUB_KOMPETENSI_ID',''),
			'KEGIATAN_ID' => ifunsetempty($_POST,'KEGIATAN_ID',''),
			'UPDATE' => ifunsetempty($_POST, 'UPDATE',''),
		);
		if($params['SUB_KOMPETENSI_ID']==''){
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
			'SUB_KOMPETENSI_ID' => ifunsetempty($_POST,'SUB_KOMPETENSI_ID',''),
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