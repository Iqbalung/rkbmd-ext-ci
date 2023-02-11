Ext.define('koyoku.view.profile_tki.Media', {
	extend: 'Ext.grid.Panel',
	xtype: 'grid_media_pengguna',	
	minHeight : 200,
	store: Ext.create('koyoku.store.tki.Media',{
		storeId:'store_media_tki'
	}),
	tbar:['->', {
	    text: 'Tambah',
	    handler: 'add_media',
	    glyph: 'xf067@fontAwesome'
	}, {
	    bind : { text : '{language.ubah}', },
	    glyph: 'xf044@fontAwesome',
	    handler: 'upd_media',
	}, {
	    bind : { text : '{language.hapus}', },
	    glyph: 'xf1f8@fontAwesome',
	    handler: 'delete_media',
	}],
	columns: [{
		xtype: 'rownumberer',
		width: 40
	},{
		text: 'Nama',
		dataIndex: 'KLASIFIKASI_NAMA',
		flex: 1
	},{
		text: 'Dokumen',
		dataIndex: 'NAMA_FILE',
		flex: 1
	},{
		text: 'Deskripsi',
		dataIndex: 'DOKUMEN_DESKRIPSI',
		flex: 1
	}]
});