<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Lamaran extends MY_Controller {
	function __construct(){
		parent::__construct();
		$this->load->model('M_lamaran');
		$this->load->model('M_pelamar');
		
	}

	function get(){

		$params = array(
			'STATUS' => ifunset($_POST,'STATUS',''),
			'PURNA' => ifunsetempty($_POST,'PURNA',''),	
			'page' => (int) ifunsetempty($_POST,'page',1),
			'start' => (int) ifunsetempty($_POST,'start',0),
			'limit' => (int) ifunsetempty($_POST,'limit',25),			
			'TEXT_CARI' => ifunsetempty($_POST,'TEXT_CARI',''),			
			'SATKER_ID' => ifunsetempty($_POST,'SATKER_ID',''),
			'JOB_JABATAN_ID' => ifunsetempty($_POST,'JOB_JABATAN_ID',''),	
			'REKRUITER_ID' => (int) ifunsetempty($_POST,'REKRUITER_ID',0),			
		);

		if (!$params["SATKER_ID"]) {
			unset($params["SATKER_ID"]);
		}		
		
		if ($this->user["PPTKIS_ID"]!="") {
			$params['PPTKIS_ID'] = $this->user['PPTKIS_ID'];
		}
		if ($this->user["USERGROUP_ID"]=="3") {
			$params['REKRUITER_ID'] = $this->user['ID'];
		}

		if ($params["REKRUITER_ID"]=="") {
			unset($params['REKRUITER_ID']);
		}

		if ($params["PURNA"]=="") {
			unset($params['PURNA']);
		}

		$res = $this->M_lamaran->get($params)->result_array();
		unset($params['start']);
		unset($params['limit']);
		$res_count = $this->M_lamaran->get($params)->num_rows();
		$data=array();
		$to   = new DateTime('today');
		foreach ($res as $key) {
			$id = $key['ID'];
			$status = $this->M_lamaran->getsyarat($id)->result_array();

			//Melakukan mapping unutk mendapatkan status id dari medical / asuransi
			$key['ASURANSI'] = $status[0]['ASURANSI'];
			$key['MEDICALPRA'] = $status[0]['MEDICALPRA'];
			$key['MEDICALFULL'] = $status[0]['MEDICALFULL'];
			$key['ASURANSI_PENEMPATAN'] = $status[0]['ASURANSI_PENEMPATAN'];

			//MEMEBUT TERSISA MENAMPILKAN KEKURANGAN BERDASARKAN BULAN DAN HARI
			$sisa = $key['TERSISA'];
			if($key['TERSISA']>31){
				$hari = ($key['TERSISA'] % 30);
				$sisa = floor($key['TERSISA']/30) . " Bulan " . $hari;
			}
			if($key['TERSISA'] != ""){
				$key['TERSISA'] =  $sisa . " Hari ";
			}else{
				$key['TERSISA'] = "-";
			}
			if($key['ID_TKI'] != ""){
				$key['ID_TKI_STATUS'] = true;
			}else{
				$key['ID_TKI_STATUS'] = false;
			}

			//$DANGER make grid have color category
			if($key['TERSISA']<90 && $key['TERSISA'] > 61 ){
				$key['DANGER'] = 1;	
			}else if($key['TERSISA']<60 && $key['TERSISA'] > 31){
				$key['DANGER'] = 2;	
			}else if($key['TERSISA']<30 && $key['TERSISA'] >= 1){
				$key['DANGER'] = 3;
			}else if($key['TERSISA']<1){
				$key['DANGER'] = "4";
			}

			$dokumem = $this->_get_dokumen_pelamar($key["PEKERJA_ID"]);				
			$key = $key + $dokumem;
			$data[] = $key;			
		}
		$out = array(
			'count' => $res_count,
			'items' => $data,
		);
		echo json_encode($out);
	}
	
	function cmp($a, $b)
	{
		    return strcmp($a->urut, $b->urut);
	}

	function _get_dokumen_pelamar($pekerja_id = 0)
	{
		$params = array(
			'PEKERJA_ID' => $pekerja_id,
			'KLASIFIKASI_ID' => array('1.1.','1.2.','1.3.','1.4.','1.5.')
		);

		$res = $this->M_pelamar->get_dokumen($params);
		$data = array(
			'VALID_KTP' => false,
			'VALID_AKTA' => false,
			'VALID_KK' => false,
			'VALID_SURAT_IZIN' => false,
			'VALID_PASPOR' => false,
			'FILE_KTP' => 'empty.png',
			'FILE_AKTA' => 'empty.png',
			'FILE_KK' => 'empty.png',
			'FILE_SURAT_IZIN' => 'empty.png',
			'FILE_PASPOR' => 'empty.png',
			'STATUS_KTP' => '#999',
			'STATUS_AKTA' => '#999',
			'STATUS_KK' => '#999',
			'STATUS_SURAT_IZIN' => '#999',
			'STATUS_PASPOR' => '#999'
			);

		$path = $this->config->item('upload_path')."/tki/media/";

		foreach ($res->result_array() as $key => $value) {
			if ($value["KLASIFIKASI_ID"] == '1.1.') {				
				if (file_exists($path.$value["DOKUMEN_NAMA_GENERATE"])) {
					$data["VALID_KTP"] = true;
					$data["FILE_KTP"] = $value["DOKUMEN_NAMA_GENERATE"];
					$data['STATUS_KTP'] = "#4CAF50";
				}
			}else if ($value["KLASIFIKASI_ID"] == '1.2.') {				
				if (file_exists($path.$value["DOKUMEN_NAMA_GENERATE"])) {					
					$data["VALID_AKTA"] = true;
					$data["FILE_AKTA"] = $value["DOKUMEN_NAMA_GENERATE"];
					$data['STATUS_AKTA'] = "#4CAF50";
				}
			}else if ($value["KLASIFIKASI_ID"] == '1.3.') {				
				if (file_exists($path.$value["DOKUMEN_NAMA_GENERATE"])) {					
					$data["VALID_KK"] = true;
					$data["FILE_KK"] = $value["DOKUMEN_NAMA_GENERATE"];
					$data['STATUS_KK'] = "#4CAF50";
				}
			}else if ($value["KLASIFIKASI_ID"] == '1.4.') {				
				if (file_exists($path.$value["DOKUMEN_NAMA_GENERATE"])) {					
					$data["VALID_SURAT_IZIN"] = true;
					$data["FILE_SURAT_IZIN"] = $value["DOKUMEN_NAMA_GENERATE"];
					$data['STATUS_SURAT_IZIN'] = "#4CAF50";
				}
			}else if ($value["KLASIFIKASI_ID"] == '1.5.') {				
				if (file_exists($path.$value["DOKUMEN_NAMA_GENERATE"])) {					
					$data["VALID_PASPOR"] = true;
					$data["FILE_PASPOR"] = $value["DOKUMEN_NAMA_GENERATE"];
					$data['STATUS_PASPOR'] = "#4CAF50";
				}
			}
		}

		return $data;
		
	}
}