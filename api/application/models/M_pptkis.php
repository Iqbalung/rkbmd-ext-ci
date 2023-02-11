<?php
class M_pptkis extends CI_Model{

	function __construct()
	{
		parent::__construct();
		$this->load->database();
	}
	
	function get($params)
	{
		$where = "";
		if(isset($params['PPTKIS_NAMA'])){
			$where .= "where MASTER_PPTKIS LIKE '%".$params['PPTKIS_NAMA']."%' ";
		}
		if(isset($params['PPTKIS_ID'])){
			$where .= "where PPTKIS_ID = '".$params['PPTKIS_ID']."' ";
		}
		$q = $this->db->query("SELECT * FROM MASTER_PPTKIS $where");
		return $q;	
	}

	function get_satker($params)
	{
		$res = $this->db->get_where('SATUAN_KERJA', $params); 
		return $res;
	}

	function get_tree_satker($params){
		
		$q = $this->db->query("SELECT * FROM SATUAN_KERJA where 
			SATKER_ID LIKE ?
			AND LENGTH(SATKER_ID) - LENGTH(REPLACE(SATKER_ID, '.', '')) = LENGTH(?) - LENGTH(REPLACE(?, '.', '')) + 1 AND SATKER_TIPE = 1
			",array($params['SATKER_ID'].'%',$params['SATKER_ID'],$params['SATKER_ID']));

		return $q;		
	}


	function get_orgsatker(){
		
		$q = $this->db->query("SELECT * FROM SATUAN_KERJA A LEFT JOIN PENGGUNA_PPTKIS B ON A.SATKER_ID = B.SATKER_ID WHERE A.PPTKIS_ID = '3'");

		return $q;		
	}


	function get_orgsatker_murni(){
		
		$q = $this->db->query("SELECT * FROM SATUAN_KERJA WHERE PPTKIS_ID = '3'");

		return $q;		
	}

	function add($params)
	{
		$res = $this->db->insert('MASTER_PPTKIS', $params); 
		return $res;
	}
	function upd($params)
	{
		$this->db->where('PPTKIS_ID',$params['PPTKIS_ID']);
		unset($params['PPTKIS_ID']);
		$res = $this->db->update("MASTER_PPTKIS", $params);
		return $res;
	}

	function del($params)
	{
		$res = $this->db->query("
			DELETE FROM MASTER_PPTKIS
			where PPTKIS_ID = '".$params['PPTKIS_ID']."'
		");
		return $res;
	}

	function get_satker_id($params)
	{
		$res = $this->db->query("
			SELECT
				IFNULL(
					MAX(
						CAST((REPLACE (
							SUBSTRING(SATKER_ID, LENGTH(?) + 1),
							'.',
							''
						)) AS INTEGER)
					),
					1
				)+1 AS NEW
			FROM
				SATUAN_KERJA
			WHERE
				SATKER_ID LIKE ?			
		",array($params['PPTKIS_ID'].'.',$params['PPTKIS_ID'].'.'."%"));
		return $res;
	}

	function add_satker($params)
	{
		$res = $this->db->insert('SATUAN_KERJA', $params); 
		return $res;
	}
	function upd_satker($params)
	{
		$this->db->where('SATKER_ID',$params['SATKER_ID']);
		unset($params['SATKER_ID']);
		$res = $this->db->update("SATUAN_KERJA", $params);
		return $res;
	}

	function del_satker($params)
	{
		$res = $this->db->query("
			DELETE FROM SATUAN_KERJA
			where SATKER_ID = '".$params['SATKER_ID']."'
		");
		return $res;
	}

	function get_pegawai($params)
	{
		/*if (isset($params['SATKER_ID'])) {			
			$this->db->like("SATKER_ID",$params['SATKER_ID'],"AFTER");
		}*/
		$res = $this->db->query("
			SELECT
				PGN_P.ID AS MAP_ID,
				PGN.*,	
				SATKER.SATKER_ID,	
				SATKER.SATKER_NAMA,
				USG.USERGROUP
			FROM
				`PENGGUNA_PPTKIS` PGN_P
			LEFT JOIN 
				PENGGUNA PGN ON PGN_P.PENGGUNA_ID = PGN.ID
			LEFT JOIN 
				SATUAN_KERJA SATKER ON SATKER.SATKER_ID = PGN_P.SATKER_ID
			LEFT JOIN 
				USERGROUP USG ON USG.ID = PGN.USERGROUP_ID
			WHERE 
				PGN_P.SATKER_ID LIKE ?  AND PGN.ACTIVE = 1
			",array($params['SATKER_ID']."%")); 
		return $res;
	}

	function add_pegawai($params)
	{
		$res = $this->db->insert('PENGGUNA_PPTKIS', $params); 
		return $res;
	}
	function upd_pegawai($params)
	{
		$this->db->where('PEGAWAI_ID',$params['PEGAWAI_ID']);
		unset($params['PEGAWAI_ID']);
		$res = $this->db->update("PEGAWAI", $params);
		return $res;
	}

	function del_pegawai($params)
	{
		$res = $this->db->query("
			DELETE FROM PENGGUNA_PPTKIS
			where ID = '".$params['ID']."'
		");
		return $res;
	}


	function get_fasilitas($params = array())
	{
		/*if (isset($params['SATKER_ID'])) {			
			$this->db->like("SATKER_ID",$params['SATKER_ID'],"AFTER");
		}*/
		if (count($params)) {			
			$this->db->where($params);
		}
		$this->db->select("
			FP.FASILITAS_ID,
			FP.FASILITAS_NAMA,
			FP.FASILITAS_DESKRIPSI,
			DK.DOKUMEN_ID,
			DK.DOKUMEN_NAMA AS FASILITAS_DOKUMEN,
			DK.DOKUMEN_NAMA_GENERATE
			");
		$this->db->join("DOKUMEN DK","DK.DOKUMEN_ID = FP.DOKUMEN_ID","LEFT");
		$res = $this->db->get("PPTKIS_FASILITAS FP");
		return $res;
	}

	function add_fasilitas($params)
	{
		$res = $this->db->insert('PPTKIS_FASILITAS', $params); 
		return $res;
	}
	function upd_fasilitas($params)
	{
		$this->db->where('FASILITAS_ID',$params['FASILITAS_ID']);
		unset($params['FASILITAS_ID']);
		$res = $this->db->update("PPTKIS_FASILITAS", $params);
		return $res;
	}

	function del_fasilitas($params)
	{
		$this->db->where('FASILITAS_ID',$params['FASILITAS_ID']);		
		$res = $this->db->delete("PPTKIS_FASILITAS");
		return $res;
	}

	function get_partner_bytype($table_name='')
	{
		$res = $this->db->get($table_name);
		return $res;
	}

	function get_partner($params = array())
	{
		$this->db->select("
			PP.*,
			CASE 
				WHEN PP.TIPE = 1 THEN
					PRB.NAMA
				WHEN PP.TIPE = 2 THEN
					PLK.NAMA
				WHEN PP.TIPE = 3 THEN
					PRL.NAMA
				WHEN PP.TIPE = 4 THEN
					PRA.NAMA
				WHEN PP.TIPE = 5 THEN
					PAS.NAMA
				ELSE
					''
			END AS NAMA");
		$this->db->join("PARTNER_BLKLN PRB","PRB.ID = PP.PARTNER_ID AND PP.TIPE = 1","LEFT");
		$this->db->join("PARTNER_LK PLK","PLK.ID = PP.PARTNER_ID AND PP.TIPE = 2","LEFT");
		$this->db->join("PARTNER_LSP PRL","PRL.ID = PP.PARTNER_ID AND PP.TIPE = 3","LEFT");
		$this->db->join("PARTNER_SARKES PRA","PRA.ID = PP.PARTNER_ID AND PP.TIPE = 4","LEFT");
		$this->db->join("PARTNER_ASURANSI PAS","PAS.ID = PP.PARTNER_ID AND PP.TIPE = 5","LEFT");
		$this->db->where('PPTKIS_ID',$params['PPTKIS_ID']);	
		$res = $this->db->get("PPTKIS_PARTNER PP");
		return $res;
	}

	function add_partner($params)
	{
		$res = $this->db->insert('PPTKIS_PARTNER', $params); 
		return $res;
	}
	function upd_partner($params)
	{
		$this->db->where('PPTKIS_PARTNER_ID',$params['PPTKIS_PARTNER_ID']);
		unset($params['PPTKIS_PARTNER_ID']);
		$res = $this->db->update("PPTKIS_PARTNER", $params);
		return $res;
	}

	function del_partner($params)
	{
		$this->db->where('PPTKIS_PARTNER_ID',$params['PPTKIS_PARTNER_ID']);		
		$res = $this->db->delete("PPTKIS_PARTNER");
		return $res;
	}

}