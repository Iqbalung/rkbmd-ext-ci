<?php
class M_Matauang extends CI_Model{

	function __construct()
	{
		parent::__construct();
		$this->load->database();
	}
	
	function get($params)
	{
		$where = "";
		if(isset($params['MATAUANG_ID'])){
			$where .= "where MASTER_MATAUANG  =  '".$params['MATAUANG_ID']."	' ";
		}
		$q = $this->db->query("SELECT * FROM MASTER_MATAUANG $where");
		return $q;	
	}

}