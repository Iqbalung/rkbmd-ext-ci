<?php

defined('BASEPATH') OR exit('No direct script access allowed');

class Tki extends MY_Controller {
	function __construct(){
		parent::__construct();
		$this->load->model('M_tki');
			$this->load->library('upload');	
	}

	function getmedical(){
		$params = array(
			'LAMARAN_ID' => ifunsetempty($_POST,'LAMARAN_ID',''),
			'MEDICAL_STATUS' => ifunsetempty($_POST,'MEDICAL_STATUS',''),
		);
		$res = $this->M_tki->getmedical($params);
		$out=array(
			'success' => true,
			'data' => $res->first_row(),
			);
		echo json_encode($out);
	}

	function getperjanjian()
	{
		$params = array(
			'LAMARAN_ID' => ifunsetempty($_POST,'LAMARAN_ID',''),
		);
		$res = $this->M_tki->getperjanjian($params);
		$out=array(
			'success' => true,
			'data' => $res->first_row(),
			);
		echo json_encode($out);
	}

	function getkepulangan()
	{
		$params = array(
			'LAMARAN_ID' => ifunsetempty($_POST,'LAMARAN_ID',''),
		);
		$res = $this->M_tki->getkepulangan($params);
		$out=array(
			'success' => true,
			'data' => $res->first_row(),
			);
		echo json_encode($out);
	}

	function riwperjanjian()
	{
		$params = array(
			'PENGGUNA_ID' => ifunsetempty($_POST,'PENGGUNA_ID',''),
		);
		$res = $this->M_tki->getriwperjanjian($params);
		$out = array(
					'items' => $res->result(),
			   	);
		echo json_encode($out);
	}

	function riwasuransi()
	{
		$params = array(
			'PENGGUNA_ID' => ifunsetempty($_POST,'PENGGUNA_ID',''),
		);
		$res = $this->M_tki->getriwasuransi($params);
		$out = array(
					'items' => $res->result(),
			   	);
		echo json_encode($out);
	}

	function riwbnptki()
	{
		$params = array(
			'PENGGUNA_ID' => ifunsetempty($_POST,'PENGGUNA_ID',''),
		);
		$res = $this->M_tki->getriwbnptki($params);
		$out = array(
					'items' => $res->result(),
			   	);
		echo json_encode($out);
	}

	function riwlk()
	{
		$params = array(
			'PENGGUNA_ID' => ifunsetempty($_POST,'PENGGUNA_ID',''),
		);
		$res = $this->M_tki->getriwlk($params);
		$out = array(
					'items' => $res->result(),
			   	);
		echo json_encode($out);
	}

	function getriwayat()
	{
		$params = array(
			'PENGGUNA_ID' => ifunsetempty($_POST,'PENGGUNA_ID',''),
			'TABLENAME' => ifunsetempty($_POST,'TABLE_NAME',''),
		);
		$res = $this->M_tki->getriwayat($params);
		$out = array(
					'items' => $res->result(),
			   	);
		echo json_encode($out);
	}

	function riwkeberangkatan()
	{
		$params = array(
			'PENGGUNA_ID' => ifunsetempty($_POST,'PENGGUNA_ID',''),
		);
		$res = $this->M_tki->getriwkeberangkatan($params);
		$out = array(
					'items' => $res->result(),
			   	);
		echo json_encode($out);
	}

	function riwpap()
	{
		$params = array(
			'PENGGUNA_ID' => ifunsetempty($_POST,'PENGGUNA_ID',''),
		);
		$res = $this->M_tki->getriwpap($params);
		$out = array(
					'items' => $res->result(),
			   	);
		echo json_encode($out);
	}

	function riwmedical(){
		$params = array(
			'PENGGUNA_ID' => ifunsetempty($_POST,'PENGGUNA_ID',''),
			'MEDICAL_STATUS' => ifunsetempty($_POST,'MEDICAL_STATUS',''),
		);
		$res = $this->M_tki->getriwmedical($params);
		$out = array(
					'items' => $res->result(),
			   	);
		echo json_encode($out);
	}

