<?php
class M_Tingkatpendidikan extends CI_Model{

	function __construct()
	{
		parent::__construct();
		$this->load->database();
	}
	
	function get($params)
	{
		$where = "";
		if(isset($params['PENDIDIKAN_ID'])){
			$where .= "where PENDIDIKAN_ID = ".$params['PENDIDIKAN_ID']."	";
		}

		
		$q = $this->db->query("SELECT * FROM MASTER_TPENDIDIKAN $where");
		return $q;	
	}

}