Ext.define('koyoku.view.profile_tki.Riw_bidang', {
	extend: 'Ext.grid.Panel',
	xtype: 'grid_riw_bidang',
	requires: [
		'koyoku.store.tki.Riw_bidang'
	],
	store: Ext.create('koyoku.store.tki.Riw_bidang'),
	minHeight : 200,
	columns: [{
		text: 'No',
		xtype: 'rownumberer',
		width: 40
	},{
		text: 'Kompetensi',
		dataIndex: 'BIDANG_NAMA',
		flex: 1
	}]
});