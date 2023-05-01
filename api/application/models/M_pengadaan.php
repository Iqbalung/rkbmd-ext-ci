<?php
class M_pengadaan extends CI_Model{

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
				k.KEGIATAN_NAMA as PARENT_KEGIATAN,
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
				END as STATUS_DATA,
				pg.PROGRAM_ID,
				pg.PROGRAM_NAMA
			", false);
			$this->db->join("PENGADAAN_BARANG pb","pb.PENGADAAN_ID = p.PENGADAAN_ID", "RIGHT");
			$this->db->join("MASTER_PROGRAM pg","pg.PROGRAM_ID = p.PROGRAM_ID", "LEFT");
			$this->db->join("MASTER_KEGIATAN k","k.KEGIATAN_ID = p.KEGIATAN_ID", "LEFT");
			$this->db->join("MASTER_SUB_KEGIATAN sk","sk.SUB_KEGIATAN_ID = p.SUB_KEGIATAN_ID", "LEFT");
			$this->db->join("MASTER_BIDANG b","b.BIDANG_ID = p.BIDANG_ID", "LEFT");

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

			$res = $this->db->get("PENGADAAN p");

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
			$paramsPengadaan = array(
				"PENGADAAN_ID" => $params["PENGADAAN_ID"],
				"BIDANG_ID" => $params["BIDANG_ID"],
				"TAHUN" => $params["TAHUN"],
				"PROGRAM_ID" => $params["PROGRAM_ID"],
				"KEGIATAN_ID" => $params["KEGIATAN_ID"],
				"SUB_KEGIATAN_ID" => $params["SUB_KEGIATAN_ID"],
				"STATUS" => $params["STATUS"],
			);

			$idParent = $paramsPengadaan["PENGADAAN_ID"];
			if (!empty($paramsPengadaan["PENGADAAN_ID"])) {
				$paramsPengadaan["DIUBAH_PADA"] = date("Y-m-d H:i:s");
				unset($paramsPengadaan['DIUBAH_PADA']);
				$this->db->where("PENGADAAN_ID", $paramsPengadaan["PENGADAAN_ID"]);
				$res = $this->db->update("PENGADAAN", $paramsPengadaan);
			} else {
				$paramsPengadaan["DIBUAT_PADA"] = date("Y-m-d H:i:s");			
				unset($paramsPengadaan["DIUBAH_PADA"]);
				$res = $this->db->insert("PENGADAAN", $paramsPengadaan);
				$idParent = $this->db->insert_id();
			}			
			$barangPemanfaatanAktif = array();
			if ($res) {
				$dataBarang = $params["DATA_BARANG"];
				if (is_array($dataBarang) && count($dataBarang) > 0) {
					foreach ($dataBarang as $key => $value) {
						$paramsBarang = array(
							"BARANG_PENGADAAN_ID" => ifunsetempty($value, "BARANG_PENGADAAN_ID", ""),
							"PENGADAAN_ID" => $idParent,
							"BARANG_ID" => ifunsetempty($value, "BARANG_ID", ""),
							"BARANG_NAMA" => ifunsetempty($value, "BARANG_NAMA", ""),
							"BARANG_KODE" => ifunsetempty($value, "BARANG_KODE", ""),							
							"JUMLAH" => ifunsetempty($value, "JUMLAH", ""),
							"SATUAN" => ifunsetempty($value, "SATUAN", ""),
							"CARA_PEMENUHAN" => ifunsetempty($value, "CARA_PEMENUHAN", ""),							
							"KETERANGAN" => ifunsetempty($value, "KETERANGAN", ""),
							"TAHUN" => ifunsetempty($paramsPengadaan, "TAHUN", ""),
							"KEBUTUHAN_MAKSIMUM_JUMLAH" => ifunsetempty($value, "KEBUTUHAN_MAKSIMUM_JUMLAH", ""),
							"KEBUTUHAN_MAKSIMUM_SATUAN" => ifunsetempty($value, "KEBUTUHAN_MAKSIMUM_SATUAN", ""),
							"KEBUTUHAN_RIIL_JUMLAH" => ifunsetempty($value, "KEBUTUHAN_RIIL_JUMLAH", ""),
							"KEBUTUHAN_RIIL_SATUAN" => ifunsetempty($value, "KEBUTUHAN_RIIL_SATUAN", ""),
						);
						if (!empty($paramsBarang["BARANG_PENGADAAN_ID"])) {
							$paramsBarang["DIUBAH_PADA"] = date("Y-M-d H:i:s");
							$this->db->where("BARANG_PENGADAAN_ID", $paramsBarang["BARANG_PENGADAAN_ID"]);
							unset($paramsBarang["DIUBAH_PADA"]);
							$resBarang = $this->db->update("PENGADAAN_BARANG", $paramsBarang);							
						} else {
							$paramsBarang["DIBUAT_PADA"] = date("Y-m-d H:i:s");			
							unset($paramsBarang["BARANG_PENGADAAN_ID"]);
							$resBarang = $this->db->insert("PENGADAAN_BARANG", $paramsBarang);						
						}

						$barangPemanfaatanAktif[] = $paramsBarang["BARANG_PENGADAAN_ID"];
					}
				}
				
				$this->db->where_not_in("BARANG_PENGADAAN_ID", $barangPemanfaatanAktif);
				$this->db->where("PENGADAAN_ID", $paramsBarang["PENGADAAN_ID"]);
				$res_delete = $this->db->delete("PENGADAAN_BARANG");				
				
			}			

