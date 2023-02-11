<?php
class M_kegiatan extends CI_Model{

	function __construct()
	{
		parent::__construct();
		$this->load->database();
	}
	
	function get($params)
	{
		$where = "";
		if(isset($params['KEGIATAN_NAMA'])){
			$where .= "WHERE a.KEGIATAN LIKE '%".$params['KEGIATAN_NAMA']."%' ";
		}

		if(isset($params['JABATAN_ID'])){
			$where .= "WHERE c.JABATAN_ID = '".$params['JABATAN_ID']."' ";
		}

		if(isset($params['BIDANG_ID'])){
			$where .= "WHERE b.BIDANG_ID like '".$params['BIDANG_ID']."%' ";
		}

		if(isset($params['KEGIATAN_SLUG'])){
			$where .= "WHERE a.KEGIATAN_SLUG = '".$params['KEGIATAN_SLUG']."' ";
		}

		$q = $this->db->query("SELECT * FROM MASTER_KEGIATAN AS a LEFT JOIN MASTER_BIDANG AS b ON a.BIDANG_ID = b.BIDANG_ID $where ");
		return $q;
	}
	
	function add($params)
	{
		unset($params['UPDATE']);
		$res = $this->db->insert('MASTER_KEGIATAN' , $params); 
		return $res;
	}

	function addkomjab($params){
		
		$res = $this->db->insert('KEGIATAN_JABATAN',$params); 
		return $res;
	}

	function upd($params)
	{
		$this->db->where('KEGIATAN_ID',$params['KEGIATAN_ID']);
		unset($params['UPDATE']);
		$res = $this->db->update("MASTER_KEGIATAN", $params);
		return $res;
	}

	function del($params)
	{
		$res = $this->db->query("
			DELETE FROM MASTER_KEGIATAN
			where KEGIATAN_ID = '".$params['KEGIATAN_ID']."'
		");
		return $res;
	}

}