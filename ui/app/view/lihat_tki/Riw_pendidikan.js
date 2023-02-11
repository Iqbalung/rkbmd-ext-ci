Ext.define('koyoku.view.lihat_tki.Riw_pendidikan', {
	extend: 'Ext.grid.Panel',
	xtype: 'grid_riw_pendidikan_detail',
	requires: [
		'koyoku.store.tki.Riw_pendidikan'
	],
	store: Ext.create('koyoku.store.tki.Riw_pendidikan'),
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
		dataIndex: 'PENDIDIKAN_NAMA',
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
	}]
});