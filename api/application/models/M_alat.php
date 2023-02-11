<?php
class M_alat extends CI_Model{

	function __construct()
	{
		parent::__construct();
		$this->load->database();
	}
	
	function get($params)
	{
		$where = "";
		if(isset($params['JABATAN_ID'])){
			$where .= "where JABATAN_ID = '".$params['JABATAN_ID']."' ";
		}
		$q = $this->db->query("SELECT * FROM ALAT_KERJA $where");
		return $q;	
	}

	function get_job($params)
	{
		$where = "";
		if(isset($params['JOB_ID'])){
			$where .= "where JOB_ID = '".$params['JOB_ID']."' ";
			$q = $this->db->query("SELECT * FROM ALAT_KERJA_JOB $where");
		}

		if(isset($params['JABATAN_ID'])){
			$where .= "where JABATAN_ID = '".$params['JABATAN_ID']."' ";
			$q = $this->db->query("SELECT * FROM ALAT_KERJA $where");
		}
		return $q;	
	}
	

	function add($params)
	{
		
		unset($params['id']);
		unset($params['DATA']);
		$res = $this->db->insert('ALAT_KERJA', $params); 
		return $res;
	}

	function addjob($params)
	{
		
		unset($params['id']);
		unset($params['IS_EDIT']);
		unset($params['ALAT_KERJA_ID']);
		unset($params['JABATAN_ID']);
		$res = $this->db->insert('ALAT_KERJA_JOB', $params); 
		return $res;
	}

	function upd($params)
	{
		unset($params['id']);
		$this->db->where('ALAT_KERJA_ID',$params['ALAT_KERJA_ID']);
		$res = $this->db->update("ALAT_KERJA", $params);
		return $res;
	}

	function del($params)
	{
		$res = $this->db->query("
			DELETE FROM ALAT_KERJA
			where JABATAN_ID = $params
		");
		return $res;
	}

	function deljob($params)
	{
		$res = $this->db->query("
			DELETE FROM ALAT_KERJA_JOB
			where JOB_ID = $params
		");
		return $res;
	}

}