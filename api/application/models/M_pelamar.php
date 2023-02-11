	<?php
class M_pelamar extends CI_Model{

	function __construct()
	{
		parent::__construct();
		$this->load->database();
	}
	
	function get($params)
	{
		$where = "";
	
		if(isset($params['JOB_ID'])){
			$where .= "where a.JOB_ID = '".$params['JOB_ID']."%' ";
		}
		if(isset($params['KEYWORD'])){
			$where .= "where b.NAMA LIKE '%".$params['KEYWORD']."%' 
						OR b.ID LIKE '".$params['KEYWORD']."%' 			"
			;
		}
		$q = $this->db->query("
				SELECT
					*,
					MSL.`STATUS`
				FROM
					`LAMARAN` AS a
				LEFT JOIN PENGGUNA AS b ON a.PEKERJA_ID = b.ID
				LEFT JOIN MASTER_STATUS_LAMARAN AS MSL ON MSL.ID = a.STATUS_ID 
 			 $where GROUP BY b.ID");
		return $q;	
	}

	function getpelamar($params){
		$q = $this->db->query("
				SELECT * FROM `PENGGUNA` AS a 
				LEFT JOIN PENGGUNA AS b ON a.PEKERJA_ID = b.ID 
			 $where");
		return $q;	
	}

	function getsyarat($params){
		$q = $this->db->query("
			SELECT  (
			        SELECT COUNT(*)
			        FROM   LAMARAN_MEDICALPRA WHERE LAMARAN_ID ='$params' AND MEDICAL_STATUS = '1'
			        ) AS MEDICALPRA,
			        (
			        SELECT COUNT(*)
			        FROM   LAMARAN_MEDICALPRA WHERE LAMARAN_ID ='$params' AND  MEDICAL_STATUS = '2'
			        ) AS MEDICALFULL,
			        (
			        SELECT COUNT(*)
			        FROM   LAMARAN_ASURANSI WHERE LAMARAN_ID ='$params' AND ASURANSI_STATUS = '1'
			        ) AS ASURANSI,
			        (
			        SELECT COUNT(*)
			        FROM   LAMARAN_ASURANSI WHERE LAMARAN_ID ='$params' AND ASURANSI_STATUS = '2'
			        ) AS ASURANSI_PENEMPATAN,
			        (
			        SELECT PENDIDIKAN_NAMA FROM VW_PENDIDIKAN_TERKAHIR WHERE ID_PEKERJA = '$params' LIMIT 1

			        ) AS PENDIDIKAN_NAMA,
			        (
			        SELECT POSISI FROM VW_PEKERJAAN_TERKAHIR WHERE PEKERJA_ID = '$params' LIMIT 1
			        ) AS POSISI
			FROM    dual 
			");
		return $q;
	}

	function get_dokumen($params = array())
	{
		$this->db->select("
			P_DOK.*,
			DOK.*,
			MKD.KLASIFIKASI_NAMA
			");
		if (isset($params['PEKERJA_ID'])) {
			$this->db->where("P_DOK.PEKERJA_ID",$params["PEKERJA_ID"]);
		}
		if (isset($params['KLASIFIKASI_ID'])) {			
			$this->db->where_in("DOK.KLASIFIKASI_ID",$params["KLASIFIKASI_ID"]);
		}
		$this->db->join("DOKUMEN DOK","DOK.DOKUMEN_ID = P_DOK.DOKUMEN_ID","LEFT");
		$this->db->join("MASTER_KLASIFIKASI_DOK MKD","MKD.KLASIFIKASI_ID = DOK.KLASIFIKASI_ID","LEFT");
		$res = $this->db->get("PENGGUNA_DOKUMEN P_DOK");
		return $res;
	}
}