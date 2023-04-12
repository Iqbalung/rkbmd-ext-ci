<?php


defined('BASEPATH') OR exit('No direct script access allowed');

class Program extends MY_Controller {
	function __construct(){
		parent::__construct();
		$this->load->model('M_program');
        
	}
	
	function get()
	{
		$params = array(
			'PROGRAM_ID' => ifunsetempty($_POST,'PROGRAM_ID',''),			
			'PROGRAM_NAMA' => ifunsetempty($_POST,'PROGRAM_NAMA',''),			
			'TAHUN' => ifunsetempty($_POST,'TAHUN', $this->session->userdata('TAHUN')),
			'BIDANG_ID' => ifunsetempty($_POST,'BIDANG_ID',$this->session->userdata('BIDANG_ID')),
		);
        
		if ($params["PROGRAM_NAMA"]=="") {
			unset($params["PROGRAM_NAMA"]);
		}

		if ($params["BIDANG_ID"]=="") {
			unset($params["BIDANG_ID"]);
		}
		
		$res = $this->M_program->get($params);
		$out = array(
					'items' => $res->result(),
				);
		echo json_encode($out);
	}

	function save(){
		$params = array(
			'PROGRAM_ID' => ifunsetempty($_POST,'PROGRAM_ID',''),
			'PROGRAM_NAMA' => ifunsetempty($_POST,'PROGRAM_NAMA',''),			
			'BIDANG_ID' => ifunsetempty($_POST,'BIDANG_ID',''),
			'TAHUN' => ifunsetempty($_POST,'TAHUN', $this->session->userdata('TAHUN')),
			'UPDATE' => ifunsetempty($_POST, 'UPDATE',''),
		);

		if (empty($params["TAHUN"])) {			
			$params["TAHUN"] = date("Y");        		
		}
		
		if($params["PROGRAM_ID"]==""){ 
			unset($params["PROGRAM_ID"]);
			$res = $this->M_program->add($params);
				if($res){
					$out = array(
						'success' => true,
						'msg' => 'Berhasil Menyimpan' 
					);
				}	
		}else{
			$res = $this->M_program->upd($params);
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
			'PROGRAM_NAMA' => ifunsetempty($_POST,'PROGRAM_NAMA',''),			
			'PROGRAM_ID' => ifunsetempty($_POST,'PROGRAM_ID',''),
			'BIDANG_ID' => ifunsetempty($_POST,'BIDANG_ID',''),
			'TAHUN' => ifunsetempty($_POST,'TAHUN', $this->session->userdata('TAHUN')),
			'UPDATE' => ifunsetempty($_POST, 'UPDATE',''),
		);

		if (empty($params["TAHUN"])) {			
			$params["TAHUN"] = date("Y");        		
		}
		
		if($params['PROGRAM_ID']==''){
			$res = $this->M_program->add($params);
			if($res){
					$out = array(
						'success' => true,
						'msg' => 'Tambah data Berhasil' 
					);
			}
			echo json_encode($out);
		}else{
			$res = $this->M_program->upd($params);
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
			'PROGRAM_ID' => ifunsetempty($_POST,'PROGRAM_ID',''),
		);
		$res = $this->M_program->del($params);
		if($res){
					$out = array(
						'success' => true,
						'msg' => 'Berhasil Menghapus' 
					);
				}	
		echo json_encode($out);
	}	


}