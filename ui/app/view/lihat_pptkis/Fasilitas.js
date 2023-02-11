Ext.define('koyoku.view.lihat_pptkis.Fasilitas', {
	extend: 'Ext.grid.Panel',
	xtype: 'grid_fasilitas_detail',
	requires: [
		"koyoku.store.barang.Fasilitas",
	],
	store: {
		type:'fasilitasPptkis',
		storeId:"fasilitasPptkis_detail",
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
		dataIndex: 'FASILITAS_NAMA',
		flex: 1
	},{
		text: 'Dokumen',
		dataIndex: 'FASILITAS_DOKUMEN',
		flex: 1
	},{
		text: 'Deskripsi',
		dataIndex: 'FASILITAS_DESKRIPSI',
		flex: 1
	}]
});