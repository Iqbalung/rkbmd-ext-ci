Ext.define('koyoku.view.lihat_pptkis.Satuan_kerja', {
	extend: 'Ext.grid.Panel',
	xtype: 'satuan_kerja_detail',
	requires: [
		'koyoku.store.Satker_pptkis',
	],
	controller: 'lihat_pptkis',		
	store: {
		type: 'listSatker_pptkis',
		storeId: 'listSatker_pptkis_detail',
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