<?php
class M_pekerja extends CI_Model{

	function __construct()
	{
		parent::__construct();
		$this->load->database();
	}
	
	function get($params)
	{
		$where = "";
		if(isset($params['NAMA'])){
			$where .= "AND NAMA LIKE '%".$params['NAMA']."%' ";
		}
		$q = $this->db->query("SELECT PENGGUNA.*,USERGROUP FROM PENGGUNA 
			LEFT JOIN USERGROUP ON PENGGUNA.USERGROUP_ID=USERGROUP.ID
			WHERE USERGROUP_ID=4
			$where");
		return $q;	
	}

	function get_by_id($params)
	{

		$q = $this->db->query("SELECT PENGGUNA.*,USERGROUP FROM PENGGUNA 
			LEFT JOIN USERGROUP ON PENGGUNA.USERGROUP_ID=USERGROUP.ID
			WHERE USERGROUP_ID=4
			AND PENGGUNA.ID=?
			",array($params['ID']));
		return $q;	
	}

}