			$out = array(
				'success' => true,
				'msg' => 'Draft Berhasil Disimpan',
				"error" => null
			);

			if ($paramsPengadaan["STATUS"] == 1) {
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
			// $this->db->join("PENGADAAN_BARANG pb","pb.PENGADAAN_ID = p.PENGADAAN_ID", "RIGHT");
			$this->db->join("MASTER_BIDANG b","b.BIDANG_ID = p.BIDANG_ID", "LEFT");
			$this->db->join("MASTER_KEGIATAN k","k.KEGIATAN_ID = p.KEGIATAN_ID", "LEFT");
			$this->db->join("MASTER_SUB_KEGIATAN sk","sk.SUB_KEGIATAN_ID = p.SUB_KEGIATAN_ID", "LEFT");

			$this->db->where("p.PENGADAAN_ID", $params["PENGADAAN_ID"]);		
			$res = $this->db->get("PENGADAAN p");

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
			$this->db->where("pb.PENGADAAN_ID", $params["PENGADAAN_ID"]);		
			$res_barang = $this->db->get("PENGADAAN_BARANG pb");
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

	function save_telaah($params = array())
	{
		try {
			$paramsTelaah = array(
				'BARANG_PENGADAAN_ID' => ifunsetempty($params, 'BARANG_PENGADAAN_ID', ''),
				'PENGADAAN_ID' => ifunsetempty($params, 'PENGADAAN_ID', ''),			
				'RENCANA_DISETUJUI_JUMLAH' => ifunsetempty($params, 'RENCANA_DISETUJUI_JUMLAH', ''),
				'RENCANA_DISETUJUI_SATUAN' => ifunsetempty($params, 'RENCANA_DISETUJUI_SATUAN', ''),
				'CARA_PEMENUHAN' => ifunsetempty($params, 'CARA_PEMENUHAN', ''),
				'KETERANGAN' => ifunsetempty($params, 'KETERANGAN', '')		
			);
			$res = false;			
			if (!empty($paramsTelaah["BARANG_PENGADAAN_ID"])) {
				$paramsTelaah["TANGGAL_TELAAH"] = date("Y-m-d H:i:s");				
				$this->db->where("BARANG_PENGADAAN_ID", $paramsTelaah["BARANG_PENGADAAN_ID"]);
				$this->db->where("PENGADAAN_ID", $paramsTelaah["PENGADAAN_ID"]);
				unset($paramsTelaah["PENGADAAN_ID"]);
				unset($paramsTelaah["BARANG_PENGADAAN_ID"]);
				$res = $this->db->update("PENGADAAN_BARANG", $paramsTelaah);
			}			
			
			
			$out = array(
				'success' => false,
				'msg' => 'Gagal Disimpan',
				"error" => $res
			);

			if ($res) {				
				$out = array(
					'success' => true,
					'msg' => 'Berhasil Disimpan',
					"error" => null
				);
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
	

}