<?php
class M_tki extends CI_Model {

	function __construct()
	{
		parent::__construct();
		$this->load->database();
	}
	
	function addmedical($params)
	{
		unset($params['MEDICAL_FILE']);
		$res = $this->db->insert('LAMARAN_MEDICALPRA', $params);
		return $res; 
	}

	function updmedical($params)
	{
		$this->db->where('MEDICAL_ID',$params['MEDICAL_ID']);
		$res = $this->db->update("LAMARAN_MEDICALPRA", $params);
		return $res; 
	}

	function addbnp2tki($params)
	{
		$res = $this->db->insert('LAMARAN_BNP2TKI', $params);
		return $res; 
	}

	function updbnp2tki($params)
	{
		$this->db->where('BNP2TKI_ID',$params['BNP2TKI_ID']);
		$res = $this->db->update("LAMARAN_BNP2TKI", $params);
		return $res; 
	}

	function addasuransi($params)
	{
		unset($params['ASURANSI_FILE']);
		$res = $this->db->insert('LAMARAN_ASURANSI', $params);
		return $res; 
	}

	function updasuransi($params)
	{
		unset($params['ASURANSI_FILE']);
		unset($params['ASURANSI_ID']);
		$this->db->where('LAMARAN_ID',$params['LAMARAN_ID']);
		$res = $this->db->update("LAMARAN_ASURANSI", $params);
		return $res; 
	}

	function addvisa($params)
	{
		unset($params['VISA_FILE']);
		$res = $this->db->insert('LAMARAN_VISA', $params);
		return $res; 
	}

	function updvisa($params)
	{
		unset($params['VISA_FILE']);
		$this->db->where('LAMARAN_ID',$params['LAMARAN_ID']);
		$res = $this->db->update("LAMARAN_VISA", $params);
		return $res;
	}

	function addberangkat($params)
	{
		$res = $this->db->insert('LAMARAN_BERANGKAT', $params);
		return $res; 
	}

	function updberangkat($params)
	{
		$this->db->where('LAMARAN_ID',$params['LAMARAN_ID']);
		$res = $this->db->update("LAMARAN_BERANGKAT", $params);
		return $res;
	}

	function setjob($params)
	{
		$this->db->where('ID',$params['ID']);
		$res = $this->db->update("LAMARAN", $params);
		return $res;
	}

	function addlk($params)
	{	
		unset($params['LK_FILE']);
		$res = $this->db->insert('LAMARAN_LK', $params);
		return $res; 
	}

	function addblkln($params)
	{
		$res = $this->db->insert('RIW_PENDIDIKAN_INFORMAL', $params);
		return $res; 
	}

	function updblkln($params)
	{
		$this->db->where('INFORMAL_ID',$params['INFORMAL_ID']);
		unset($params['INFORMAL_ID']);
		$res = $this->db->update('RIW_PENDIDIKAN_INFORMAL', $params);
		return $res; 
	}

	function delblkln($params)
	{
		$this->db->where('INFORMAL_ID',$params['INFORMAL_ID']);
		$res = $this->db->delete('RIW_PENDIDIKAN_INFORMAL');
		return $res; 
	}

	function savepembekalan($params)
	{
		$res = $this->db->insert('LAMARAN_PEMBEKALAN', $params);
		return $res;
	}

	function updpembekalan($params)
	{
		$this->db->where('LAMARAN_ID',$params['LAMARAN_ID']);
		$this->db->where('PEMBEKALAN_ID',$params['PEMBEKALAN_ID']);
		$res = $this->db->update("LAMARAN_PEMBEKALAN", $params);
		return $res;
	}

	function updlk($params)
	{
		$this->db->where('LAMARAN_ID',$params['LAMARAN_ID']);
		unset($params['LK_FILE']);
		unset($params['LK_ID']);
		$res = $this->db->update("LAMARAN_LK", $params);
		return $res;
	}

	function getmedical($params)
	{
		$this->db->where('LAMARAN_ID',$params['LAMARAN_ID']);
		$this->db->where('MEDICAL_STATUS',$params['MEDICAL_STATUS']);
		$query = $this->db->get('LAMARAN_MEDICALPRA');
		return $query; 
	}

	function getkepulangan($params)
	{
		$this->db->where('LAMARAN_ID',$params['LAMARAN_ID']);
		$query = $this->db->get('LAMARAN_PURNA');
		return $query; 
	}

	function getriwmedical($params)
	{
		$this->db->select('*');
		$this->db->from('LAMARAN_MEDICALPRA');
		$this->db->where('PENGGUNA_ID', $params["PENGGUNA_ID"]);
		$this->db->where('MEDICAL_STATUS', $params["MEDICAL_STATUS"]);
		$this->db->join('PARTNER_SARKES', 'LAMARAN_MEDICALPRA.MEDICAL_SARANA = PARTNER_SARKES.ID', 'left');
		$query = $this->db->get(); 
		return $query; 
	}

	function getvisa($params)
	{
		$this->db->where('LAMARAN_ID',$params['LAMARAN_ID']);
		$query = $this->db->get('LAMARAN_VISA');
		return $query;
	}

	function getbnp2tki($params)
	{
		$this->db->where('LAMARAN_ID',$params['LAMARAN_ID']);
		$query = $this->db->get('LAMARAN_BNP2TKI');
		return $query;
	}

	// Code Riwayat

	function getriwvisa($params)
	{
		$this->db->where('PENGGUNA_ID',$params['PENGGUNA_ID']);
		$query = $this->db->get('LAMARAN_VISA');
		return $query;
	}

	function getriwbnptki($params)
	{
		$this->db->where('PENGGUNA_ID',$params['PENGGUNA_ID']);
		$query = $this->db->get('LAMARAN_BNP2TKI');
		return $query;
	}

