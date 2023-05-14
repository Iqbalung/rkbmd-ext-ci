<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Pengguna extends MY_Controller {
	function __construct(){
		parent::__construct();
		$this->load->model('M_pengguna');
		
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
		
		$res = $this->M_pengguna->get($params);
		$out = array(
					'items' => $res->result(),
				);
		echo json_encode($out);
	}

	function save(){
		$params = array(
			'ID'					=> ifunsetempty($_POST,'ID',''),
			'NAMA'					=> ifunsetempty($_POST,'NAMA',''),
			'EMAIL'					=> ifunsetempty($_POST,'EMAIL',''),
			'BIDANG_ID'					=> ifunsetempty($_POST,'BIDANG_ID',''),
			'BIDANG_NAMA'					=> ifunsetempty($_POST,'BIDANG_NAMA',''),
			'USERGROUP_ID'			=> ifunsetempty($_POST,'USERGROUP_ID',''),
			'PASSWORD'				=> ifunsetempty($_POST,'PASSWORD',''),
			'NEW_PASSWORD'			=> ifunsetempty($_POST,'NEW_PASSWORD',''),
			'ACTIVE'			=> ifunsetempty($_POST,'ACTIVE', '1'),			
		);
		if($params['NEW_PASSWORD']!=''){
			$params['PASSWORD'] = md5($params['NEW_PASSWORD']);
		}else{
			unset($params['PASSWORD']);
		}
		unset($params['NEW_PASSWORD']);

		if($params['ID']==""){ 
			$res = $this->M_pengguna->add($params);
				if($res){
					$out = array(
						'success' => true,
						'msg' => 'Berhasil Menyimpan' 
					);
				}	
		}else{
			$res = $this->M_pengguna->upd($params);
			if($res){
					$out = array(
						'success' => true,
						'msg' => 'Berhasil Menyimpan' 
					);
			}	
		}		
		echo json_encode($out);
	}

	function saveupd(){
		$params = array(
			'ID'					=> ifunsetempty($_POST,'ID',''),
			'NEW_PASSWORD'			=> ifunsetempty($_POST,'NEW_PASSWORD',''),
			'PASSWORD'				=> ifunsetempty($_POST,'PASSWORD',''),
			'OLD_PASSWORD'			=> ifunsetempty($_POST,'OLD_PASSWORD',''),
			'CON_PASSWORD'			=> ifunsetempty($_POST,'OLD_PASSWORD1','')
		);
		
			unset($params['OLD_PASSWORD']);
			unset($params['CON_PASSWORD']);
			$params['PASSWORD'] = md5($params['NEW_PASSWORD']);
			unset($params['NEW_PASSWORD']);	
			
			$res = $this->M_pengguna->upd($params);
			if($res){
					$out = array(
						'success' => true,
						'msg' => 'Berhasil Menyimpan' 
					);
			}

		
	
		echo json_encode($out);
	}



	function del(){
		$params = array(
			'ID' => ifunsetempty($_POST,'ID',''),
		);
		$res = $this->M_pengguna->del($params);
		if($res){
					$out = array(
						'success' => true,
						'msg' => 'Berhasil Menghapus' 
					);
				}	
		echo json_encode($out);
	}

}