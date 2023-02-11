<?php
class M_chat extends CI_Model{

	function __construct()
	{
		parent::__construct();
		$this->load->database();
	}
	
	function gettitle($params)
	{
		$where = "";
		if(isset($params['HELP_JUDUL'])){
			$where = " where A.HELP_JUDUL like '%".$params['HELP_JUDUL']."%' ";
		}
		if($params['URG']>1){
			if(isset($params['HELP_JUDUL'])){
				$where = "AND A.HELP_JUDUL like '%".$params['HELP_JUDUL']."%' ";
			}
			$q = $this->db->query("


			
			SELECT * FROM HELP AS A LEFT JOIN PENGGUNA AS B
			ON A.PEKERJA_ID = B.ID WHERE A.PEKERJA_ID = '".$params['PEKERJA_ID']."'
			$where

			");
		}else{
			$q = $this->db->query("
			
			SELECT * FROM HELP AS A LEFT JOIN PENGGUNA AS B
			ON A.PEKERJA_ID = B.ID 
			$where

			");

		}
		
		return $q;		
	}

	function getchat($params)
	{

		$where = "";
		
		if($params['HELP_ID']!=""){
			$where = " WHERE CH.HELP_ID = '".$params['HELP_ID']."' ";
		}
		$q = $this->db->query("
			
			SELECT * FROM HELP_CHAT AS CH LEFT JOIN HELP AS H ON CH.HELP_ID = H.HELP_ID LEFT JOIN PENGGUNA AS P ON CH.PENGIRIM_ID = P.ID
			$where
			");
		return $q;		
	}

	function addchat($params){
		$res = $this->db->insert('HELP_CHAT', $params); 
		return $res;
	}

	function addtitlehelp($params){
		$res = $this->db->insert('HELP', $params); 
		return $res;
	}

}
