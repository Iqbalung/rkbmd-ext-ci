Ext.define('koyoku.view.tki.pengadaan.FormGridBarang', {
	extend: 'Ext.grid.Panel',
	xtype: 'grid_barang_pengadaan',
	requires: [
		'koyoku.components.combo.Barang',
		'koyoku.components.field.TreeFieldBarang'
	],
	initComponent: function() {
		var me = this;
		Ext.apply(me, {
			store: Ext.create('Ext.data.Store', {
					storeId: 'store_barang',
					fields:[ 'BARANG_PENGADAAN_ID', 'BARANG_ID', 'BARANG_NAMA', 'BARANG_KODE', 'JUMLAH', 'SATUAN',
							'CARA_PEMENUHAN', 'KETERANGAN', 'KEBUTUHAN_MAKSIMUM_JUMLAH', 'KEBUTUHAN_MAKSIMUM_SATUAN',
							'KEBUTUHAN_RIIL_JUMLAH', 'KEBUTUHAN_RIIL_SATUAN'
						],					
							 
			}),
			plugins: [
				{
					clicksToEdit: 0,            
					ptype: 'rowediting',
					pluginId: 'rowediting'
				},                
			],
			listeners: {
				edit: function (editor, e, options) {
					// var field = e.field;						
					var fieldbarang = e.grid.columns[1].getEditor(e.record);								
					if (fieldbarang.dataSelected && fieldbarang.dataSelected.length > 0) {	
						let dataBarang = fieldbarang.dataSelected[0];
						e.record.set('BARANG_ID', dataBarang.get("BARANG_ID"));
						e.record.set('BARANG_KODE', dataBarang.get("BARANG_CODE"));
					}
					// e.record.set('BARANG_NAMA', combo_barang.getRawValue());	
							
				},
			},
			columns: [{
				text: 'No',
				xtype: 'rownumberer',
				width: 60
			}, {
				text: 'NAMA BARANG',
				dataIndex: 'BARANG_NAMA',
				flex: 1,
				editor: {
					xtype: 'barangtreefield',
					forceSelection: true,			
					triggerAction: 'all',
					allowBlank: false,
					editable: false,					
					mode:'remote',
					minChars:2,
					displayField: 'BARANG_NAMA',
					valueField: 'BARANG_NAMA',
					store: Ext.create('koyoku.store.Barang'),
					listeners: {						
						onPilih: function(rec, cmp, windTree) {
							cmp.setValue(rec[0].get("BARANG_NAMA"));
							if (Ext.getCmp("txt_barang_kode")) {										
								// Ext.getCmp("txt_barang_id").setValue(rec[0].get("BARANG_ID"));								
								Ext.getCmp("txt_barang_kode").setValue(rec[0].get("BARANG_CODE"));
							}
						} 
					}
				}	
			}, {
				text: 'KODE',
				dataIndex: 'BARANG_KODE',
				align : 'center',
				width: 130,
				editor: {
					xtype: 'textfield',
					editable: false,
					id: 'txt_barang_kode'
				}
			},			
			{
				text: 'USULAN',
				align : 'center',
				columns: [
					{
						text: 'JUMLAH',
						dataIndex: 'JUMLAH',
						width: 100,
						editor: 'numberfield'
					}, 
					{
						text: 'SATUAN',
						dataIndex: 'SATUAN',
						width: 120,
						editor: 'textfield'
					},
				]
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
				text: 'CARA PEMENUHAN',
				dataIndex: 'CARA_PEMENUHAN',
				hidden: true,
				flex: 1,
				editor: 'textfield'
			}
		]
		});
		me.callParent([arguments]);
	},
});