	function riwvisa(){
		$params = array(
			'PENGGUNA_ID' => ifunsetempty($_POST,'PENGGUNA_ID',''),
		);
		$res = $this->M_tki->getriwvisa($params);
		$out = array(
					'items' => $res->result(),
			   	);
		echo json_encode($out);
	}

	function getlk()
	{
		$params = array(
			'LAMARAN_ID' => ifunsetempty($_POST,'LAMARAN_ID',''),
		);
		$res = $this->M_tki->getlk($params);
		$out=array(
			'success' => true,
			'data' => $res->first_row(),
			);
		echo json_encode($out);
	}

	function getpap()
	{
		$params = array(
			'LAMARAN_ID' => ifunsetempty($_POST,'LAMARAN_ID',''),
		);
		$res = $this->M_tki->getpap($params);
		$out=array(
			'success' => true,
			'data' => $res->first_row(),
			);
		echo json_encode($out);
	}

	function getsampai()
	{
		$params = array(
			'LAMARAN_ID' => ifunsetempty($_POST,'LAMARAN_ID',''),
		);
		$res = $this->M_tki->getsampai($params);
		$out=array(
			'success' => true,
			'data' => $res->first_row(),
			);
		echo json_encode($out);
	}

	function getvisa(){
		$params = array(
			'LAMARAN_ID' => ifunsetempty($_POST,'LAMARAN_ID',''),
		);
		$res = $this->M_tki->getvisa($params);
		$out=array(
			'success' => true,
			'data' => $res->first_row(),
			);
		echo json_encode($out);
	}

	function savemedical(){
		$params = array(
			'ID' => ifunsetempty($_POST,'ID',''),
			'MEDICAL_ID' => ifunsetempty($_POST,'MEDICAL_ID',''),
			'JOB_ID' => ifunsetempty($_POST,'JOB_ID',''),
			'LAMARAN_ID' => ifunsetempty($_POST,'ID',''),
			'PENGGUNA_ID' => ifunsetempty($_POST,'PEKERJA_ID',''),
			'MEDICAL_SARANA' => ifunsetempty($_POST,'MEDICAL_SARANA',''),
			'MEDICAL_PEMERIKSAAN' => ifunsetempty($_POST,'MEDICAL_PEMERIKSAAN',''),
			'MEDICAL_HASIL' => ifunsetempty($_POST,'MEDICAL_HASIL','0'),
			'MEDICAL_FILE' => ifunsetempty($_POST, 'MEDICAL_FILES',''),
			'MEDICAL_STATUS' => ifunsetempty($_POST, 'MEDICAL_STATUS',''),
		);
		$dokumen_id = $this->_insert_dokumen("MEDICAL_FILES","MEDICAL_FILES","/tki/medical/","1.");
		$params['DOKUMEN_ID']= $dokumen_id;
		if($params['MEDICAL_STATUS']==2){
			if($params['MEDICAL_ID']==""){
				$res = $this->M_tki->addmedical($params);
			}else{
				if($params['DOKUMEN_ID']==""){
					unset($params['DOKUMEN_ID']);
				}
				$res = $this->M_tki->updmedical($params);
			}	
			if($res){
				$out = array(
						'success' => true,
						'msg' => 'Berhasil Menyimpan' 
					);
			}else{
				$out = array(
						'success' => false,
						'msg' => 'Gagal Menyimpan' 
					);
			}
			echo json_encode($out);
		}else if($params['MEDICAL_STATUS']==1){
			if($params['MEDICAL_ID']==""){
				$res = $this->M_tki->addmedical($params);
			}else{
				$res = $this->M_tki->updmedical($params);
			}	
			if($res){		
				$out = array(
						'success' => true,
						'msg' => 'Berhasil Menyimpan' 
					);
			}else{
				$out = array(
						'success' => false,
						'msg' => 'Gagal Menyimpan' 
					);
			}
			echo json_encode($out);	
		}
	}

