Ext.define('koyoku.view.lihat_tki.Riw_keluarga', {
	extend: 'Ext.grid.Panel',
	xtype: 'grid_riw_keluarga_detail',
	requires: [
		'koyoku.store.tki.Riw_keluarga'
	],
	store: Ext.create('koyoku.store.tki.Riw_keluarga'),
	minHeight : 200,	
	columns: [{
		xtype: 'rownumberer',
		width: 40
	},{
		text: 'Hubungan',
		dataIndex: 'HUBUNGAN',
		editor : 'textfield',
		width: 100
	},{
		text: 'Nama',
		dataIndex: 'NAMA',
		editor : 'textfield',
		flex: 1
	},{
		text: 'No Telpn',
		dataIndex: 'NO_TELEPHON',
		editor : 'textfield',
		width: 120
	},{
		text: 'Alamat',
		dataIndex: 'ALAMAT',
		editor : 'textfield',
		flex: 2
	}]
});