<?php
class M_master_barang extends CI_Model{

	function __construct()
	{
		parent::__construct();
		$this->load->database();
	}
	
	function get($params)
	{
		$paramsWhere = array();
		$where = " 1 = 1";
		
		if(isset($params['BARANG_NAMA'])){
			$where .= "AND MASTER_BARANG LIKE ? ";
			$paramsWhere[] = "%".$params['BARANG_NAMA']."%";
		}

		if(isset($params['query'])){
			$where .= " AND (BARANG_NAMA LIKE ? OR BARANG_CODE LIKE ? OR BARANG_SATUAN LIKE ?) ";
			$paramsWhere[] = "%".$params['query']."%";
			$paramsWhere[] = "%".$params['query']."%";
			$paramsWhere[] = "%".$params['query']."%";
		}		
		
		$q = $this->db->query("SELECT * FROM MASTER_BARANG WHERE $where", $paramsWhere);
		return $q;	
	}
	

	function add($params)
	{
		$res = $this->db->insert('MASTER_BARANG', $params); 
		return $res;
	}
	function upd($params)
	{
		$this->db->where('BARANG_ID',$params['BARANG_ID']);
		unset($params['BARANG_ID']);
		$res = $this->db->update("MASTER_BARANG", $params);
		return $res;
	}

	function del($params)
	{
		$res = $this->db->query("
			DELETE FROM MASTER_BARANG
			where BARANG_ID = '".$params['BARANG_ID']."'
		");
		return $res;
	}

	function get_tree($params)
	{

		try {
			$where = "";
			$paramsWhere = array();
			$where = " 1 = 1 ";
			

			// if(isset($params['TAHUN']) && !empty($params['TAHUN'])){
			// 	$where .= " AND k.TAHUN = ? ";
			// 	$paramsWhere[] = $params['TAHUN'];
			// }

			$level = 5;
			if (isset($params["node"]) && !empty($params["node"])) {
				
				$level = strlen($params["node"]) - strlen(str_replace(".", "", $params["node"])) + 1;
				$where .= " AND br.BARANG_CODE LIKE ? ";
				$paramsWhere[] = $params["node"]."%";
			}

			$where .= " AND length(br.BARANG_CODE) - length(replace(br.BARANG_CODE, '.', '')) = ? ";
			$paramsWhere[] = $level;

			$res = $this->db->query("
				select
					br.BARANG_ID as ID,
					br.BARANG_ID,
					br.BARANG_NAMA,
					br.BARANG_CODE,
					br.CODE_TREE,
					br.ROWID,
					(select count(x.BARANG_ID) from MASTER_BARANG as x WHERE x.CODE_TREE <> br.CODE_TREE AND x.CODE_TREE like concat(br.CODE_TREE, '%')) as JML_SUB
				from
					MASTER_BARANG br
				where $where
			", $paramsWhere);			
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