	function saveblkln(){
		$params = array(
			'JOB_ID' => ifunsetempty($_POST,'JOB_ID',''),
			'LAMARAN_ID' => ifunsetempty($_POST,'LAMARAN_ID',''),
			'PENGGUNA_ID' => ifunsetempty($_POST,'PEKERJA_ID',''),
			'DATA' => ifunsetempty($_POST,'DATA',''),
		);
		if ($params["DATA"]=="") {
			unset($params["DATA"]);
		}
		$DATA = json_decode($params['DATA'],TRUE);
		foreach ($DATA as $key) {
			unset($key['id']);
			unset($key['ID']);
			$key['LAMARAN_ID'] = $params['LAMARAN_ID'];
			$key['PENGGUNA_ID'] = $params['PENGGUNA_ID'];
			if(isset($key['INFORMAL_ID'])){
				if(isset($key['HAPUS'])){
					$res = $this->M_tki->delblkln(array('INFORMAL_ID'=>$key['INFORMAL_ID']));
				}else{
					$res = $this->M_tki->updblkln($key);
				}
			}else{
				$res = $this->M_tki->addblkln($key);
			}
		}
		if($res){	
			$out = array(
				'success' => true,
				'msg' => 'Berhasil Menyimpan' 
			);
		}else{
			$out = array(
				'success' => false,
				'msg' => 'Gagal Menyimpan' 
				);
		}
		echo json_encode($out);	
	}

	function saveperjanjian(){
		$params = array(
			'PERJANJIAN_URAIAN' => ifunsetempty($_POST,'PERJANJIAN_URAIAN',''),
			'PERJANJIAN_DATE' 	=> ifunsetempty($_POST,'PERJANJIAN_DATE',''),
			'PERJANJIAN_START' 	=> ifunsetempty($_POST,'PERJANJIAN_START',''),
			'PERJANJIAN_END' 	=> ifunsetempty($_POST,'PERJANJIAN_END',''),
			'PENGGUNA_ID' 		=> ifunsetempty($_POST,'PEKERJA_ID',''),
			'PERJANJIAN_ID' 		=> ifunsetempty($_POST,'PERJANJIAN_ID',''),
			'LAMARAN_ID' 		=> ifunsetempty($_POST,'ID',''),
			'JOB_ID' 			=> ifunsetempty($_POST,'JOB_ID',''),
		);
		if($params['PERJANJIAN_ID']==""){
			$res = $this->M_tki->addperjanjian($params);		
		}else{
			$res = $this->M_tki->updperjanjian($params);
		}
		if($res){	
			$out = array(
				'success' => true,
				'msg' => 'Berhasil Menyimpan' 
			);
		}else{
			$out = array(
				'success' => false,
				'msg' => 'Gagal Menyimpan' 
				);
		}
		echo json_encode($out);	
	}

	function savebnp2tki(){
		$params = array(
			'BNP2TKI_URAIAN' => ifunsetempty($_POST,'BNP2TKI_URAIAN',''),
			'BNP2TKI_ID'  => ifunsetempty($_POST,'BNP2TKI_ID',''),
			'BNP2TKI_DATE' 	 => ifunsetempty($_POST,'BNP2TKI_DATE',''),
			'PENGGUNA_ID'	 => ifunsetempty($_POST,'PEKERJA_ID',''),
			'LAMARAN_ID' 	 => ifunsetempty($_POST,'ID',''),
			'JOB_ID' 		 => ifunsetempty($_POST,'JOB_ID',''),
		);	
		if($params['BNP2TKI_ID']==""){
			$res = $this->M_tki->addbnp2tki($params);

		}else{
			$res = $this->M_tki->updbnp2tki($params);
		}
		if($res){	
	
			$out = array(
				'success' => true,
				'msg' => 'Berhasil Menyimpan' 
			);
		}else{
			$out = array(
				'success' => false,
				'msg' => 'Gagal Menyimpan' 
				);
		}
		echo json_encode($out);
	}

