<?php 

/**
* 
*/
class M_user extends CI_Model
{
	
	function __construct()
	{
		parent::__construct();
		$this->load->database();
	}

	function get($params)
	{		
		$this->db->select('
			ve.*,
			cu.id UserID,
			cu.email,
			cu.UserName,
			cu.UserGroup,
			cu.Kode_Akses,
			cu.Pass,
			cu.NIK,
			ve.id as Employee_ID	
			');
		$this->db->join('c_users cu','cu.Employee_ID = ve.id AND cu.Active = 1','left');
		$this->db->like('ve.code',$params['keyword']);
		$this->db->or_like('ve.name',$params['keyword']);
		$this->db->or_like('cu.UserName',$params['keyword']);
		$this->db->or_like('cu.email',$params['keyword']);
		$this->db->order_by('ve.code');
		$res = $this->db->get("vemployee ve");
		return $res;
	}

	function tambah($user){
		$q = $this->db->insert('c_users',$user);
		return $q;
	}
	
	function ubah($user){
		$this->db->where('id',$user['id']);
		unset($user['id']);
		$q = $this->db->update('c_users',$user);
		return $q;
	}

	function hapus($user){
		$this->db->where('id',$user['id']);
		unset($user['id']);
		$q = $this->db->update('c_users',$user);
		return $q;
	}

	

}