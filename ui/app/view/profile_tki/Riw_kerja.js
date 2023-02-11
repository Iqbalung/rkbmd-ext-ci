Ext.define('koyoku.view.profile_tki.Riw_kerja', {
	extend: 'Ext.grid.Panel',
	xtype: 'grid_riw_kerja',
	requires: [
		'koyoku.store.tki.Riw_kerja'
	],
	store: Ext.create('koyoku.store.tki.Riw_kerja'),
	minHeight : 200,
	plugins: [{
		ptype: 'rowediting',
		clicksToEdit: 10
	}],
	tbar: [
		'->', {
			text: 'Tambah',
			handler: 'add_riw_kerja',
			glyph: 'xf067@fontAwesome'
		}, {
			bind : { text : '{language.ubah}', },
			handler: 'upd_riw_kerja',
			glyph: 'xf044@fontAwesome'
		}, {
			bind : { text : '{language.hapus}', },
			handler: 'del_riw_kerja',
			glyph: 'xf1f8@fontAwesome'
		}
	],
	columns: [{
		text: 'No',
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