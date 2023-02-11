<?php 

class M_publik_pptkis extends CI_Model
{
	
	function __construct()
	{
		parent::__construct();
		$this->load->database();
	}


	function get_pptkiss($params)
	{
		$where = "";
		if(isset($params['PPTKIS_NAMA'])){
			$where .= "where PPTKIS_NAMA LIKE '%".$params['PPTKIS_NAMA']."%' ";
		}
		
		$q = $this->db->query("SELECT * FROM MASTER_PPTKIS $where")->result();
		return $q;	
	}

	function get_detail($params)
	{
		$q = $this->db->query("SELECT * FROM MASTER_PPTKIS where PPTKIS_ID = $params")->result();
		return $q;	
	}

	function get_fasilitas($params)
	{
		$q = $this->db->query("SELECT * FROM PPTKIS_FASILITAS as A LEFT JOIN DOKUMEN AS B ON A.DOKUMEN_ID = B.DOKUMEN_ID where PPTKIS_ID = $params")->result();
		return $q;	
	}

	function get_satuan($params)
	{
		$q = $this->db->query("SELECT * FROM MASTER_PPTKIS as A LEFT JOIN SATUAN_KERJA AS B ON A.PPTKIS_ID = B.PPTKIS_ID where A.PPTKIS_ID = $params")->result();
		return $q;	
	}

	 function lookup_wilayah($keyword){ 
        $this->db->select('*')->from('MASTER_WILAYAH'); 
        $this->db->like('WILAYAH_NAMA',$keyword,'after'); 
        $query = $this->db->get();     
        return $query->result(); 
    } 


     function lookup($keyword){ 
        $this->db->select('*')->from('MASTER_PPTKIS'); 
        $this->db->like('PPTKIS_NAMA',$keyword,'after'); 
        $query = $this->db->get();     
        return $query->result(); 
    } 






	

	

}