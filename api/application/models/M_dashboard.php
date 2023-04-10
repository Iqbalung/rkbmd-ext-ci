<?php
class M_dashboard extends CI_Model{

	function __construct()
	{
		parent::__construct();
		$this->load->database();
	}
	
	function get_pengajuan_skpd($params)
	{
	
		try {
			
			$q = $this->db->query("
				SELECT
					SKPD.BIDANG_ID,
					SKPD.BIDANG_NAMA,
					COUNT(P.PENGADAAN_ID) AS JML_PENGADAAN,
					coalesce (sum(PB.JUMLAH), 0) as JML_BARANG,
					0 AS TOTAL_HARGA
				FROM
					(SELECT * FROM MASTER_BIDANG MB WHERE LENGTH(MB.BIDANG_ID ) - LENGTH(REPLACE (MB.BIDANG_ID, '.', '' )) = 1) SKPD
				LEFT JOIN PENGADAAN P  ON P.BIDANG_ID LIKE CONCAT(SKPD.BIDANG_ID, '%') AND P.TAHUN = ?
				LEFT JOIN PENGADAAN_BARANG PB ON PB.PENGADAAN_ID = P.PENGADAAN_ID 					
				GROUP BY SKPD.BIDANG_ID
				ORDER BY CAST(REPLACE(SKPD.BIDANG_ID, '.', '' ) AS INT) ASC
			", array(
				$params["TAHUN"]
			));

			$data = $q->result_array();
			
			$out = array(
				'success' => true,
				'msg' => 'Berhasil mengambil data',
				"items" => $data,
				"error" => null
			);
		} catch (\Throwable $e) {			
			$out = array(
				'success' => false,
				'msg' => 'Gagal Disimpan',
				"error" => $e->getMessage()
			);
		}		

		return $out;	
	}
	
}
