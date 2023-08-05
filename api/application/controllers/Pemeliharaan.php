<?php


defined('BASEPATH') OR exit('No direct script access allowed');

class Pemeliharaan extends MY_Controller {
	function __construct(){
		parent::__construct();
		$this->load->model('M_pemeliharaan');
        $this->load->model(array("M_bidang", "M_outputsubkegiatan"));
	}

	function get()
	{

		$params = array(
			'PEMELIHARAAN_ID' => ifunsetempty($_POST,'PEMELIHARAAN_ID',''),
			'BIDANG_ID' => ifunsetempty($_POST,'BIDANG_ID', $this->session->userdata('BIDANG_ID')),
			'TAHUN' => ifunsetempty($_POST,'TAHUN', $this->session->userdata('TAHUN')),
			'PENCARIAN' => ifunsetempty($_POST,'PENCARIAN',''),			
			'STATUS' => ifunset($_POST,'STATUS', '-1'),			
		);
		
		
		$out = $this->M_pemeliharaan->get($params);
		
		echo json_encode($out);
	}
	
	function save()
	{

		$params = array(
			'PEMELIHARAAN_ID' => ifunsetempty($_POST,'PEMELIHARAAN_ID',''),
			'BIDANG_ID' => ifunsetempty($_POST,'BIDANG_ID', $this->session->userdata('BIDANG_ID')),
			'TAHUN' => ifunsetempty($_POST,'TAHUN', $this->session->userdata('TAHUN')),
			'PROGRAM_ID' => ifunsetempty($_POST,'PROGRAM_ID',''),
			'KEGIATAN_ID' => ifunsetempty($_POST,'KEGIATAN_ID',''),			
			'SUB_KEGIATAN_ID' => ifunsetempty($_POST,'SUB_KEGIATAN_ID',''),
			'STATUS' => (int) ifunsetempty($_POST,'STATUS', 0),
			'DATA_BARANG' => json_decode(ifunsetempty($_POST,'DATA_BARANG','[]'), true)			
		);

		if (empty($params["BIDANG_ID"]) && $this->session->userdata('BIDANG_ID')) {
			$params["BIDANG_ID"] = $this->session->userdata('BIDANG_ID');
		}

		if (empty($params["TAHUN"])) {			
			$params["TAHUN"] = date("Y");        		
		}
		
		$out = $this->M_pemeliharaan->save($params);
		
		echo json_encode($out);
	}

	function get_detail()
	{

		$params = array(
			'PEMELIHARAAN_ID' => base64_decode(ifunsetempty($_POST,'ROWID','')),			
		);
		
		
		$out = $this->M_pemeliharaan->get_detail($params);
		
		echo json_encode($out);
	}

	function delete()
	{

		$params = array(
			'PEMELIHARAAN_ID' => base64_decode(ifunsetempty($_POST,'PEMELIHARAAN_ID','')),
		);
		
		$out = $this->M_pemeliharaan->delete($params);
		
		echo json_encode($out);
	}

