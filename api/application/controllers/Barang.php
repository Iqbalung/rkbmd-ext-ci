<?php


defined('BASEPATH') OR exit('No direct script access allowed');

class Barang extends MY_Controller {
	function __construct(){
		parent::__construct();
		$this->load->model('M_master_barang');
		
	}
	
	function get()
	{

		$params = array(
			'BARANG_ID' => ifunsetempty($_POST,'BARANG_ID',''),
			'BARANG_NAMA' => ifunsetempty($_POST,'BARANG_NAMA',''),
			'query' => ifunsetempty($_POST,'query',''),
		);

		if ($params["BARANG_NAMA"]=="") {
			unset($params["BARANG_NAMA"]);
		}

		if (!$params["BARANG_ID"]) {
			unset($params["BARANG_ID"]);
		}
		
		$res = $this->M_master_barang->get($params);
		$out = array(
					'items' => $res->result(),
				);
		echo json_encode($out);
	}

	function save(){
		$params = array(			
			'PARENT_BARANG_CODE' => ifunsetempty($_POST,'PARENT_BARANG_CODE',''),
			'BARANG_ID' => ifunsetempty($_POST,'BARANG_ID',''),
			'BARANG_NAMA' => ifunsetempty($_POST,'BARANG_NAMA',''),
			'BARANG_CODE' => ifunsetempty($_POST, 'BARANG_CODE',''),
			'LEGALITAS' => ifunsetempty($_POST, 'LEGALITAS',''),
			'BARANG_SATUAN' => ifunsetempty($_POST, 'BARANG_SATUAN','')
		);
		
		if($params['BARANG_ID']==""){ 
			unset($params["BARANG_ID"]);
			$res = $this->M_master_barang->add($params);
			if($res){
				$out = array(
					'success' => true,
					'msg' => 'Berhasil Menyimpan' 
				);
			}
		}else{
			$res = $this->M_master_barang->upd($params);
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
		$res = $this->M_master_barang->del($params);
		if($res){
					$out = array(
						'success' => true,
						'msg' => 'Berhasil Menghapus' 
					);
				}	
		echo json_encode($out);
	}

	function get_next_kode_tree(){
		$params = array(
			'BARANG_CODE' => ifunsetempty($_POST,'BARANG_CODE',''),
		);
		$res = $this->M_master_barang->get_next_kode_tree($params["BARANG_CODE"]);
		
		$out = array("success" => false);
		if($res){
			$out = array(
				'success' => true,
				"data" => $res,
				'msg' => 'Berhasil Menghapus' 
			);
		}	
		echo json_encode($out);
	}

	function get_tree()
	{

		$params = array(
			'ID' => ifunsetempty($_POST,'ID',''),						
			'node' => ifunsetempty($_POST,'node',''),	
			'pencarian' => ifunsetempty($_POST,'f_text',''),	
			'TAHUN' => ifunsetempty($_POST,'TAHUN', $this->session->userdata('TAHUN')),
		);
				
		$res = $this->M_master_barang->get_tree($params);
		
		echo json_encode($res);
	}

}