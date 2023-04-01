<?php
class M_penghapusan extends CI_Model{

	function __construct()
	{
		parent::__construct();
		$this->load->database();
	}
	
	function get($params = array(), $isCetak = false)
	{
		try {
			
			$this->db->select("
				p.TAHUN,
				CASE WHEN sk.SUB_KEGIATAN_ID IS NULL THEN 
					k.KEGIATAN_NAMA
				else
					sk.SUB_KEGIATAN_NAMA
				end as NAMA_KEGIATAN,
				sk.SUB_KEGIATAN_NAMA,
				p.BIDANG_ID,
				p.KEGIATAN_ID,
				p.SUB_KEGIATAN_ID,
				b.BIDANG_NAMA,
				pb.*,
				CASE WHEN p.STATUS = 2 THEN
					'Disetujui'
				WHEN p.STATUS = 1 THEN						
					'Diajukan'
				ELSE
					'Draft'
				END as STATUS_DATA				
			", false);
			$this->db->join("penghapusan_barang pb","pb.PENGHAPUSAN_ID = p.PENGHAPUSAN_ID", "RIGHT");
			$this->db->join("master_kegiatan k","k.KEGIATAN_ID = p.KEGIATAN_ID", "LEFT");
			$this->db->join("master_sub_kegiatan sk","sk.SUB_KEGIATAN_ID = p.SUB_KEGIATAN_ID", "LEFT");
			$this->db->join("master_bidang b","b.BIDANG_ID = p.BIDANG_ID", "LEFT");

			if (isset($params["TAHUN"]) && !empty($params["TAHUN"])) {
				$this->db->where("p.TAHUN", $params["TAHUN"]);
			}

			if (isset($params["BIDANG_ID"]) && !empty($params["BIDANG_ID"])) {
				$this->db->where("p.BIDANG_ID LIKE", $params["BIDANG_ID"]."%");
			}

			if (isset($params["STATUS"]) && $params["STATUS"] != -1) {
				$this->db->where("p.STATUS", $params["STATUS"]);
			}

			if (isset($params["PENCARIAN"]) && !empty($params["PENCARIAN"])) {
				$this->db->group_start();
				$this->db->or_where("CASE WHEN sk.SUB_KEGIATAN_ID IS NULL THEN 
					k.KEGIATAN_NAMA
				else
					sk.SUB_KEGIATAN_NAMA
				end LIKE", "%".$params["PENCARIAN"]."%");
				$this->db->or_where("pb.BARANG_NAMA LIKE ", "%".$params["PENCARIAN"]."%");
				$this->db->or_where("pb.BARANG_KODE LIKE ", "%".$params["PENCARIAN"]."%");
				$this->db->group_end();
			}

			$res = $this->db->get("penghapusan p");

			if ($isCetak) {
				return $res;
			}
			$data = $res->result_array();

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
	
	function save($params = array())
	{
		try {
			$paramsPenghapusan = array(
				"PENGHAPUSAN_ID" => $params["PENGHAPUSAN_ID"],
				"BIDANG_ID" => $params["BIDANG_ID"],
				"TAHUN" => $params["TAHUN"],
				"KEGIATAN_ID" => $params["KEGIATAN_ID"],
				"SUB_KEGIATAN_ID" => $params["SUB_KEGIATAN_ID"],
				"STATUS" => $params["STATUS"],
			);

			$idParent = $paramsPenghapusan["PENGHAPUSAN_ID"];
			if (!empty($paramsPenghapusan["PENGHAPUSAN_ID"])) {
				$paramsPenghapusan["DIUBAH_PADA"] = date("Y-m-d H:i:s");
				$this->db->where("PENGHAPUSAN_ID", $paramsPenghapusan["PENGHAPUSAN_ID"]);
				$res = $this->db->update("penghapusan", $paramsPenghapusan);
			} else {
				$paramsPenghapusan["DIBUAT_PADA"] = date("Y-m-d H:i:s");			
				unset($paramsPenghapusan["PENGHAPUSAN_ID"]);
				$res = $this->db->insert("penghapusan", $paramsPenghapusan);
				$idParent = $this->db->insert_id();
			}			
			$barangPemeleiharaanAktif = array();
			if ($res) {
				$dataBarang = $params["DATA_BARANG"];
				if (is_array($dataBarang) && count($dataBarang) > 0) {
					foreach ($dataBarang as $key => $value) {
						$paramsBarang = array(
							"BARANG_PENGHAPUSAN_ID" => ifunsetempty($value, "BARANG_PENGHAPUSAN_ID", ""),
							"PENGHAPUSAN_ID" => $idParent,
							"BARANG_ID" => ifunsetempty($value, "BARANG_ID", ""),
							"BARANG_NAMA" => ifunsetempty($value, "BARANG_NAMA", ""),
							"BARANG_KODE" => ifunsetempty($value, "BARANG_KODE", ""),
							"NO_REGISTER" => ifunsetempty($value, "NO_REGISTER", ""),
							"MERK" => ifunsetempty($value, "MERK", ""),
							"NO_SERI" => ifunsetempty($value, "NO_SERI", ""),
							"JUMLAH" => ifunsetempty($value, "JUMLAH", ""),
							"HARGA" => ifunsetempty($value, "HARGA", ""),
							"ASAL_PEROLEHAN" => ifunsetempty($value, "ASAL_PEROLEHAN", ""),
							"TAHUN_PEROLEHAN" => ifunsetempty($value, "TAHUN_PEROLEHAN", ""),
							"RENCANA_PEMINDAHTANGANAN" => ifunsetempty($value, "RENCANA_PEMINDAHTANGANAN", ""),
							"RENCANA_PENGHAPUSAN" => ifunsetempty($value, "RENCANA_PENGHAPUSAN", ""),							
							"KETERANGAN" => ifunsetempty($value, "KETERANGAN", ""),
							"TAHUN" => ifunsetempty($paramsPenghapusan, "TAHUN", ""),
						);
						if (!empty($paramsBarang["BARANG_PENGHAPUSAN_ID"])) {
							$paramsBarang["DIUBAH_PADA"] = date("Y-M-d H:i:s");
							$this->db->where("BARANG_PENGHAPUSAN_ID", $paramsBarang["BARANG_PENGHAPUSAN_ID"]);
							$resBarang = $this->db->update("penghapusan_barang", $paramsBarang);							
						} else {
							$paramsBarang["DIBUAT_PADA"] = date("Y-m-d H:i:s");			
							unset($paramsBarang["BARANG_PENGHAPUSAN_ID"]);
							$resBarang = $this->db->insert("penghapusan_barang", $paramsBarang);						
						}

						$barangPemeleiharaanAktif[] = $paramsBarang["BARANG_PENGHAPUSAN_ID"];
					}
				}
				
				$this->db->where_not_in("BARANG_PENGHAPUSAN_ID", $barangPemeleiharaanAktif);
				$this->db->where("PENGHAPUSAN_ID", $paramsBarang["PENGHAPUSAN_ID"]);
				$res_delete = $this->db->delete("penghapusan_barang");				
				
			}

			$out = array(
				'success' => true,
				'msg' => 'Draft Berhasil Disimpan',
				"error" => null
			);

			if ($paramsPenghapusan["STATUS"] == 1) {
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
			// $this->db->join("penghapusan_barang pb","pb.PENGHAPUSAN_ID = p.PENGHAPUSAN_ID", "RIGHT");
			$this->db->join("master_bidang b","b.BIDANG_ID = p.BIDANG_ID", "LEFT");
			$this->db->join("master_kegiatan k","k.KEGIATAN_ID = p.KEGIATAN_ID", "LEFT");
			$this->db->join("master_sub_kegiatan sk","sk.SUB_KEGIATAN_ID = p.SUB_KEGIATAN_ID", "LEFT");

			$this->db->where("p.PENGHAPUSAN_ID", $params["PENGHAPUSAN_ID"]);		
			$res = $this->db->get("penghapusan p");

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
			$this->db->where("pb.PENGHAPUSAN_ID", $params["PENGHAPUSAN_ID"]);		
			$res_barang = $this->db->get("penghapusan_barang pb");
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