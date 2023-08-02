Ext.define('koyoku.view.tki.pemanfaatan.FormGridBarang', {
	extend: 'Ext.grid.Panel',
	xtype: 'grid_barang_pemanfaatan',
	requires: [
		'koyoku.components.field.TreeFieldBarang',
		'koyoku.components.combo.JenisKIB'
	],
	initComponent: function() {
		var me = this;
		Ext.apply(me, {
			store: Ext.create('Ext.data.Store', {
					storeId: 'store_barang',
					fields:[ 'BARANG_PEMANFAATAN_ID', 'BARANG_ID', 'BARANG_NAMA', 'JUMLAH', 'JENIS_KIB', 'SATUAN',
							'RENCANA_PEMANFAATAN', 'KETERANGAN'],					
							 
				})
		});
		me.callParent([arguments]);
	},
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
		},
	},
	columns: [{
		text: 'No',
		xtype: 'rownumberer',
		width: 60
	}, {
		text: 'NAMA BARANG',
		dataIndex: 'BARANG_NAMA',
		width: 250, 
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
		text: 'Jumlah',
		dataIndex: 'JUMLAH',
		width: 100,
		editor: 'numberfield'
	},  {
		text: 'Jenis KIB',
		dataIndex: 'JENIS_KIB',
		width: 200,
		align : 'center',		
		editor: {
			xtype: 'combo_jenis_kib'						
		}
	}, 
	{
		text: 'Satuan',
		dataIndex: 'SATUAN',
		width: 120,
		editor: 'textfield'
	},
	{
		text: 'Rencana Pemanfaatan',
		dataIndex: 'RENCANA_PEMANFAATAN',
		width: 220,
		editor: 'textfield'
	},
	{
		text: 'Keterangan',
		dataIndex: 'KETERANGAN',
		width: 220,
		editor: 'textfield'
	}]
});