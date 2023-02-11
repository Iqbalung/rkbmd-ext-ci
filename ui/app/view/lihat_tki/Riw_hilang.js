Ext.define('koyoku.view.lihat_tki.Riw_hilang', {
	extend: 'Ext.grid.Panel',
	xtype: 'grid_riw_hilang',
	requires: [
		'koyoku.store.tki.Hilang'
	],
	store: Ext.create('koyoku.store.tki.Hilang'),
	minHeight: 200,	
	columns: [{
		xtype: 'rownumberer',
		width: 40
	},{
		bind : { text : '{language.jabatan}', },
		dataIndex: 'JABATAN_NAMA',
		editor : 'textfield',
		flex: 1
	}, {
		text: 'Uraian',
		dataIndex: 'RIWAYAT_KETERANGAN',
		editor : 'textfield',
		flex: 1
	},  {
		text: 'Tanggal Ditetetapkan',
		editor : 'numberfield',
		dataIndex: 'RIWAYAT_DATE',
		flex: 1
	}]
});