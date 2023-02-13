<?php
class M_master_barang extends CI_Model{

	function __construct()
	{
		parent::__construct();
		$this->load->database();
	}
	
	function get($params)
	{
		$where = "";
		if(isset($params['BARANG_NAMA'])){
			$where .= "where MASTER_BARANG LIKE '%".$params['BARANG_NAMA']."%' ";
		}

		if(isset($params['query'])){
			$where .= "where  BARANG_NAMA LIKE '%".$params['query']."%' ";
		}		$q = $this->db->query("SELECT * FROM MASTER_BARANG $where");
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