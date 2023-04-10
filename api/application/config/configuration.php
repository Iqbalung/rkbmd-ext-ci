<?php
defined('BASEPATH') OR exit('No direct script access allowed');

$config['path'] = str_replace('\\', '/', FCPATH);
$config['path_service_library'] = $config['path'].'application/controllers/service_library/';
$config['path_report_file'] = $config['path'].'application/views/report/';
$config['allowed_types'] 	= '*';
$config['upload_path'] = FCPATH2."uploads";
$config['service_url'] = "http://karya-inovasi.com/beta-rkbmdapp/api/";