	function savepembekalan(){
		$params = array(
			'PEMBEKALAN_URAIAN'	=> ifunsetempty($_POST,'PEMBEKALAN_URAIAN',''),
			'PEMBEKALAN_START' 	=> ifunsetempty($_POST,'PEMBEKALAN_START',''),
			'PEMBEKALAN_END' 	=> ifunsetempty($_POST,'PEMBEKALAN_END',''),
			'PEMBEKALAN_ID' 	=> ifunsetempty($_POST,'PEMBEKALAN_ID',''),
			'PENGGUNA_ID'	 	=> ifunsetempty($_POST,'PEKERJA_ID',''),
			'JOB_ID' 		 	=> ifunsetempty($_POST,'JOB_ID',''),
			'LAMARAN_ID' 		 	=> ifunsetempty($_POST,'ID',''),
		);

		$upd = array(
			'PEMBEKALAN_URAIAN'	=> ifunsetempty($_POST,'PEMBEKALAN_URAIAN',''),
			'PEMBEKALAN_START' 	=> ifunsetempty($_POST,'PEMBEKALAN_START',''),
			'PEMBEKALAN_END' 	=> ifunsetempty($_POST,'PEMBEKALAN_END',''),
			'PEMBEKALAN_ID' 	=> ifunsetempty($_POST,'PEMBEKALAN_ID',''),
			'LAMARAN_ID' 		 	=> ifunsetempty($_POST,'ID',''),
		);
		if($params['PEMBEKALAN_ID']==""){
			$res = $this->M_tki->savepembekalan($params);
			$out = array(
				'success' => true,
				'msg' => 'Berhasil Menyimpan' 
			);
		}else{
			$res = $this->M_tki->updpembekalan($upd);
			$out = array(
				'success' => true,
				'msg' => 'Berhasil Menyimpan' 
			);
		}
		echo json_encode($out);
	}

	function savevisa(){
		$params = array(
			'VISA_DATE_END' => ifunsetempty($_POST,'VISA_DATE_END',''),
			'VISA_NOMOR' 	=> ifunsetempty($_POST,'VISA_NOMOR',''),
			'PENGGUNA_ID' 	=> ifunsetempty($_POST,'PEKERJA_ID',''),
			'LAMARAN_ID' 	=> ifunsetempty($_POST,'ID',''),
			'VISA_FILE' 	=> ifunsetempty($_POST,'VISA_FILE',''),
			'VISA_ID' 		=> ifunsetempty($_POST,'VISA_ID',''),
			'JOB_ID'		=> ifunsetempty($_POST,'JOB_ID',''),
		);
		$dokumen_id = $this->_insert_dokumen("VISA_FILE","VISA_FILE","/tki/visa/","3.");
		$params['DOKUMEN_ID']= $dokumen_id;
		if($params['VISA_ID']==""){
			$res = $this->M_tki->addvisa($params);
		}else{
			if($params['DOKUMEN_ID']==""){
				unset($params['DOKUMEN_ID']);
			}
			$res = $this->M_tki->updvisa($params);
		}
		
		if($res){	
			$out = array(
				'success' => true,
				'msg' => 'Berhasil Menyimpan' 
			);
		}else{
			$out = array(
				'success' => false,
				'msg' => 'Gagal Menyimpan' 
				);
		}
		echo json_encode($out);
	}

	function savesiskot(){
		$params = array(
			'ID_TKI_DATE' => ifunsetempty($_POST,'ID_TKI_DATE',''),
			'ID' 	=> ifunsetempty($_POST,'ID',''),
			'ID_TKI_FILE' 	=> ifunsetempty($_POST,'ID_TKI_FILE',''),
			'ID_TKI' 		=> ifunsetempty($_POST,'ID_TKI',''),
		);
		$dokumen_id = $this->_insert_dokumen("ID_TKI_FILE","ID_TKI_FILE","/tki/siskotid/","3.");
		unset($params['ID_TKI_FILE']);
		$params['DOKUMEN_ID']= $dokumen_id;
		$res = $this->M_tki->updtkiid($params);	
		if($res){	
			$out = array(
				'success' => true,
				'msg' => 'Berhasil Menyimpan' 
			);
		}else{
			$out = array(
				'success' => false,
				'msg' => 'Gagal Menyimpan' 
				);
		}
		echo json_encode($out);
	}

