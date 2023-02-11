Ext.define('koyoku.view.detail_pptkis.Rekan_kerja', {
	extend: 'Ext.grid.Panel',
	xtype: 'grid_rekan_kerja_detail',
	requires: [
		"koyoku.store.barang.Rekan_kerja",
	],
	store: {
		type: 'rekan_kerjaPptkis',
		storeId: "rekan_kerjaPptkis_detail",
		groupField: 'TIPE_NAMA',
		autoLoad: true,
		listeners: {
			beforeload: function(str) {
				var cmp = Ext.getCmp("page_detail_pptkis");
				str.proxy.extraParams = {
					PPTKIS_ID: cmp.params[1]
				};
			}
		}
	},
	features: [{
		ftype: 'grouping',
		groupHeaderTpl: '{name}',
		hideGroupedHeader: false,
		startCollapsed: false
	}],	   		
	padding:'20 0',
	columns: [{
			dataIndex: 'NAMA',
			flex: 1
		}
		/*,{
				text: 'Tipe',
				dataIndex: 'TIPE',
				flex: 1,
				renderer:function(v) {
					var tipe = ["","BLKLN","Lembaga Keuangan","Lembaga Sertifikasi Profesi","Sarana Kesehatan","Asuransi"],
						value = "";
					if (parseInt(v) > 0 && parseInt(v) < 6) {
						value = tipe[v];
					}
					return value;
				}
			}*/
	]
});