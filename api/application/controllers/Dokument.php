<?php 

class Dokument extends MY_Controller
{
	
	function __construct()
	{
		parent::__construct();
		$this->load->library('upload');
		date_default_timezone_set("Asia/Bangkok");		
	}

	function save_temp()
	{		
		$insert_id = false;
		$config = array(
			'upload_path'	=> $this->config->item('upload_path').'/temp',
			'allowed_types' => $this->config->item('allowed_types'),	
			'max_size'		=> $this->config->item('max_size_file'),
		);
		$res = false;
		$data = '';
		$error = 'Preview Failed';
		$this->_clear_tempupload();
		if(!empty($_FILES['image']['name']))
		{			
			$name = $_FILES['image']['name'];
			$filename = md5($name).'_'.md5(time());
			$config['file_name'] = $filename;			
	        $this->upload->initialize($config);
    		$res = $this->upload->do_upload('image');
			$upload = $this->upload->data();					
			$params = array(								
				'file_name' => $upload['client_name'],
				'generated_name' => $filename.$upload['file_ext'],
				'date_created' => date("Y-m-d H.i.s"),
				'file_type' => $upload['file_type'],
				'size' => $upload['file_size'],
				);				
			$data = $filename.$upload['file_ext'];
			$error = $this->upload->display_errors('<p>', '</p>');
		}				
		if ($res) {
			$out = array(
				'success' => true,
				'data' => $data,
				);
		}else{
			$out = array(
				'success' => false,
				'msg' => $error,
				);
		}
		echo json_encode($out);
		
	}	
}