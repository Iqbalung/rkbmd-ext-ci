<?php
class M_lembaga_sertifikasi_profesi extends CI_Model{

	function __construct()
	{
		parent::__construct();
		$this->load->database();
	}
	
	function get($params)
	{
		$where = "";
		if(isset($params['NAMA'])){
			$where .= "where PARTNER_LSP LIKE '%".$params['NAMA']."%' ";
		}
		$q = $this->db->query("SELECT * FROM PARTNER_LSP $where");
		return $q;	
	}
	

	function add($params)
	{
		$res = $this->db->insert('PARTNER_LSP', $params); 
		return $res;
	}
	function upd($params)
	{
		$this->db->where('ID',$params['ID']);
		unset($params['ID']);
		$res = $this->db->update("PARTNER_LSP", $params);
		return $res;
	}

	function del($params)
	{
		$res = $this->db->query("
			DELETE FROM PARTNER_LSP
			where ID = '".$params['ID']."'
		");
		return $res;
	}

}