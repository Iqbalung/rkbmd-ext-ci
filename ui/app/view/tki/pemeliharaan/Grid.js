Ext.define('koyoku.view.tki.pemeliharaan.Grid', {
	extend: 'Ext.grid.Panel',
	xtype: 'grid_pemeliharaan',
	requires: [
		'koyoku.store.pemeliharaan.Daftar'
	],
	initComponent: function() {
		var me = this;
		Ext.apply(me, {
			store: Ext.create('koyoku.store.pemeliharaan.Daftar', {
				storeId: 'store_pemeliharaan',
				autoLoad: true,
				listeners: {
					beforeload: function(store, operation, eOpts) {
						var cmp = Ext.getCmp("page_pemeliharaan"),
							data = cmp.controller.getViewModel().data;
					}
				}
			})
		});
		me.callParent([arguments]);
	},
	columns: [{
		text: 'No',
		xtype: 'rownumberer',
		width: 60
	}, {
		text: 'No Reg11',
		dataIndex: 'ID',
		hidden: true,
		flex: 1,
		width: 300,
		locked   : true,
	}, {
		text: 'PENGGUNA BARANG/ PROGRAM/KEGIATAN/ SUB KEGIATAN/ OUTPUT',
		dataIndex: 'NAMA_KEGIATAN',
		locked   : true,
		width: 500,
	}, {
		text: 'KODE',
		dataIndex: 'BARANG_KODE',
		align : 'center',
		width: 100,
	}, {
		text: 'NAMA BARANG',
		dataIndex: 'BARANG_NAMA',
		width: 200
	}, {
		text: 'STATUS BARANG',
		dataIndex: 'STATUS_BARANG',
		width: 200,
		align : 'center'		
	}, {
		text: 'KONDISI',
		align : 'center',
		columns: [
			{ text: 'B',  align: 'center', dataIndex: 'KONDISI_BAIK' },
			{ text: 'RR', align: 'center', dataIndex: 'KONDISI_RUSAK_RINGAN' },
			{ text: 'RB', align: 'center', dataIndex: 'KONDISI_RUSAK_BERAT'}
		]
	},{
		text: 'USULAN KEBUTUHAN PEMELIHARAAN YANG DISETUJUI',
		columns: [
			{ text: 'Nama Pemeliharaan', width:180, dataIndex: 'PEMELIHARAAN_NAMA' },
			{ text: 'Jumlah', align: 'center', dataIndex: 'USULAN_JUMLAH' },
			{ text: 'Satuan', dataIndex: 'USULAN_SATUAN'}
		]
	}, {
		text: 'RENCANA KEBUTUHAN PEMELIHARAAN BMD YANG DISETUJUI',
		columns: [
			{ text: 'Jumlah', align: 'center', dataIndex: 'RENCANA_JUMLAH' },
			{ text: 'Satuan', dataIndex: 'RENCANA_SATUAN'}
		],
		flex: 1
	},
	{
		text: 'Keterangan',
		dataIndex: 'KETERANGAN',
		width: 220		
	}]	
});