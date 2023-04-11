<?php
class M_dashboard extends CI_Model{

	function __construct()
	{
		parent::__construct();
		$this->load->database();
	}

	function get_realisasi_kegiatan($params)
	{
	
		try {
			
			$q = $this->db->query("
				SELECT
					BIDANG_ID,
					BIDANG_NAMA,
					COALESCE(SUM(JUMLAH_TERINPUT), 0) AS JUMLAH_TERINPUT,
					COALESCE(SUM(JUMLAH_KEGIATAN), 0) AS JUMLAH_KEGIATAN,
					0 REALISASI
				FROM (
					SELECT 
						MASTER_BIDANG.BIDANG_ID,
						BIDANG_NAMA,
						(BIDANG2.JUMLAH + BIDANG3.JUMLAH2 + BIDANG4.JUMLAH3 + BIDANG5.JUMLAH4) AS JUMLAH_TERINPUT,
						JUMLAH_KEGIATAN
					FROM MASTER_BIDANG 
					LEFT JOIN 
					(
						SELECT BIDANG_ID,COUNT(*) AS JUMLAH FROM PEMANFAATAN WHERE TAHUN = ? GROUP BY BIDANG_ID, KEGIATAN_ID
					) AS BIDANG2
					ON MASTER_BIDANG.BIDANG_ID = BIDANG2.BIDANG_ID
					LEFT JOIN
					(
						SELECT BIDANG_ID,COUNT(*) AS JUMLAH2 FROM PEMELIHARAAN  WHERE TAHUN = ? GROUP BY BIDANG_ID, KEGIATAN_ID
					) AS BIDANG3
					ON MASTER_BIDANG.BIDANG_ID = BIDANG3.BIDANG_ID
					LEFT JOIN
					(
						SELECT BIDANG_ID,COUNT(*) AS JUMLAH3 FROM PENGHAPUSAN  WHERE TAHUN = ? GROUP BY BIDANG_ID, KEGIATAN_ID
					) AS BIDANG4
					
					ON MASTER_BIDANG.BIDANG_ID = BIDANG4.BIDANG_ID
					LEFT JOIN
					(
						SELECT BIDANG_ID,COUNT(*) AS JUMLAH4 FROM PENGADAAN  WHERE TAHUN = ? GROUP BY BIDANG_ID, KEGIATAN_ID
					) AS BIDANG5
					ON MASTER_BIDANG.BIDANG_ID = BIDANG5.BIDANG_ID
					LEFT JOIN (
						SELECT BIDANG_ID,COUNT(*) AS JUMLAH_KEGIATAN FROM MASTER_KEGIATAN WHERE TAHUN = ? GROUP BY BIDANG_ID, KEGIATAN_ID
					) AS KEGIATAN
					ON MASTER_BIDANG.BIDANG_ID = KEGIATAN.BIDANG_ID
				) Q
				GROUP BY BIDANG_ID 
				ORDER BY 
					SUM(JUMLAH_KEGIATAN) DESC,
					SUM(JUMLAH_TERINPUT) DESC
				LIMIT 5	
			", array(
				$params["TAHUN"], $params["TAHUN"], $params["TAHUN"], $params["TAHUN"], $params["TAHUN"]
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
				'msg' => 'Gagal mengambil data',
				"error" => $e->getMessage()
			);
		}		

		return $out;	
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
				'msg' => 'Gagal mengambil data',
				"error" => $e->getMessage()
			);
		}		

		return $out;	
	}

	function get_rekap_rkpbmd($params)
	{
	
		try {
			
			$q = $this->db->query("
				SELECT 
					MS.*,
					COALESCE((STS_PENGADAAN.JUMLAH + STS_PEMANFAATAN.JUMLAH + STS_PEMELIHARAAN.JUMLAH + STS_PENGHAPUSAN.JUMLAH), 0) AS JUMLAH
				FROM (
					select 'orange' as CLS, 'Jumlah Draft' as LABEL, '0' STATUS union
					select 'green' as CLS, 'Jumlah Diajukan' as LABEL, '1' STATUS union
					select 'purple' as CLS, 'Jumlah Disetujui' as LABEL, '2' STATUS
				) MS
				LEFT JOIN (
					SELECT COUNT(*) AS JUMLAH, STATUS  FROM PENGADAAN WHERE TAHUN = ? GROUP BY STATUS
				) STS_PENGADAAN ON STS_PENGADAAN.STATUS = MS.STATUS
				LEFT JOIN (
					SELECT COUNT(*) AS JUMLAH, STATUS  FROM PEMANFAATAN WHERE TAHUN = ? GROUP BY STATUS
				) STS_PEMANFAATAN ON STS_PEMANFAATAN.STATUS = MS.STATUS
				LEFT JOIN (
					SELECT COUNT(*) AS JUMLAH, STATUS  FROM PENGHAPUSAN WHERE TAHUN = ? GROUP BY STATUS
				) STS_PENGHAPUSAN ON STS_PENGHAPUSAN.STATUS = MS.STATUS
				LEFT JOIN (
					SELECT COUNT(*) AS JUMLAH, STATUS  FROM PEMELIHARAAN P  WHERE TAHUN = ? GROUP BY STATUS
				) STS_PEMELIHARAAN ON STS_PEMELIHARAAN.STATUS = MS.STATUS
				ORDER BY MS.STATUS
			", array(
				$params["TAHUN"], $params["TAHUN"], $params["TAHUN"], $params["TAHUN"]
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
				'msg' => 'Gagal mengambil data',
				"error" => $e->getMessage()
			);
		}		

		return $out;	
	}
	
}