	function saveasuransi(){
		$params = array(
			'JOB_ID' => ifunsetempty($_POST,'JOB_ID',''),
			'LAMARAN_ID' => ifunsetempty($_POST,'ID',''),
			'PENGGUNA_ID' => ifunsetempty($_POST,'PEKERJA_ID',''),
			'ASURANSI_ID' => ifunsetempty($_POST,'ASURANSI_ID',''),
			'ASURANSI_URAIAN' => ifunsetempty($_POST,'ASURANSI_URAIAN',''),
			'ASURANSI_DATE' => ifunsetempty($_POST,'ASURANSI_DATE',''),
			'ASURANSI_LK' => ifunsetempty($_POST,'ASURANSI_LK',''),
			'ASURANSI_AKUN' => ifunsetempty($_POST,'ASURANSI_AKUN',''),
			'ASURANSI_STATUS' => ifunsetempty($_POST,'ASURANSI_STATUS',''),
			'ASURANSI_FILE' => ifunsetempty($_POST,'ASURANSI_FILE',''),			
		);
		$dokumen_id = $this->_insert_dokumen("ASURANSI_FILE","ASURANSI_FILE","/tki/asuransi/","5.");
		$params['DOKUMEN_ID']= $dokumen_id;

		if ($params["ASURANSI_ID"]=="") {
			
			
			$res = $this->M_tki->addasuransi($params);
		}else{
			if($params['DOKUMEN_ID']==""){
				unset($params['DOKUMEN_ID']);
			}
			$res = $this->M_tki->updasuransi($params);
		}
		if($res){	
			$out = array(
				'success' => true,
				'msg' => 'Berhasil Menyimpan' 
			);
		}else{
			
			$out = array(
				'success' => false,
				'msg' => 'Gagal Menyimpan' 
				);
		}
		echo json_encode($out);	
	}

	function saveberangkat (){
		$params = array(
			'JOB_ID' => ifunsetempty($_POST,'JOB_ID',''),
			'LAMARAN_ID' => ifunsetempty($_POST,'ID',''),
			'PENGGUNA_ID' => ifunsetempty($_POST,'PEKERJA_ID',''),
			'PEMBERANGKATAN_ID' => ifunsetempty($_POST,'PEMBERANGKATAN_ID',''),
			'BANDARA_START' => ifunsetempty($_POST,'BANDARA_START',''),
			'BANDARA_END' => ifunsetempty($_POST,'BANDARA_END',''),
			'PEMBERANGKATAN_MASKAPAI' => ifunsetempty($_POST,'PEMBERANGKATAN_MASKAPAI',''),
			'PEMBERANGKATAN_DATE' => ifunsetempty($_POST,'PEMBERANGKATAN_DATE',''),
		);

		$upd = array(
			'PEKERJA_ID' 		=> ifunsetempty($_POST,'PEKERJA_ID',''), 
			'ID' 				=> ifunsetempty($_POST,'ID',''),
			'STATUS_ID' 		=> '3.2.',
			'JOB_ID' 			=> ifunsetempty($_POST,'JOB_ID',''),
		);

		$res = $this->M_tki->updstatusidlamaran($upd);
		if ($params["PEMBERANGKATAN_ID"]=="") {	
			unset($params['PEMBERANGKATAN_ID']);
			$res = $this->M_tki->addberangkat($params);
			$res = $this->M_tki->updberangkat($params);
		
		}else{
			if($params['PEMBERANGKATAN_ID']==""){
				unset($params['PEMBERANGKATAN_ID']);
			}
			$res = $this->M_tki->updberangkat($params);
		}
		if($res){	
			$out = array(
				'success' => true,
				'msg' => 'Berhasil Menyimpan' 
			);
		}else{
			$out = array(
				'success' => false,
				'msg' => 'Gagal Menyimpan' 
				);
		}
		echo json_encode($out);
	}

