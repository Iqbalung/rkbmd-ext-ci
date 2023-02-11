<?php
class M_crud extends CI_Model{	
	function __construct(){
		parent::__construct();
		$this->load->database();
	}
	
	function get($table)
	{
		$data	= $this->db->get($table);
		return $data;
	}

	function get_where($table,$where,$order = array())
	{
		foreach ($order as $key => $value) {	
			$this->db->order_by($key,$value);
		}

		$this->db->select("*");
		$data	= $this->db->get_where($table,$where);
		return $data;
	}	

	function insert($table,$data)
	{
		$data = $this->db->insert($table,$data);
		return $data;		
	}

	function update($table,$data,$where)
	{
		$this->db->where($where);
		$data = $this->db->update($table,$data);
		return $data;
	}
	
	function delete($table,$where)
	{
		$this->db->where($where);
		$data = $this->db->delete($table);
		return $data;
	}
}