<?php
class M_pemeliharaan extends CI_Model{

	function __construct()
	{
		parent::__construct();
		$this->load->database();
	}
	
	function get($params = array(), $isCetak = false)
	{
		
			
			$this->db->select("
				p.TAHUN,
				CASE WHEN sk.SUB_KEGIATAN_ID IS NULL THEN 
					k.KEGIATAN_NAMA
				else
					sk.SUB_KEGIATAN_NAMA
				end as NAMA_KEGIATAN,
				sk.SUB_KEGIATAN_NAMA,
				k.KEGIATAN_NAMA as PARENT_KEGIATAN,
				p.BIDANG_ID,
				p.KEGIATAN_ID,
				p.SUB_KEGIATAN_ID,
				pb.*,
				CASE WHEN p.STATUS = 2 THEN
					'Disetujui'
				WHEN p.STATUS = 1 THEN						
					'Diajukan'
				ELSE
					'Draft'
				END as STATUS_DATA
			", false);
			$this->db->join("PEMELIHARAAN_BARANG pb","pb.PEMELIHARAAN_ID = p.PEMELIHARAAN_ID", "RIGHT");
			$this->db->join("MASTER_KEGIATAN k","k.KEGIATAN_ID = p.KEGIATAN_ID", "LEFT");
			$this->db->join("MASTER_SUB_KEGIATAN sk","sk.SUB_KEGIATAN_ID = p.SUB_KEGIATAN_ID", "LEFT");

			

			$res = $this->db->get("pemeliharaan p");
			
			if ($isCetak) {
				return $res->result_array();
			}

			$data = $res->result_array();

			$out = array(
				'success' => true,
				'msg' => 'Berhasil mengambil data',
				"items" => $data,
				"error" => null
			);
		
		return $out;
	}
	
	function save($params = array())
	{
		try {
			$paramsPemeliharaan = array(
				"PEMELIHARAAN_ID" => $params["PEMELIHARAAN_ID"],
				"BIDANG_ID" => $params["BIDANG_ID"],
				"TAHUN" => $params["TAHUN"],
				"KEGIATAN_ID" => $params["KEGIATAN_ID"],
				"SUB_KEGIATAN_ID" => $params["SUB_KEGIATAN_ID"],
				"STATUS" => $params["STATUS"],
			);

			$idParent = $paramsPemeliharaan["PEMELIHARAAN_ID"];
			if (!empty($paramsPemeliharaan["PEMELIHARAAN_ID"])) {
				$paramsPemeliharaan["DIUBAH_PADA"] = date("Y-m-d H:i:s");
				$this->db->where("PEMELIHARAAN_ID", $paramsPemeliharaan["PEMELIHARAAN_ID"]);
				$res = $this->db->update("pemeliharaan", $paramsPemeliharaan);
			} else {
				$paramsPemeliharaan["DIBUAT_PADA"] = date("Y-m-d H:i:s");			
				unset($paramsPemeliharaan["PEMELIHARAAN_ID"]);
				$res = $this->db->insert("pemeliharaan", $paramsPemeliharaan);
				$idParent = $this->db->insert_id();
			}			
			$barangPemeleiharaanAktif = array();
			if ($res) {
				$dataBarang = $params["DATA_BARANG"];
				if (is_array($dataBarang) && count($dataBarang) > 0) {
					foreach ($dataBarang as $key => $value) {
						$paramsBarang = array(
							"BARANG_PEMELIHARAAN_ID" => ifunsetempty($value, "BARANG_PEMELIHARAAN_ID", ""),
							"PEMELIHARAAN_ID" => $idParent,
							"BARANG_ID" => ifunsetempty($value, "BARANG_ID", ""),
							"BARANG_NAMA" => ifunsetempty($value, "BARANG_NAMA", ""),
							"BARANG_KODE" => ifunsetempty($value, "BARANG_KODE", ""),
							"STATUS_BARANG_ID" => ifunsetempty($value, "STATUS_BARANG_ID", ""),
							"STATUS_BARANG" => ifunsetempty($value, "STATUS_BARANG", ""),
							"KONDISI_BAIK" => ifunsetempty($value, "KONDISI_BAIK", ""),
							"KONDISI_RUSAK_RINGAN" => ifunsetempty($value, "KONDISI_RUSAK_RINGAN", ""),
							"KONDISI_RUSAK_BERAT" => ifunsetempty($value, "KONDISI_RUSAK_BERAT", ""),
							"PEMELIHARAAN_NAMA" => ifunsetempty($value, "PEMELIHARAAN_NAMA", ""),
							"USULAN_JUMLAH" => ifunsetempty($value, "USULAN_JUMLAH", ""),
							"USULAN_SATUAN" => ifunsetempty($value, "USULAN_SATUAN", ""),
							"RENCANA_JUMLAH" => ifunsetempty($value, "RENCANA_JUMLAH", ""),
							"RENCANA_SATUAN" => ifunsetempty($value, "RENCANA_SATUAN", ""),
							"KETERANGAN" => ifunsetempty($value, "KETERANGAN", ""),
							"TAHUN" => ifunsetempty($paramsPemeliharaan, "TAHUN", ""),
						);

						if(empty($paramsBarang["KONDISI_BAIK"])){
							unset($paramsBarang["KONDISI_BAIK"]);
						}
						if(empty($paramsBarang["KONDISI_RUSAK_RINGAN"])){
							unset($paramsBarang["KONDISI_RUSAK_RINGAN"]);
						}
						if(empty($paramsBarang["KONDISI_RUSAK_BERAT"])){
							unset($paramsBarang["KONDISI_RUSAK_BERAT"]);
						}
						if(empty($paramsBarang["RENCANA_JUMLAH"])){
							unset($paramsBarang["RENCANA_JUMLAH"]);
						}
						if (!empty($paramsBarang["BARANG_PEMELIHARAAN_ID"])) {
							$paramsBarang["DIUBAH_PADA"] = date("Y-M-d H:i:s");
							$this->db->where("BARANG_PEMELIHARAAN_ID", $paramsBarang["BARANG_PEMELIHARAAN_ID"]);
							$resBarang = $this->db->update("pemeliharaan_barang", $paramsBarang);							
						} else {
							$paramsBarang["DIBUAT_PADA"] = date("Y-m-d H:i:s");			
							unset($paramsBarang["BARANG_PEMELIHARAAN_ID"]);
							$resBarang = $this->db->insert("pemeliharaan_barang", $paramsBarang);						
						}

						$barangPemeleiharaanAktif[] = $paramsBarang["BARANG_PEMELIHARAAN_ID"];
					}
				}
				
				$this->db->where_not_in("BARANG_PEMELIHARAAN_ID", $barangPemeleiharaanAktif);
				$this->db->where("PEMELIHARAAN_ID", $paramsBarang["PEMELIHARAAN_ID"]);
				$res_delete = $this->db->delete("pemeliharaan_barang");				
				
			}

			$out = array(
				'success' => true,
				'msg' => 'Draft Berhasil Disimpan',
				"error" => null
			);

			if ($paramsPemeliharaan["STATUS"] == 1) {
				$out["msg"] = "Berhasil Diajukan";
			}

			
		} catch (\Throwable $e) {			
			$out = array(
				'success' => false,
				'msg' => 'Gagal Disimpan',
				"error" => $e->getMessage()
			);
		}
		return $out;
	}

	function get_detail($params = array())
	{
		try {
			
			$this->db->select("
				p.*,
				k.KEGIATAN_NAMA,
				b.BIDANG_NAMA,
				sk.SUB_KEGIATAN_NAMA				
			", false);
			// $this->db->join("PEMELIHARAAN_BARANG pb","pb.PEMELIHARAAN_ID = p.PEMELIHARAAN_ID", "RIGHT");
			$this->db->join("MASTER_BIDANG b","b.BIDANG_ID = p.BIDANG_ID", "LEFT");
			$this->db->join("MASTER_KEGIATAN k","k.KEGIATAN_ID = p.KEGIATAN_ID", "LEFT");
			$this->db->join("MASTER_SUB_KEGIATAN sk","sk.SUB_KEGIATAN_ID = p.SUB_KEGIATAN_ID", "LEFT");

			$this->db->where("p.PEMELIHARAAN_ID", $params["PEMELIHARAAN_ID"]);		
			$res = $this->db->get("pemeliharaan p");

			if ($res->num_rows() == 0) {
				$out = array(
					'success' => false,
					'msg' => 'Data tidak ditemukan',
					"items" => null,
					"error" => null
				);

				return $out;
			}

			$data = $res->row_array();
			$data["DATA_BARANG"] = array();

			$this->db->select("pb.*");
			$this->db->where("pb.PEMELIHARAAN_ID", $params["PEMELIHARAAN_ID"]);		
			$res_barang = $this->db->get("pemeliharaan_barang pb");
			if ($res_barang) {
				$data["DATA_BARANG"] = $res_barang->result_array();
			}

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