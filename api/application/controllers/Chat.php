<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Chat extends MY_Controller {
	function __construct(){
		parent::__construct();
		$this->load->library('upload');
		$this->load->model('M_chat');
	}
	
	function gettitlehelp()
	{
		$params = array(
			'PEKERJA_ID' => $this->session->userdata('ID'),
			'PEKERJA_ID' => $this->session->userdata('ID'),
			'URG' => $this->session->userdata('USERGROUP_ID'),
			'HELP_JUDUL' => ifunsetempty($_POST,'HELP_JUDUL',''),
			
		);

		$res = $this->M_chat->gettitle($params);		
		$out = array(
					'items' => $res->result(),
				);
		echo json_encode($out);
		
	}

	function getchathelp()
	{
		$params = array(
			'PEKERJA_ID' => $this->session->userdata('ID'),
			'HELP_ID' 	=> ifunsetempty($_POST,'HELP_ID',''),
		);
		$res = $this->M_chat->getchat($params);		
		$out = array(
					'items' => $res->result(),
				);
		echo json_encode($out);
		
	}

	function addhelpchat()
	{
		$params = array(
			'PENGIRIM_ID' => $this->session->userdata('ID'),
			'HELP_ID' 	=> ifunsetempty($_POST,'HELP_ID',''),
			'CHAT_TEXT' 	=> ifunsetempty($_POST,'CHAT_TEXT','')	,
		);

		$res = $this->M_chat->addchat($params);		
	}

	function addhelptitle()
	{
		$title = array(
			'HELP_JUDUL'	=> ifunsetempty($_POST,'HELP_JUDUL',''),
			'PEKERJA_ID' 	=> $this->session->userdata('ID'),
		);

		$res = $this->M_chat->addtitlehelp($title);
		$id =  $this->db->insert_id();
		$chathelp = array(
			'CHAT_TEXT' 	=>ifunsetempty($_POST,'CHAT_TEXT',''),
			'PENGIRIM_ID' 	=> $this->session->userdata('ID'),
			'HELP_ID' 		=> $id,
		);
		
		$res = $this->M_chat->addchat($chathelp);
		if($res){
					$out = array(
						'success' => true,
						'msg' => 'Berhasil Mengirim Topik Pertanyaan' 
					);
				}
		echo json_encode($out);
		
	}


	

	


}