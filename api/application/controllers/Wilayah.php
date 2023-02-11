<?php


defined('BASEPATH') OR exit('No direct script access allowed');

class Wilayah extends MY_Controller {
	function __construct(){
		parent::__construct();
		$this->load->model('M_wilayah');
		
	}
	
	function get()
	{

		$params = array(
			'WILAYAH_ID' => ifunsetempty($_POST,'WILAYAH_ID',''),
		);

		$res = $this->M_wilayah->get($params);
		$data = array();
		foreach ($res->result_array() as $key) {
				$id = $key['WILAYAH_ID'];	
				$params = array(
					'WILAYAH_ID' => $id,
				);
				$res_id = $this->M_wilayah->get($params);
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
			'WILAYAH_NAMA' => ifunsetempty($_POST,'WILAYAH_NAMA',''),
			'WILAYAH_ID' => ifunsetempty($_POST, 'WILAYAH_ID',''),
			'WILAYAH_PARENT' => ifunsetempty($_POST, 'WILAYAH_ID',''),
			'WILAYAH_DES_PENDEK' => ifunsetempty($_POST, 'WILAYAH_DES_PENDEK',''),
			'WILAYAH_DES_PANJANG' => ifunsetempty($_POST, 'WILAYAH_DES_PANJANG',''),
			'WILAYAH_LAT' => ifunsetempty($_POST, 'WILAYAH_LAT',''),
			'WILAYAH_LONG' => ifunsetempty($_POST, 'WILAYAH_LONG',''),
			'UPDATE' => ifunsetempty($_POST, 'UPDATE',''),
		);

		if($params['UPDATE']==""){ 
			// Jika submit update null maka lakukan insert
			$new_id = $this->M_wilayah->get_id($params)->first_row()->NEW;
			$params['WILAYAH_ID'] = $params['WILAYAH_PARENT'] . $new_id.'.';
			unset($params['WILAYAH_PARENT']);
			$res = $this->M_wilayah->add($params);
				if($res){
					$out = array(
						'success' => true,
						'msg' => 'Berhasil Menyimpan',
						'new_id' =>$params['WILAYAH_ID']
					);
				}	
		}else{
			unset($params['WILAYAH_PARENT']);
			$res = $this->M_wilayah->upd($params);
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
			'WILAYAH_ID' => ifunsetempty($_POST,'WILAYAH_ID',''),
		);
		$res = $this->M_wilayah->del($params);
		if($res){
					$out = array(
						'success' => true,
						'msg' => 'Berhasil Menghapus' 
					);
				}	
		echo json_encode($out);
	}



}