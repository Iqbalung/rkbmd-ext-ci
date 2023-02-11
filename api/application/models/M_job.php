<?php
class M_job extends CI_Model{

	function __construct()
	{
		parent::__construct();
		$this->load->database();
	}
	
	function get($params)
	{
		$where = "";
	
		if(isset($params['BIDANG_ID'])){
			$where .= "AND c.BIDANG_ID LIKE '".$params['BIDANG_ID']."%' ";
		}
		if(isset($params['PPTKIS_ID'])){
			$user = $this->user['PPTKIS_ID'];
			$where .= " AND a.PPTKIS_ID=".$user." ";
		}

		if(isset($params['JOB_START_DATE'])){
			$where .= "AND a.JOB_START_DATE >= '".$params['JOB_START_DATE']."' ";
		}

		if(isset($params['JOB_END_DATE'])){
			$where .= "AND a.JOB_END_DATE >= '".$params['JOB_END_DATE']."' ";
		}

		if(isset($params['JABATAN_SLUG'])){
			$where .= "where b.JABATAN_SLUG = '".$params['JABATAN_SLUG']."' ";
		}

		if(isset($params['KEYWORD'])){
			$where .= "AND ( b.JABATAN_NAMA LIKE '%".$params['KEYWORD']."%' 

						OR c.BIDANG_NAMA LIKE '%".$params['KEYWORD']."%'
						OR g.BARANG_NAMA LIKE '%".$params['KEYWORD']."%'
						OR d.OWNER_NAMA LIKE '%".$params['KEYWORD']."%'
					)
					";
		}
		

		$q = $this->db->query("				
				SELECT * FROM `JOB` AS a 
				LEFT JOIN MASTER_JABATAN AS b ON a.JOB_JABATAN_ID = b.JABATAN_ID 
				LEFT JOIN MASTER_BIDANG AS c ON b.BIDANG_ID = c.BIDANG_ID 
				LEFT JOIN MASTER_JOB_OWNER AS d ON a.OWNER_ID = d.OWNER_ID 
				LEFT JOIN MASTER_WILAYAH AS f ON d.WILAYAH_ID = f.WILAYAH_ID 
				LEFT JOIN MASTER_BARANG AS g ON a.BARANG_ID = g.BARANG_ID
				LEFT JOIN MASTER_TPENDIDIKAN AS h ON a.PENDIDIKAN_ID = h.PENDIDIKAN_ID
				WHERE DATE(a.JOB_END_DATE) >= DATE(NOW())
				$where
				;
				  ");
		return $q;	
	}
	
	function add($params)
	{
		unset($params['UPDATE']);
		unset($params['DATA_ALAT']);
		unset($params['DATA_LINGKUNGAN']);
		unset($params['DATA_ALAT']);
		unset($params['DATA_LINGKUNGAN']);
		unset($params['DATA_KOMPETENSI']);
		$res = $this->db->insert('JOB' , $params); 
		return $res;
	}

	function get_diterima($params)
	{
		$res = $this->db->query("SELECT COUNT(*) AS JUMLAH FROM LAMARAN AS a LEFT JOIN MASTER_STATUS_LAMARAN AS b ON a.STATUS_ID = b.ID WHERE a.JOB_ID = $params AND a.STATUS_ID = '3.'");
		return $res;
	}

	function get_tersisa($id,$end)
	{
		$res = $this->db->query("SELECT DATEDIFF('$end', CURDATE())
		 						 AS DATE FROM JOB where '$id'");
		return $res;
		
	}

	function upd($params)
	{

		unset($params['DATA_ALAT']);
		unset($params['DATA_LINGKUNGAN']);
		unset($params['DATA_KOMPETENSI']);

		$this->db->where('JOB_ID',$params['JOB_ID']);
		unset($params['UPDATE']);

		$res = $this->db->update("JOB", $params);
		return $res;
	}

	function del($params)
	{
		$res = $this->db->query("
			DELETE FROM MASTER_JABATAN
			where JABATAN_ID = '".$params['JABATAN_ID']."'
		");
		return $res;
	}

	function get_kompetensi($params)
	{
		$res = $this->db->query("

			SELECT b.KOMPETENSI_ID, KOMPETENSI_NAMA from KOMPETENSI_JABATAN AS a
			LEFT JOIN MASTER_KOMPETENSI AS b on a.KOMPETENSI_ID = b.KOMPETENSI_ID where a.JABATAN_ID = '".$params['JABATAN_ID']."'

		");
		return $res;
	}

}