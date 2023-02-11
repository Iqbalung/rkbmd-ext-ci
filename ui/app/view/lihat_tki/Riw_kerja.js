Ext.define('koyoku.view.lihat_tki.Riw_kerja', {
	extend: 'Ext.grid.Panel',
	xtype: 'grid_riw_kerja_detail',
	requires: [
		'koyoku.store.tki.Riw_kerja'
	],
	store: Ext.create('koyoku.store.tki.Riw_kerja'),
	minHeight : 200,	
	columns: [{
		xtype: 'rownumberer',
		width: 40
	}, {
		text: 'Posisi',
		dataIndex: 'POSISI',
		editor : 'textfield',
		width: 200
	}, {
		text: 'Perusahaan',
		dataIndex: 'PERUSAHAAN',
		editor : 'textfield',
		width: 200
	}, {
		text: 'Tugas/Tanggung Jawab',
		dataIndex: 'TUGAS',
		editor : 'textfield',
		flex: 1
	}, {
		text: 'Mulai',
		dataIndex: 'START_DATE',
		editor : {
			xtype:'datefield',
			submitFormat:'d/m/Y',
		},
		width: 120,
		renderer:function(v) {			
			return v;
		}
	}, {
		text: 'Selesai',
		dataIndex: 'END_DATE',
		editor : 'datefield',
		width: 120
	}]
});