Ext.define('koyoku.view.tki.pemanfaatan.Grid', {
	extend: 'Ext.grid.Panel',
	xtype: 'grid_pemanfaatan',
	requires: [
		'koyoku.store.pemanfaatan.Daftar'
	],
	initComponent: function() {
		var me = this;
		

		Ext.apply(me, {			
			store: Ext.create('koyoku.store.pemanfaatan.Daftar', {
				storeId: 'store_pemanfaatan',
				groupField: 'SUB_KEGIATAN_NAMA',
				autoLoad: true,
				listeners: {
					beforeload: function(store, operation, eOpts) {
						var cmp = Ext.getCmp("page_renbut"),
							data = cmp.controller.getViewModel().data;
					}
				}
			}),
			features: [{ftype:'grouping', groupHeaderTpl: '{name}',}],
		});
		me.callParent([arguments]);
	},
	columns: [{
		text: 'No',
		xtype: 'rownumberer',
		width: 60
	}, {
		text: 'URAIAN/ NAMA BARANG',
		dataIndex: 'BARANG_NAMA',		
		flex: 1
	}, {
		text: '<div>Jenis KIB</div><div>A/B/C</div>',
		align: 'center',
		width: 120,
		dataIndex: 'JENIS_KIB'
	}, {
		text: 'Rencana Pemanfaataan',
		dataIndex: 'RENCANA_PEMANFAATAN',
		flex: 1
	}, {
		text: 'Keterangan',
		dataIndex: 'KETERANGAN',
		flex: 1
	}, {
		text: 'Status',
		dataIndex: 'STATUS_DATA',
		width: 100
	}]	
});