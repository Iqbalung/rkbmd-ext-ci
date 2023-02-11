Ext.define('koyoku.view.portal.Grid_job_populer', {
	extend: 'Ext.grid.Panel',
	xtype: 'grid_job_populer',
	requires: [
		'koyoku.store.portal.Data_jabatan_populer'
	],
	store: Ext.create('koyoku.store.portal.Data_jabatan_populer',{
		autoLoad : true
	}),
	columns: [{
		xtype :'rownumberer',
		width : 40
	},{
		text: 'Name',
		dataIndex: 'JABATAN_NAMA',
		flex : 1
	}]
});