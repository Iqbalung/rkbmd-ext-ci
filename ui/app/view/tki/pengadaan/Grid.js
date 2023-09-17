Ext.define('koyoku.view.tki.pengadaan.Grid', {
	extend: 'Ext.grid.Panel',
	xtype: 'grid_pengadaan',
	requires: [
		'koyoku.store.pengadaan.Daftar'
	],	
	bufferedRenderer: false,
    runInViewport: false,
	initComponent: function() {
		var me = this;							
		Ext.apply(me, {			
			store: Ext.create('koyoku.store.pengadaan.Daftar', {
				storeId: 'store_pengadaan',			
				groupField: 'GROUP_NAMA',	
				autoLoad: true,
				listeners: {
					beforeload: function(store, operation, eOpts) {
						var cmp = Ext.getCmp("page_renbut"),
							data = cmp.controller.getViewModel().data;
					}
				}
			}),
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
						var listColHidden = ["RENCANA_DISETUJUI_JUMLAH", "RENCANA_DISETUJUI_SATUAN"];						
					   if (__dtlg_.cek_akses("ft-telaah")) {
						   listColHidden = ["KEBUTUHAN_MAKSIMUM_JUMLAH", "KEBUTUHAN_MAKSIMUM_SATUAN", "KEBUTUHAN_RIIL_JUMLAH", "KEBUTUHAN_RIIL_SATUAN"];
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
			features: [{ftype:'grouping', groupHeaderTpl: '{name}',}],		
			columns: [{
				text: 'No',
				xtype: 'rownumberer',
				width: 60
			}, {
				text: 'OPD',
				dataIndex: 'BIDANG_NAMA',				
				width: 260,				
			},  {
				text: 'PENGGUNA BARANG/ PROGRAM/KEGIATAN/ SUB KEGIATAN/ OUTPUT',
				dataIndex: 'NAMA_KEGIATAN',		
				hidden: true,
				width: 500,
			},{
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
				text: 'KEBUTUHAN MAKSIMUM',				
				align : 'center',
				columns: [
					{
						text: 'JUMLAH',
						dataIndex: 'KEBUTUHAN_MAKSIMUM_JUMLAH',
						width: 100,
						editor: 'numberfield'
					}, 
					{
						text: 'SATUAN',
						dataIndex: 'KEBUTUHAN_MAKSIMUM_SATUAN',
						width: 120,
						editor: 'textfield'
					},
				]
			},
			{
				text: 'KEBUTUHAN RILL',				
				align : 'center',
				columns: [
					{
						text: 'JUMLAH',
						dataIndex: 'KEBUTUHAN_RIIL_JUMLAH',
						width: 100,
						editor: 'numberfield'
					}, 
					{
						text: 'SATUAN',
						dataIndex: 'KEBUTUHAN_RIIL_SATUAN',
						width: 120,
						editor: 'textfield'
					},
				]
			},
			{
				text: 'RENCANA KEBUTUHAN<br> PENGADAAN BMD<br> YANG DISETUJUI',				
				align : 'center',
				columns: [
					{
						text: 'JUMLAH',
						dataIndex: 'RENCANA_DISETUJUI_JUMLAH',
						width: 100,
						editor: 'numberfield'
					}, 
					{
						text: 'SATUAN',
						dataIndex: 'RENCANA_DISETUJUI_SATUAN',
						width: 120,
						editor: 'textfield'
					},
				]
			},
			{
				text: 'CARA PEMENUHAN',
				dataIndex: 'CARA_PEMENUHAN',
				width: 220		
			}, {
				text: 'Status',
				// hidden: me.up("#page_renbut").is_bidang_telaah,
				dataIndex: 'STATUS_DATA',
				width: 100
			}]
		});
		me.callParent([arguments]);
	},
});