	public function cetak_daftar()
	{				
			$this->load->library('excel');
			
			$template = $this->config->item("template_cetak")."laporan_pemeliharaan.xlsx";		
			$objReader = PHPExcel_IOFactory::createReader('Excel2007');
			$objPHPExcel = $objReader->load($template);	

			$params = array(
				'PEMELIHARAAN_ID' => ifunsetempty($_GET,'PEMELIHARAAN_ID',''),
				'BIDANG_ID' => ifunsetempty($_GET,'BIDANG_ID', $this->session->userdata('BIDANG_ID')),
				'TAHUN' => ifunsetempty($_GET,'TAHUN', $this->session->userdata('TAHUN')),
				'PENCARIAN' => ifunsetempty($_GET,'PENCARIAN',''),		
				'STATUS' => ifunset($_GET,'STATUS', '-1'),							
			);
			if (empty($params["BIDANG_ID"]) && $this->session->userdata('BIDANG_ID')) {
				$params["BIDANG_ID"] = $this->session->userdata('BIDANG_ID');
			}
			$filterBidang = $params["BIDANG_ID"];			
			
			$tahun = $params["TAHUN"];
			if (empty($tahun)) {
				$tahun = date("Y");			
			}
						
			$bidang = $this->M_bidang->get_root();					
			
			$startIndex = 11;
			$rowIndex = $startIndex;
			$sheet = $objPHPExcel->getActiveSheet();
			$no = 1;		

			$tanggal = get_textual_month(date("m"))." ".$tahun;			
			$sheet->setCellValue('B4', "Tanggal:          ".$tanggal);
			$judul = "RENCANA KEBUTUHAN PEMELIHARAAN BARANG MILIK DAERAH (RKPBMD) PEMERINTAH KABUPATEN BANJARNEGARA TAHUN ".$tahun;
			$sheet->setCellValue('B6', $judul);
			
			foreach ($bidang->result_array() as $key => $value) {
				
				if (!empty($filterBidang) && $value["BIDANG_ID"] != substr($filterBidang, 0, strlen($value["BIDANG_ID"]))) {
					continue;
				}
				
				$params["BIDANG_ID"] = $value["BIDANG_ID"];
				$data = $this->M_pemeliharaan->get($params, true);

				
				if (count($data) > 0) {
					$data = $data;
					$dataGroup = array();

					foreach ($data as $rowGroup) {
						$keyGroup = $rowGroup["KEGIATAN_ID"].".";
						if (!empty($rowGroup["SUB_KEGIATAN_ID"])) {
							$keyGroup .= $rowGroup["SUB_KEGIATAN_ID"].".";
						}

						if(!isset($dataGroup[$keyGroup])) {
							$dataGroup[$keyGroup] = array(
								"NAMA_KEGIATAN" => $rowGroup["NAMA_KEGIATAN"],
								"PARENT_KEGIATAN" => $rowGroup["PARENT_KEGIATAN"],
								"SUB_KEGIATAN_NAMA" => $rowGroup["SUB_KEGIATAN_NAMA"],
								"KEGIATAN_ID" => $rowGroup["KEGIATAN_ID"],
								"SUB_KEGIATAN_ID" => $rowGroup["SUB_KEGIATAN_ID"],						
								"BARANG" => array()
							);
						}

						$dataGroup[$keyGroup]["BARANG"][] = $rowGroup;
					}					

					

					$dataKegiatanParent = array_filter($dataGroup, function ($row) use ($value) {
						$dataBarang = array_filter($row["BARANG"], function ($rowBarang) use ($value) {							
							return $rowBarang["BIDANG_ID"] == $value["BIDANG_ID"];
						});
						if (count($dataBarang) > 0) {
							return true;
						} else {
							return false;
						}
					});
					
					if (count($dataKegiatanParent) > 0) {			

						$sheet->setCellValue('B'.$rowIndex, $no++);
						$sheet->setCellValue('C'.$rowIndex, $value["BIDANG_NAMA"]);		
						$sheet->getStyle('B'.$rowIndex.":O".$rowIndex)->applyFromArray(
							array(
								'fill' => array(
									'type' => PHPExcel_Style_Fill::FILL_SOLID,
									'color' => array('rgb' => '92D050')
								)
							)
						);
						$sheet->getStyle('B'.$rowIndex.":I".$rowIndex)->getFont()->setBold(true);						
						$rowIndex++;

						foreach ($dataKegiatanParent as $rowKegiatanParent) {								
							$sheet->setCellValue('C'.$rowIndex, $rowKegiatanParent["PARENT_KEGIATAN"]);													
							if (!empty($rowKegiatanParent["PARENT_KEGIATAN"])) {
								$rowIndex++;
								$sheet->setCellValue('C'.$rowIndex, $rowKegiatanParent["SUB_KEGIATAN_NAMA"]);
							}
							
							$dataOutputParent = $this->M_outputsubkegiatan->get(array(
								"SUB_KEGIATAN_ID" => $rowKegiatanParent["SUB_KEGIATAN_ID"]
							));

							$countRow = $dataOutputParent->num_rows();
							if ($countRow <= count($rowKegiatanParent["BARANG"])) {
								$countRow = count($rowKegiatanParent["BARANG"]);
							}
							$dataOutputParent = $dataOutputParent->result_array();
							$rowIndex++;
							if ($countRow > 0) {									
								$sheet->setCellValue('C'.$rowIndex, "Output :");	
							}
							for ($i=0; $i < $countRow+1; $i++) { 
								
								if (isset($dataOutputParent[$i])) {											
									$sheet->setCellValue('C'.($rowIndex+1), $dataOutputParent[$i]["OUTPUT_NAMA"]);
								}

								if (isset($rowKegiatanParent["BARANG"][$i])) {										
									$rowBarang = $rowKegiatanParent["BARANG"][$i];
									$sheet->setCellValue('D'.$rowIndex, $rowBarang["BARANG_KODE"]);
									$sheet->setCellValue('E'.$rowIndex, $rowBarang["BARANG_NAMA"]);
									$sheet->setCellValue('F'.$rowIndex, $rowBarang["USULAN_JUMLAH"]);
									$sheet->setCellValue('G'.$rowIndex, $rowBarang["USULAN_SATUAN"]);
									$sheet->setCellValue('H'.$rowIndex, $rowBarang["STATUS_BARANG"]);
									$sheet->setCellValue('I'.$rowIndex, $rowBarang["KONDISI_BAIK"]);
									$sheet->setCellValue('J'.$rowIndex, $rowBarang["KONDISI_RUSAK_RINGAN"]);
									$sheet->setCellValue('K'.$rowIndex, $rowBarang["KONDISI_RUSAK_BERAT"]);
									$sheet->setCellValue('L'.$rowIndex, $rowBarang["PEMELIHARAAN_NAMA"]);
									$sheet->setCellValue('M'.$rowIndex, $rowBarang["RENCANA_JUMLAH"]);
									$sheet->setCellValue('N'.$rowIndex, $rowBarang["RENCANA_SATUAN"]);
									$sheet->setCellValue('O'.$rowIndex, $rowBarang["KETERANGAN"]);
								}

								$rowIndex++;
							}
						}				
						$rowIndex--;			
					}
				
					// Sub bidang
					$paramsBidang = array(
						"BIDANG_ID" => $value["BIDANG_ID"]
					);

					$subBidang = $this->M_bidang->get($paramsBidang);									
					
					foreach ($subBidang->result_array() as $subBidang) {									

						$dataKegiatan = array_filter($dataGroup, function ($row) use ($subBidang) {
							$dataBarang = array_filter($row["BARANG"], function ($rowBarang) use ($subBidang) {							
								return strpos($rowBarang["BIDANG_ID"], $subBidang["BIDANG_ID"]) === 0;
							});
							if (count($dataBarang) > 0) {
								return true;
							} else {
								return false;
							}
						});

						if (count($dataKegiatan) > 0) {			

							if (count($dataKegiatanParent) == 0) {								
								$sheet->setCellValue('B'.$rowIndex, $no++);
								$sheet->setCellValue('C'.$rowIndex, $value["BIDANG_NAMA"]);		
								$sheet->getStyle('B'.$rowIndex.":O".$rowIndex)->applyFromArray(
									array(
										'fill' => array(
											'type' => PHPExcel_Style_Fill::FILL_SOLID,
											'color' => array('rgb' => '92D050')
										)
									)
								);
							} 
							
							$rowIndex++;
							$sheet->getStyle('B'.$rowIndex.":O".$rowIndex)->getFont()->setBold(true);
							$sheet->setCellValue('C'.$rowIndex, $subBidang["BIDANG_NAMA"]);			
							$sheet->getStyle('B'.$rowIndex.":O".$rowIndex)->getFont()->setBold(true);	
							$rowIndex++;

							foreach ($dataKegiatan as $rowKegiatan) {								
								$sheet->setCellValue('C'.$rowIndex, $rowKegiatan["PARENT_KEGIATAN"]);													
								if (!empty($rowKegiatan["PARENT_KEGIATAN"])) {
									$rowIndex++;
									$sheet->setCellValue('C'.$rowIndex, $rowKegiatan["SUB_KEGIATAN_NAMA"]);
								}

								$dataOutput = $this->M_outputsubkegiatan->get(array(
									"SUB_KEGIATAN_ID" => $rowKegiatan["SUB_KEGIATAN_ID"]
								));

								$countRow = $dataOutput->num_rows();
								if ($countRow <= count($rowKegiatan["BARANG"])) {
									$countRow = count($rowKegiatan["BARANG"]);
								}
								$dataOutput = $dataOutput->result_array();
								$rowIndex++;
								if ($countRow > 0) {									
									$sheet->setCellValue('C'.$rowIndex, "Output :");	
								}
								for ($i=0; $i < $countRow+1; $i++) { 
									
									if (isset($dataOutput[$i])) {											
										$sheet->setCellValue('C'.($rowIndex+1), $dataOutput[$i]["OUTPUT_NAMA"]);
									}

									if (isset($rowKegiatan["BARANG"][$i])) {										
										$rowBarang = $rowKegiatan["BARANG"][$i];
										$sheet->setCellValue('D'.$rowIndex, $rowBarang["BARANG_KODE"]);
										$sheet->setCellValue('E'.$rowIndex, $rowBarang["BARANG_NAMA"]);
										$sheet->setCellValue('F'.$rowIndex, $rowBarang["USULAN_JUMLAH"]);
										$sheet->setCellValue('G'.$rowIndex, $rowBarang["USULAN_SATUAN"]);
										$sheet->setCellValue('H'.$rowIndex, $rowBarang["STATUS_BARANG"]);
										$sheet->setCellValue('I'.$rowIndex, $rowBarang["KONDISI_BAIK"]);
										$sheet->setCellValue('J'.$rowIndex, $rowBarang["KONDISI_RUSAK_RINGAN"]);
										$sheet->setCellValue('K'.$rowIndex, $rowBarang["KONDISI_RUSAK_BERAT"]);
										$sheet->setCellValue('L'.$rowIndex, $rowBarang["PEMELIHARAAN_NAMA"]);
										$sheet->setCellValue('M'.$rowIndex, $rowBarang["RENCANA_JUMLAH"]);
										$sheet->setCellValue('N'.$rowIndex, $rowBarang["RENCANA_SATUAN"]);
										$sheet->setCellValue('O'.$rowIndex, $rowBarang["KETERANGAN"]);
									}
									$rowIndex++;
								}								

							}							
						}
					}
				}

				$styleArray = array(
					'borders' => array(
						'allborders' => array(
							'style' => PHPExcel_Style_Border::BORDER_THIN
						)
					)
				);
				$sheet->getStyle('B'.$startIndex.":O".$rowIndex)->applyFromArray($styleArray);

			
			}

			$fileName = "Laporan Pemelihraan - $tahun.xlsx";
			header('Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
			header('Content-Disposition: attachment;filename="'.$fileName.'"');
			header('Cache-Control: max-age=0');
			// If you're serving to IE 9, then the following may be needed
			header('Cache-Control: max-age=1');

			// If you're serving to IE over SSL, then the following may be needed
			header ('Expires: Mon, 26 Jul 1997 05:00:00 GMT'); // Date in the past
			header ('Last-Modified: '.gmdate('D, d M Y H:i:s').' GMT'); // always modified
			header ('Cache-Control: cache, must-revalidate'); // HTTP/1.1
			header ('Pragma: public'); // HTTP/1.0

			$objWriter = PHPExcel_IOFactory::createWriter($objPHPExcel, 'Excel2007');
			$objWriter->save('php://output');
			exit;

	}

	function save_telaah()
	{

		$params = array(
			'BARANG_PEMELIHARAAN_ID' => ifunsetempty($_POST,'BARANG_PEMELIHARAAN_ID',''),
			'PEMELIHARAAN_ID' => ifunsetempty($_POST,'PEMELIHARAAN_ID',''),			
			'PEMELIHARAAN_NAMA' => ifunsetempty($_POST,'PEMELIHARAAN_NAMA',''),
			'RENCANA_JUMLAH' => ifunsetempty($_POST,'RENCANA_JUMLAH',''),
			'RENCANA_SATUAN' => ifunsetempty($_POST,'RENCANA_SATUAN',''),
			'KETERANGAN' => ifunsetempty($_POST,'KETERANGAN','')	
		);	
		
		$out = $this->M_pemeliharaan->save_telaah($params);
		
		echo json_encode($out);
	}

	public function cetak_usulan()
	{				
			$this->load->library('excel');
			
			$template = $this->config->item("template_cetak")."laporan_pemeliharaan_usulan.xlsx";		
			$objReader = PHPExcel_IOFactory::createReader('Excel2007');
			$objPHPExcel = $objReader->load($template);	
		
			$params = array(
				'PENGADAAN_ID' => ifunsetempty($_GET,'PENGADAAN_ID',''),
				'BIDANG_ID' => ifunsetempty($_GET,'BIDANG_ID', $this->session->userdata('BIDANG_ID')),
				'TAHUN' => ifunsetempty($_GET,'TAHUN', $this->session->userdata('TAHUN')),
				'PENCARIAN' => ifunsetempty($_GET,'PENCARIAN',''),		
				'STATUS' => ifunset($_GET,'STATUS', '-1'),							
			);
			if (empty($params["BIDANG_ID"]) && $this->session->userdata('BIDANG_ID')) {
				$params["BIDANG_ID"] = $this->session->userdata('BIDANG_ID');
			}
			$filterBidang = $params["BIDANG_ID"];
			
			$tahun = $params["TAHUN"];
			if (empty($tahun)) {
				$tahun = date("Y");			
			}			
			
			$bidang = $this->M_bidang->get_root();								
			
			$startIndex = 8;
			$rowIndex = $startIndex;
			$sheet = $objPHPExcel->getActiveSheet();
			$no = 1;			
		
			$sheet->setCellValue('A3', "TAHUN ".$tahun);

			$mapBarang = array(
				"C" => "BARANG_KODE",
				"D" => "BARANG_NAMA",
				"E" => "JUMLAH",
				"F" => "SATUAN",
				"G" => "STATUS_BARANG",
				"H" => "KONDISI_BAIK",
				"I" => "KONDISI_RUSAK_RINGAN",
				"J" => "KONDISI_RUSAK_BERAT",				
				"K" => "PEMELIHARAAN_NAMA",
				"L" => "USULAN_JUMLAH",
				"M" => "USULAN_SATUAN",
				"N" => "KETERANGAN",
			);
			
			$endCol = "N";
			foreach ($bidang->result_array() as $keyBidang => $value) {				
				
				if (!empty($filterBidang) && $value["BIDANG_ID"] != substr($filterBidang, 0, strlen($value["BIDANG_ID"]))) {
					continue;
				}
				$params["BIDANG_ID"] = $value["BIDANG_ID"];				

				$data = $this->M_pemeliharaan->get($params, true);
				
				$dataCetakBidang = array();
				$dataSubBidang = array();
				if ($data->num_rows() > 0) {
					$data = $data->result_array();
					$dataGroup = array();
				
					foreach ($data as $rowGroup) {
						
						if (!isset($dataGroup[$rowGroup["PROGRAM_ID"]])) {	
							
							$dataGroup[$rowGroup["PROGRAM_ID"]] = array(
								"PROGRAM_ID" => $rowGroup["PROGRAM_ID"],
								"PROGRAM_NAMA" => $rowGroup["PROGRAM_NAMA"],
								"DATA" => array(),
								"DATA_BIDANG" => array(),
								"DATA_SUB_BIDANG" => array()
							);
						}

						$dataGroup[$rowGroup["PROGRAM_ID"]]["DATA"][] = $rowGroup;

					}						

					$dataCetakBidang = $this->format_data_cetak($dataGroup, $value, false);						
					
					$paramsBidang = array(
						"BIDANG_ID" => $value["BIDANG_ID"]
					);																
					$subBidang = $this->M_bidang->get($paramsBidang)->result_array();
					foreach ($subBidang as $keySubBidang => $rowSubBidang)
					{
						$dataCetak = $this->format_data_cetak($dataGroup, $rowSubBidang);											
						$dataCetak = array_values($dataCetak);						
						if (count($dataCetak) > 0) {
							$dataSubBidang[] = $dataCetak[0];
						}


					}
				}
				
				if (count(array_values($dataCetakBidang)) == 0) {					
					// $sheet->setCellValue('A'.$rowIndex, $no++);
					$sheet->setCellValue('B'.$rowIndex, $value["BIDANG_NAMA"]);		
					$sheet->getStyle('A'.$rowIndex.":".$endCol.$rowIndex)->applyFromArray(
						array(
							'fill' => array(
								'type' => PHPExcel_Style_Fill::FILL_SOLID,
								'color' => array('rgb' => '92D050')
							)
						)
					);
					$sheet->getStyle('A'.$rowIndex.":".$endCol.$rowIndex)->getFont()->setBold(true);						
					$rowIndex++;					
				} else {
					$cetakDataBidang = $this->cetak_data($sheet, $no, $rowIndex, $dataCetakBidang, $mapBarang, true, "A", $endCol);				
					$rowIndex = $cetakDataBidang["rowIndex"];
					$no = $cetakDataBidang["no"];
				}
				
				
				$cetakDataSubBidang = $this->cetak_data($sheet, $no, $rowIndex, $dataSubBidang, $mapBarang, false, "A", $endCol);				
				$rowIndex = $cetakDataSubBidang["rowIndex"];
				$no = $cetakDataSubBidang["no"];
				
				$sheet->getStyle('A'.$startIndex.":A".$rowIndex)->getAlignment()->applyFromArray(
							array('horizontal' => PHPExcel_Style_Alignment::HORIZONTAL_CENTER)
						);

				$styleArray = array(
					'borders' => array(
						'allborders' => array(
							'style' => PHPExcel_Style_Border::BORDER_THIN
						)
					)
				);
				$sheet->getStyle('A'.$startIndex.":".$endCol.$rowIndex)->applyFromArray($styleArray);

			
			}
			
			$fileName = "Laporan Usulan Pemeliharaan - $tahun.xlsx";
			header('Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
			header('Content-Disposition: attachment;filename="'.$fileName.'"');
			header('Cache-Control: max-age=0');
			// If you're serving to IE 9, then the following may be needed
			header('Cache-Control: max-age=1');

			// If you're serving to IE over SSL, then the following may be needed
			header ('Expires: Mon, 26 Jul 2030 05:00:00 GMT'); // Date in the past
			header ('Last-Modified: '.gmdate('D, d M Y H:i:s').' GMT'); // always modified
			header ('Cache-Control: cache, must-revalidate'); // HTTP/1.1
			header ('Pragma: public'); // HTTP/1.0

			$objWriter = PHPExcel_IOFactory::createWriter($objPHPExcel, 'Excel2007');
			$objWriter->save('php://output');
			exit;

	}

	public function cetak_telaah()
	{				
			$this->load->library('excel');
			
			$template = $this->config->item("template_cetak")."laporan_pemeliharaan_telaah.xlsx";		
			$objReader = PHPExcel_IOFactory::createReader('Excel2007');
			$objPHPExcel = $objReader->load($template);	
		
			$params = array(
				'PENGADAAN_ID' => ifunsetempty($_GET,'PENGADAAN_ID',''),
				'BIDANG_ID' => ifunsetempty($_GET,'BIDANG_ID', $this->session->userdata('BIDANG_ID')),
				'TAHUN' => ifunsetempty($_GET,'TAHUN', $this->session->userdata('TAHUN')),
				'PENCARIAN' => ifunsetempty($_GET,'PENCARIAN',''),		
				'STATUS' => ifunset($_GET,'STATUS', '-1'),							
			);
			if (empty($params["BIDANG_ID"]) && $this->session->userdata('BIDANG_ID')) {
				$params["BIDANG_ID"] = $this->session->userdata('BIDANG_ID');
			}
			$filterBidang = $params["BIDANG_ID"];
			
			$tahun = $params["TAHUN"];
			if (empty($tahun)) {
				$tahun = date("Y");			
			}			
			
			$bidang = $this->M_bidang->get_root();								
			
			$startIndex = 13;
			$rowIndex = $startIndex;
			$sheet = $objPHPExcel->getActiveSheet();
			$no = 1;			
		
			$sheet->setCellValue('A3', "TAHUN ".$tahun);

			$mapBarang = array(
				"C" => "BARANG_KODE",
				"D" => "BARANG_NAMA",
				"E" => "JUMLAH",
				"F" => "SATUAN",
				"G" => "STATUS_BARANG",
				"H" => "KONDISI_BAIK",
				"I" => "KONDISI_RUSAK_RINGAN",
				"J" => "KONDISI_RUSAK_BERAT",				
				"K" => "PEMELIHARAAN_NAMA",
				"L" => "RENCANA_JUMLAH",
				"M" => "RENCANA_SATUAN",
				"N" => "KETERANGAN",
			);
			
			$endCol = "N";
			foreach ($bidang->result_array() as $keyBidang => $value) {				
				
				if (!empty($filterBidang) && $value["BIDANG_ID"] != substr($filterBidang, 0, strlen($value["BIDANG_ID"]))) {
					continue;
				}
				$params["BIDANG_ID"] = $value["BIDANG_ID"];				

				$data = $this->M_pemeliharaan->get($params, true);
				
				$dataCetakBidang = array();
				$dataSubBidang = array();
				if ($data->num_rows() > 0) {
					$data = $data->result_array();
					$dataGroup = array();
				
					foreach ($data as $rowGroup) {
						
						if (!isset($dataGroup[$rowGroup["PROGRAM_ID"]])) {	
							
							$dataGroup[$rowGroup["PROGRAM_ID"]] = array(
								"PROGRAM_ID" => $rowGroup["PROGRAM_ID"],
								"PROGRAM_NAMA" => $rowGroup["PROGRAM_NAMA"],
								"DATA" => array(),
								"DATA_BIDANG" => array(),
								"DATA_SUB_BIDANG" => array()
							);
						}

						$dataGroup[$rowGroup["PROGRAM_ID"]]["DATA"][] = $rowGroup;

					}						
					
					$dataCetakBidang = $this->format_data_cetak($dataGroup, $value, false);						
					
					$paramsBidang = array(
						"BIDANG_ID" => $value["BIDANG_ID"]
					);																
					$subBidang = $this->M_bidang->get($paramsBidang)->result_array();
					foreach ($subBidang as $keySubBidang => $rowSubBidang)
					{
						$dataCetak = $this->format_data_cetak($dataGroup, $rowSubBidang);											
						$dataCetak = array_values($dataCetak);						
						if (count($dataCetak) > 0) {
							$dataSubBidang[] = $dataCetak[0];
						}


					}
				}
				
				if (count(array_values($dataCetakBidang)) == 0) {					
					// $sheet->setCellValue('A'.$rowIndex, $no++);
					$sheet->setCellValue('B'.$rowIndex, $value["BIDANG_NAMA"]);		
					$sheet->getStyle('A'.$rowIndex.":".$endCol.$rowIndex)->applyFromArray(
						array(
							'fill' => array(
								'type' => PHPExcel_Style_Fill::FILL_SOLID,
								'color' => array('rgb' => '92D050')
							)
						)
					);
					$sheet->getStyle('A'.$rowIndex.":".$endCol.$rowIndex)->getFont()->setBold(true);						
					$rowIndex++;					
				} else {
					$cetakDataBidang = $this->cetak_data($sheet, $no, $rowIndex, $dataCetakBidang, $mapBarang, true, "A", $endCol);				
					$rowIndex = $cetakDataBidang["rowIndex"];
					$no = $cetakDataBidang["no"];
				}
				
				
				$cetakDataSubBidang = $this->cetak_data($sheet, $no, $rowIndex, $dataSubBidang, $mapBarang, false, "A", $endCol);				
				$rowIndex = $cetakDataSubBidang["rowIndex"];
				$no = $cetakDataSubBidang["no"];
				
				$sheet->getStyle('A'.$startIndex.":A".$rowIndex)->getAlignment()->applyFromArray(
							array('horizontal' => PHPExcel_Style_Alignment::HORIZONTAL_CENTER)
						);

				$styleArray = array(
					'borders' => array(
						'allborders' => array(
							'style' => PHPExcel_Style_Border::BORDER_THIN
						)
					)
				);
				$sheet->getStyle('A'.$startIndex.":".$endCol.$rowIndex)->applyFromArray($styleArray);

			
			}
			
			$fileName = "Laporan Telaah Pemeliharaan - $tahun.xlsx";
			header('Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
			header('Content-Disposition: attachment;filename="'.$fileName.'"');
			header('Cache-Control: max-age=0');
			// If you're serving to IE 9, then the following may be needed
			header('Cache-Control: max-age=1');

			// If you're serving to IE over SSL, then the following may be needed
			header ('Expires: Mon, 26 Jul 2030 05:00:00 GMT'); // Date in the past
			header ('Last-Modified: '.gmdate('D, d M Y H:i:s').' GMT'); // always modified
			header ('Cache-Control: cache, must-revalidate'); // HTTP/1.1
			header ('Pragma: public'); // HTTP/1.0

			$objWriter = PHPExcel_IOFactory::createWriter($objPHPExcel, 'Excel2007');
			$objWriter->save('php://output');
			exit;

	}

	public function cetak_final()
	{						
			$this->load->library('excel');			
			$template = $this->config->item("template_cetak")."laporan_pemeliharaan_final.xlsx";		
			$objReader = PHPExcel_IOFactory::createReader('Excel2007');
			$objPHPExcel = $objReader->load($template);	
		
			$params = array(
				'PENGADAAN_ID' => ifunsetempty($_GET,'PENGADAAN_ID',''),
				'BIDANG_ID' => ifunsetempty($_GET,'BIDANG_ID', $this->session->userdata('BIDANG_ID')),
				'TAHUN' => ifunsetempty($_GET,'TAHUN', $this->session->userdata('TAHUN')),
				'PENCARIAN' => ifunsetempty($_GET,'PENCARIAN',''),		
				'STATUS' => ifunset($_GET,'STATUS', '-1'),							
			);
			if (empty($params["BIDANG_ID"]) && $this->session->userdata('BIDANG_ID')) {
				$params["BIDANG_ID"] = $this->session->userdata('BIDANG_ID');
			}
			$filterBidang = $params["BIDANG_ID"];
			
			$tahun = $params["TAHUN"];
			if (empty($tahun)) {
				$tahun = date("Y");			
			}			
			
			$bidang = $this->M_bidang->get_root();								
			
			$startIndex = 7;
			$rowIndex = $startIndex;
			$sheet = $objPHPExcel->getActiveSheet();
			$no = 1;			
		
			$sheet->setCellValue('A2', "TAHUN ".$tahun);

			$mapBarang = array(
				"C" => "BARANG_KODE",
				"D" => "BARANG_NAMA",
				"E" => "JUMLAH",
				"F" => "SATUAN",
				"G" => "STATUS_BARANG",
				"H" => "KONDISI_BAIK",
				"I" => "KONDISI_RUSAK_RINGAN",
				"J" => "KONDISI_RUSAK_BERAT",				
				"K" => "PEMELIHARAAN_NAMA",
				"L" => "RENCANA_JUMLAH",
				"M" => "RENCANA_SATUAN",
				"N" => "KETERANGAN",
			);
			
			$endCol = "N";
			foreach ($bidang->result_array() as $keyBidang => $value) {				
				
				if (!empty($filterBidang) && $value["BIDANG_ID"] != substr($filterBidang, 0, strlen($value["BIDANG_ID"]))) {
					continue;
				}
				$params["BIDANG_ID"] = $value["BIDANG_ID"];				

				$data = $this->M_pemeliharaan->get($params, true);
				
				$dataCetakBidang = array();
				$dataSubBidang = array();
				if ($data->num_rows() > 0) {
					$data = $data->result_array();
					$dataGroup = array();
				
					foreach ($data as $rowGroup) {
						
						if (!isset($dataGroup[$rowGroup["PROGRAM_ID"]])) {	
							
							$dataGroup[$rowGroup["PROGRAM_ID"]] = array(
								"PROGRAM_ID" => $rowGroup["PROGRAM_ID"],
								"PROGRAM_NAMA" => $rowGroup["PROGRAM_NAMA"],
								"DATA" => array(),
								"DATA_BIDANG" => array(),
								"DATA_SUB_BIDANG" => array()
							);
						}

						$dataGroup[$rowGroup["PROGRAM_ID"]]["DATA"][] = $rowGroup;

					}						
					
					$dataCetakBidang = $this->format_data_cetak($dataGroup, $value, false);						
					
					$paramsBidang = array(
						"BIDANG_ID" => $value["BIDANG_ID"]
					);																
					$subBidang = $this->M_bidang->get($paramsBidang)->result_array();
					foreach ($subBidang as $keySubBidang => $rowSubBidang)
					{
						$dataCetak = $this->format_data_cetak($dataGroup, $rowSubBidang);											
						$dataCetak = array_values($dataCetak);						
						if (count($dataCetak) > 0) {
							$dataSubBidang[] = $dataCetak[0];
						}


					}
				}
				
				if (count(array_values($dataCetakBidang)) == 0) {					
					// $sheet->setCellValue('A'.$rowIndex, $no++);
					$sheet->setCellValue('B'.$rowIndex, $value["BIDANG_NAMA"]);		
					$sheet->getStyle('A'.$rowIndex.":".$endCol.$rowIndex)->applyFromArray(
						array(
							'fill' => array(
								'type' => PHPExcel_Style_Fill::FILL_SOLID,
								'color' => array('rgb' => '92D050')
							)
						)
					);
					$sheet->getStyle('A'.$rowIndex.":".$endCol.$rowIndex)->getFont()->setBold(true);						
					$rowIndex++;					
				} else {
					$cetakDataBidang = $this->cetak_data($sheet, $no, $rowIndex, $dataCetakBidang, $mapBarang, true, "A", $endCol);				
					$rowIndex = $cetakDataBidang["rowIndex"];
					$no = $cetakDataBidang["no"];
				}
				
				
				$cetakDataSubBidang = $this->cetak_data($sheet, $no, $rowIndex, $dataSubBidang, $mapBarang, false, "A", $endCol);				
				$rowIndex = $cetakDataSubBidang["rowIndex"];
				$no = $cetakDataSubBidang["no"];
				
				$sheet->getStyle('A'.$startIndex.":A".$rowIndex)->getAlignment()->applyFromArray(
							array('horizontal' => PHPExcel_Style_Alignment::HORIZONTAL_CENTER)
						);

				$styleArray = array(
					'borders' => array(
						'allborders' => array(
							'style' => PHPExcel_Style_Border::BORDER_THIN
						)
					)
				);
				$sheet->getStyle('A'.$startIndex.":".$endCol.$rowIndex)->applyFromArray($styleArray);

			
			}
			
			$fileName = "Laporan Final Pemeliharaan - $tahun.xlsx";
			header('Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
			header('Content-Disposition: attachment;filename="'.$fileName.'"');
			header('Cache-Control: max-age=0');
			// If you're serving to IE 9, then the following may be needed
			header('Cache-Control: max-age=1');

			// If you're serving to IE over SSL, then the following may be needed
			header ('Expires: Mon, 26 Jul 2030 05:00:00 GMT'); // Date in the past
			header ('Last-Modified: '.gmdate('D, d M Y H:i:s').' GMT'); // always modified
			header ('Cache-Control: cache, must-revalidate'); // HTTP/1.1
			header ('Pragma: public'); // HTTP/1.0

			$objWriter = PHPExcel_IOFactory::createWriter($objPHPExcel, 'Excel2007');
			$objWriter->save('php://output');
			exit;

	}

	public function format_data_cetak($dataGroup, $rowSubBidang, $isSubBidang = true)
	{
		$data = array();		
		foreach ($dataGroup as $rowProgram)
		{
			$dataBarang = array_filter($rowProgram["DATA"], function ($rowBarang) use ($rowSubBidang, $isSubBidang){
				if ($isSubBidang) {					
					return strpos($rowBarang["BIDANG_ID"], $rowSubBidang["BIDANG_ID"]) === 0;
				} else {
					return $rowBarang["BIDANG_ID"] == $rowSubBidang["BIDANG_ID"];
				}
			});
			
			$giProgram = $rowProgram["PROGRAM_ID"];
			$giSubId = $rowSubBidang["BIDANG_ID"];							
			if (count($dataBarang) > 0)
			{																									
				if (!isset($data[$giSubId]))
				{
					$data[$giSubId] = array(
						"ID" => $rowSubBidang["BIDANG_ID"],
						"NAMA" => $rowSubBidang["BIDANG_NAMA"],
						"PROGRAM" => array()
					);
				}
				
				if (!isset($data[$giSubId]["PROGRAM"][$giProgram]))
				{
					$data[$giSubId]["PROGRAM"][$giProgram] = array(
						"ID" => $rowProgram["PROGRAM_ID"],
						"NAMA" => $rowProgram["PROGRAM_NAMA"],
						"KEGIATAN" => array()
					);
				}

				$itemGroup = $data[$giSubId]["PROGRAM"][$giProgram];
				
				$kegiatanGroup = array_values(array_unique(array_column($dataBarang, "KEGIATAN_ID")));								
				foreach ($kegiatanGroup as $rowKegiatan) {
					$dt = array_filter($dataBarang, function ($rowBarang) use ($rowKegiatan){
						return $rowBarang["KEGIATAN_ID"] == $rowKegiatan;
					});
					if (!isset($itemGroup["KEGIATAN"][$rowKegiatan])) {
						$tempDt = array_values($dt);
						$itemGroup["KEGIATAN"][$rowKegiatan] = array(
							"ID" => $rowKegiatan,
							"NAMA" => $tempDt[0]["PARENT_KEGIATAN"],
							"OUTPUT" => array(),
							"BARANG" => array(),
							"SUB_KEGIATAN" => array()
						);
					}

					$barangKegiatan = array_filter($dt, function ($rowBarang) use ($rowKegiatan){
						return $rowBarang["KEGIATAN_ID"] == $rowKegiatan && is_null($rowBarang["SUB_KEGIATAN_NAMA"]);
					});
					
					$itemGroup["KEGIATAN"][$rowKegiatan]["BARANG"] = array_values($barangKegiatan);
					$barangSub = array();
					foreach ($dt as $rowBarang) 
					{
						if (!empty($rowBarang["SUB_KEGIATAN_ID"])) 
						{											
							if (!isset($barangSub[$rowBarang["SUB_KEGIATAN_ID"]]))
							{
								$dataOutputParent = $this->M_outputsubkegiatan->get(array(
									"SUB_KEGIATAN_ID" => $rowBarang["SUB_KEGIATAN_ID"]
								));
								
								$barangSub[$rowBarang["SUB_KEGIATAN_ID"]] = array(
									"ID" => $rowBarang["SUB_KEGIATAN_ID"],
									"NAMA" => $rowBarang["SUB_KEGIATAN_NAMA"],
									"OUTPUT" => $dataOutputParent->result_array(),
									"BARANG" => array(),
								);


							}

							$barangSub[$rowBarang["SUB_KEGIATAN_ID"]]["BARANG"][] = $rowBarang;

						}
					}

					$itemGroup["KEGIATAN"][$rowKegiatan]["SUB_KEGIATAN"] = $barangSub;
				}

				$data[$giSubId]["PROGRAM"][$giProgram] = $itemGroup;				
			}
		}	

		return $data;
	}

	protected function cetak_data($sheet, $no, $rowIndex, $data, $mapBarang, $isBidang = false, $startCol = "A", $endCol = "K")
	{		
		foreach ($data as $key => $rowSubBidang) 
		{						
			$sheet->getStyle($startCol.$rowIndex.":".$endCol.$rowIndex)->getFont()->setBold(true);
			$sheet->setCellValue('B'.$rowIndex, $rowSubBidang["NAMA"]);						
			if ($isBidang) {								
				$sheet->getStyle($startCol.$rowIndex.":".$endCol.$rowIndex)->applyFromArray(
					array(
						'fill' => array(
							'type' => PHPExcel_Style_Fill::FILL_SOLID,
							'color' => array('rgb' => '92D050')
						)
					)
				);					
			}

			$rowIndex++;					

			$noProgram = 1;				
			foreach ($rowSubBidang["PROGRAM"] as $rowProgram)
			{		
				$sheet->setCellValue($startCol.$rowIndex, strtoupper(numberToRoman($noProgram++)));
				$sheet->getStyle($startCol.$rowIndex.":".$endCol.$rowIndex)->getFont()->setBold(true);
				$sheet->setCellValue('B'.$rowIndex, $rowProgram["NAMA"]);			
				$sheet->getStyle($startCol.$rowIndex.":".$endCol.$rowIndex)->getFont()->setBold(true);	
				$rowIndex++;
				
				$noKegiatan = 1;
				foreach ($rowProgram["KEGIATAN"] as $rowKegiatan)
				{
					$sheet->setCellValue($startCol.$rowIndex, $noKegiatan++);
					$sheet->getStyle($startCol.$rowIndex.":".$endCol.$rowIndex)->getFont()->setBold(true);
					$sheet->setCellValue('B'.$rowIndex, $rowKegiatan["NAMA"]);			
					$sheet->getStyle($startCol.$rowIndex.":".$endCol.$rowIndex)->getFont()->setBold(true);	
					$rowIndex++;

					$dataOutput = $rowKegiatan["OUTPUT"];
					$dataBarang = array_values($rowKegiatan["BARANG"]);
					$countRow = count($rowKegiatan["OUTPUT"]);
					if ($countRow <= count($dataBarang)) {
						$countRow = count($dataBarang);
					}	
					
					if ($countRow > 0) {																									
						$sheet->setCellValue('B'.$rowIndex, "Output :");									
						for ($i=0; $i < $countRow+1; $i++) { 
						
							if (isset($dataOutput[$i])) {											
								$sheet->setCellValue('B'.($rowIndex+1), $dataOutput[$i]["OUTPUT_NAMA"]);
							}

							if (isset($dataBarang[$i])) {										
								$rowBarang = $dataBarang[$i];								
								foreach ($mapBarang as $keyMap => $valueMap) {									
									$sheet->setCellValue($keyMap.$rowIndex, ifunsetempty($rowBarang, $valueMap, ""));									
								}
							}

							$rowIndex++;
						}
					}

					$noSubKegiatan = 1;
					foreach ($rowKegiatan["SUB_KEGIATAN"] as $rowSubKegiatan)
					{
						$sheet->setCellValue($startCol.$rowIndex, strtoupper(numberToAlpha($noSubKegiatan++)));
						$sheet->getStyle($startCol.$rowIndex.":".$endCol.$rowIndex)->getFont()->setBold(true);
						$sheet->setCellValue('B'.$rowIndex, $rowSubKegiatan["NAMA"]);			
						$sheet->getStyle($startCol.$rowIndex.":".$endCol.$rowIndex)->getFont()->setBold(true);	
						$rowIndex++;

						$dataOutput = $rowSubKegiatan["OUTPUT"];
						$dataBarang = array_values($rowSubKegiatan["BARANG"]);
						$countRow = count($rowSubKegiatan["OUTPUT"]);
						if ($countRow <= count($dataBarang)) {
							$countRow = count($dataBarang);
						}	
						
						if ($countRow > 0) {																										
							$sheet->setCellValue('B'.$rowIndex, "Output :");									
							for ($i=0; $i < $countRow+1; $i++) { 
							
								if (isset($dataOutput[$i])) {											
									$sheet->setCellValue('B'.($rowIndex+1), $dataOutput[$i]["OUTPUT_NAMA"]);
								}

								if (isset($dataBarang[$i])) {										
									$rowBarang = $dataBarang[$i];									
									foreach ($mapBarang as $keyMap => $valueMap) {									
										$sheet->setCellValue($keyMap.$rowIndex, ifunsetempty($rowBarang, $valueMap, ""));									
									}
								}

								$rowIndex++;
							}
						}

					}

				}
			}
		}

		return array(
			"rowIndex" => $rowIndex,
			"no" => $no
		);
	}

	function get_barang_sub_kegiatan()
	{

		$params = array(
			'SUB_KEGIATANID' => base64_decode(ifunsetempty($_POST,'SUB_KEGIATANID','')),			
			'TAHUN' => ifunsetempty($_POST,'TAHUN', $this->session->userdata('TAHUN')),			
		);

		if (empty($params["BIDANG_ID"]) && $this->session->userdata('BIDANG_ID')) {
			$params["BIDANG_ID"] = $this->session->userdata('BIDANG_ID');
		}
		
		$out = $this->M_pemeliharaan->get_barang_sub_kegiatan($params);
		
		echo json_encode($out);
	}

	function save_telaah_sub_kegiatan()
	{

		$params = array(
			'DATA_BARANG_TELAAH' => json_decode(base64_decode(ifunsetempty($_POST,'DATA','')), true),				
		);	
		
		$out = $this->M_pemeliharaan->save_telaah_sub_kegiatan($params);
		
		echo json_encode($out);
	}

}