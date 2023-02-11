<?php


defined('BASEPATH') OR exit('No direct script access allowed');

class Job extends MY_Controller {
	function __construct(){
		parent::__construct();
		$this->load->model(array("M_job","M_alat","M_lingkungan","M_pelamar"));		
		
	}

	
	function get()
	{

		$params = array(
			'BIDANG_ID' => ifunsetempty($_POST,'BIDANG_ID',''),
			'JABATAN_ID' => ifunsetempty($_POST,'JABATAN_ID',''),
			'start' => (int) ifunsetempty($_POST,'start',0),
			'page' => (int) ifunsetempty($_POST,'page',1),
			'limit' => (int) ifunsetempty($_POST,'limit',25),
			'JOB_ID' => ifunsetempty($_POST,'JOB_ID',''),
			'JABATAN_NAMA' => ifunsetempty($_POST,'JABATAN_NAMA',''),
			'JABATAN_SERTIFIKAT' => ifunsetempty($_POST,'JABATAN_SERTIFIKAT',''),
			'JABATAN_DESKRIPSI' => ifunsetempty($_POST,'JABATAN_DESKRIPSI',''),
			'JABATAN_TUGAS' => ifunsetempty($_POST,'JABATAN_TUGAS',''),
			'WILAYAH_ID' => ifunsetempty($_POST,'WILAYAH_ID',''),
			'OWNER_NAMA' => ifunsetempty($_POST,'OWNER_NAMA',''),
			'OWNER_ID' => ifunsetempty($_POST,'OWNER_ID',''),
			'WILAYAH_NAMA' => ifunsetempty($_POST,'WILAYAH_NAMA',''),
			'OWNER_ALAMAT_LENGKAP' => ifunsetempty($_POST,'OWNER_ALAMAT_LENGKAP',''),
			'MATA_UANG_ID' => ifunsetempty($_POST,'MATA_UANG_ID',''),
			'JOB_SALARY' => ifunsetempty($_POST,'JOB_SALARY',''),
			'JOB_SALARY_MAX' => ifunsetempty($_POST,'JOB_SALARY_MAX',''),
			'JOB_KEBUTUHAN' => ifunsetempty($_POST,'JOB_KEBUTHAN',''),
			'JOB_FASILITAS_MAKAN' => ifunsetempty($_POST,'JOB_FASILITAS_MAKAN',''),
			'JOB_FASILITAS_TT' => ifunsetempty($_POST,'JOB_FASILITAS_TT',''),
			'JOB_FASILITAS_TRANSPORTASI' => ifunsetempty($_POST,'JOB_FASILITAS_TRANSPORTASI',''),
			'JOB_FASILITAS_KESEHATAN' => ifunsetempty($_POST,'JOB_FASILITAS_KESEHATAN',''),
			'JOB_START_DATE' => ifunsetempty($_POST,'JOB_START_DATE',''),
			'JOB_END_DATE' => ifunsetempty($_POST,'JOB_END_DATE',''),
			'JOB_FASILITAS_LIBURAN' => ifunsetempty($_POST,'JOB_FASILITAS_LIBURAN',''),
			'JOB_FASILITAS_KOMUNIKASI' => ifunsetempty($_POST,'JOB_FASILITAS_KOMUNIKASI',''),
			'JOB_FASILITAS_LAINYA' => ifunsetempty($_POST,'JOB_FASILITAS_LAINYA',''),
			'KONTRAK_ID' => ifunsetempty($_POST,'KONTRAK_ID',''),
			'JOB_JENJANG_KARIR' => ifunsetempty($_POST,'JOB_JENJANG_KARIR',''),
			'KEYWORD' => ifunsetempty($_POST,'KEYWORD',''),
		);

		
		
		if ($params["JOB_START_DATE"]=="") {
			unset($params["JOB_START_DATE"]);
		}else{
			$start = new DateTime($params['JOB_START_DATE']);
			$params["JOB_START_DATE"] =  $start->format('Y-m-d');;
		}
		

		if ($params["JOB_END_DATE"]=="") {
			unset($params["JOB_END_DATE"]);
		}else{
			$start = new DateTime($params['JOB_END_DATE']);
			$params["JOB_END_DATE"] =  $start->format('Y-m-d');;
		}

		if ($params["KEYWORD"]=="") {
			unset($params["KEYWORD"]);
		}

		if ($this->user["PPTKIS_ID"]!="") {
			$params['PPTKIS_ID'] = $this->user['PPTKIS_ID'];
		}
		
		$res = $this->M_job->get($params);
		$res = $res->result_array();
		$data=array();

		foreach ($res as $key) {
			$tersisa =  $this->M_job->get_tersisa($key['JOB_ID'],$key['JOB_END_DATE'])->result_array();
			if($tersisa[0]['DATE']>1){
				$sisa = $tersisa[0]['DATE'];
			}else{
				$sisa = 0;
			}
			$date_start = new DateTime($key['JOB_START_DATE']);
			$date_end = new DateTime($key['JOB_END_DATE']);
			$key['JOB_START_DATE'] = $date_start->format('d-m-Y');
			$key['JOB_END_DATE'] = $date_end->format('d-m-Y');
			$key['TERSISA_WAKTU'] = intval($sisa);
			$key['JOB_SALARY'] = $key['JOB_SALARY'] ;
			$jmlterima =  $this->M_pelamar->get(array("JOB_ID"=>$key['JOB_ID']));
			$umur = $key['JOB_RANGEUMUR'];
			if($umur!=""){
				$range = explode(",",$umur );
				$key['RANGE_START'] = $range[0];  	
				$key['RANGE_END'] = $range[1];  	
			}
			$key['TERISI'] = $jmlterima->num_rows();
			$key['KURANG'] = max(0,($key['JOB_KEBUTUHAN'] - $jmlterima->num_rows()));
			$data[] = $key;
		}		
		$out = array(
					'items' => $data,
				);
		echo json_encode($out);
	}

