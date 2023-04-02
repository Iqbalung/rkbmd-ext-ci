<?php


defined('BASEPATH') OR exit('No direct script access allowed');

class SubKegiatan extends MY_Controller {
	function __construct(){
		parent::__construct();
		$this->load->model('M_subkegiatan');
        
        
	}
	
	function get()
	{

		$params = array(
			'SUB_KEGIATAN_ID' => ifunsetempty($_POST,'SUB_KEGIATAN_ID',''),
			'KEGIATAN_ID' => ifunsetempty($_POST,'KEGIATAN_ID',''),
			'SUB_KEGIATAN_NAMA' => ifunsetempty($_POST,'SUB_KEGIATAN_NAMA',''),
			'SUB_KEGIATAN_SLUG' => ifunsetempty($_GET,'slug',''),
			'SUB_KEGIATAN_ID' => ifunsetempty($_POST,'SUB_KEGIATAN_ID',$this->session->userdata('SUB_KEGIATAN_ID')),
		);

        
		if ($params["SUB_KEGIATAN_NAMA"]=="") {
			unset($params["SUB_KEGIATAN_NAMA"]);
		}

		if ($params["SUB_KEGIATAN_ID"]=="") {
			unset($params["SUB_KEGIATAN_ID"]);
		}


		if (!$params["SUB_KEGIATAN_SLUG"]){
			unset($params["SUB_KEGIATAN_SLUG"]);
		}
		
		$res = $this->M_subkegiatan->get($params);
		$out = array(
					'items' => $res->result(),
				);
		echo json_encode($out);
	}

	function save(){
		$params = array(
			'SUB_KEGIATAN_NAMA' => ifunsetempty($_POST,'SUB_KEGIATAN_NAMA',''),
			'SUB_KEGIATAN_SLUG' => slug(ifunsetempty($_POST,'SUB_KEGIATAN_NAMA','')),
			'SUB_KEGIATAN_ID' => ifunsetempty($_POST,'SUB_KEGIATAN_ID',''),
			'SUB_KEGIATAN_TIPE' => ifunsetempty($_POST,'SUB_KEGIATAN_TIPE',''),
			'KEGIATAN_ID' => ifunsetempty($_POST,'KEGIATAN_ID',''),
			'TAHUN' => ifunsetempty($_POST,'TAHUN', $this->session->userdata('TAHUN')),
			'UPDATE' => ifunsetempty($_POST, 'UPDATE',''),
		);

		if (empty($params["TAHUN"])) {			
			$params["TAHUN"] = date("Y");        		
		}
		
		if($params['UPDATE']==""){ 
			$res = $this->M_subkegiatan->add($params);
				if($res){
					$out = array(
						'success' => true,
						'msg' => 'Berhasil Menyimpan' 
					);
				}	
		}else{
			$res = $this->M_subkegiatan->upd($params);
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
			'SUB_KEGIATAN_NAMA' => ifunsetempty($_POST,'SUB_KEGIATAN_NAMA',''),
			'SUB_KEGIATAN_SLUG' => slug(ifunsetempty($_POST,'SUB_KEGIATAN_NAMA','')),
			'SUB_KEGIATAN_ID' => ifunsetempty($_POST,'SUB_KEGIATAN_ID',''),
			'SUB_KEGIATAN_ID' => ifunsetempty($_POST,'SUB_KEGIATAN_ID',''),
			'TAHUN' => ifunsetempty($_POST,'TAHUN', $this->session->userdata('TAHUN')),
			'UPDATE' => ifunsetempty($_POST, 'UPDATE',''),
		);

		if (empty($params["TAHUN"])) {			
			$params["TAHUN"] = date("Y");        		
		}

		if($params['SUB_KEGIATAN_ID']==''){
			$res = $this->M_subkegiatan->add($params);
			if($res){
					$out = array(
						'success' => true,
						'msg' => 'Tambah data Berhasil' 
					);
			}
			echo json_encode($out);
		}else{
			$res = $this->M_subkegiatan->upd($params);
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
			'SUB_KEGIATAN_ID' => ifunsetempty($_POST,'SUB_KEGIATAN_ID',''),
		);
		$res = $this->M_subkegiatan->del($params);
		if($res){
					$out = array(
						'success' => true,
						'msg' => 'Berhasil Menghapus' 
					);
				}	
		echo json_encode($out);
	}



}