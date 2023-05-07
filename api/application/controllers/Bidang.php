<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Bidang extends MY_Controller {
	function __construct(){
		parent::__construct();
		$this->load->model('M_bidang');
		
	}
	
	function get()
	{

		$params = array(
			'BIDANG_ID' => ifunsetempty($_POST,'BIDANG_ID',''),
		);

		if (empty($params["BIDANG_ID"]) && $this->session->userdata('BIDANG_ID')) {
			$params["BIDANG_ID"] = $this->session->userdata('BIDANG_ID');
		}
		$res = $this->M_bidang->get($params);
		$data = array();		
		foreach ($res->result_array() as $key) {
				$id = $key['BIDANG_ID'];	
				$params = array(
					'BIDANG_ID' => $id,
				);
				$res_id = $this->M_bidang->get($params);
				if ($res_id->num_rows() == 0) {
					$key['leaf'] = true;
				}
				$data[] = $key;
			}		
		$out = array(
					'items' => $data,
				);
		echo json_encode($out);
	}

	function save(){
		$params = array(
			'BIDANG_ID' => ifunsetempty($_POST, 'BIDANG_ID',''),
			'BIDANG_NAMA' => ifunsetempty($_POST,'BIDANG_NAMA',''),
			'BIDANG_PEJABAT' => ifunsetempty($_POST,'BIDANG_PEJABAT',''),
			'BIDANG_PEJABAT_NRP' => ifunsetempty($_POST,'BIDANG_PEJABAT_NRP',''),
			'BIDANG_ALAMAT' => ifunsetempty($_POST,'BIDANG_ALAMAT','')
		);

		if($params['UPDATE']==""){ 
			// Jika submit update null maka lakukan insert
			$new_id = $this->M_bidang->get_id($params)->first_row()->NEW;
			$params['BIDANG_ID'] = $params['BIDANG_ID'] . $new_id.'.';
			$res = $this->M_bidang->add($params);
				if($res){
					$out = array(
						'success' => true,
						'msg' => 'Berhasil Menyimpan',
						'new_id' =>$params['BIDANG_ID']
					);
				}	
		}else{
			unset($params['BIDANG_PARENT']);
			$res = $this->M_bidang->upd($params);
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
			'BIDANG_ID' => ifunsetempty($_POST,'BIDANG_ID',''),
		);
		$res = $this->M_bidang->del($params);
		if($res){
					$out = array(
						'success' => true,
						'msg' => 'Berhasil Menghapus' 
					);
				}
		echo json_encode($out);
	}



}