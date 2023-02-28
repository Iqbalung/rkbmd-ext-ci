<?php
class M_bidang extends CI_Model{

	function __construct()
	{
		parent::__construct();
		$this->load->database();
	}
	
	function get($params)
	{
		$q = $this->db->query("SELECT * FROM MASTER_BIDANG where 
			BIDANG_ID LIKE ?
			AND LENGTH(BIDANG_ID) - LENGTH(REPLACE(BIDANG_ID, '.', '')) = LENGTH(?) - LENGTH(REPLACE(?, '.', '')) + 1
			",array($params['BIDANG_ID'].'%',$params['BIDANG_ID'],$params['BIDANG_ID']));
		return $q;	
	}

	function get_id($params){
		$res = $this->db->query("
		SELECT
		IFNULL( MAX( CAST( REPLACE ( SUBSTRING( BIDANG_ID, LENGTH( ? ) + 1 ), '.', '' ) AS INT ) ), 1 )+ 1 AS NEW 
	FROM
		MASTER_BIDANG 
	WHERE
		BIDANG_ID LIKE ? 
		AND LENGTH( BIDANG_ID ) - LENGTH(
		REPLACE ( BIDANG_ID, '.', '' )) = 1
		",array($params['BIDANG_ID'],$params['BIDANG_ID']."%"));
		return $res;
		return $res;
	}

	function add($params)
	{
		$res = $this->db->insert('MASTER_BIDANG', $params);
		return $res;
	}

	function upd($params)
	{
		$res = $this->db->query("
			UPDATE MASTER_BIDANG 
			SET BIDANG_NAMA = '".$params['BIDANG_NAMA']."'
			where BIDANG_ID = '".$params['BIDANG_ID']."'
		");
		return $res;
	}

	function del($params)
	{
		$res = $this->db->query("
			DELETE FROM MASTER_BIDANG
			where BIDANG_ID  = '".$params['BIDANG_ID']."'
		");
		return $res;
	}

	function get_root()
	{
		$this->db->where("LENGTH( BIDANG_ID ) - LENGTH(REPLACE ( BIDANG_ID, '.', '' )) = ", "1");
		return $this->db->get("MASTER_BIDANG");
	}

}