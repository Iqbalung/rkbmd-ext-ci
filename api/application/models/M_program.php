<?php
class M_program extends CI_Model{

	function __construct()
	{
		parent::__construct();
		$this->load->database();
	}
	
	function get($params)
	{
		$where = "";
		if(isset($params['PROGRAM_NAMA'])){
			$where .= "WHERE a.PROGRAM LIKE '%".$params['PROGRAM_NAMA']."%' ";
		}
		
		if(isset($params['BIDANG_ID'])){
			$where .= "WHERE b.BIDANG_ID like '".$params['BIDANG_ID']."%' ";
		}

		if(isset($params['TAHUN']) && !isset($params['BIDANG_ID'])){
			$where .= "WHERE a.TAHUN = '".$params['TAHUN']."' ";
		}

		if(isset($params['TAHUN']) && isset($params['BIDANG'])){
			$where .= $where. "and a.TAHUN = '".$params['TAHUN']."' ";
		}
		

		$q = $this->db->query("SELECT * FROM MASTER_PROGRAM AS a LEFT JOIN MASTER_BIDANG AS b ON a.BIDANG_ID = b.BIDANG_ID $where ");
		return $q;
	}
	
	function add($params)
	{
		unset($params['UPDATE']);
		$res = $this->db->insert('MASTER_PROGRAM' , $params); 
		return $res;
	}

	function addkomjab($params){
		
		$res = $this->db->insert('PROGRAM_JABATAN',$params); 
		return $res;
	}

	function upd($params)
	{
		$this->db->where('PROGRAM_ID',$params['PROGRAM_ID']);
		unset($params['UPDATE']);
		$res = $this->db->update("MASTER_PROGRAM", $params);
		return $res;
	}

	function del($params)
	{
		$res = $this->db->query("
			DELETE FROM MASTER_PROGRAM
			where PROGRAM_ID = '".$params['PROGRAM_ID']."'
		");
		return $res;
	}
	

}