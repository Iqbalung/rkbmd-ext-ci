<?php


defined('BASEPATH') OR exit('No direct script access allowed');

class Pemeliharaan extends MY_Controller {
	function __construct(){
		parent::__construct();
		$this->load->model('M_pemeliharaan');
        
	}
	
	function simpan()
	{

		$params = array(
			'PEMELIHARAAN_ID' => ifunsetempty($_POST,'PEMELIHARAAN_ID',''),
			'BIDANG_ID' => ifunsetempty($_POST,'BIDANG_ID', $this->session->userdata('BIDANG_ID')),
			'TAHUN' => ifunsetempty($_POST,'TAHUN', $this->session->userdata('TAHUN')),
			'KEGIATAN_ID' => ifunsetempty($_POST,'KEGIATAN_ID',''),			
			'SUB_KEGIATAN_ID' => ifunsetempty($_POST,'SUB_KEGIATAN_ID',''),
			'DATA_BARANG' => json_decode(ifunsetempty($_POST,'DATA_BARANG','[]'), true)			
		);

		$params["TAHUN"] = date("Y");        
		$params["BIDANG_ID"] = "12.";   
		
		$out = $this->M_pemeliharaan->save($params);
		
		echo json_encode($out);
	}

	function save(){
		$params = array(
			'PEMELIHARAAN_NAMA' => ifunsetempty($_POST,'PEMELIHARAAN_NAMA',''),
			'PEMELIHARAAN_SLUG' => slug(ifunsetempty($_POST,'PEMELIHARAAN_NAMA','')),
			'PEMELIHARAAN_ID' => ifunsetempty($_POST,'PEMELIHARAAN_ID',''),
			'BIDANG_ID' => ifunsetempty($_POST,'BIDANG_ID',''),
			'UPDATE' => ifunsetempty($_POST, 'UPDATE',''),
		);
		
		if($params['UPDATE']==""){ 
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
			'PEMELIHARAAN_NAMA' => ifunsetempty($_POST,'PEMELIHARAAN_NAMA',''),
			'PEMELIHARAAN_SLUG' => slug(ifunsetempty($_POST,'PEMELIHARAAN_NAMA','')),
			'PEMELIHARAAN_ID' => ifunsetempty($_POST,'PEMELIHARAAN_ID',''),
			'BIDANG_ID' => ifunsetempty($_POST,'BIDANG_ID',''),
			'UPDATE' => ifunsetempty($_POST, 'UPDATE',''),
		);
		if($params['PEMELIHARAAN_ID']==''){
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
			'PEMELIHARAAN_ID' => ifunsetempty($_POST,'PEMELIHARAAN_ID',''),
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
			'BIDANG_ID' => ifunsetempty($_POST,'BIDANG_ID',''),
			'TIPE' => ifunsetempty($_POST,'TIPE',''),
			'node' => ifunsetempty($_POST,'node','')			
		);

        
		$res = $this->M_kegiatan->get_tree($params);
		
		echo json_encode($res);
	}



}