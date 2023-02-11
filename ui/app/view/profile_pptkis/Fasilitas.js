Ext.define('koyoku.view.profile_pptkis.Fasilitas', {
	extend: 'Ext.grid.Panel',
	xtype: 'grid_fasilitas',
	requires: [
		"koyoku.store.barang.Fasilitas",
	],
	store: {
		type:'fasilitasPptkis',
		storeId:"fasilitasPptkis",
		autoLoad:true,
		listeners:{
			beforeload:function(str) {
				var cmp = Ext.getCmp("page_profile_pptkis");
				str.proxy.extraParams = {
					PPTKIS_ID:cmp.params[1]
				};
			}
		}
	},
	tbar:['->', {
	    text: 'Tambah',
	    handler: 'add_fasilitas',
	    glyph: 'xf067@fontAwesome'
	}, {
	    bind : { text : '{language.ubah}', },
	    glyph: 'xf044@fontAwesome',
	    handler: 'upd_fasilitas',
	}, {
	    bind : { text : '{language.hapus}', },
	    glyph: 'xf1f8@fontAwesome',
	    handler: 'delete_fasilitas',
	}],
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