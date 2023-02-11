<?php
class M_sarana_kesehatan extends CI_Model{

	function __construct()
	{
		parent::__construct();
		$this->load->database();
	}
	
	function get($params)
	{
		$where = "";
		if(isset($params['NAMA'])){
			$where .= "where PARTNER_SARKES LIKE '%".$params['NAMA']."%' ";
		}
		$q = $this->db->query("SELECT * FROM PARTNER_SARKES $where");
		return $q;	
	}
	

	function add($params)
	{
		$res = $this->db->insert('PARTNER_SARKES', $params); 
		return $res;
	}
	function upd($params)
	{
		$this->db->where('ID',$params['ID']);
		unset($params['ID']);
		$res = $this->db->update("PARTNER_SARKES", $params);
		return $res;
	}

	function del($params)
	{
		$res = $this->db->query("
			DELETE FROM PARTNER_SARKES
			where ID = '".$params['ID']."'
		");
		return $res;
	}

}