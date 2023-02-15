Ext.define('koyoku.view.tki.penghapusan.FormGridBarang', {
	extend: 'Ext.grid.Panel',
	xtype: 'grid_barang_penghapusan',
	requires: [
		'koyoku.components.combo.Barang',
		'koyoku.components.combo.StatusBarang'
	],
	initComponent: function() {
		var me = this;
		Ext.apply(me, {
			store: Ext.create('Ext.data.Store', {
					storeId: 'store_barang',
					fields:[ 
						'BARANG_PENGHAPUSAN_ID', 'BARANG_KODE', 'BARANG_ID', 'BARANG_NAMA', 'BARANG_KODE', 'NO_REGISTER', 'MERK', 'NO_SERI',
						'ASAL_PEROLEHAN', 'TAHUN_PEROLEHAN', 'JUMLAH', 'HARGA', 'RENCANA_PEMINDAHTANGANAN', 'RENCANA_PENGHAPUSAN', 'KETERANGAN'
					],					
							 
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
			console.log(editor, e, options);			
			var combo_barang = e.grid.columns[1].getEditor(e.record);			
			if (combo_barang.getSelectedRecord()) {				
				e.record.set('BARANG_ID', combo_barang.getSelectedRecord().data.BARANG_ID);
			}
			e.record.set('BARANG_NAMA', combo_barang.getRawValue());

			var combo_status = e.grid.columns[3].getEditor(e.record);			
			if (combo_status.getSelectedRecord()) {				
				e.record.set('STATUS_BARANG_ID', combo_status.getSelectedRecord().data.STATUS_ID);
			}
			e.record.set('STATUS_BARANG', combo_status.getRawValue());
			
		},
	},
	columns: [{
		text: 'No',
		xtype: 'rownumberer',
		width: 60
	}, {
		text: 'NAMA BARANG',
		dataIndex: 'BARANG_NAMA',
		width: 200, 
		editor: {
			xtype: 'combobox',
			forceSelection: true,			
			triggerAction: 'all',
			allowBlank: false,
			mode:'remote',
    		minChars:2,
			displayField: 'BARANG_NAMA',
    		valueField: 'BARANG_NAMA',
			store: Ext.create('koyoku.store.Barang'),
		}	
	}, {
		text: 'KODE',
		dataIndex: 'BARANG_KODE',		
		width: 100,
		editor: 'textfield'
	},  {
		text: 'Register',
		dataIndex: 'NO_REGISTER',		
		width: 120,
		editor: 'textfield'
	},{
		text: 'Merk',
		dataIndex: 'MERK',
		width: 100,
		editor: 'textfield'
	},{
		text: '<div>NO SERTIFIKAT/</div><div>PABRIK/MESIN</div>',
		dataIndex: 'NO_SERI',
		width: 200,
		editor: 'textfield'
	},{
		text: 'Asal Perolehan',
		dataIndex: 'ASAL_PEROLEHAN',
		width: 180,
		editor: 'textfield'
	}, {
		text: '<center><div>Tahun</div><div>Perolehan</div></center>',
		dataIndex: 'TAHUN_PEROLEHAN',
		width: 90,
		editor: 'textfield'
	},{
		text: '<center><div>Jumlah</div><div>Barang</div></center>',
		dataIndex: 'JUMLAH',
		width: 90,
		editor: 'numberfield'
	},{
		text: 'Harga',
		dataIndex: 'HARGA',
		width: 150,		
		editor: 'numberfield'
	},{
		text: 'Rencana Pemindahtangan',
		dataIndex: 'RENCANA_PEMINDAHTANGANAN',
		width: 200,
		editor: 'textfield'
	},{
		text: 'Rencana Penghapusan',
		dataIndex: 'RENCANA_PENGHAPUSAN',
		width: 200,
		editor: 'textfield'
	},{
		text: 'Keterangan',
		dataIndex: 'KETERANGAN',
		width: 150,
		editor: 'textfield'
	}]
});