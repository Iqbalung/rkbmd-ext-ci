<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class App extends MY_Controller {
	function __construct(){
		parent::__construct();
		$this->load->model('M_pekerja');
		$this->load->model('M_pengguna');
	}
	
	function get_viewmodel()
	{

		$out['USER'] = $this->user;
		$out['INSTANSI'] =array();
		$q=$this->db->query("SELECT 
				MASTER_PPTKIS.PPTKIS_ID AS ID,
				PPTKIS_NAMA AS NAMA,
				PPTKIS_ALAMAT AS ALAMAT,
				PPTKIS_LEGALITAS AS LEGALITAS,
				PPTKIS_DES_PENDEK AS DES_PENDEK,
				PPTKIS_DES_PANJANG AS DES_PANJANG,
				PPTKIS_NOMOR_TELPHONE AS NOMOR_TELPHONE,
				PPTKIS_LOGO AS LOGO,
				PPTKIS_COVER AS COVER,
				PPTKIS_STRUKTUR_ORGANISASI AS STRUKTUR_ORGANISASI,
				WILAYAH_ID,
				PENGGUNA_PPTKIS.SATKER_ID 

			from PENGGUNA_PPTKIS
			LEFT JOIN MASTER_PPTKIS ON PENGGUNA_PPTKIS.PPTKIS_ID=MASTER_PPTKIS.PPTKIS_ID
			where PENGGUNA_ID=?
		",array($out['USER']['ID']));
		if($q->num_rows()>0){
			$row = $q->first_row();
			unset($row->PPTKIS_DES_PANJANG);
			$out['INSTANSI'] = $row;
		}
		$out['akses'] = $this->get_akses($out['USER']['USERGROUP_ID']);
		$out['message'] = 'RKBMD Banjarnegara';
		echo json_encode($out);
	}

	function get_akses($usergroupid){

		/*1:admin, 2:admin pptkis, 3 recruter*/
		
		$fitur = array(
				'page_portal' => array(1,2,3),
				'portal_profile' => array(2,3),
				'page_tki' => array(1,2,3),
				'page_tki_filter_satker' => array(2),
				'page_profile_tki' => array(1,2,3),
				'page_profile_pptkis' => array(1,2),
				'page_job' => array(1,2),
				'menu_master' => array(1),
				'page_pengguna' => array(1),
				'page_kompetensi' => array(1),
				'page_wilayah' => array(1),
				'page_bidang' => array(1),
				'page_jabatan' => array(1),
				'page_barang' => array(1),
				'page_pptkis' => array(1),
				'page_job_owner' => array(1),
				'page_jblkln' => array(1),
				'page_lk' => array(1),
				'page_lsp' => array(1),
				'page_sarkes' => array(1),
				'page_asuransi' => array(1)
			);

		$akses=array();
		foreach ($fitur as $key => $value) {
			$akses[$key] = in_array($usergroupid, $value);
		}
		
		return $akses;
	}

}