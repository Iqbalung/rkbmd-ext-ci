<?php
class M_bidang extends CI_Model{

	function __construct()
	{
		parent::__construct();
		$this->load->database();
	}
	
	function get($params)
	{
		if(!$params['from_session']){
			$q = $this->db->query("SELECT * FROM MASTER_BIDANG where 
				BIDANG_ID LIKE ?
				AND LENGTH(BIDANG_ID) - LENGTH(REPLACE(BIDANG_ID, '.', '')) = LENGTH(?) - LENGTH(REPLACE(?, '.', '')) + 1 ORDER BY URUTAN
				",array($params['BIDANG_ID'].'%',$params['BIDANG_ID'],$params['BIDANG_ID']));
		}else{
			$q = $this->db->query("SELECT * FROM MASTER_BIDANG where 
				BIDANG_ID LIKE ? ORDER BY URUTAN
				",array($params['BIDANG_ID'].'%'));
			
		}
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
		$params["ROWID"] = uuid();
		$res = $this->db->insert('MASTER_BIDANG', $params);
		return $res;
	}

	function upd($params)
	{
		$res = $this->db->query("
			UPDATE MASTER_BIDANG 
			SET BIDANG_NAMA = '".$params['BIDANG_NAMA']."', 
			BIDANG_PEJABAT = '".$params['BIDANG_PEJABAT']."',
			BIDANG_PEJABAT_NRP = '".$params['BIDANG_PEJABAT_NRP']."',
			BIDANG_ALAMAT = '".$params['BIDANG_ALAMAT']."'
			
			where ROWID = '".$params['ROWID']."'
		");
		return $res;
	}

	function del($params)
	{
		$res = $this->db->query("
			DELETE FROM MASTER_BIDANG
			where ROWID  = '".$params['ROWID']."'
		");
		return $res;
	}

	function get_root()
	{
		$this->db->where("LENGTH( BIDANG_ID ) - LENGTH(REPLACE ( BIDANG_ID, '.', '' )) = ", "1");
		$this->db->order_by("URUTAN ASC");
		return $this->db
		->get("MASTER_BIDANG");

	}

	function get_pejabat($id)
	{
		$this->db->where("BIDANG_ID", $id);
		$res = $this->db->get('MASTER_BIDANG');
		$out = array(
			"OPD" => "",
			"NAMA" => "",
			"NIP" => "",		
		);
		if ($res->num_rows() > 0) {
			$out = array(
				"OPD" => $res->row()->BIDANG_NAMA,
				"NAMA" => $res->row()->BIDANG_PEJABAT,
				"NIP" => $res->row()->BIDANG_PEJABAT_NRP,
			);	
		}
		return $out;
	}

}