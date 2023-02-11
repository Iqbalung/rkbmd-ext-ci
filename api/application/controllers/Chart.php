<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Chart extends MY_Controller {
	function __construct(){
		parent::__construct();
		$this->load->model('M_chart');
	}
	
	function get_jk()
	{

		$params = array();
		if($this->user['PPTKIS_ID']!=''){
			$params['PPTKIS_ID'] = $this->user['PPTKIS_ID'];
		}
		$res = $this->M_chart->get_jk($params);
		$rows = array(
				array(
					'name' => 'Laki - Laki',
					'data' =>  0
					),
				array(
					'name' => 'Perempuan',
					'data' =>  0
					)
			);
		foreach ($res->result() as $key => $value) {
			if($value->JENIS_KELAMIN=='L'){
				$rows[0]['data'] = $value->JML;
			}elseif ($value->JENIS_KELAMIN=='P') {
				$rows[1]['data'] = $value->JML;
			}else{

			}
		}
		$out['data'] = $rows;
		echo json_encode($out);
	}

	function get_jabatan_populer()
	{

		$params = array();
		$params = array();
		if($this->user['PPTKIS_ID']!=''){
			$params['PPTKIS_ID'] = $this->user['PPTKIS_ID'];
		}
		$res = $this->M_chart->get_jabatan_populer($params);
		$out['data'] = $res->result();
		echo json_encode($out);
	}

	function get_total_tki()
	{

		$params = array();
		$params = array();
		if($this->user['PPTKIS_ID']!=''){
			$params['PPTKIS_ID'] = $this->user['PPTKIS_ID'];
		}
		$res = $this->M_chart->get_total_tki($params);
		$out['data'] = $res->result_array();
		$temp=array();
		$temp['ID'] = '';
		$temp['STATUS'] = 'Semua';
		$temp['JML'] = 0;
		foreach ($out['data'] as $key => $value) {
			$temp['JML'] += $value['JML'];
		}
		$newindex = count($out['data']);
		$out['data'][$newindex] = $temp;  
		echo json_encode($out);
	}

}