<?php


defined('BASEPATH') OR exit('No direct script access allowed');

class OutputSubKegiatan extends MY_Controller {
	function __construct(){
		parent::__construct();
		$this->load->model('M_outputsubkegiatan');
        
        
	}
	
	function get()
	{

		$params = array(
			'SUB_KEGIATAN_ID' => ifunsetempty($_POST,'SUB_KEGIATAN_ID','x'),
			'KEGIATAN_ID' => ifunsetempty($_POST,'KEGIATAN_ID',''),
			'OUTPUT_NAMA' => ifunsetempty($_POST,'OUTPUT_NAMA',''),						
		);

        
		if ($params["KEGIATAN_ID"]=="") {
			unset($params["KEGIATAN_ID"]);
		}

		if ($params["SUB_KEGIATAN_ID"]=="") {
			unset($params["SUB_KEGIATAN_ID"]);
		}


		if (!$params["OUTPUT_NAMA"]){
			unset($params["OUTPUT_NAMA"]);
		}
		
		$res = $this->M_outputsubkegiatan->get($params);
		$out = array(
					'items' => $res->result(),
				);
		echo json_encode($out);
	}

	function save(){
		$params = array(			
			'OUTPUT_ID' => ifunsetempty($_POST,'OUTPUT_ID',''),
			'OUTPUT_NAMA' => ifunsetempty($_POST,'OUTPUT_NAMA',''),
			'SUB_KEGIATAN_ID' => ifunsetempty($_POST,'SUB_KEGIATAN_ID',''),
			'KEGIATAN_ID' => ifunsetempty($_POST,'KEGIATAN_ID',''),			
			'TAHUN' => ifunsetempty($_POST,'TAHUN', $this->session->userdata('TAHUN')),
			'UPDATE' => ifunsetempty($_POST, 'UPDATE',''),
		);

		if (empty($params["TAHUN"])) {			
			$params["TAHUN"] = date("Y");        		
		}
		
		if($params['UPDATE']==""){ 
			unset($params['OUTPUT_ID']);
			$res = $this->M_outputsubkegiatan->add($params);
				if($res){
					$out = array(
						'success' => true,
						'msg' => 'Berhasil Menyimpan' 
					);
				}	
		}else{
			$res = $this->M_outputsubkegiatan->upd($params);
			if($res){
					$out = array(
						'success' => true,
						'msg' => 'Update Berhasil Menyimpan' 
					);
			}	
		}		
		echo json_encode($out);
	}

	function del(){
		$params = array(
			'OUTPUT_ID' => ifunsetempty($_POST,'OUTPUT_ID',''),
		);
		$res = $this->M_outputsubkegiatan->del($params);
		if($res){
					$out = array(
						'success' => true,
						'msg' => 'Berhasil Menghapus' 
					);
				}	
		echo json_encode($out);
	}



}