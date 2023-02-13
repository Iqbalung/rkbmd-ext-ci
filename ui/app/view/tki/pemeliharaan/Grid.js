Ext.define('koyoku.view.tki.pemeliharaan.Grid', {
	extend: 'Ext.grid.Panel',
	xtype: 'grid_pemeliharaan',
	requires: [
		'koyoku.store.tki.Pekerja'
	],
	initComponent: function() {
		var me = this;
		Ext.apply(me, {
			store: Ext.create('koyoku.store.tki.Pekerja', {
				storeId: 'store_pekerja',
				autoLoad: true,
				listeners: {
					beforeload: function(store, operation, eOpts) {
						var cmp = Ext.getCmp("page_tki"),
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
		dataIndex: 'NAMA',
		locked   : true,
		width: 500,
	}, {
		text: 'KODE',
		dataIndex: 'NO_KTP',
		align : 'center',
		width: 100,
	}, {
		text: 'NAMA BARANG',
		dataIndex: 'EMAIL',
		width: 200
	}, {
		text: 'STATUS BARANG',
		dataIndex: 'JENIS_KELAMIN',
		width: 200,
		align : 'center'
	}, {
		text: 'KONDISI',
		align : 'center',
		columns: [
			{ text: 'B',  dataIndex: 'name' },
			{ text: 'RR', dataIndex: 'email' },
			{ text: 'RB', dataIndex: '2'}
		]
	},{
		text: 'USULAN KEBUTUHAN PEMELIHARAAN YANG DISETUJUI',
		columns: [
			{ text: 'Nama Pemeliharaan',  dataIndex: 'name' },
			{ text: 'Jumlah', dataIndex: 'email' },
			{ text: 'Satuan', dataIndex: '2'}
		]
	}, {
		text: 'RENCANA KEBUTUHAN PEMELIHARAAN BMD YANG DISETUJUI',
		columns: [
			{ text: 'Jumlah', dataIndex: 'email' },
			{ text: 'Satuan', dataIndex: '2'}
		],
		flex: 1
	},
	{
		text: 'Ket',
		dataIndex: 'ID_TKI',
		flex: 1
	}]	
});