<?php


defined('BASEPATH') OR exit('No direct script access allowed');

class Lembaga_sertifikasi_profesi extends MY_Controller {
	function __construct(){
		parent::__construct();
		$this->load->model('M_lembaga_sertifikasi_profesi');
		
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
		
		$res = $this->M_lembaga_sertifikasi_profesi->get($params);
		$out = array(
					'items' => $res->result(),
				);
		echo json_encode($out);
	}

	function save(){
		$params = array(
			'ID' => ifunsetempty($_POST,'ID',''),
			'NAMA' => ifunsetempty($_POST,'NAMA',''),
			'JENIS' => ifunsetempty($_POST, 'JENIS',''),
			'BIDANG' => ifunsetempty($_POST, 'BIDANG',''),
			'NO_LISENSI_BNSP' => ifunsetempty($_POST, 'NO_LISENSI_BNSP',''),
			'LAYANAN' => ifunsetempty($_POST, 'LAYANAN',''),
			'TELP' => ifunsetempty($_POST, 'TELP',''),
			'PROFILE' => ifunsetempty($_POST, 'PROFILE',''),
			'ALAMAT' => ifunsetempty($_POST, 'ALAMAT','')
		);
		
		if($params['ID']==""){ 
			$res = $this->M_lembaga_sertifikasi_profesi->add($params);
				if($res){
					$out = array(
						'success' => true,
						'msg' => 'Berhasil Menyimpan' 
					);
				}	
		}else{
			$res = $this->M_lembaga_sertifikasi_profesi->upd($params);
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
			'ID' => ifunsetempty($_POST,'ID',''),
		);
		$res = $this->M_lembaga_sertifikasi_profesi->del($params);
		if($res){
					$out = array(
						'success' => true,
						'msg' => 'Berhasil Menghapus' 
					);
				}	
		echo json_encode($out);
	}



}