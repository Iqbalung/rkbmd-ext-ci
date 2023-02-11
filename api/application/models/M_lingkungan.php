<?php
class M_lingkungan extends CI_Model{

	function __construct()
	{
		parent::__construct();
		$this->load->database();
	}
	
	function get($params)
	{
		$where = "";
		if(isset($params['JABATAN_ID'])){
			$where .= "where a.JABATAN_ID = '".$params['JABATAN_ID']."' ";
		}
		$q = $this->db->query("SELECT * FROM KLASIFIKASI_LINGKUNGAN AS a INNER JOIN KLASIFIKASI_LING_ITEM AS b $where");
		return $q;	
	}

	function get_job($params)
	{
		$where = "";
		if(isset($params['JOB_ID'])){

			$where .= "where JOB_ID = '".$params['JOB_ID']."' ";
			$q = $this->db->query("SELECT * FROM KLASIFIKASI_LINGKUNGAN_JOB   $where");
		
		}else{
			$where .= "where JABATAN_ID = '".$params['JABATAN_ID']."' ";
			$q = $this->db->query("SELECT * FROM KLASIFIKASI_LINGKUNGAN_JABATAN $where");

		}

		return $q;	
		
	}
	

	function add($params)
	{
		
		unset($params['id']);
		unset($params['KLASIFIKASI_ITEM_NAMA']);
		unset($params['KLASIFIKASI_ITEM_VALUE']);
		unset($params['KLASIFIKASI_ITEM_ID']);
		unset($params['KLASIFIKASI_LING_ID']);
		unset($params['KLASIFIKASI_ITEM_TYPE']);
		$res = $this->db->insert('KLASIFIKASI_LINGKUNGAN', $params); 
		return $res;
	}

	function addjob($params)
	{
		
		unset($params['id']);
		unset($params['JABATAN_ID']);
		unset($params['KLASIFIKASI_ITEM_NAMA']);
		unset($params['KLASIFIKASI_ITEM_VALUE']);
		unset($params['KLASIFIKASI_ITEM_ID']);
		unset($params['KLASIFIKASI_LING_ID']);
		unset($params['KLASIFIKASI_ITEM_TYPE']);
		$res = $this->db->insert('KLASIFIKASI_LINGKUNGAN_JOB', $params); 
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
			DELETE FROM KLASIFIKASI_LINGKUNGAN
			where JABATAN_ID  = $params
		");
		return $res;
	}

	function deljob($params)
	{
		$res = $this->db->query("
			DELETE FROM KLASIFIKASI_LINGKUNGAN_JOB
			where JOB_ID  = $params
		");
		return $res;
	}

}