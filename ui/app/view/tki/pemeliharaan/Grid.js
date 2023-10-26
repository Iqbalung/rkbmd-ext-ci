Ext.define('koyoku.view.tki.pemeliharaan.Grid', {
	extend: 'Ext.grid.Panel',
	xtype: 'grid_pemeliharaan',
	requires: [
		'koyoku.store.pemeliharaan.Daftar'
	],
	bufferedRenderer: false,
    runInViewport: false,
	initComponent: function() {
		var me = this;
		Ext.apply(me, {
			store: Ext.create('koyoku.store.pemeliharaan.Daftar', {
				storeId: 'store_pemeliharaan',
				groupField: 'GROUP_NAMA',
				autoLoad: true,
				listeners: {
					beforeload: function(store, operation, eOpts) {
						var cmp = Ext.getCmp("page_renbut"),
							data = cmp.controller.getViewModel().data;
					}
				}
			}),			
			features: [{ftype:'grouping', groupHeaderTpl: '{name}',}],
			viewConfig: {
				getRowClass: function(record, index, rowParams)
				{
					var rowColor = 'row-draft';
					if (record.get("STATUS_PROSES") == "1") {						
						rowColor = 'row-diajukan';
					} else if (record.get("STATUS_PROSES") == "2") {
						rowColor = 'row-disetujui';
					}

					return rowColor;
				}
			},
			bbar:[
				'->',
				{
					xtype:'label',
					html: '<div class="ft-box"><div class="color row-draft"></div><div class="text"> Draft</div></div>'
				}, '|', {
					xtype:'label',
					html: '<div class="ft-box"><div class="color row-diajukan"></div><div class="text"> Diajukan</div></div>'
				}, '|', {
					xtype:'label',
					html: '<div class="ft-box"><div class="color row-disetujui"></div><div class="text"> Disetujui</div></div>'
				}
			]
		});
		me.callParent([arguments]);
	},
	columns: [{
		text: 'No',
		xtype: 'rownumberer',
		width: 60
	},
	{
		text: 'OPD',
		dataIndex: 'BIDANG_NAMA',				
		width: 260,				
	}, 
	 {
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
	},{
		text: 'SATUAN',
		dataIndex: 'SATUAN',
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
				if (__dtlg_.cek_akses("ft-telaah")) {
					listColHidden = ["PEMELIHARAAN_NAMA", "USULAN_JUMLAH", "USULAN_SATUAN"];
				}
				if (__dtlg_.user.USERGROUP_ID != "1") {
					listColHidden.push("BIDANG_NAMA");
				}

				return listColHidden.indexOf(cl.dataIndex) !== -1;
			});	
		
			if (colHidden.length > 0) {							
				colHidden.forEach(col => {								
					col.setHidden(true);
				});
			}
		}
	},		
});