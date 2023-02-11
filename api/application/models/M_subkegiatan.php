<?php
class M_subkegiatan extends CI_Model{

	function __construct()
	{
		parent::__construct();
		$this->load->database();
	}
	
	function get($params)
	{
		$where = "";
		if(isset($params['SUB_KEGIATAN_NAMA'])){
			$where .= "WHERE SUB_KEGIATAN_NAMA LIKE '%".$params['SUB_KEGIATAN_NAMA']."%' ";
		}

		
		if(isset($params['KEGIATAN_ID'])){
			$where .= "WHERE KEGIATAN_ID = '".$params['KEGIATAN_ID']."' ";
		}

		$q = $this->db->query("SELECT * FROM MASTER_SUB_KEGIATAN $where ");
		return $q;
	}
	
	function add($params)
	{
		unset($params['UPDATE']);
		$res = $this->db->insert('MASTER_SUB_KEGIATAN' , $params); 
		return $res;
	}

	function addkomjab($params){
		
		$res = $this->db->insert('KEGIATAN_JABATAN',$params); 
		return $res;
	}

	function upd($params)
	{
		$this->db->where('SUB_KEGIATAN_ID',$params['SUB_KEGIATAN_ID']);
		unset($params['UPDATE']);
		$res = $this->db->update("MASTER_SUB_KEGIATAN", $params);
		return $res;
	}

	function del($params)
	{
		$res = $this->db->query("
			DELETE FROM MASTER_SUB_KEGIATAN
			where SUB_KEGIATAN_ID = '".$params['SUB_KEGIATAN_ID']."'
		");
		return $res;
	}

}