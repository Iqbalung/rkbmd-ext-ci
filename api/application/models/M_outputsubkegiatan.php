<?php
class M_outputsubkegiatan extends CI_Model{

	function __construct()
	{
		parent::__construct();
		$this->load->database();
	}
	
	function get($params)
	{
		$where = "WHERE 1 = 1 ";
		if(isset($params['OUTPUT_NAMA'])){
			$where .= " AND OUTPUT_NAMA LIKE '%".$params['OUTPUT_NAMA']."%' ";
		}

		if(isset($params['SUB_KEGIATAN_ID'])){
			$where .= " AND SUB_KEGIATAN_ID = '".$params['SUB_KEGIATAN_ID']."' ";
		}
		
		if(isset($params['KEGIATAN_ID'])){
			$where .= " AND KEGIATAN_ID = '".$params['KEGIATAN_ID']."' ";
		}

		$q = $this->db->query("SELECT * FROM MASTER_SUB_KEGIATAN_OUTPUT $where ");
		return $q;
	}
	
	function add($params)
	{
		unset($params['UPDATE']);
		$res = $this->db->insert('MASTER_SUB_KEGIATAN_OUTPUT' , $params); 
		return $res;
	}

	function upd($params)
	{
		$this->db->where('OUTPUT_ID',$params['OUTPUT_ID']);
		unset($params['UPDATE']);
		$res = $this->db->update("MASTER_SUB_KEGIATAN_OUTPUT", $params);
		return $res;
	}

	function del($params)
	{
		$res = $this->db->query("
			DELETE FROM MASTER_SUB_KEGIATAN_OUTPUT
			where OUTPUT_ID = '".$params['OUTPUT_ID']."'
		");
		return $res;
	}

}