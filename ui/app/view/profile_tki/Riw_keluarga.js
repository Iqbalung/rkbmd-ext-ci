Ext.define('koyoku.view.profile_tki.Riw_keluarga', {
	extend: 'Ext.grid.Panel',
	xtype: 'grid_riw_keluarga',
	requires: [
		'koyoku.store.tki.Riw_keluarga'
	],
	store: Ext.create('koyoku.store.tki.Riw_keluarga'),
	minHeight : 200,
	plugins: [{
		ptype: 'rowediting',
		clicksToEdit: 10
	}],
	tbar: [
		'->', {
			text: 'Tambah',
			handler: 'add_riw_keluarga',
			glyph: 'xf067@fontAwesome'
		}, {
			bind : { text : '{language.ubah}', },
			handler: 'upd_riw_keluarga',
			glyph: 'xf044@fontAwesome'
		}, {
			bind : { text : '{language.hapus}', },
			handler: 'del_riw_keluarga',
			glyph: 'xf1f8@fontAwesome'
		}
	],
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