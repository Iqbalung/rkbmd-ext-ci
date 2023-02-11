Ext.define('koyoku.view.lihat_pptkis.Rekan_kerja', {
	extend: 'Ext.grid.Panel',
	xtype: 'grid_rekan_kerja_detail',
	requires: [
		"koyoku.store.barang.Rekan_kerja",
	],
	store: {
		type:'rekan_kerjaPptkis',
		storeId:"rekan_kerjaPptkis_detail",
		autoLoad:true,
		listeners:{
			beforeload:function(str) {
				var cmp = Ext.getCmp("page_lihat_pptkis");
				str.proxy.extraParams = {
					PPTKIS_ID:cmp.params[1]
				};
			}
		}
	},	
	columns: [{
		xtype: 'rownumberer',
		width: 40
	},{
		text: 'Nama',
		dataIndex: 'NAMA',
		flex: 1
	},{
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
	}]
});