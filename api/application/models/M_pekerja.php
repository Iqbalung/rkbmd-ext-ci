<?php
class M_pekerja extends CI_Model{

	function __construct()
	{
		parent::__construct();
		$this->load->database();
	}
	
	function get($params)
	{

		$this->db->select("PENGGUNA.* ");
		$this->db->select("MASTER_WILAYAH.*");
		$this->db->select("LAMARAN.ID_TKI");
		$this->db->where('PENGGUNA.USERGROUP_ID',4);
		if(isset($params['NAMA'])){
			$this->db->like('PENGGUNA.NAMA',$params['NAMA']);
		}
		if(isset($params['PPTKIS_ID'])){
			$this->db->where('LAMARAN.PPTKIS_ID',$params['PPTKIS_ID']);
		}
		if(isset($params['SATKER_ID'])){
			$this->db->like('PENGGUNA_PPTKIS.SATKER_ID',$params['SATKER_ID'],'after');
		}
		if(isset($params['REKRUITER_ID'])){
			$this->db->WHERE('LAMARAN.REKRUITER_ID',$params['REKRUITER_ID']);
		}		
		if (isset($params['start']) && isset($params['limit'])) {			
			$this->db->limit($params['limit'],$params['start']);
		}
		$this->db->join('PENGGUNA','PENGGUNA.ID=LAMARAN.PEKERJA_ID','left');
		$this->db->join('JOB','JOB.JOB_ID=LAMARAN.JOB_ID','left');
		$this->db->join('MASTER_WILAYAH','MASTER_WILAYAH.WILAYAH_ID=JOB.WILAYAH_ID','left');
		$this->db->join('PENGGUNA_PPTKIS','LAMARAN.REKRUITER_ID=PENGGUNA_PPTKIS.PENGGUNA_ID','left');
		$this->db->group_by('PENGGUNA.ID');
		$this->db->order_by("DATE_CREATED", "DESC"); 
		$q = $this->db->get('LAMARAN');
		return $q;	
	}

