Ext.define('koyoku.view.profile_tki.Riw_kompetensi', {
	extend: 'Ext.grid.Panel',
	xtype: 'grid_riw_kompetensi',
	requires: [
		'koyoku.store.tki.Riw_kompetensi'
	],
	store: Ext.create('koyoku.store.tki.Riw_kompetensi'),
	minHeight : 200,
	plugins: [{
		ptype: 'rowediting',
		clicksToEdit: 10
	}],
	columns: [{
		text: 'No',
		xtype: 'rownumberer',
		width: 40
	},{
		text: 'Kompetensi',
		dataIndex: 'KOMPETENSI_NAMA',
		flex: 1
	}]
});