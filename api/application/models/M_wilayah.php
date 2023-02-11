<?php
class M_wilayah extends CI_Model{

	function __construct()
	{
		parent::__construct();
		$this->load->database();
	}

	// this function batch
	/*function get($params)
	{
		$where = "";
		if(isset($params['WILAYAH_ID'])){
			$length = strlen($params['WILAYAH_ID'])+2;
			$where .= "where WILAYAH_ID LIKE '".$params['WILAYAH_ID']."%' AND CHAR_LENGTH(WILAYAH_ID) = $length  ";
		}else{
			$where ="where LENGTH(WILAYAH_ID) >= 1";
		}
		$q = $this->db->query("SELECT * FROM MASTER_WILAYAH $where");
		return $q;	
	}*/

	function get($params){
		
		$q = $this->db->query("SELECT * FROM MASTER_WILAYAH where 
			WILAYAH_ID LIKE ?
			AND LENGTH(WILAYAH_ID) - LENGTH(REPLACE(WILAYAH_ID, '.', '')) = LENGTH(?) - LENGTH(REPLACE(?, '.', '')) + 1
			",array($params['WILAYAH_ID'].'%',$params['WILAYAH_ID'],$params['WILAYAH_ID']));

		return $q;		
	}
	
	function get_id($params)
	{
		$res = $this->db->query("
			SELECT
				IFNULL(
					MAX(
						REPLACE (
							SUBSTRING(WILAYAH_ID, LENGTH(?) + 1),
							'.',
							''
						)
					),
					1
				)+1 AS NEW
			FROM
				MASTER_WILAYAH
			WHERE
				WILAYAH_ID LIKE ?
			AND LENGTH(REPLACE(WILAYAH_ID, '.', '')) - LENGTH(REPLACE(?, '.', '')) = 1 
		",array($params['WILAYAH_ID'],$params['WILAYAH_ID']."%",$params['WILAYAH_ID']));
		return $res;
	}

	function add($params)
	{
		unset($params['UPDATE']);
		$res = $this->db->insert('MASTER_WILAYAH', $params); 
		return $res;
	}

	function upd($params)
	{
		$res = $this->db->query("
			UPDATE MASTER_WILAYAH 
			SET WILAYAH_NAMA = '".$params['WILAYAH_NAMA']."'
			where WILAYAH_ID = '".$params['WILAYAH_ID']."'
		");
		return $res;
	}

	function del($params)
	{
		$res = $this->db->query("
			DELETE FROM MASTER_WILAYAH
			where WILAYAH_ID = '".$params['WILAYAH_ID']."'
		");
		return $res;
	}

}