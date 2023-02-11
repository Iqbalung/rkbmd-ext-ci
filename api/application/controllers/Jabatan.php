<?php


defined('BASEPATH') OR exit('No direct script access allowed');

class Jabatan extends MY_Controller {
	function __construct(){
		parent::__construct();
		$this->load->model('M_jabatan');
		$this->load->model('M_alat');
		$this->load->model('M_kompetensi');
		$this->load->model('M_lingkungan');
		
	}
	
	function get()
	{

		$params = array(
			'JABATAN_ID' => ifunsetempty($_POST,'JABATAN_ID',''),
			'query' => ifunsetempty($_POST,'query',''),
			'JABATAN_NAMA' => ifunsetempty($_POST,'JABATAN_NAMA',''),
			'JABATAN_TUGAS' => ifunsetempty($_GET,'JABATAN_TUGAS',''),
			'JABATAN_SLUG' => ifunsetempty($_GET,'slug',''),
			'BIDANG_ID' => ifunsetempty($_POST,'BIDANG_ID',''),
		);

		if ($params["query"]=="") {
			unset($params["query"]);
		}
		if ($params["JABATAN_ID"]=="") {
			unset($params["JABATAN_ID"]);
		}

		if($params["BIDANG_ID"]==""){
			unset($params["BIDANG_ID"]);
		}
		if (!$params["JABATAN_SLUG"]){
			unset($params["JABATAN_SLUG"]);
		}
		
		
		$res = $this->M_jabatan->get($params);
		$out = array(
					'items' => $res->result(),
				);
		echo json_encode($out);
	}

	function save(){
		$params = array(
			'JABATAN_NAMA' => ifunsetempty($_POST,'JABATAN_NAMA',''),
			'JABATAN_SLUG' => slug(ifunsetempty($_POST,'JABATAN_NAMA','')),
			'JABATAN_ID' => ifunsetempty($_POST,'JABATAN_ID',''),
			'JABATAN_TUGAS' => ifunsetempty($_POST, 'JABATAN_TUGAS',''),
			'JABATAN_DESKRIPSI' => ifunsetempty($_POST, 'JABATAN_DESKRIPSI',''),
			'JABATAN_JURUSAN' => ifunsetempty($_POST, 'JABATAN_JURUSAN',''),
			'JABATAN_SERTIFIKAT' => ifunsetempty($_POST, 'JABATAN_SERTIFIKAT',''),
			'JABATAN_KELAMIN' => ifunsetempty($_POST, 'JABATAN_KELAMIN',''),
			'JABATAN_SYARAT_LAIN' => ifunsetempty($_POST, 'JABATAN_SYARAT_LAIN',''),
			'DATA_ALAT' => ifunsetempty($_POST, 'DATA_ALAT',''),
			'DATA_KOMPETENSI' => ifunsetempty($_POST, 'DATA_KOMPETENSI',''),
			'DATA_LINGKUNGAN' => ifunsetempty($_POST, 'DATA_LINGKUNGAN',''),
			'PENDIDIKAN_ID' => ifunsetempty($_POST, 'PENDIDIKAN_ID',''),
			'BIDANG_ID' => ifunsetempty($_POST,'BIDANG_ID',''),
			'UPDATE' => ifunsetempty($_POST, 'UPDATE',''),
		);
		
		if($params['JABATAN_ID']==""){
			$res = $this->M_jabatan->add($params);
			$id  = $this->db->insert_id();
				if($res){
					$out = array(
						'success' => true,
						'msg' => 'Berhasil Menyimpan' 
					);
				}
		}else{
			$id = $params['JABATAN_ID'];
			$res = $this->M_alat->del($id);
			$res = $this->M_lingkungan->del($id);
			$res = $this->M_jabatan->upd($params);
			if($res){
					$out = array(
						'success' => true,
						'msg' => 'Update Berhasil Menyimpan' 
					);
			}
		}
		
		$DATA_ALAT = json_decode($params['DATA_ALAT'],TRUE);
		$DATA_KOMPETENSI = json_decode($params['DATA_KOMPETENSI'],TRUE);
		$DATA_LINGKUNGAN = json_decode($params['DATA_LINGKUNGAN'],TRUE);
		foreach ($DATA_ALAT as $key) {
			$key['JABATAN_ID'] = $id;
			$res = $this->M_alat->add($key);
		}
		foreach ($DATA_LINGKUNGAN as $key) {
			$key['JABATAN_ID'] = $id;
			$res = $this->M_lingkungan->add($key);
		}

		foreach ($DATA_KOMPETENSI as $key) {
				$var =array();
				$var['KOMPETENSI_ID'] = $key; 
				$var['JABATAN_ID'] = $id;
				$res = $this->M_kompetensi->addkomjab($var);
		}
		echo json_encode($out);
	}

	function del(){
		$params = array(
			'JABATAN_ID' => ifunsetempty($_POST,'JABATAN_ID',''),
		);
		$res = $this->M_jabatan->del($params);
		if($res){
					$out = array(
						'success' => true,
						'msg' => 'Berhasil Menghapus' 
					);
				}	
		echo json_encode($out);
	}



}