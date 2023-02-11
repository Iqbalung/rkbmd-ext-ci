<?php
class M_jobowner extends CI_Model{

	function __construct()
	{
		parent::__construct();
		$this->load->database();
	}
	
	function get($params)
	{
		$where = "";
		if(isset($params['OWNER_NAMA'])){
			$where .= "WHERE MASTER_JOB_OWNER LIKE '%".$params['OWNER_NAMA']."%' ";
		}

		if(isset($params['query'])){
			$where .= "WHERE OWNER_NAMA LIKE '%".$params['query']."%' ";
		}
		
		$q = $this->db->query("SELECT * FROM MASTER_JOB_OWNER AS a LEFT JOIN MASTER_WILAYAH as b on a.WILAYAH_ID = b.WILAYAH_ID $where");
		return $q;	
	}	

	function add($params)
	{
		unset($params['UPDATE']);

		$res = $this->db->insert('MASTER_JOB_OWNER', $params); 
		return $res;
	}
	function upd($params)
	{
		$this->db->where('OWNER_ID',$params['OWNER_ID']);
		unset($params['UPDATE']);
		$res = $this->db->update("MASTER_JOB_OWNER", $params);
		return $res;
	}

	function del($params)
	{
		$res = $this->db->query("
			DELETE FROM MASTER_JOB_OWNER
			where OWNER_ID = '".$params['OWNER_ID']."'
		");
		return $res;
	}

}