	function getriwasuransi($params)
	{
		$this->db->select('*');
		$this->db->from('LAMARAN_ASURANSI');
		$this->db->where('PENGGUNA_ID', $params["PENGGUNA_ID"]);
		$this->db->join('PARTNER_ASURANSI', 'LAMARAN_ASURANSI.ASURANSI_LK = PARTNER_ASURANSI.ID', 'left');
		$query = $this->db->get(); 
		return $query;
	}

	function getriwberangkat($params)
	{
		$this->db->where('PENGGUNA_ID',$params['PENGGUNA_ID']);
		$query = $this->db->get('LAMARAN_BERANGKAT');
		return $query;
	}

	function getriwlk($params)
	{
		$this->db->select('*');
		$this->db->from('LAMARAN_LK');
		$this->db->where('PENGGUNA_ID', $params["PENGGUNA_ID"]);
		$this->db->join('PARTNER_LK', 'LAMARAN_LK.LK_ID = PARTNER_LK.ID', 'left');
		$query = $this->db->get(); 
		return $query;
	}

	function getriwpap($params)
	{
		$this->db->where('PENGGUNA_ID',$params['PENGGUNA_ID']);
		$query = $this->db->get('LAMARAN_PEMBEKALAN');
		return $query;
	}

	function getriwperjanjian($params)
	{
		$this->db->where('PENGGUNA_ID',$params['PENGGUNA_ID']);
		$query = $this->db->get('LAMARAN_PERJANJIAN');
		return $query;
	}

	function getriwkeberangkatan($params)
	{
		$this->db->where('PENGGUNA_ID',$params['PENGGUNA_ID']);
		$query = $this->db->get('LAMARAN_BERANGKAT');
		return $query;
	}

	function getasuransi($params)
	{
		$this->db->where('LAMARAN_ID',$params['LAMARAN_ID']);
		$this->db->where('ASURANSI_STATUS',$params['ASURANSI_STATUS']);
		$query = $this->db->get('LAMARAN_ASURANSI');
		return $query;
	}



	function getberangkat($params)
	{
		$this->db->where('LAMARAN_ID',$params['LAMARAN_ID']);
		$query = $this->db->get('LAMARAN_BERANGKAT');
		return $query;
	}

	function getriwayat($params)
	{
		$query = $this->db->query("SELECT * FROM ".$params['TABLENAME']."
			AS A LEFT JOIN JOB AS B ON A.JOB_ID = B.JOB_ID LEFT JOIN MASTER_JABATAN AS C ON B.JOB_JABATAN_ID = C.JABATAN_ID WHERE PENGGUNA_ID =  '".$params['PENGGUNA_ID']."'

			"); 
		return $query;
	}

	function getlk($params)
	{
		$this->db->where('LAMARAN_ID',$params['LAMARAN_ID']);
		$query = $this->db->get('LAMARAN_LK');
		return $query;
	}

	function getpap($params)
	{
		$this->db->where('LAMARAN_ID',$params['LAMARAN_ID']);
		$query = $this->db->get('LAMARAN_PEMBEKALAN');
		return $query;
	}

	function addperjanjian($params)
	{
		$res = $this->db->insert('LAMARAN_PERJANJIAN', $params);
		return $res;
	}

	function updperjanjian($params)
	{
		$this->db->where('PERJANJIAN_ID',$params['PERJANJIAN_ID']);
		$res = $this->db->update("LAMARAN_PERJANJIAN", $params);
		return $res; 
	}

	function getperjanjian($params)
	{
		$this->db->where('LAMARAN_ID',$params['LAMARAN_ID']);
		$query = $this->db->get('LAMARAN_PERJANJIAN');
		return $query;
	}

	function savesampai($params)
	{
		$res = $this->db->insert('LAMARAN_SAMPAI', $params);
		return $res; 
	}

	function savekasus($params)
	{
		$res = $this->db->insert('LAMARAN_KASUS', $params);
		return $res; 
	}

	function savepindah($params)
	{
		$res = $this->db->insert('LAMARAN_PINDAH', $params);
		return $res; 
	}

	function saveselesai($params)
	{
		$res = $this->db->insert('LAMARAN_SELESAI', $params);
		return $res; 
	}

	function savehilang($params)
	{
		$res = $this->db->insert('LAMARAN_HILANG', $params);
		return $res; 
	}

	function savepurna($params)
	{
		$res = $this->db->insert('LAMARAN_PURNA', $params);
		return $res; 
	}

	function updpurna($params)
	{	
		$this->db->where('PURNA_ID',$params['PURNA_ID']);
		$res = $this->db->update("LAMARAN_PURNA", $params);
		return $res; 
	}

	function updpenggunaaktif($params, $aktif)
	{	
		$this->db->where('PERJANJIAN_ID',$params['PERJANJIAN_ID']);
		$res = $this->db->update("LAMARAN_PERJANJIAN", $aktif);
		return $res; 
	}

	function updstatusidlamaran($params)
	{	
		$this->db->where('PEKERJA_ID',$params['PEKERJA_ID']);
		$this->db->where('JOB_ID',$params['JOB_ID']);
		$this->db->where('ID',$params['ID']);
		$res = $this->db->update("LAMARAN", $params);
		return $res; 
	}

	function updtkiid($params)
	{	
		$this->db->where('ID',$params['ID']);
		$res = $this->db->update("LAMARAN", $params);
		$this->db->where('ID_TKI',$params['ID_TKI']);
		$this->db->where('DOKUMEN_ID',$params['DOKUMEN_ID']);
		$this->db->where('ID_TKI_DATE',$params['ID_TKI_DATE']);
		return $res; 
	}





}