	function getasuransi(){
		$params = array(
			'LAMARAN_ID' => ifunsetempty($_POST,'LAMARAN_ID',''),
			'ASURANSI_STATUS' => ifunsetempty($_POST,'ASURANSI_STATUS',''),
		);
		$res = $this->M_tki->getasuransi($params);
		$out=array(
			'success' => true,
			'data' => $res->first_row(),
			);
		echo json_encode($out);
	}

	function getbnp2tki(){
		$params = array(
			'LAMARAN_ID' => ifunsetempty($_POST,'LAMARAN_ID',''),
		);
		$res = $this->M_tki->getbnp2tki($params);
		$out=array(
			'success' => true,
			'data' => $res->first_row(),
			);
		echo json_encode($out);
	}

	function getberangkat(){
		$params = array(
			'LAMARAN_ID' => ifunsetempty($_POST,'LAMARAN_ID',''),
		);
		$res = $this->M_tki->getberangkat($params);
		$out=array(
			'success' => true,
			'data' => $res->first_row(),
			);
		echo json_encode($out);
	}

	function savelk(){
		$params = array(
			'PENGGUNA_ID' 	=> ifunsetempty($_POST,'PEKERJA_ID',''),
			'LAMARAN_ID' 	=> ifunsetempty($_POST,'ID',''),
			'LK_URAIAN' 	=> ifunsetempty($_POST,'LK_URAIAN',''),
			'LLK_ID' 	=> ifunsetempty($_POST,'LLK_ID',''),
			'LK_FILE' 		=> ifunsetempty($_POST,'LK_FILE',''),
			'LK_AKUN' 		=> ifunsetempty($_POST,'LK_AKUN',''),
			'LK_DATE' 		=> ifunsetempty($_POST,'LK_DATE',''),
			'LK_ID' 		=> ifunsetempty($_POST,'LK_ID',''),
			'JOB_ID'		=> ifunsetempty($_POST,'JOB_ID',''),
		);
		$dokumen_id = $this->_insert_dokumen("LK_FILE","LK_FILE","/tki/lk/","4.");
		$params['DOKUMEN_ID']= $dokumen_id;
		if($params['LLK_ID']==""){
			$res = $this->M_tki->addlk($params);	
		}else{
			if($params['DOKUMEN_ID']==""){
				unset($params['DOKUMEN_ID']);
			}
			$res = $this->M_tki->updlk($params);
		}
		if($res){	
			$out = array(
				'success' => true,
				'msg' => 'Berhasil Menyimpan' 
			);
		}else{
			$out = array(
				'success' => false,
				'msg' => 'Gagal Menyimpan' 
				);
		}
		echo json_encode($out);
	}

	function setjob(){
		$params = array(
			'PEKERJA_ID' 		=> ifunsetempty($_POST,'PEKERJA_ID',''), 
			'ID' 				=> ifunsetempty($_POST,'ID',''),
			'JOB_ID' 			=> ifunsetempty($_POST,'JOB_ID',''),
		);
		$res = $this->M_tki->setjob($params);
		if($res){	
			$out = array(
				'success' => true,
				'msg' => 'Berhasil Menyimpan' 
			);
		}else{
			$out = array(
				'success' => false,
				'msg' => 'Gagal Menyimpan' 
				);
		}
		echo json_encode($out);
	}