	function get_riw_pend_informal($params)
	{
		$where = "";
		
		$q = $this->db->query("
			SELECT * FROM 
				LAMARAN_BLKN AS A 
			LEFT JOIN PARTNER_BLKLN AS B
			ON A.BLKN_ID = B.ID  
			WHERE LAMARAN_ID 
			= '".$params['LAMARAN_ID']."'");
		return $q;	
	}	

	function usergroup()
	{
		$where = "";
		$q = $this->db->query("
			SELECT * FROM 
				USERGROUP ");
		return $q;	
	}	

	function penggunatolamaran($params){
		$res = $this->db->insert('LAMARAN' , $params);
		return $res;

	}

	function get_kompetensi($params){
		$res = $this->db->query("SELECT KOMPETENSI, KOMPETENSI_ID FROM PENGGUNA 
										WHERE ID = '".$params['PENGGUNA_ID']."'
								");
		return $res;
	}

	function get_bidang($params){
		$res = $this->db->query("SELECT BIDANG, BIDANG_ID FROM PENGGUNA 
										WHERE ID = '".$params['PENGGUNA_ID']."'
								");
		return $res;
	}

	function get_wilayah($params){
		$res = $this->db->query("SELECT WILAYAH_MINAT, WILAYAH_ID FROM PENGGUNA 
										WHERE ID = '".$params['PENGGUNA_ID']."'
								");
		return $res;
	}

	function get_by_id($params)
	{
		$q = $this->db->query("
			SELECT 
				PENGGUNA.*,
				USERGROUP,
				MWT.WILAYAH_ID AS WILAYAH_TINGGAL_ID,
				MWK.WILAYAH_ID AS WILAYAH_KTP_ID,
				MWT.WILAYAH_NAMA AS WILAYAH_TINGGAL_NAMA,
				MWK.WILAYAH_NAMA AS WILAYAH_KTP_NAMA
			FROM PENGGUNA 
			LEFT JOIN USERGROUP ON PENGGUNA.USERGROUP_ID=USERGROUP.ID
			LEFT JOIN MASTER_WILAYAH MWT ON PENGGUNA.WILAYAH_ID_TINGGAL=MWT.WILAYAH_ID
			LEFT JOIN MASTER_WILAYAH MWK ON PENGGUNA.WILAYAH_ID_KTP=MWK.WILAYAH_ID
			WHERE USERGROUP_ID=4
			AND PENGGUNA.ID=?
			",array($params['ID']));
		return $q;	
	}

	function get_nonbekerja($params)
	{
		$where = "";
		if(isset($params['KEYWORD'])){
			$where .= "
						AND B.NAMA LIKE '%".$params['KEYWORD']."%' 
						OR B.ID LIKE '".$params['KEYWORD']."'

					";
		}

		if(isset($params['JENIS_KELAMIN'])){
			$where .= "AND B.JENIS_KELAMIN = '".$params['JENIS_KELAMIN']."' ";
		}
		$q = $this->db->query("
				SELECT * FROM 
				(
				   SELECT
				      ID AS LAMARAN_ID  FROM LAMARAN
				) as i LEFT JOIN  
				LAMARAN AS A ON i.LAMARAN_ID = A.ID LEFT JOIN PENGGUNA 
				AS B ON A.PEKERJA_ID = B.ID 
				WHERE B.USERGROUP_ID = '4' AND A.STATUS_ID = '1.' 
				AND A.PPTKIS_ID = '".$params['PPTKIS_ID']."'

				$where

				ORDER BY B.NAMA ASC

			"
		);
		return $q;	
	}

	function addtolamaran($params)
	{
		$this->db->set('STATUS_ID','2.');
		$this->db->set('JOB_ID',$params['JOB_ID']);
		$this->db->where('ID',$params['ID']);
		$res = $this->db->update("LAMARAN");
		return $res; 
		
	}

	function get_riw_kerja($params)
	{				
		$res = $this->db->query("SELECT RK.*,D.DOKUMEN_ID, D.DOKUMEN_NAMA FROM RIW_KERJA RK
								 LEFT JOIN DOKUMEN D ON RK.DOKUMEN_ID=D.DOKUMEN_ID WHERE RK.PEKERJA_ID = '".$params['PEKERJA_ID']."'");
		return $res;
	}

	function add_riw_kerja($params)
	{
		$res = $this->db->insert('RIW_KERJA' , $params);
		return $res;
	}

	function upd_riw_kerja($params)
	{
		$this->db->where("PENGALAMAN_ID",$params["PENGALAMAN_ID"]);		
		$res = $this->db->update('RIW_KERJA' , $params);
		return $res;
	}

	function del_riw_kerja($params = array()){
		$res = true;		
		if (isset($params["PEKERJA_ID"]) && !empty($params["PEKERJA_ID"])) {

			$this->db->where("PEKERJA_ID",$params["PEKERJA_ID"]);	

			if (isset($params["LIST_ID"]) && is_array($params["LIST_ID"]) && count($params["LIST_ID"]) > 0) {
				$this->db->where_not_in("PENGALAMAN_ID",$params["LIST_ID"]);	
			}
			$res = $this->db->delete("RIW_KERJA");
		}

		return $res;
	}

	function get_riw_pendidikan($params)
	{				
		$res = $this->db->query("SELECT * FROM RIW_PENDIDIKAN RP
								 LEFT JOIN DOKUMEN D ON RP.DOKUMEN_ID=D.DOKUMEN_ID 
								 LEFT JOIN MASTER_TPENDIDIKAN MSP ON RP.TPENDIDIKAN_ID = MSP.PENDIDIKAN_ID
								 WHERE RP.ID_PEKERJA = '".$params['ID_PEKERJA']."'");
		return $res;
	}

	function add_riw_pendidikan($params)
	{		
		unset($params['PENDIDIKAN_ID']);
		unset($params['PENDIDIKAN_NAMA']);
		$res = $this->db->insert('RIW_PENDIDIKAN' , $params);
		return $res;
	}

	function upd_riw_pendidikan($params)
	{
		unset($params['PENDIDIKAN_ID']);
		unset($params['PENDIDIKAN_NAMA']);
		$this->db->where("FORMAL_ID",$params["FORMAL_ID"]);		
		$res = $this->db->update('RIW_PENDIDIKAN' , $params);
		return $res;
	}

	function del_riw_pendidikan($params = array()){
		$res = true;		
		if (isset($params["ID_PEKERJA"]) && !empty($params["ID_PEKERJA"])) {

			$this->db->where("ID_PEKERJA",$params["ID_PEKERJA"]);	

			if (isset($params["LIST_ID"]) && is_array($params["LIST_ID"]) && count($params["LIST_ID"]) > 0) {
				$this->db->where_not_in("FORMAL_ID",$params["LIST_ID"]);	
			}
			$res = $this->db->delete("RIW_PENDIDIKAN");
		}

		return $res;
	}

	function get_riw_keluarga($params)
	{				
		$res = $this->db->get_where('RIW_KELUARGA' , $params);
		return $res;
	}

	function add_riw_keluarga($params)
	{
		$res = $this->db->insert('RIW_KELUARGA' , $params);
		return $res;
	}

	function del_riw_keluarga($params = array()){
		$res = true;		
		if (isset($params["PENGGUNA_ID"]) && !empty($params["PENGGUNA_ID"])) {

			$this->db->where("PENGGUNA_ID",$params["PENGGUNA_ID"]);	

			if (isset($params["LIST_ID"]) && is_array($params["LIST_ID"]) && count($params["LIST_ID"]) > 0) {
				$this->db->where_not_in("ID",$params["LIST_ID"]);	
			}
			$res = $this->db->delete("RIW_KELUARGA");
		}

		return $res;
	}

	function upd_riw_keluarga($params)
	{
		$this->db->where("ID",$params["ID"]);		
		$res = $this->db->update('RIW_KELUARGA' , $params);
		return $res;
	}

	function get_media($params)
	{				
		if (count($params)) {			
			$this->db->where($params);
		}
		$this->db->select("
			PD.ID,
			PD.DOKUMEN_NAMA,
			PD.DOKUMEN_DESKRIPSI,
			DK.DOKUMEN_ID,
			DK.DOKUMEN_NAMA AS NAMA_FILE,
			DK.DOKUMEN_NAMA_GENERATE,
			MKD.KLASIFIKASI_ID,
			MKD.KLASIFIKASI_NAMA			
			");
		$this->db->join("DOKUMEN DK","DK.DOKUMEN_ID = PD.DOKUMEN_ID","LEFT");
		$this->db->join("MASTER_KLASIFIKASI_DOK MKD","MKD.KLASIFIKASI_ID = DK.KLASIFIKASI_ID","LEFT");
		$res = $this->db->get("PENGGUNA_DOKUMEN PD");
		return $res;
	}

	function add_media($params)
	{
		$res = $this->db->insert('PENGGUNA_DOKUMEN' , $params);
		return $res;
	}

	function upd_media($params)
	{
		$this->db->where("ID",$params["ID"]);		
		$res = $this->db->update('PENGGUNA_DOKUMEN' , $params);
		return $res;
	}

	function del_media($params){
		$res = false;		
		$this->db->where("ID",$params["ID"]);		
		$res = $this->db->delete("PENGGUNA_DOKUMEN");
		return $res;	
	}

	function get_klasifikasi(){
		$res = $this->db->get("MASTER_KLASIFIKASI_DOK");
		return $res;	
	}
	


}
