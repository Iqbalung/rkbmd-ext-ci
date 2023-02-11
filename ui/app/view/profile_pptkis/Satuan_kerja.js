Ext.define('koyoku.view.profile_pptkis.Satuan_kerja', {
	extend: 'Ext.grid.Panel',
	xtype: 'satuan_kerja',
	requires: [
		'koyoku.store.Satker_pptkis',
	],
	controller: 'profile_pptkis',	
	tbar: ['->', {
		text: 'Tambah',
		handler: 'add_satker',
		glyph: 'xf067@fontAwesome'
	}, {
		bind : { text : '{language.ubah}', },
		glyph: 'xf044@fontAwesome',
		handler: 'upd_satker',
	}, {
		bind : { text : '{language.hapus}', },
		glyph: 'xf1f8@fontAwesome',
		handler: 'delete_satker',
	}],
	store: {
		type: 'listSatker_pptkis',
		storeId: 'listSatker_pptkis',
		autoLoad: false,
	},
	columns: [{
		xtype: 'rownumberer',
		width: 50
	}, {
		text: 'Nama',
		dataIndex: 'SATKER_NAMA',
		width: 400,
	}, {
		text: 'No Telp',
		dataIndex: 'SATKER_TELP',
		width: 140,
	}, {
		text: 'Alamat',
		dataIndex: 'SATKER_ALAMAT',
		flex: 1
	}],
	listeners: {
		itemdblclick: 'upd_satker',
	}

});