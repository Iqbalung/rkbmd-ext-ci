<?php
class M_chart extends CI_Model{

	function __construct()
	{
		parent::__construct();
		$this->load->database();
	}
	
	function get_jk($params)
	{
		$this->db->select('JENIS_KELAMIN,COUNT(PENGGUNA.ID) as JML');
		$this->db->join('LAMARAN','PENGGUNA.ID=LAMARAN.PEKERJA_ID','left');
		if(isset($params['PPTKIS_ID'])){
			$this->db->where('PPTKIS_ID',$params['PPTKIS_ID']);
		}
		$this->db->group_by('JENIS_KELAMIN');
		$q = $this->db->get('PENGGUNA');
		return $q;	
	}

	function get_jabatan_populer($params)
	{
		$this->db->select('MASTER_JABATAN.JABATAN_ID,COUNT(MASTER_JABATAN.JABATAN_ID) as JML, MASTER_JABATAN.JABATAN_NAMA');
		$this->db->join('JOB','LAMARAN.JOB_ID=JOB.JOB_ID','left');
		$this->db->join('MASTER_JABATAN','JOB.JOB_JABATAN_ID=MASTER_JABATAN.JABATAN_ID');
		if(isset($params['PPTKIS_ID'])){
			$this->db->where('LAMARAN.PPTKIS_ID',$params['PPTKIS_ID']);
		}
		$this->db->group_by('MASTER_JABATAN.JABATAN_ID');
		$this->db->limit(5);
		$q = $this->db->get('LAMARAN');
		return $q;	
	}

	function get_total_on($params)
	{
		$this->db->select('MST.ID,MST.STATUS,COUNT(*) JML ');
		$this->db->join('LAMARAN L','MST.ID = LEFT(L.STATUS_ID,2)','left');
		if(isset($params['PPTKIS_ID'])){
			$this->db->where('PPTKIS_ID',$params['PPTKIS_ID']);
		}
		$this->db->where('LENGTH(MST.ID)=2');
		$this->db->where('MST.ID!=2');
		$this->db->group_by('MST.ID');
		$q = $this->db->get('MASTER_STATUS_LAMARAN MST');
		return $q;	
	}

	function get_total_tki($params)
	{
		$where = "";
		if(isset($params['PPTKIS_ID'])){
			$where = " `PPTKIS_ID` = '".$params['PPTKIS_ID']."'  AND  ";
		}
		
		$q = $this->db->query("SELECT 

			`MST`.`ID`, `MST`.`STATUS`, PENGGUNA.USERGROUP_ID, PENGGUNA.ID, L.PEKERJA_ID, COUNT(*) JML 
			FROM  `LAMARAN` `L`
    	LEFT JOIN  `MASTER_STATUS_LAMARAN` `MST`  ON `MST`.`ID` = LEFT(L.STATUS_ID,2)
    	LEFT JOIN PENGGUNA ON L.PEKERJA_ID = PENGGUNA.ID
    		WHERE $where ( LENGTH(MST.ID) = 2 AND PENGGUNA.USERGROUP_ID = '4' ) GROUP BY `MST`.`ID`
		");
		return $q;	
	}
	
}
