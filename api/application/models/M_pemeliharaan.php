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
				CONCAT(sk.SUB_KEGIATAN_NAMA,'-',b.BIDANG_NAMA) AS GROUP_NAMA,
				k.KEGIATAN_NAMA as PARENT_KEGIATAN,
				p.BIDANG_ID,
				p.KEGIATAN_ID,
				b.BIDANG_NAMA,
				p.SUB_KEGIATAN_ID,
				pb.*,
				CASE WHEN pb.STATUS_PROSES = 2 THEN
					'Disetujui'
				WHEN pb.STATUS_PROSES = 1 THEN						
					'Diajukan'
				ELSE
					'Draft'
				END as STATUS_DATA,
				pg.PROGRAM_ID,
				pg.PROGRAM_NAMA
			", false);
			$this->db->join("PEMELIHARAAN_BARANG pb","pb.PEMELIHARAAN_ID = p.PEMELIHARAAN_ID", "RIGHT");
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
				$this->db->where("pb.STATUS_PROSES", $params["STATUS"]);
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
			$this->db->order_by("CONCAT(sk.SUB_KEGIATAN_NAMA,'-',b.BIDANG_NAMA) ASC");
			$this->db->order_by("pb.BARANG_NAMA ASC");
			$res = $this->db->get("PEMELIHARAAN p");
			
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
		
		return $out;
	}

	function delete($params = array(), $isCetak = false)
	{
		
			
		$this->db->where("PEMELIHARAAN_ID", $params["PEMELIHARAAN_ID"]);
		$res = $this->db->delete("PEMELIHARAAN", $params);
		
		$out = array(
			'msg' => 'Berhasil menghapus data',
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
				"PROGRAM_ID" => $params["PROGRAM_ID"],
				"KEGIATAN_ID" => $params["KEGIATAN_ID"],
				"SUB_KEGIATAN_ID" => $params["SUB_KEGIATAN_ID"],
				"STATUS" => $params["STATUS"],
			);

			$idParent = $paramsPemeliharaan["PEMELIHARAAN_ID"];
			if (!empty($paramsPemeliharaan["PEMELIHARAAN_ID"])) {
				$paramsPemeliharaan["DIUBAH_PADA"] = date("Y-m-d H:i:s");
				$this->db->where("PEMELIHARAAN_ID", $paramsPemeliharaan["PEMELIHARAAN_ID"]);
				$res = $this->db->update("PEMELIHARAAN", $paramsPemeliharaan);
			} else {
				$paramsPemeliharaan["DIBUAT_PADA"] = date("Y-m-d H:i:s");			
				unset($paramsPemeliharaan["PEMELIHARAAN_ID"]);
				$res = $this->db->insert("PEMELIHARAAN", $paramsPemeliharaan);
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
							"STATUS_PROSES" => ifunsetempty($params, "STATUS", 1),
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
							$resBarang = $this->db->update("PEMELIHARAAN_BARANG", $paramsBarang);							
						} else {
							$paramsBarang["DIBUAT_PADA"] = date("Y-m-d H:i:s");			
							unset($paramsBarang["BARANG_PEMELIHARAAN_ID"]);
							$resBarang = $this->db->insert("PEMELIHARAAN_BARANG", $paramsBarang);						
						}

						$barangPemeleiharaanAktif[] = $paramsBarang["BARANG_PEMELIHARAAN_ID"];
					}
				}
				
				$this->db->where_not_in("BARANG_PEMELIHARAAN_ID", $barangPemeleiharaanAktif);
				$this->db->where("PEMELIHARAAN_ID", $paramsBarang["PEMELIHARAAN_ID"]);
				$res_delete = $this->db->delete("PEMELIHARAAN_BARANG");				
				
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
			$res = $this->db->get("PEMELIHARAAN p");

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
			$res_barang = $this->db->get("PEMELIHARAAN_BARANG pb");
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
				'BARANG_PEMELIHARAAN_ID' => ifunsetempty($_POST,'BARANG_PEMELIHARAAN_ID',''),
				'PEMELIHARAAN_ID' => ifunsetempty($_POST,'PEMELIHARAAN_ID',''),			
				'PEMELIHARAAN_NAMA' => ifunsetempty($_POST,'PEMELIHARAAN_NAMA',''),
				'RENCANA_JUMLAH' => ifunsetempty($_POST,'RENCANA_JUMLAH',''),
				'RENCANA_SATUAN' => ifunsetempty($_POST,'RENCANA_SATUAN',''),
				'KETERANGAN' => ifunsetempty($_POST,'KETERANGAN',''),
				'STATUS_PROSES' => 2 //Disetujui
			);
			$res = false;			
			if (!empty($paramsTelaah["BARANG_PEMELIHARAAN_ID"])) {
				$paramsTelaah["TANGGAL_TELAAH"] = date("Y-m-d H:i:s");				
				$this->db->where("BARANG_PEMELIHARAAN_ID", $paramsTelaah["BARANG_PEMELIHARAAN_ID"]);
				$this->db->where("PEMELIHARAAN_ID", $paramsTelaah["PEMELIHARAAN_ID"]);
				$paramsPemeliharaan["PEMELIHARAAN_ID"] = $paramsTelaah["PEMELIHARAAN_ID"];
				unset($paramsTelaah["PEMELIHARAAN_ID"]);
				unset($paramsTelaah["BARANG_PEMELIHARAAN_ID"]);
				$res = $this->db->update("PEMELIHARAAN_BARANG", $paramsTelaah);


				// $paramsPemeliharaan["DIUBAH_PADA"] = date("Y-m-d H:i:s");
				// $paramsPemeliharaan["STATUS"] = "2";
				// $this->db->where("PEMELIHARAAN_ID", $paramsPemeliharaan["PEMELIHARAAN_ID"]);
				// $res = $this->db->update("PEMELIHARAAN", $paramsPemeliharaan);
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

	function get_barang_sub_kegiatan($params = array(), $isCetak = false)
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
				CASE WHEN pb.STATUS_PROSES = 2 THEN
					'Disetujui'
				WHEN pb.STATUS_PROSES = 1 THEN						
					'Diajukan'
				ELSE
					'Draft'
				END as STATUS_DATA,
				pg.PROGRAM_ID,
				pg.PROGRAM_NAMA
			", false);
			$this->db->join("PEMELIHARAAN_BARANG pb","pb.PEMELIHARAAN_ID = p.PEMELIHARAAN_ID", "RIGHT");
			$this->db->join("MASTER_PROGRAM pg","pg.PROGRAM_ID = p.PROGRAM_ID", "LEFT");
			$this->db->join("MASTER_KEGIATAN k","k.KEGIATAN_ID = p.KEGIATAN_ID", "LEFT");
			$this->db->join("MASTER_SUB_KEGIATAN sk","sk.SUB_KEGIATAN_ID = p.SUB_KEGIATAN_ID", "LEFT");

			if (isset($params["TAHUN"]) && !empty($params["TAHUN"])) {
				$this->db->where("p.TAHUN", $params["TAHUN"]);
			}

			if (isset($params["BIDANG_ID"]) && !empty($params["BIDANG_ID"])) {
				$this->db->where("p.BIDANG_ID LIKE", $params["BIDANG_ID"]."%");
			}

			if (isset($params["STATUS"]) && $params["STATUS"] != -1) {
				$this->db->where("pb.STATUS_PROSES", $params["STATUS"]);
			}

			if (isset($params["SUB_KEGIATANID"]) && !empty($params["SUB_KEGIATANID"])) {
				$this->db->where("sk.SUB_KEGIATAN_ID", $params["SUB_KEGIATANID"]);
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
			$this->db->order_by("sk.SUB_KEGIATAN_NAMA ASC");
			$this->db->order_by("pb.BARANG_NAMA ASC");
			$res = $this->db->get("PEMELIHARAAN p");
			
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
		
		return $out;
	}	

	function save_telaah_sub_kegiatan($params = array())
	{
		
		print_r($params);
			exit;
			$dataBarang = ifunsetempty($params, 'DATA_BARANG_TELAAH', array());	
			$tanggalTelaah = date("Y-m-d H:i:s");
			
			$res = false;			
			if (is_array($dataBarang)) {

				$fieldValid = array("BARANG_PEMELIHARAAN_ID");
				foreach ($dataBarang as $key => $value) {
					
					$valid = true;
					foreach ($fieldValid as $field) {						
						if (!isset($value[$field])) {
							$valid = false;
							break;
						}
					}
					
					if ($valid) {
						$paramsTelaah = array(
							'RENCANA_JUMLAH' => ifunsetempty($value, 'RENCANA_JUMLAH', ''),
							'RENCANA_SATUAN' => ifunsetempty($value, 'RENCANA_SATUAN', ''),							
							'KETERANGAN' => ifunsetempty($value, 'KETERANGAN', ''),
							'PEMELIHARAAN_NAMA' => ifunsetempty($value, 'PEMELIHARAAN_NAMA', ''),
							"TANGGAL_TELAAH" => $tanggalTelaah,
							'STATUS_PROSES' => 2 //Disetujui
						);
						$this->db->where("BARANG_PEMELIHARAAN_ID", $value["BARANG_PEMELIHARAAN_ID"]);
						$res = $this->db->update("PEMELIHARAAN_BARANG", $paramsTelaah);
						
					}
				}
				
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

		
		return $res;
	}
	

}