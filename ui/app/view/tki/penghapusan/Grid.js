Ext.define('koyoku.view.tki.penghapusan.Grid', {
	extend: 'Ext.grid.Panel',
	xtype: 'grid_penghapusan',
	requires: [
		'koyoku.store.penghapusan.Daftar'
	],
	bufferedRenderer: false,
    runInViewport: false,
	initComponent: function() {
		var me = this;
		Ext.apply(me, {
			store: Ext.create('koyoku.store.penghapusan.Daftar', {
				storeId: 'store_penghapusan',
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
			],
			listeners:{
				'beforerender' : function(grid) {
					
					let cols = grid.getColumns();
					var colHidden = cols.filter(function(cl) {
						var listColHidden = [];						
											
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
			}
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
	}, {
		text: 'Status',
		dataIndex: 'STATUS_DATA',
		width: 100
	}]	
});