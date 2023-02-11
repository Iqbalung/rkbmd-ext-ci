<?php
class M_lamaran extends CI_Model{

	function __construct()
	{
		parent::__construct();
		$this->load->database();
	}
	
	function get($params)
	{
		$this->db->group_start();
		$this->db->or_like('NAMA_PEKERJA',$params['TEXT_CARI']);
		$this->db->or_like('JABATAN_NAMA',$params['TEXT_CARI']);
		$this->db->or_like('BARANG_NAMA',$params['TEXT_CARI']);
		$this->db->or_like('OWNER_NAMA',$params['TEXT_CARI']);
		$this->db->group_end();
		$this->db->like('STATUS_ID',$params['STATUS'],'after');
		if (isset($params["start"]) && isset($params["limit"])) {			
			$this->db->limit($params['limit'],$params["start"]);						
		}

		if (isset($params["JOB_JABATAN_ID"]) && !empty($params["JOB_JABATAN_ID"])) {			
			$this->db->where("JABATAN_ID",$params['JOB_JABATAN_ID']);						
		}

		if(isset($params['SATKER_ID'])){
			$this->db->like('SATKER_ID',$params['SATKER_ID'],'after');
		}

		if (!empty($params["REKRUITER_ID"])) {
			$this->db->where("REKRUITER_ID",$params["REKRUITER_ID"]);
		}

		if (!empty($params["PPTKIS_ID"])) {
			$this->db->where("PPTKIS_ID",$params["PPTKIS_ID"]);							
		}
		
		if(isset($params["PURNA"])) {
			if($params["PURNA"]==1) {
				$this->db->where("PURNA IS NOT NULL", null, false);							
			}else if($params["PURNA"]==2){
				$this->db->where("PURNA IS NULL", null, true);			
			}						
		}
		
		$this->db->group_by('PEKERJA_ID');
		if($params['STATUS']==3){
			$this->db->order_by("TERSISA", "asc");
		}else if($params['STATUS']=="2." || $params['STATUS']=="1."  ){
			$this->db->order_by("DATE_CREATED", "desc");
		}
		$q = $this->db->get("VW_TKI");
		return $q;
	}


	function getsyarat($params){
		$q = $this->db->query("
			SELECT  (
			        SELECT COUNT(*)
			        FROM   RIW_PENDIDIKAN_INFORMAL  WHERE LAMARAN_ID = '$params'
			        ) AS BLKLN,
			        (
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

}