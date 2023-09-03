<?php


defined('BASEPATH') OR exit('No direct script access allowed');

class Pengadaan extends MY_Controller {

	private $usergroupAdmin = "1";
	private $usergroupTelaah = "2";
	private $usergroupOPD = "3";

	function __construct(){
		parent::__construct();
		$this->load->model('M_pengadaan');
		$this->load->model(array("M_bidang", "M_outputsubkegiatan", "M_program"));        
	}

	function get()
	{

		$params = array(
			'PENGADAAN_ID' => ifunsetempty($_POST,'PENGADAAN_ID',''),
			'BIDANG_ID' => ifunsetempty($_POST,'BIDANG_ID', $this->session->userdata('BIDANG_ID')),
			'TAHUN' => ifunsetempty($_POST,'TAHUN', $this->session->userdata('TAHUN')),
			'PENCARIAN' => ifunsetempty($_POST,'PENCARIAN',''),		
			'STATUS' => ifunset($_POST,'STATUS', '-1'),							
		);

		if (empty($params["BIDANG_ID"]) && $this->session->userdata('BIDANG_ID')) {
			$params["BIDANG_ID"] = $this->session->userdata('BIDANG_ID');
		}
		
		$out = $this->M_pengadaan->get($params);
		
		echo json_encode($out);
	}
	
	function save()
	{

		$params = array(
			'PENGADAAN_ID' => ifunsetempty($_POST,'PENGADAAN_ID',''),
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
		
		$out = $this->M_pengadaan->save($params);
		
		echo json_encode($out);
	}

	function get_detail()
	{

		$params = array(
			'PENGADAAN_ID' => base64_decode(ifunsetempty($_POST,'ROWID','')),			
		);
				
		$out = $this->M_pengadaan->get_detail($params);
		
		echo json_encode($out);
	}

	function delete()
	{

		$params = array(
			'PENGADAAN_ID' => base64_decode(ifunsetempty($_POST,'PENGADAAN_ID','')),
		);
		
		
		$out = $this->M_pengadaan->delete($params);
		
		echo json_encode($out);
	}

	public function cetak_usulan()
	{				
			$this->load->library('excel');
			
			$template = $this->config->item("template_cetak")."laporan_pengadaan_usulan.xlsx";		
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
				"G" => "KEBUTUHAN_MAKSIMUM_JUMLAH",
				"H" => "KEBUTUHAN_MAKSIMUM_SATUAN",
				"I" => "KEBUTUHAN_RIIL_JUMLAH",
				"J" => "KEBUTUHAN_RIIL_SATUAN",				
				"K" => "KETERANGAN"
			);
			
			foreach ($bidang->result_array() as $keyBidang => $value) {				
				
				if (!empty($filterBidang) && $value["BIDANG_ID"] != substr($filterBidang, 0, strlen($value["BIDANG_ID"]))) {
					continue;
				}
				$params["BIDANG_ID"] = $value["BIDANG_ID"];				

				$data = $this->M_pengadaan->get($params, true);
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
					$sheet->getStyle('A'.$rowIndex.":K".$rowIndex)->applyFromArray(
						array(
							'fill' => array(
								'type' => PHPExcel_Style_Fill::FILL_SOLID,
								'color' => array('rgb' => '92D050')
							)
						)
					);
					$sheet->getStyle('A'.$rowIndex.":K".$rowIndex)->getFont()->setBold(true);						
					$rowIndex++;					
				} else {
					$cetakDataBidang = $this->cetak_data($sheet, $no, $rowIndex, $dataCetakBidang, $mapBarang, true);				
					$rowIndex = $cetakDataBidang["rowIndex"];
					$no = $cetakDataBidang["no"];
				}
				
				
				$cetakDataSubBidang = $this->cetak_data($sheet, $no, $rowIndex, $dataSubBidang, $mapBarang);				
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
				$sheet->getStyle('A'.$startIndex.":K".$rowIndex)->applyFromArray($styleArray);

			
			}
		