	function change_status(){
		$params =array(
			'RIWAYAT_KETERANGAN'=> ifunsetempty($_POST,'RIWAYAT_KETERANGAN',''),  
			'RIWAYAT_DATE'		=> ifunsetempty($_POST,'RIWAYAT_DATE',''),  
			'PENGGUNA_ID' 		=> ifunsetempty($_POST,'PEKERJA_ID',''), 
			'LAMARAN_ID' 		=> ifunsetempty($_POST,'ID',''),		
			'STATUS_ID' 		=> ifunsetempty($_POST,'STATUS_ID',''),
			'JOB_ID' 			=> ifunsetempty($_POST,'JOB_ID',''),
		);

		$upd = array(
			'PEKERJA_ID' 		=> ifunsetempty($_POST,'PEKERJA_ID',''), 
			'ID' 		=> ifunsetempty($_POST,'ID',''),
			'STATUS_ID' 		=> ifunsetempty($_POST,'STATUS_ID',''),
			'JOB_ID' 			=> ifunsetempty($_POST,'JOB_ID',''),
		);
		$res = $this->M_tki->updstatusidlamaran($upd);
		if($params['STATUS_ID']=="4.2."){
			$params['ALASANPINDAH_ID'] = ifunsetempty($_POST,'ALASANPINDAH_ID','');
			$params['RIWAYAT_TEXT'] = ifunsetempty($_POST,'TEXT','');
			$res = $this->M_tki->savepindah($params);	
		}else if($params['STATUS_ID']=="4.4."){
			$res = $this->M_tki->savehilang($params);	
		}else if($params['STATUS_ID']=="4.5."){
			$params['ALASANKASUS_ID'] = ifunsetempty($_POST,'ALASANKASUS_ID','');
			$params['RIWAYAT_TEXT'] = ifunsetempty($_POST,'TEXT','');
			$res = $this->M_tki->savekasus($params);	
		}else if($params['STATUS_ID']=="3."){
			$res = $this->M_tki->savesampai($params);	
		}else if($params['STATUS_ID']=="4."){
			$res = $this->M_tki->saveselesai($params);	
		}
		if($res){
			$out = array(
				'success' => true,
				'msg' => 'Berhasil Menyimpan' 
			);
		}else{
			$out = array(
				'success' => false,
				'msg' => 'Gagal Menyimpan' 
				);
		}
		echo json_encode($out);
	}

	function savepurna(){
		$params =array(
			'PURNA_KETERANGAN'=> ifunsetempty($_POST,'PURNA_KETERANGAN',''),  
			'PURNA_DATE'		=> ifunsetempty($_POST,'PURNA_DATE',''),  
			'PURNA_ID'		=> ifunsetempty($_POST,'PURNA_ID',''),  
			'PENGGUNA_ID' 		=> ifunsetempty($_POST,'PEKERJA_ID',''), 
			'LAMARAN_ID' 		=> ifunsetempty($_POST,'ID',''),
			'STATUS_ID' 		=> ifunsetempty($_POST,'STATUS_ID',''),
			'ALASANPULANG_ID' 	=> ifunsetempty($_POST,'ALASANPULANG_ID',''),
			'RIWAYAT_TEXT' 		=> ifunsetempty($_POST,'RIWAYAT_TEXT',''),
			'JOB_ID' 			=> ifunsetempty($_POST,'JOB_ID',''),
		);

		$upd = array(
			'PEKERJA_ID' 		=> ifunsetempty($_POST,'PEKERJA_ID',''), 
			'STATUS_ID' 		=> '4.',
			'JOB_ID' 			=> ifunsetempty($_POST,'JOB_ID',''),
			'ID' 				=> ifunsetempty($_POST,'ID',''),
		);

		$res = $this->M_tki->updstatusidlamaran($upd);
		if($params['PURNA_ID']==""){
			$res = $this->M_tki->savepurna($params);
		}else{
			$res = $this->M_tki->updpurna($params);
		}
		if($res){
			$out = array(
				'success' => true,
				'msg' => 'Berhasil Menyimpan' 
			);
		}else{
			$out = array(
				'success' => false,
				'msg' => 'Gagal Menyimpan' 
				);
		}
		echo json_encode($out);
	}



}