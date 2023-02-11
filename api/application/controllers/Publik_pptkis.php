<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Publik_pptkis extends MY_Controller {
	function __construct(){
		parent::__construct();
		$this->load->model('M_publik_pptkis');
		$this->load->model('M_chart');
	}

	public function index()
	{
		$data = array();
		$this->load->library('Template');
		$this->lang->load($this->session->userdata('language'));
		$this->template->display('inc/beranda',$data);
	}

	public function view($view_value='',$params='')
	{	
		$data = array();
		$pptkis = array(
				'PPTKIS_ID' => $params,
				'PPTKIS_NAMA' => ifunsetempty($_POST,'PPTKIS_NAMA',''),
		);

		if($view_value=='list_pptkis'){
			$pptkis = array(
				'PPTKIS_ID' => $params,
				'PPTKIS_NAMA' => ifunsetempty($_POST,'PPTKIS_NAMA',''),
				'WILAYAH_NAMA' => ifunsetempty($_POST,'WILAYAH_NAMA',''),
			);


			$data['pptkis'] = $this->M_publik_pptkis->get_pptkiss($pptkis);
		}else if($view_value=='detail_pptkis'){
			$params = $this->uri->segment(2);
			$data['detailpptkis'] = $this->M_publik_pptkis->get_detail($params);
			$data['detailfasilitas'] = $this->M_publik_pptkis->get_fasilitas($params);
			$data['satuan'] = $this->M_publik_pptkis->get_satuan($params);
			$data['jabatanpopuler'] = $this->M_chart->get_jabatan_populer($pptkis)->result();
			$data['total'] = $this->M_chart->get_total_on($pptkis)->result_array();
			$temp=array();
			$temp['ID'] = '';
			$temp['STATUS'] = 'Semua';
			$temp['JML'] = 0;
			foreach ($data['total'] as $key ) {
				$temp['JML'] += $key['JML'];
			}
				$newindex = count($data['total']);
				$data['totaltki'][$newindex] = $temp;  
			}
		
		$this->load->library('Template');
		$this->template->display('inc/'.$view_value,$data);
	}

	function get_jk()
	{
		$params = array(
			'PPTKIS_ID' => ifunsetempty($_POST,'PPTKIS_ID',''),
		);
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

	public function lookup(){  
        // process posted form data  
        $keyword = $this->input->post('term');  
        $data['response'] = 'false'; //Set default response  
        $query = $this->M_publik_pptkis->lookup($keyword); //Search DB  
        if( ! empty($query) )  
        {  
            $data['response'] = 'true'; //Set response  
            $data['message'] = array(); //Create array  
            foreach( $query as $row )  
            {  
                $data['message'][] = array(   
                                        'id'=>$row->PPTKIS_ID,  
                                        'value' => $row->PPTKIS_NAMA,  
                                        '' 
                                     );  //Add a row to array  
            }  
        }  
        if('IS_AJAX')  
        {  
            echo json_encode($data); //echo json string if ajax request  
        }  
        else 
        {  
            $this->load->view('show',$data); //Load html view of search results  
        }  
    }  

    public function lookup_wilayah(){  
        // process posted form data  
        $keyword = $this->input->post('term');  
        $data['response'] = 'false'; //Set default response  
        $query = $this->M_publik_pptkis->lookup_wilayah($keyword); //Search DB  
        if( ! empty($query) )  
        {  
            $data['response'] = 'true'; //Set response  
            $data['message'] = array(); //Create array  
            foreach( $query as $row )  
            {  
                $data['message'][] = array(   
                                        'id'=>$row->WILAYAH_ID,  
                                        'value' => $row->WILAYAH_NAMA,  
                                        '' 
                                     );  //Add a row to array  
            }  
        }  
        if('IS_AJAX')  
        {  
            echo json_encode($data); //echo json string if ajax request  
        }  
        else 
        {  
            $this->load->view('show',$data); //Load html view of search results  
        }  
    }  



}	
