<?php
class M_pengguna extends CI_Model{

	function __construct()
	{
		parent::__construct();
		$this->load->database();
	}
	
	function get($params)
	{
		$where = "";
		if(isset($params['NAMA'])){
			$where .= "where NAMA LIKE '%".$params['NAMA']."%' ";
		}
		$q = $this->db->query("SELECT PENGGUNA.*,USERGROUP FROM PENGGUNA 
			LEFT JOIN USERGROUP ON PENGGUNA.USERGROUP_ID=USERGROUP.ID
			$where");
		return $q;	
	}
	

	function add($params = array())
	{		
		unset($params['ID']);
		$res = $this->db->insert('PENGGUNA', $params); 
		return $res;
	}
	function upd($params)
	{
		$this->db->where('ID',$params['ID']);
		unset($params['ID']);
		$res = $this->db->update("PENGGUNA", $params);
		return $res;
	}

	function del($params)
	{
		$res = $this->db->query("
			DELETE FROM PENGGUNA
			where ID = '".$params['ID']."'
		");
		return $res;
	}

}