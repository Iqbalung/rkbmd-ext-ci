<?php
class M_kompetensi extends CI_Model{

	function __construct()
	{
		parent::__construct();
		$this->load->database();
	}
	
	function get($params)
	{
		$where = "";
		if(isset($params['KOMPETENSI_NAMA'])){
			$where .= "WHERE a.KOMPETENSI LIKE '%".$params['KOMPETENSI_NAMA']."%' ";
		}

		if(isset($params['JABATAN_ID'])){
			$where .= "WHERE c.JABATAN_ID = '".$params['JABATAN_ID']."' ";
		}

		if(isset($params['BIDANG_ID'])){
			$where .= "WHERE b.BIDANG_ID = '".$params['BIDANG_ID']."' ";
		}

		if(isset($params['KOMPETENSI_SLUG'])){
			$where .= "WHERE a.KOMPETENSI_SLUG = '".$params['KOMPETENSI_SLUG']."' ";
		}

		$q = $this->db->query("SELECT * FROM MASTER_KOMPETENSI AS a LEFT JOIN MASTER_BIDANG AS b ON a.BIDANG_ID = b.BIDANG_ID LEFT JOIN KOMPETENSI_JABATAN AS c on a.KOMPETENSI_ID = c.KOMPETENSI_ID  $where ");
		return $q;
	}
	
	function add($params)
	{
		unset($params['UPDATE']);
		$res = $this->db->insert('MASTER_KOMPETENSI' , $params); 
		return $res;
	}

	function addkomjab($params){
		
		$res = $this->db->insert('KOMPETENSI_JABATAN',$params); 
		return $res;
	}

	function upd($params)
	{
		$this->db->where('KOMPETENSI_ID',$params['KOMPETENSI_ID']);
		unset($params['UPDATE']);
		$res = $this->db->update("MASTER_KOMPETENSI", $params);
		return $res;
	}

	function del($params)
	{
		$res = $this->db->query("
			DELETE FROM MASTER_KOMPETENSI
			where KOMPETENSI_ID = '".$params['KOMPETENSI_ID']."'
		");
		return $res;
	}

}