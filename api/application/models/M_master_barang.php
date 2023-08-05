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
		
		// $params["BARANG_CODE"] = $this->get_next_kode_tree($params["PARENT_BARANG_CODE"]);
		unset($params["PARENT_BARANG_CODE"]);
		$res = $this->db->insert('MASTER_BARANG', $params); 
		return $res;
	}

	function upd($params)
	{
		unset($params["PARENT_BARANG_CODE"]);
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

	public function get_next_kode_tree($kode_barang)
	{
		$level = 5;
		$parentCode = "1.3.1.1.1";
		if (!empty($kode_barang)) {					
			$level = strlen($kode_barang) - strlen(str_replace(".", "", $kode_barang)) + 1;
			$parentCode = $kode_barang;
		}
		$lastKode = $this->db->query("SELECT BARANG_CODE LAST_KODE FROM MASTER_BARANG WHERE BARANG_CODE LIKE ? 
			AND length(BARANG_CODE) - length(replace(BARANG_CODE, '.', '')) = ?
			ORDER BY cast(replace(BARANG_CODE, '.', '') as INT) DESC LIMIT 1",
		array(
			$parentCode."%", $level
		))->result_array();
		
		$newCode = "1";
		if (count($lastKode) > 0) {
			$lastKode = $lastKode[0]["LAST_KODE"];
			$lastKode = end(explode(".", $lastKode));
			$newCode = ((int) $lastKode) + 1;
		}
		
		return $parentCode.".".$newCode;
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

			$isPencarian = false;
			if (isset($params["pencarian"]) && !empty($params["pencarian"])) {
				$isPencarian = true;
				// $level = strlen($params["node"]) - strlen(str_replace(".", "", $params["node"])) + 1;
				$where .= " AND (br.BARANG_NAMA LIKE ? )";
				$paramsWhere[] = "%".$params["pencarian"]."%";

			} else {

				$level = 5;
				if (isset($params["node"]) && !empty($params["node"])) {					
					$level = strlen($params["node"]) - strlen(str_replace(".", "", $params["node"])) + 1;
					$where .= " AND br.BARANG_CODE LIKE ? ";
					$paramsWhere[] = $params["node"]."%";
				}
	
				$where .= " AND length(br.BARANG_CODE) - length(replace(br.BARANG_CODE, '.', '')) = ? ";
				$paramsWhere[] = $level;
			}


			$res = $this->db->query("
				select
					br.BARANG_ID as ID,
					br.BARANG_ID,
					br.BARANG_NAMA,
					br.BARANG_CODE,
					br.BARANG_SATUAN,
					br.CODE_TREE,
					br.ROWID,
					(select count(x.BARANG_ID) from MASTER_BARANG as x WHERE x.CODE_TREE <> br.CODE_TREE AND x.CODE_TREE like concat(br.CODE_TREE, '%')) as JML_SUB
				from
					MASTER_BARANG br
				where $where
			", $paramsWhere);			
			$data = array();
			
			$dataGroup = array();
			foreach ($res->result_array() as $key => $value) {
				
				$value["leaf"] = true;
				if ($value["JML_SUB"] > 0) {
					$value["leaf"] = false;
				}

				$kode = $value["BARANG_CODE"];
				$kode = explode(".", $kode);				
				array_pop($kode);
				$parentId = implode(".", $kode);
				if(!isset($dataGroup[$parentId])) {
					$dataGroup[$parentId] = array();
				}

				$dataGroup[$parentId][] = $value;
				$data[] = $value;
			}

			$listParentId = array_keys($dataGroup);			
			if ($isPencarian) {
				$data = array();
				$this->db->select("br.BARANG_ID as ID,
					br.BARANG_ID,
					br.BARANG_NAMA,
					br.BARANG_CODE,
					br.CODE_TREE,
					br.BARANG_SATUAN,
					br.ROWID,
					(select count(x.BARANG_ID) from MASTER_BARANG as x WHERE x.CODE_TREE <> br.CODE_TREE AND x.CODE_TREE like concat(br.CODE_TREE, '%')) as JML_SUB");					
				$this->db->where_in("BARANG_CODE", $listParentId);
				$parent = $this->db->get("MASTER_BARANG br");
				
				foreach ($parent->result_array() as $key => $value) {
					
					$value["expanded"] = true;
					$value["children"] = array_values($dataGroup[$value["BARANG_CODE"]]);					
					$data[] = $value;
				}

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