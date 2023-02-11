Ext.define('koyoku.view.lihat_tki.Media', {
	extend: 'Ext.grid.Panel',
	xtype: 'grid_media_pengguna_detail',	
	minHeight : 200,
	store: Ext.create('koyoku.store.tki.Media',{
		storeId:'store_media_tki_detail'
	}),	
	columns: [{
		xtype: 'rownumberer',
		width: 40
	},{
		text: 'Nama',
		dataIndex: 'KLASIFIKASI_NAMA',
		flex: 1
	},{
		text: 'Deskripsi',
		dataIndex: 'DOKUMEN_DESKRIPSI',
		flex: 1
	}]
});