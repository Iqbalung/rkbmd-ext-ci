<?php


defined('BASEPATH') OR exit('No direct script access allowed');

class Kegiatan extends MY_Controller {
	function __construct(){
		parent::__construct();
		$this->load->model('M_kegiatan');
        
	}
	
	function get()
	{
		$params = array(
			'KEGIATAN_ID' => ifunsetempty($_POST,'KEGIATAN_ID',''),
			'JABATAN_ID' => ifunsetempty($_POST,'JABATAN_ID',''),
			'KEGIATAN_NAMA' => ifunsetempty($_POST,'KEGIATAN_NAMA',''),
			'KEGIATAN_SLUG' => ifunsetempty($_POST,'slug',''),
			'PROGRAM_ID' => ifunsetempty($_POST,'PROGRAM_ID',''),
			'TAHUN' => ifunsetempty($_POST,'TAHUN', $this->session->userdata('TAHUN')),
			'BIDANG_ID' => ifunsetempty($_POST,'BIDANG_ID',$this->session->userdata('BIDANG_ID')),
		);
        
		if ($params["KEGIATAN_NAMA"]=="") {
			unset($params["KEGIATAN_NAMA"]);
		}

		if ($params["BIDANG_ID"]=="") {
			unset($params["BIDANG_ID"]);
		}


		if($params["JABATAN_ID"]==""){
			unset($params["JABATAN_ID"]);
		}	

		if (!$params["KEGIATAN_SLUG"]){
			unset($params["KEGIATAN_SLUG"]);
		}

		if($params["PROGRAM_ID"]==""){
			unset($params["PROGRAM_ID"]);
		}	
		
		$res = $this->M_kegiatan->get($params);
		$out = array(
					'items' => $res->result(),
				);
		echo json_encode($out);
	}

	function save(){
		$params = array(
			'KEGIATAN_NAMA' => ifunsetempty($_POST,'KEGIATAN_NAMA',''),
			'KEGIATAN_SLUG' => slug(ifunsetempty($_POST,'KEGIATAN_NAMA','')),
			'KEGIATAN_ID' => ifunsetempty($_POST,'KEGIATAN_ID',''),
			'BIDANG_ID' => ifunsetempty($_POST,'BIDANG_ID',''),
			'PROGRAM_ID' => ifunsetempty($_POST,'PROGRAM_ID',''),
			'TAHUN' => ifunsetempty($_POST,'TAHUN', $this->session->userdata('TAHUN')),
			'UPDATE' => ifunsetempty($_POST, 'UPDATE',''),
		);

		if (empty($params["TAHUN"])) {			
			$params["TAHUN"] = date("Y");        		
		}
		
		if($params['UPDATE']==""){ 
			unset($params["KEGIATAN_ID"]);
			$res = $this->M_kegiatan->add($params);
				if($res){
					$out = array(
						'success' => true,
						'msg' => 'Berhasil Menyimpan' 
					);
				}	
		}else{
			$res = $this->M_kegiatan->upd($params);
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
			'KEGIATAN_NAMA' => ifunsetempty($_POST,'KEGIATAN_NAMA',''),
			'KEGIATAN_SLUG' => slug(ifunsetempty($_POST,'KEGIATAN_NAMA','')),
			'KEGIATAN_ID' => ifunsetempty($_POST,'KEGIATAN_ID',''),
			'PROGRAM_ID' => ifunsetempty($_POST,'PROGRAM_ID',''),
			'BIDANG_ID' => ifunsetempty($_POST,'BIDANG_ID',''),
			'TAHUN' => ifunsetempty($_POST,'TAHUN', $this->session->userdata('TAHUN')),
			'UPDATE' => ifunsetempty($_POST, 'UPDATE',''),
		);

		if (empty($params["TAHUN"])) {			
			$params["TAHUN"] = date("Y");        		
		}
		
		if($params['KEGIATAN_ID']==''){
			$res = $this->M_kegiatan->add($params);
			if($res){
					$out = array(
						'success' => true,
						'msg' => 'Tambah data Berhasil' 
					);
			}
			echo json_encode($out);
		}else{
			$res = $this->M_kegiatan->upd($params);
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
			'KEGIATAN_ID' => ifunsetempty($_POST,'KEGIATAN_ID',''),
		);
		$res = $this->M_kegiatan->del($params);
		if($res){
					$out = array(
						'success' => true,
						'msg' => 'Berhasil Menghapus' 
					);
				}	
		echo json_encode($out);
	}

	function get_tree()
	{

		$params = array(
			'ID' => ifunsetempty($_POST,'ID',''),
			'PROGRAM_ID' => ifunsetempty($_POST,'PROGRAM_ID',''),
			'BIDANG_ID' => ifunsetempty($_POST,'BIDANG_ID',''),
			'TIPE' => ifunsetempty($_POST,'TIPE',''),
			'node' => ifunsetempty($_POST,'node',''),	
			'TAHUN' => ifunsetempty($_POST,'TAHUN', $this->session->userdata('TAHUN')),
		);
				
		$res = $this->M_kegiatan->get_tree($params);
		
		echo json_encode($res);
	}



}