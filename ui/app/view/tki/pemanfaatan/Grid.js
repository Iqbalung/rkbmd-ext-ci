Ext.define('koyoku.view.tki.pemanfaatan.Grid', {
	extend: 'Ext.grid.Panel',
	xtype: 'grid_pemanfaatan',
	requires: [
		'koyoku.store.pemanfaatan.Daftar'
	],
	bufferedRenderer: false,
    runInViewport: false,
	initComponent: function() {
		var me = this;
		

		Ext.apply(me, {			
			store: Ext.create('koyoku.store.pemanfaatan.Daftar', {
				storeId: 'store_pemanfaatan',
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