<?php


defined('BASEPATH') OR exit('No direct script access allowed');

class Pemanfaatan extends MY_Controller {
	function __construct(){
		parent::__construct();
		$this->load->model('M_pemanfaatan');
        
	}

	function get()
	{

		$params = array(
			'PEMANFAATAN_ID' => ifunsetempty($_POST,'PEMANFAATAN_ID',''),
			'BIDANG_ID' => ifunsetempty($_POST,'BIDANG_ID', $this->session->userdata('BIDANG_ID')),
			'TAHUN' => ifunsetempty($_POST,'TAHUN', $this->session->userdata('TAHUN')),
			'PENCARIAN' => ifunsetempty($_POST,'PENCARIAN',''),		
			'STATUS' => ifunset($_POST,'STATUS', '-1'),							
		);
		if (empty($params["BIDANG_ID"]) && $this->session->userdata('BIDANG_ID')) {
			$params["BIDANG_ID"] = $this->session->userdata('BIDANG_ID');
		}
		
		$out = $this->M_pemanfaatan->get($params);
		
		echo json_encode($out);
	}
	
	function save()
	{

		$params = array(
			'PEMANFAATAN_ID' => ifunsetempty($_POST,'PEMANFAATAN_ID',''),
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
		
		$out = $this->M_pemanfaatan->save($params);
		
		echo json_encode($out);
	}

	function get_detail()
	{

		$params = array(
			'PEMANFAATAN_ID' => base64_decode(ifunsetempty($_POST,'ROWID','')),			
		);
				
		$out = $this->M_pemanfaatan->get_detail($params);
		
		echo json_encode($out);
	}

	function delete()
	{

		$params = array(
			'PEMANFAATAN_ID' => base64_decode(ifunsetempty($_POST,'PEMANFAATAN_ID','')),
		);
		
		
		$out = $this->M_pemanfaatan->delete($params);
		
		echo json_encode($out);
	}

	public function cetak_daftar()
	{				
			$this->load->library('excel');
			
			$template = $this->config->item("template_cetak")."laporan_pemanfaatan.xlsx";		
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

			$this->load->model("M_bidang");
			$bidang = $this->M_bidang->get_root();					
			
			$startIndex = 12;
			$rowIndex = $startIndex;
			$sheet = $objPHPExcel->getActiveSheet();
			$no = 1;		

			$tanggal = get_textual_month(date("m"))." ".$tahun;			
			$sheet->setCellValue('B4', "Tanggal:          ".$tanggal);
			$judul = "RENCANA PEMANFAATAN  BARANG MILIK DAERAH PEMERINTAH KABUPATEN BANJARNEGARA TAHUN ".$tahun;
			$sheet->setCellValue('B6', $judul);
				
			foreach ($bidang->result_array() as $key => $value) {
				
				if (!empty($filterBidang) && $value["BIDANG_ID"] != substr($filterBidang, 0, strlen($value["BIDANG_ID"]))) {
					continue;
				}

				$params["BIDANG_ID"] = $value["BIDANG_ID"];
				$data = $this->M_pemanfaatan->get($params, true);

				$sheet->setCellValue('B'.$rowIndex, $no++);
				$sheet->setCellValue('C'.$rowIndex, $value["BIDANG_NAMA"]);		
				$sheet->getStyle('B'.$rowIndex.":F".$rowIndex)->applyFromArray(
					array(
						'fill' => array(
							'type' => PHPExcel_Style_Fill::FILL_SOLID,
							'color' => array('rgb' => '92D050')
						)
					)
				);
				$sheet->getStyle('B'.$rowIndex.":F".$rowIndex)->getFont()->setBold(true);
				$rowIndex++;
				if ($data->num_rows() > 0) {
					$data = $data->result_array();								
					
					foreach ($data as $rowBarang) {						
						$sheet->setCellValue('C'.$rowIndex, $rowBarang["BARANG_NAMA"]);
						$sheet->setCellValue('D'.$rowIndex, $rowBarang["JENIS_KIB"]);
						$sheet->setCellValue('E'.$rowIndex, $rowBarang["RENCANA_PEMANFAATAN"]);
						$sheet->setCellValue('F'.$rowIndex, $rowBarang["KETERANGAN"]);						
						$rowIndex++;
					}					
				}

				$styleArray = array(
					'borders' => array(
						'allborders' => array(
							'style' => PHPExcel_Style_Border::BORDER_THIN
						)
					)
				);
				$sheet->getStyle('B'.$startIndex.":F".$rowIndex)->applyFromArray($styleArray);
			}

			
			
			$fileName = "Laporan Pemanfaatan - $tahun.xlsx";
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

			exit;

	}

	

}