			$usergroupId = $this->session->userdata("USERGROUP_ID");			
			$cetakTtd = false;
			$cetakParaf = true;
			
			if ($usergroupId == $this->usergroupAdmin) {
				$cetakTtd = true;
			}						

			if ($usergroupId == $this->usergroupOPD) {
				$cetakTtd = true;
				$cetakParaf = false;
			}

			$pejabatOpd = $this->M_bidang->get_pejabat($filterBidang);		
			
			
			$this->footerTelahDiperiksa($rowIndex, $sheet, $cetakParaf, $cetakTtd, $pejabatOpd, array(
				"col_ttd" => "H",
				"col_ttd2" => "K"
			));
			
			$fileName = "Laporan Usulan Pengadaan - $tahun.xlsx";
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
		$template = $this->config->item("template_cetak")."laporan_pengadaan_telaah.xlsx";		
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
	
		$sheet->setCellValue('A4', "TAHUN ".$tahun);

		$mapBarang = array(
			"C" => "BARANG_KODE",
			"D" => "BARANG_NAMA",
			"E" => "JUMLAH",
			"F" => "SATUAN",
			"G" => "KEBUTUHAN_MAKSIMUM_JUMLAH",
			"H" => "KEBUTUHAN_MAKSIMUM_SATUAN",
			"I" => "KEBUTUHAN_RIIL_JUMLAH",
			"J" => "KEBUTUHAN_RIIL_SATUAN",				
			"K" => "RENCANA_DISETUJUI_JUMLAH",
			"L" => "RENCANA_DISETUJUI_SATUAN",				
			"M" => "CARA_PEMENUHAN",
			"N" => "KETERANGAN"
		);
		$endCol = "N";
		foreach ($bidang->result_array() as $keyBidang => $value) {				
			
			if (!empty($filterBidang) && $value["BIDANG_ID"] != substr($filterBidang, 0, strlen($value["BIDANG_ID"]))) {
				continue;
			}
			$params["BIDANG_ID"] = $value["BIDANG_ID"];				

			$data = $this->M_pengadaan->get($params, true);
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
		
		$pejabatOpd = $this->M_bidang->get_pejabat($filterBidang);		
		

		$this->footerTelahDiperiksa($rowIndex, $sheet, true, true, $pejabatOpd);

		$fileName = "Laporan Telaah Pengadaan - $tahun.xlsx";
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
			
			$template = $this->config->item("template_cetak")."laporan_pengadaan_final.xlsx";		
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
				"E" => "RENCANA_DISETUJUI_JUMLAH",
				"F" => "RENCANA_DISETUJUI_SATUAN",				
				"G" => "CARA_PEMENUHAN",
				"H" => "KETERANGAN"
			);
			$endCol = "H";
			foreach ($bidang->result_array() as $keyBidang => $value) {				
				
				if (!empty($filterBidang) && $value["BIDANG_ID"] != substr($filterBidang, 0, strlen($value["BIDANG_ID"]))) {
					continue;
				}
				$params["BIDANG_ID"] = $value["BIDANG_ID"];				

				$data = $this->M_pengadaan->get($params, true);
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
			
			$this->footerTelahDiperiksa($rowIndex, $sheet);

			$fileName = "Laporan Final Pengadaan - $tahun.xlsx";
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

	private function footerTelahDiperiksa($rowIndex, $sheet, $isParaf = true, $isTtd = false, $pejabat = array(), $conf = array())
	{

		$colTdd = "J";
		$colTdd2 = "M";

		if(is_array($conf)) {
			$colTdd = ifunsetempty($conf, "col_ttd", "J");
			$colTdd2 = ifunsetempty($conf, "col_ttd2", "M");
		}


		$rowIndex = $rowIndex+2;

		if ($isParaf) {			
			$sheet->setCellValue('A'.$rowIndex, "Telah diperiksa");
		}

		if ($isTtd) {
			$sheet->mergeCells($colTdd.$rowIndex.':'.$colTdd2.$rowIndex);
			$sheet->setCellValue($colTdd.$rowIndex, "Banjarnegara, ". create_time_indonesia2(date("d/m/Y")));
		}

		$rowIndex++;
		if ($isTtd) {
			$sheet->mergeCells($colTdd.$rowIndex.':'.$colTdd2.$rowIndex);
			$sheet->setCellValue($colTdd.$rowIndex, "Disetujui, ");
		}
		$rowIndex++;

		if ($isTtd) {
			$sheet->mergeCells($colTdd.$rowIndex.':'.$colTdd2.$rowIndex);
			$sheet->setCellValue($colTdd.$rowIndex, "Penggunaa Barang Milik Daerah");
		}

		$startFooter = $rowIndex;

		if ($isParaf) {
			$sheet->setCellValue('A'.$rowIndex, "No");
			$sheet->setCellValue('B'.$rowIndex, "Nama");
			$sheet->setCellValue('C'.$rowIndex, "Jabatan");
			$sheet->setCellValue('D'.$rowIndex, "Tgl");
			$sheet->setCellValue('E'.$rowIndex, "Paraf");
		}

		for ($i=1; $i <= 2; $i++) { 
			$rowIndex++;

			if ($isParaf) {
				$sheet->getRowDimension($rowIndex)->setRowHeight(40);
				$sheet->getStyle('A'.$rowIndex)->getAlignment()->setVertical(PHPExcel_Style_Alignment::VERTICAL_TOP);
				$sheet->setCellValue('A'.$rowIndex, $i);
			}
		}

		if ($isParaf) {
			$styleArray = array(
				'borders' => array(
					'allborders' => array(
						'style' => PHPExcel_Style_Border::BORDER_THIN
					)
				)
			);
			
			$sheet->getStyle('A'.$startFooter.":E".$rowIndex)->applyFromArray($styleArray);
		}
		
		if ($isTtd) {
			// $sheet->mergeCells($colTdd.($rowIndex-1).':'.$colTdd2.$rowIndex);			
			$rowIndex++;
			$sheet->mergeCells($colTdd.$rowIndex.':'.$colTdd2.$rowIndex);
			$sheet->setCellValue($colTdd.$rowIndex, $pejabat["NAMA"]);
			$rowIndex++;
			$sheet->mergeCells($colTdd.$rowIndex.':'.$colTdd2.$rowIndex);
			$sheet->setCellValue($colTdd.$rowIndex, "NIP." . $pejabat["NIP"]);
			$sheet->getStyle($colTdd.($startFooter-2).":J".$rowIndex)->getAlignment()->applyFromArray(
				array('horizontal' => PHPExcel_Style_Alignment::HORIZONTAL_CENTER)
			);
		}


		return $rowIndex;
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

	function save_telaah()
	{

		$params = array(
			'BARANG_PENGADAAN_ID' => ifunsetempty($_POST,'BARANG_PENGADAAN_ID',''),
			'PENGADAAN_ID' => ifunsetempty($_POST,'PENGADAAN_ID',''),			
			'RENCANA_DISETUJUI_JUMLAH' => ifunsetempty($_POST,'RENCANA_DISETUJUI_JUMLAH',''),
			'RENCANA_DISETUJUI_SATUAN' => ifunsetempty($_POST,'RENCANA_DISETUJUI_SATUAN',''),
			'CARA_PEMENUHAN' => ifunsetempty($_POST,'CARA_PEMENUHAN',''),
			'KETERANGAN' => ifunsetempty($_POST,'KETERANGAN','')			
		);	
		
		$out = $this->M_pengadaan->save_telaah($params);
		
		echo json_encode($out);
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
		
		$out = $this->M_pengadaan->get_barang_sub_kegiatan($params);
		
		echo json_encode($out);
	}	

	function save_telaah_sub_kegiatan()
	{

		$params = array(
			'DATA_BARANG_TELAAH' => json_decode(base64_decode(ifunsetempty($_POST,'DATA','')), true),				
		);	
		
		$out = $this->M_pengadaan->save_telaah_sub_kegiatan($params);
		
		echo json_encode($out);
	}
	

}