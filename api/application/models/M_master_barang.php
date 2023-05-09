<?php
class M_master_barang extends CI_Model{

	function __construct()
	{
		parent::__construct();
		$this->load->database();
	}
	
	function get($params)
	{
		$paramsWhere = array();
		$where = " 1 = 1";
		
		if(isset($params['BARANG_NAMA'])){
			$where .= "AND MASTER_BARANG LIKE ? ";
			$paramsWhere[] = "%".$params['BARANG_NAMA']."%";
		}

		if(isset($params['query'])){
			$where .= " AND (BARANG_NAMA LIKE ? OR BARANG_CODE LIKE ? OR BARANG_SATUAN LIKE ?) ";
			$paramsWhere[] = "%".$params['query']."%";
			$paramsWhere[] = "%".$params['query']."%";
			$paramsWhere[] = "%".$params['query']."%";
		}		
		
		$q = $this->db->query("SELECT * FROM MASTER_BARANG WHERE $where", $paramsWhere);
		return $q;	
	}
	

	function add($params)
	{
		$res = $this->db->insert('MASTER_BARANG', $params); 
		return $res;
	}
	function upd($params)
	{
		$this->db->where('BARANG_ID',$params['BARANG_ID']);
		unset($params['BARANG_ID']);
		$res = $this->db->update("MASTER_BARANG", $params);
		return $res;
	}

	function del($params)
	{
		$res = $this->db->query("
			DELETE FROM MASTER_BARANG
			where BARANG_ID = '".$params['BARANG_ID']."'
		");
		return $res;
	}

}