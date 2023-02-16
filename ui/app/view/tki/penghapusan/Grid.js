Ext.define('koyoku.view.tki.penghapusan.Grid', {
	extend: 'Ext.grid.Panel',
	xtype: 'grid_penghapusan',
	requires: [
		'koyoku.store.penghapusan.Daftar'
	],
	initComponent: function() {
		var me = this;
		Ext.apply(me, {
			store: Ext.create('koyoku.store.penghapusan.Daftar', {
				storeId: 'store_penghapusan',
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
		text: 'Kode Barang',
		dataIndex: 'BARANG_KODE',		
		locked   : true,
		width: 120
	},{
		text: 'Register',
		dataIndex: 'NO_REGISTER',
		width : 200,
		locked   : true,
	},{
		text: 'Nama/Jenis Barang',
		dataIndex: 'BARANG_NAMA',
		width: 100,
		align : 'center'
	},{
		text: 'Merek',
		dataIndex: 'MERK',
		width: 100		
	},{
		text: '<div>NO SERTIFIKAT/</div><div>PABRIK/MESIN</div>',
		dataIndex: 'NO_SERI',
		width: 200		
	},{
		text: 'Asal Perolehan',
		dataIndex: 'ASAL_PEROLEHAN',
		width: 180		
	}, {
		text: '<center><div>Tahun</div><div>Perolehan</div></center>',
		dataIndex: 'TAHUN_PEROLEHAN',
		width: 90		
	},{
		text: '<center><div>Jumlah</div><div>Barang</div></center>',
		dataIndex: 'JUMLAH',
		width: 90		
	},{
		text: 'Harga',
		dataIndex: 'HARGA',
		width: 150,			
	},{
		text: 'Rencana Pemindahtangan',
		dataIndex: 'RENCANA_PEMINDAHTANGANAN',
		width: 200		
	},{
		text: 'Rencana Penghapusan',
		dataIndex: 'RENCANA_PENGHAPUSAN',
		width: 200		
	},{
		text: 'Keterangan',
		dataIndex: 'KETERANGAN',
		width: 150		
	}]	
});