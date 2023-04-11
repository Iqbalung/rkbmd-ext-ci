<?php


defined('BASEPATH') OR exit('No direct script access allowed');

class Pengadaan extends MY_Controller {
	function __construct(){
		parent::__construct();
		$this->load->model('M_pengadaan');
        
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
		
		
		$out = $this->M_pengadaan->get($params);
		
		echo json_encode($out);
	}
	
	function save()
	{

		$params = array(
			'PENGADAAN_ID' => ifunsetempty($_POST,'PENGADAAN_ID',''),
			'BIDANG_ID' => ifunsetempty($_POST,'BIDANG_ID', $this->session->userdata('BIDANG_ID')),
			'TAHUN' => ifunsetempty($_POST,'TAHUN', $this->session->userdata('TAHUN')),
			'KEGIATAN_ID' => ifunsetempty($_POST,'KEGIATAN_ID',''),
			'SUB_KEGIATAN_ID' => ifunsetempty($_POST,'SUB_KEGIATAN_ID',''),
			'STATUS' => (int) ifunsetempty($_POST,'STATUS', 0),
			'DATA_BARANG' => json_decode(ifunsetempty($_POST,'DATA_BARANG','[]'), true)			
		);

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

	public function cetak_daftar()
	{				
			$this->load->library('excel');
			
			$template = $this->config->item("template_cetak")."laporan_pengadaan.xlsx";		
			$objReader = PHPExcel_IOFactory::createReader('Excel2007');
			$objPHPExcel = $objReader->load($template);	
		
			$params = array(
				'PENGADAAN_ID' => ifunsetempty($_GET,'PENGADAAN_ID',''),
				'BIDANG_ID' => ifunsetempty($_GET,'BIDANG_ID', $this->session->userdata('BIDANG_ID')),
				'TAHUN' => ifunsetempty($_GET,'TAHUN', $this->session->userdata('TAHUN')),
				'PENCARIAN' => ifunsetempty($_GET,'PENCARIAN',''),		
				'STATUS' => ifunset($_GET,'STATUS', '-1'),							
			);
			$filterBidang = $params["BIDANG_ID"];
			
			$tahun = $params["TAHUN"];
			if (empty($tahun)) {
				$tahun = date("Y");			
			}
			
			$this->load->model(array("M_bidang", "M_outputsubkegiatan"));
			$bidang = $this->M_bidang->get_root();								
			
			$startIndex = 11;
			$rowIndex = $startIndex;
			$sheet = $objPHPExcel->getActiveSheet();
			$no = 1;			

			$tanggal = get_textual_month(date("m"))." ".$tahun;			
			$sheet->setCellValue('B4', "Tanggal:          ".$tanggal);
			$judul = "RENCANA KEBUTUHAN BARANG MILIK DAERAH (RKBMD) PEMERINTAH KABUPATEN BANJARNEGARA TAHUN ".$tahun;
			$sheet->setCellValue('B6', $judul);

			foreach ($bidang->result_array() as $key => $value) {				
				
				if (!empty($filterBidang) && $value["BIDANG_ID"] != substr($filterBidang, 0, strlen($value["BIDANG_ID"]))) {
					continue;
				}

				$params["BIDANG_ID"] = $value["BIDANG_ID"];
				$data = $this->M_pengadaan->get($params, true);
				
				if ($data->num_rows() > 0) {
					$data = $data->result_array();
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
						$sheet->getStyle('B'.$rowIndex.":I".$rowIndex)->applyFromArray(
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
									$sheet->setCellValue('F'.$rowIndex, $rowBarang["JUMLAH"]);
									$sheet->setCellValue('G'.$rowIndex, $rowBarang["SATUAN"]);
									$sheet->setCellValue('H'.$rowIndex, $rowBarang["CARA_PEMENUHAN"]);
									$sheet->setCellValue('I'.$rowIndex, $rowBarang["KETERANGAN"]);
								}

								$rowIndex++;
							}
						}				
						$rowIndex--;			
					}



					// Sub Bidang
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
								$sheet->getStyle('B'.$rowIndex.":I".$rowIndex)->applyFromArray(
									array(
										'fill' => array(
											'type' => PHPExcel_Style_Fill::FILL_SOLID,
											'color' => array('rgb' => '92D050')
										)
									)
								);
							} 
							
							$rowIndex++;
							$sheet->getStyle('B'.$rowIndex.":I".$rowIndex)->getFont()->setBold(true);
							$sheet->setCellValue('C'.$rowIndex, $subBidang["BIDANG_NAMA"]);			
							$sheet->getStyle('B'.$rowIndex.":I".$rowIndex)->getFont()->setBold(true);	
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
										$sheet->setCellValue('F'.$rowIndex, $rowBarang["JUMLAH"]);
										$sheet->setCellValue('G'.$rowIndex, $rowBarang["SATUAN"]);
										$sheet->setCellValue('H'.$rowIndex, $rowBarang["CARA_PEMENUHAN"]);
										$sheet->setCellValue('I'.$rowIndex, $rowBarang["KETERANGAN"]);
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
				$sheet->getStyle('B'.$startIndex.":I".$rowIndex)->applyFromArray($styleArray);

			
			}

			$fileName = "Laporan Pengadaan - $tahun.xlsx";
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

	

}