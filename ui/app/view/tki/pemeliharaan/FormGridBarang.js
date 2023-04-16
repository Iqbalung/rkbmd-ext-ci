Ext.define('koyoku.view.tki.pemeliharaan.FormGridBarang', {
	extend: 'Ext.grid.Panel',
	xtype: 'grid_barang',
	requires: [
		'koyoku.components.combo.Barang',
		'koyoku.components.combo.StatusBarang'
	],
	initComponent: function() {
		var me = this;
		Ext.apply(me, {
			store: Ext.create('Ext.data.Store', {
					storeId: 'store_barang',
					fields:[ 'BARANG_PEMELIHARAAN_ID', 'BARANG_KODE', 'BARANG_ID', 'BARANG_NAMA', 'KONDISI_BAIK', 'KONDISI_RUSAK_RINGAN', 'KONDISI_RUSAK_BERAT', 'STATUS_BARANG', 'STATUS_BARANG_ID',
							'PEMELIHARAAN_NAMA', 'USULAN_JUMLAH', 'USULAN_SATUAN', 'RENCANA_JUMLAH', 'RENCANA_SATUAN', 'KETERANGAN'],					
							 
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
			listeners: {
				select: function(cb, rowData) {							
					if (Ext.getCmp("txt_barang_kode")) {								
						Ext.getCmp("txt_barang_kode").setValue(rowData.data.BARANG_CODE);
					}
				}
			}
		}	
	}, {
		text: 'KODE',
		dataIndex: 'BARANG_KODE',
		align : 'center',
		width: 100,
		editor: {
			xtype: 'textfield',
			editable: false,
			id: 'txt_barang_kode'
		}
	}, {
		text: 'STATUS BARANG',
		dataIndex: 'STATUS_BARANG',
		width: 200,
		align : 'center',		
		editor: {
			xtype: 'combo_status_barang'						
		}
	}, {
		text: 'KONDISI',
		align : 'center',
		columns: [
			{ text: 'B',  dataIndex: 'KONDISI_BAIK', editor: 'numberfield' },
			{ text: 'RR', dataIndex: 'KONDISI_RUSAK_RINGAN', editor: 'numberfield' },
			{ text: 'RB', dataIndex: 'KONDISI_RUSAK_BERAT', editor: 'numberfield'}
		]
	},{
		text: 'USULAN KEBUTUHAN PEMELIHARAAN</br> YANG DISETUJUI',
		columns: [
			{ text: 'Nama Pemeliharaan', width:180, dataIndex: 'PEMELIHARAAN_NAMA', editor: 'textfield' },
			{ text: 'Jumlah', dataIndex: 'USULAN_JUMLAH', editor: 'numberfield' },
			{ text: 'Satuan', dataIndex: 'USULAN_SATUAN', editor: 'textfield'}
		]
	}, {
		hidden: true,
		text: 'RENCANA KEBUTUHAN PEMELIHARAAN BMD</br> YANG DISETUJUI',
		columns: [
			{ text: 'Jumlah', dataIndex: 'RENCANA_JUMLAH', editor: 'numberfield' },
			{ text: 'Satuan', dataIndex: 'RENCANA_SATUAN', editor: 'textfield'}
		],
		flex: 1
	},
	{
		text: 'Keterangan',
		dataIndex: 'KETERANGAN',
		width: 220,
		editor: 'textfield'
	}]
});