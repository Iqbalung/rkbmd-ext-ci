Ext.define('koyoku.view.tki.pengadaan.Grid', {
	extend: 'Ext.grid.Panel',
	xtype: 'grid_pengadaan',
	requires: [
		'koyoku.store.pengadaan.Daftar'
	],
	initComponent: function() {
		var me = this;
		

		Ext.apply(me, {			
			store: Ext.create('koyoku.store.pengadaan.Daftar', {
				storeId: 'store_pengadaan',			
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
		text: 'PENGGUNA BARANG/ PROGRAM/KEGIATAN/ SUB KEGIATAN/ OUTPUT',
		dataIndex: 'NAMA_KEGIATAN',		
		hidden: true,
		width: 500,
	}, {
		text: 'KODE',
		dataIndex: 'BARANG_KODE',
		align : 'center',
		width: 100		
	}, {
		text: 'URAIAN/ NAMA BARANG',
		dataIndex: 'BARANG_NAMA',		
		flex: 1
	}, {
		text: 'JUMLAH',
		dataIndex: 'JUMLAH',
		width: 100		
	}, 
	{
		text: 'SATUAN',
		dataIndex: 'SATUAN',
		width: 120		
	},
	{
		text: 'CARA PEMENUHAN',
		dataIndex: 'CARA_PEMENUHAN',
		width: 220		
	}]
});