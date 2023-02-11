<?php
class M_registration extends CI_Model{

	function __construct()
	{
		parent::__construct();
		$this->load->database();
	}

	
	function add_user($params)
	{
		unset($params['PPTKIS_NAMA']);
		unset($params['PPTKIS_ALAMAT']); 
		unset($params['PPTKIS_NOMOR_TELPHONE']); 
		unset($params['PPTKIS_LEGALITAS']); 
		unset($params['PPTKIS_DES_PENDEK']); 
		unset($params['PPTKIS_NOMOR_TELPHONE']); 
		
		$res = $this->db->insert('PENGGUNA' , $params);
		return $res;
	}

	function add_pekerja($params)
	{
		unset($params['USER_EMAIL']);
		unset($params['USER_PASSWORD']);
		$res = $this->db->insert('PEKERJA' , $params);
		return $res;
	}

	function select($params)
	{
		$q = $this ->db
           -> select('*')
           -> where('ID', $params)
           -> get('PENGGUNA')->result_array();
		return $q;
	}

	function getemail($params)
	{
		$q = $this ->db
           -> select('*')
           -> where('EMAIL', $params)
           -> get('PENGGUNA');
		return $q;
	}

	function add_pegawai($params){
		unset($params['PPTKIS_NAMA']);
		unset($params['PPTKIS_ALAMAT']); 
		unset($params['PPTKIS_DES_PENDEK']); 
		unset($params['PPTKIS_DES_PANJANG']); 
		unset($params['PPTKIS_NOMOR_TELPHONE']); 
		unset($params['PPTKIS_LEGALITAS']); 
		unset($params['EMAIL']);
		unset($params['PASSWORD']);
		unset($params['USER_ID']);
		unset($params['NAMA']);
		unset($params['JENIS_KELAMIN']);
		unset($params['TANGGAL_LAHIR']);
		unset($params['ALAMAT_TINGGAL']);
		unset($params['TEMPAT_LAHIR']);
		unset($params['NO_HP']);
		unset($params['NO_KTP']);
		$res = $this->db->insert('PEGAWAI' , $params);
		return $res;
	}

	function add_pptkis($params){
		unset($params['EMAIL']);
		unset($params['PASSWORD']);
		unset($params['USER_ID']);
		unset($params['NAMA']);
		unset($params['JENIS_KELAMIN']);
		unset($params['TANGGAL_LAHIR']);
		unset($params['ALAMAT_TINGGAL']);
		unset($params['TEMPAT_LAHIR']);
		unset($params['NO_HP']);
		unset($params['NO_TELP']);
		unset($params['NO_KTP']);
		$res = $this->db->insert('MASTER_PPTKIS' , $params);
		return $res;
	}

	function add_pptkis_pengguna($params){
		 unset($params['PPTKIS_NAMA']);
		unset($params['PPTKIS_ALAMAT']); 
		unset($params['PPTKIS_DES_PENDEK']); 
		unset($params['PPTKIS_DES_PANJANG']); 
		unset($params['PPTKIS_NOMOR_TELPHONE']); 
		unset($params['PPTKIS_LEGALITAS']); 
		unset($params['EMAIL']);
		unset($params['PASSWORD']);
		unset($params['USER_ID']);
		unset($params['NAMA']);
		unset($params['JENIS_KELAMIN']);
		unset($params['TANGGAL_LAHIR']);
		unset($params['ALAMAT_TINGGAL']);
		unset($params['TEMPAT_LAHIR']);
		unset($params['NO_HP']);
		unset($params['NO_KTP']);
		unset($params['NO_TELP']);
		$res = $this->db->insert('PENGGUNA_PPTKIS', $params);
		return $res;
	}

	function setactive($params){
		$q = $this->db->set('ACTIVE', '1');
		$q = $this->db->where('UID', $params);
		$q = $this->db->update('PENGGUNA');
		return $q;
	}

	function upduid($params){
		
		$q = $this->db->query("update PENGGUNA set uid = '".$params['UID']."' WHERE UID = '".$params['OLD']."' ");

		return $this->db->affected_rows($q);
	}
}