	function save(){
		$params = array(
			'DATA_ALAT' => ifunsetempty($_POST, 'DATA_ALAT',''),
			'DATA_KOMPETENSI' => ifunsetempty($_POST, 'DATA_KOMPETENSI',''),
			'DATA_LINGKUNGAN' => ifunsetempty($_POST, 'DATA_LINGKUNGAN',''),
			'BARANG_ID' => ifunsetempty($_POST,'BARANG_ID',''),
			'JOB_SISKOTKLN' => ifunsetempty($_POST,'JOB_SISKOTKLN',''),
			'JOB_ID' => ifunsetempty($_POST,'JOB_ID',''),
			'WILAYAH_ID' => ifunsetempty($_POST,'WILAYAH_ID',''),
			'PENDIDIKAN_ID' => ifunsetempty($_POST,'PENDIDIKAN_ID',''),
			'OWNER_ID' => ifunsetempty($_POST,'OWNER_ID',''),
			'JOB_RANGEJAM' => ifunsetempty($_POST,'JOB_RANGEJAM',''),
			'JOB_JABATAN_ID' => ifunsetempty($_POST,'JOB_JABATAN_ID',''),
			'JOB_SALARY' => ifunsetempty($_POST,'JOB_SALARY',''),
			'JOB_KEBUTUHAN' => ifunsetempty($_POST,'JOB_KEBUTUHAN',''),
			'JABATAN_DESKRIPSI' => ifunsetempty($_POST,'JABATAN_DESKRIPSI',''),
			'JABATAN_TUGAS' => ifunsetempty($_POST,'JABATAN_TUGAS',''),
			'JOB_FASILITAS_MAKAN' => ifunsetempty($_POST,'JOB_FASILITAS_MAKAN',''),
			'JOB_FASILITAS_TT' => ifunsetempty($_POST,'JOB_FASILITAS_TT',''),
			'JOB_FASILITAS_TRANSPORTASI' => ifunsetempty($_POST,'JOB_FASILITAS_TRANSPORTASI',''),
			'JOB_FASILITAS_KESEHATAN' => ifunsetempty($_POST,'JOB_FASILITAS_KESEHATAN',''),
			'JOB_FASILITAS_LIBURAN' => ifunsetempty($_POST,'JOB_FASILITAS_LIBURAN',''),
			'JOB_FASILITAS_LEMBUR' => ifunsetempty($_POST,'JOB_FASILITAS_LEMBUR',''),
			'JOB_FASILITAS_KOMUNIKASI' => ifunsetempty($_POST,'JOB_FASILITAS_KOMUNIKASI',''),
			'JOB_START_DATE' => ifunsetempty($_POST,'JOB_START_DATE',''),
			'JOB_END_DATE' => ifunsetempty($_POST,'JOB_END_DATE',''),
			'JOB_FASILITAS_LAINYA' => ifunsetempty($_POST,'JOB_FASILITAS_LAINYA',''),
			'JABATAN_SERTIFIKAT' => ifunsetempty($_POST,'JABATAN_SERTIFIKAT',''),
			'JABATAN_NAMA' => ifunsetempty($_POST,'JABATAN_NAMA',''),
			'JABATAN_JURUSAN' => ifunsetempty($_POST,'JABATAN_JURUSAN',''),
			'JOB_SALARY_MAX' => ifunsetempty($_POST,'JOB_SALARY_MAX',''),
			'KONTRAK_ID' => ifunsetempty($_POST,'KONTRAK_ID',''),
			'JOB_JENJANG_KARIR' => ifunsetempty($_POST,'JOB_JENJANG_KARIR',''),
			'PPTKIS_ID' => $this->session->userdata('PPTKIS_ID'),
		);

		$start = ifunsetempty($_POST,'RANGE_START','');	
		$end = ifunsetempty($_POST,'RANGE_END','');	
		$params['JOB_RANGEUMUR'] =  $start . "," . $end ;
		if($params['JOB_ID']==""){ 
			
			$res = $this->M_job->add($params);
				if($res){
					$out = array(
						'success' => true,
						'msg' => 'Berhasil Menyimpan' 
					);
				}	
			$id = $this->db->insert_id();;
		}else{
			$id = $params['JOB_ID'];
			$res = $this->M_alat->deljob($id);
			$res = $this->M_lingkungan->deljob($id);
			$res = $this->M_job->upd($params);
			if($res){
					$out = array(
						'success' => true,
						'msg' => 'Update Berhasil Menyimpan' 
					);
			}	
		}

		$DATA_ALAT = json_decode($params['DATA_ALAT'],TRUE);
		//$DATA_KOMPETENSI = json_decode($params['DATA_KOMPETENSI'],TRUE);
		$DATA_LINGKUNGAN = json_decode($params['DATA_LINGKUNGAN'],TRUE);
		foreach ($DATA_ALAT as $key) {
			$key['JOB_ID'] = $id;
			$res = $this->M_alat->addjob($key);
		}
		foreach ($DATA_LINGKUNGAN as $key) {
			$key['JOB_ID'] = $id;
			$res = $this->M_lingkungan->addjob($key);
		}
		/* kompetensi dilewatkan
		foreach ($DATA_KOMPETENSI as $key) {
				$var =array();
				$var['KOMPETENSI_ID'] = $key; 
				$var['JABATAN_ID'] = $id;
				$res = $this->M_kompetensi->addkomjab($var);
		}
		*/
		echo json_encode($out);

	}

	function del(){
		$params = array(
			'JOB_ID' => ifunsetempty($_POST,'JOB_ID',''),
		);
		$res = $this->M_job->del($params);
		if($res){
					$out = array(
						'success' => true,
						'msg' => 'Berhasil Menghapus' 
					);
				}	
		echo json_encode($out);
	}

	function get_kompetensi(){
		$params = array(
			'JABATAN_ID' => ifunsetempty($_POST,'JABATAN_ID',''),
		);
		$res = $this->M_job->get_kompetensi($params);
		$out = array(
					'items' => $res->result(),
				);
		echo json_encode($out);

	}



}