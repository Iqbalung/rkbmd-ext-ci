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
		text: 'USULAN KEBUTUHAN PEMELIHARAAN</br> YANG DISETUJUI',
		columns: [
			{ text: 'Nama Pemeliharaan', width:180, dataIndex: 'PEMELIHARAAN_NAMA' },
			{ text: 'Jumlah', align: 'center', dataIndex: 'USULAN_JUMLAH' },
			{ text: 'Satuan', dataIndex: 'USULAN_SATUAN'}
		]
	}, {
		text: 'RENCANA KEBUTUHAN PEMELIHARAAN BMD</br> YANG DISETUJUI',
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
	}, {
		text: 'Status',
		dataIndex: 'STATUS_DATA',
		width: 100
	}],
	listeners:{
		'beforerender' : function(grid) {
			
			let cols = grid.getColumns();
			var colHidden = cols.filter(function(cl) {
			var listColHidden = ["RENCANA_SATUAN", "RENCANA_JUMLAH"];						
			if (localStorage.getItem("IS_BIDANG_TELAAH") == "1") {
				listColHidden = ["PEMELIHARAAN_NAMA", "USULAN_JUMLAH", "USULAN_SATUAN"];
			}
			return listColHidden.indexOf(cl.dataIndex) !== -1;
		});	
		console.log(colHidden);
		if (colHidden.length > 0) {							
			colHidden.forEach(col => {								
				col.setHidden(true);
			});
		}


	}
},		
});