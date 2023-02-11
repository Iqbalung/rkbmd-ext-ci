<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Registration extends Ci_Controller{

	function __construct()
	{
		parent::__construct();
	}

	function index(){
		$this->load->view('/public/shared/header');
		$this->load->view('/public/page/registration');
	}
}