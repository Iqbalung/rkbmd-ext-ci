Ext.define('koyoku.view.profile_pptkis.Pegawai', {
	extend: 'Ext.grid.Panel',
	xtype: 'grid_pegawai',
	requires: [
		'koyoku.store.Pegawai_pptkis',
	],
	controller: 'profile_pptkis',
	store: {
		type: 'listPegawai_pptkis',
		storeId: 'listPegawai_pptkis',
		autoLoad: false,
	},
	columns: [{
		xtype: 'rownumberer',
		width: 40
	}, {
		text: 'Nama',
		dataIndex: 'NAMA',
		width: 200
	}, {
		text: 'Email',
		dataIndex: 'EMAIL',
		width: 160,
	}, {
		text: 'No Telepon',
		dataIndex: 'NO_TELP',
		width: 120,
	}, {
		text: 'Alamat',
		dataIndex: 'ALAMAT_TINGGAL',
		flex: 1
	},{
		text: 'Usergroup',
		dataIndex: 'USERGROUP',
		flex: 1
	}],	
	listeners: {
		itemdblclick: 'upd_pegawai',
	}

});