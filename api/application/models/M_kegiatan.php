<?php
class M_kegiatan extends CI_Model{

	function __construct()
	{
		parent::__construct();
		$this->load->database();
	}
	
	function get($params)
	{
		$paramsWhere = array();
		$where = " 1 = 1";
		if(isset($params['KEGIATAN_NAMA'])){
			$where .= " AND a.KEGIATAN LIKE ? ";
			$paramsWhere[] = "%".$params['KEGIATAN_NAMA']."%";
		}

		if(isset($params['JABATAN_ID'])){
			$where .= " AND c.JABATAN_ID = ? ";
			$paramsWhere[] = $params['JABATAN_ID'];
		}

		if(isset($params['BIDANG_ID'])){
			$where .= " AND b.BIDANG_ID like ? ";
			$paramsWhere[] = $params['BIDANG_ID']."%";
		}

		if(isset($params['KEGIATAN_SLUG'])){
			$where .= " AND a.KEGIATAN_SLUG = ? ";
			$paramsWhere[] = $params['KEGIATAN_SLUG'];
		}


		if(isset($params['TAHUN']) && !empty($params['TAHUN'])){
			$where .= " AND a.TAHUN = ? ";
			$paramsWhere[] = $params['TAHUN'];
		}

		if(isset($params['PROGRAM_ID']) && !empty($params['PROGRAM_ID'])){
			$where .= " AND a.PROGRAM_ID = ? ";
			$paramsWhere[] = $params['PROGRAM_ID'];
		}

		$q = $this->db->query("SELECT * FROM MASTER_KEGIATAN AS a 
					LEFT JOIN MASTER_BIDANG AS b ON a.BIDANG_ID = b.BIDANG_ID 
					LEFT JOIN MASTER_PROGRAM AS p ON a.PROGRAM_ID = p.PROGRAM_ID 
			WHERE $where ", $paramsWhere);
		return $q;
	}
	
	function add($params)
	{
		unset($params['UPDATE']);
		$res = $this->db->insert('MASTER_KEGIATAN' , $params); 
		return $res;
	}

	function addkomjab($params){
		
		$res = $this->db->insert('KEGIATAN_JABATAN',$params); 
		return $res;
	}

	function upd($params)
	{
		$this->db->where('KEGIATAN_ID',$params['KEGIATAN_ID']);
		unset($params['UPDATE']);
		$res = $this->db->update("MASTER_KEGIATAN", $params);
		return $res;
	}

	function del($params)
	{
		$res = $this->db->query("
			DELETE FROM MASTER_KEGIATAN
			where KEGIATAN_ID = '".$params['KEGIATAN_ID']."'
		");
		return $res;
	}

	function get_tree($params)
	{

		try {
			$where = "";
			if(isset($params['TIPE']) && $params['TIPE'] == "SUB") {

				$paramsWhere = array();
				$where = " 1 = 1 ";

				if(isset($params['ID']) && !empty($params['ID'])){
					$where .= " AND k.KEGIATAN_ID = ? ";
					$paramsWhere[] = $params['ID'];
				}

				if(isset($params['TAHUN']) && !empty($params['TAHUN'])){
					$where .= " AND k.TAHUN = ? ";
					$paramsWhere[] = $params['TAHUN'];
				}

				$res = $this->db->query("
					select
						k.KEGIATAN_ID as ID,
						k.SUB_KEGIATAN_ID as KEGIATAN_ID,
						k.SUB_KEGIATAN_NAMA as KEGIATAN_NAMA,
						0 as JML_SUB,
						'SUB' as TIPE,						
						p.KEGIATAN_ID as PARENT_KEGIATAN_ID,
						p.KEGIATAN_NAMA as PARENT_KEGIATAN_NAMA
					from
						MASTER_SUB_KEGIATAN k
					left join MASTER_KEGIATAN p on p.KEGIATAN_ID = k.KEGIATAN_ID
					where $where
				", $paramsWhere);	
				
			} else {
				$paramsWhere = array();
				$where = " 1 = 1 ";

				if(isset($params['BIDANG_ID']) && !empty($params['BIDANG_ID'])){
					$where .= " AND k.BIDANG_ID like ? ";
					$paramsWhere[] = $params['BIDANG_ID'].'%';
				}

				if(isset($params['PROGRAM_ID']) && !empty($params['PROGRAM_ID'])){
					$where .= " AND k.PROGRAM_ID = ? ";
					$paramsWhere[] = $params['PROGRAM_ID'];
				}				

				if(isset($params['TAHUN']) && !empty($params['TAHUN'])){
					$where .= " AND k.TAHUN = ? ";
					$paramsWhere[] = $params['TAHUN'];
				}

				$res = $this->db->query("
					select
						k.KEGIATAN_ID as ID,
						k.KEGIATAN_ID,
						k.KEGIATAN_NAMA,
						(select count(x.KEGIATAN_ID) from MASTER_SUB_KEGIATAN as x where x.KEGIATAN_ID = k.KEGIATAN_ID) as JML_SUB,
						'KEGIATAN' as TIPE
					from
						MASTER_KEGIATAN k
					where $where
				", $paramsWhere);			
			}

			$data = array();
			
			foreach ($res->result_array() as $key => $value) {
				$value["leaf"] = true;
				if ($value["JML_SUB"] > 0) {
					$value["leaf"] = false;
				}
				$data[] = $value;
			}

			return array(
				"success" => true,
				"items" => $data,
				"error" => []
			);			
		} catch (\Throwable $th) {			
			return array(
				"success" => false,
				"data" => null,
				"error" => $th
			);;
		}
	}

	

}