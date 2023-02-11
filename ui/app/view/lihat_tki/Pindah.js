Ext.define('koyoku.view.lihat_tki.Pindah', {
	extend: 'Ext.grid.Panel',
	xtype: 'grid_riw_hilang',
	requires: [
		'koyoku.store.tki.Hilang'
	],
	store: Ext.create('koyoku.store.tki.Pindah'),
	minHeight: 200,	
	columns: [{
		xtype: 'rownumberer',
		width: 40
	}, {
		text: 'Nama Instansi',
		dataIndex: 'NAMA_INSTANSI',
		editor : 'textfield',
		flex: 1
	}, {
		text: 'Tingkat Pendidikan',
		dataIndex: 'TPENDIDIKAN_ID',
		editor : 'textfield',
		flex: 1
	}, {
		text: 'Jurusan',
		dataIndex: 'FORMAL_JURUSAN',
		editor : 'textfield',
		flex: 1
	}, {
		text: 'Tahun Mulai',
		editor : 'numberfield',
		dataIndex: 'FORMAL_START',
		flex: 1
	}, {
		text: 'Tahun Selesai',
		editor : 'textfield',
		dataIndex: 'FORMAL_END',
		flex: 1
	}, {
		text: 'Nilai/IPK',
		editor : 'textfield',
		dataIndex: 'NILAI',
		flex: 1
	},{
		text: 'FIle',
		editor : 'filefield',
		dataIndex: 'DOKUMEN_NAMA',
		flex: 1
	}]
});