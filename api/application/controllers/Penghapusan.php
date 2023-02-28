<?php


defined('BASEPATH') OR exit('No direct script access allowed');

class Penghapusan extends MY_Controller {
	function __construct(){
		parent::__construct();
		$this->load->model('M_penghapusan');
        
	}

	function get()
	{

		$params = array(
			'PENGHAPUSAN_ID' => ifunsetempty($_POST,'PENGHAPUSAN_ID',''),
			'BIDANG_ID' => ifunsetempty($_POST,'BIDANG_ID', $this->session->userdata('BIDANG_ID')),
			'TAHUN' => ifunsetempty($_POST,'TAHUN', $this->session->userdata('TAHUN')),
			'PENCARIAN' => ifunsetempty($_POST,'PENCARIAN',''),	
			'STATUS' => ifunset($_POST,'STATUS', '-1'),								
		);
		
		
		$out = $this->M_penghapusan->get($params);
		
		echo json_encode($out);
	}
	
	function save()
	{

		$params = array(
			'PENGHAPUSAN_ID' => ifunsetempty($_POST,'PENGHAPUSAN_ID',''),
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
		
		$out = $this->M_penghapusan->save($params);
		
		echo json_encode($out);
	}

	function get_detail()
	{

		$params = array(
			'PENGHAPUSAN_ID' => base64_decode(ifunsetempty($_POST,'ROWID','')),			
		);
		
		
		$out = $this->M_penghapusan->get_detail($params);
		
		echo json_encode($out);
	}

	public function cetak_daftar()
	{				
			$this->load->library('excel');			
			$template = $this->config->item("template_cetak")."laporan_penghapusan.xlsx";		
			$objReader = PHPExcel_IOFactory::createReader('Excel2007');
			$objPHPExcel = $objReader->load($template);	

			$params = array(
				'PENGADAAN_ID' => ifunsetempty($_POST,'PENGADAAN_ID',''),
				'BIDANG_ID' => ifunsetempty($_POST,'BIDANG_ID', $this->session->userdata('BIDANG_ID')),
				'TAHUN' => ifunsetempty($_POST,'TAHUN', $this->session->userdata('TAHUN')),
				'PENCARIAN' => ifunsetempty($_POST,'PENCARIAN',''),		
				'STATUS' => ifunset($_POST,'STATUS', '-1'),							
			);

			$tahun = $params["TAHUN"];
			if (empty($tahun)) {
				$tahun = date("Y");			
			}

			$this->load->model("M_bidang");
			$bidang = $this->M_bidang->get_root();					
			
			$startIndex = 11;
			$rowIndex = $startIndex;
			$sheet = $objPHPExcel->getActiveSheet();
			$no = 1;		

			$tanggal = get_textual_month(date("m"))." ".$tahun;			
			$sheet->setCellValue('B4', "Tanggal:          ".$tanggal);
			$judul = "RENCANA PEMINDAHTANGANAN DAN PENGHAPUSAN  BARANG MILIK DAERAH TAHUN ".$tahun;
			$sheet->setCellValue('B6', $judul);
				
			foreach ($bidang->result_array() as $key => $value) {
				

				$params["BIDANG_ID"] = $value["BIDANG_ID"];
				$data = $this->M_penghapusan->get($params, true);

				$sheet->setCellValue('B'.$rowIndex, $no++);
				$sheet->setCellValue('C'.$rowIndex, $value["BIDANG_NAMA"]);		
				$sheet->getStyle('B'.$rowIndex.":N".$rowIndex)->applyFromArray(
					array(
						'fill' => array(
							'type' => PHPExcel_Style_Fill::FILL_SOLID,
							'color' => array('rgb' => '92D050')
						)
					)
				);
				$sheet->getStyle('B'.$rowIndex.":N".$rowIndex)->getFont()->setBold(true);
				$rowIndex++;
				if ($data->num_rows() > 0) {
					$data = $data->result_array();								
					
					foreach ($data as $rowBarang) {						
						$sheet->setCellValue('C'.$rowIndex, $rowBarang["BARANG_KODE"]);
						$sheet->setCellValue('D'.$rowIndex, $rowBarang["NO_REGISTER"]);
						$sheet->setCellValue('E'.$rowIndex, $rowBarang["BARANG_NAMA"]);
						$sheet->setCellValue('F'.$rowIndex, $rowBarang["MERK"]);
						$sheet->setCellValue('G'.$rowIndex, $rowBarang["NO_SERI"]);
						$sheet->setCellValue('H'.$rowIndex, $rowBarang["TAHUN_PEROLEHAN"]);
						$sheet->setCellValue('I'.$rowIndex, $rowBarang["ASAL_PEROLEHAN"]);
						$sheet->setCellValue('J'.$rowIndex, $rowBarang["JUMLAH"]);
						$sheet->setCellValue('K'.$rowIndex, $rowBarang["HARGA"]);
						$sheet->setCellValue('L'.$rowIndex, $rowBarang["RENCANA_PEMINDAHTANGANAN"]);
						$sheet->setCellValue('M'.$rowIndex, $rowBarang["RENCANA_PENGHAPUSAN"]);
						$sheet->setCellValue('N'.$rowIndex, $rowBarang["KETERANGAN"]);
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
				$sheet->getStyle('B'.$startIndex.":N".$rowIndex)->applyFromArray($styleArray);
				
			}

			
			
			$fileName = "Laporan Penghapusan - $tahun.xlsx";
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