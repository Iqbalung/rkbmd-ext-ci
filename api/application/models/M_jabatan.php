<?php
class M_jabatan extends CI_Model{

	function __construct()
	{
		parent::__construct();
		$this->load->database();
	}
	
	function get($params)
	{
		$where = "";
		if(isset($params['query'])){
			$where .= "where JABATAN_NAMA LIKE '%".$params['query']."%' ";
		}

		if(isset($params['BIDANG_ID'])){
			$where .= "where a.BIDANG_ID LIKE '".$params['BIDANG_ID']."%' ";
		}

		if(isset($params['JABATAN_SLUG'])){
			$where .= "where JABATAN_SLUG = '".$params['JABATAN_SLUG']."' ";
		}

		if(isset($params['JABATAN_ID'])){
			$where .= "where JABATAN_ID = '".$params['JABATAN_ID']."' ";
		}

		$q = $this->db->query("SELECT * FROM MASTER_JABATAN AS a INNER JOIN MASTER_BIDANG AS b ON a.BIDANG_ID = b.BIDANG_ID $where oRDER BY a.JABATAN_NAMA");
		return $q;	
	}
	
	function add($params)
	{
		unset($params['UPDATE']);
		unset($params['DATA_ALAT']);
		unset($params['DATA_KOMPETENSI']);
		unset($params['DATA_LINGKUNGAN']);
		$res = $this->db->insert('MASTER_JABATAN' , $params);
		return $res;
	}

	function upd($params)
	{
		unset($params['DATA_ALAT']);
		unset($params['DATA_KOMPETENSI']);
		unset($params['DATA_LINGKUNGAN']);
		unset($params['DATA_ALAT']);
		unset($params['UPDATE']);		
		$this->db->where('JABATAN_ID',$params['JABATAN_ID']);
		unset($params['UPDATE']);
		$res = $this->db->update("MASTER_JABATAN", $params);
		return $res;
	}

	function del($params)
	{
		$res = $this->db->query("
			DELETE FROM MASTER_JABATAN
			where JABATAN_ID = '".$params['JABATAN_ID']."'
		");
		return $res;
	}

}