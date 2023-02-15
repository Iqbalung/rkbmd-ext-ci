Ext.define('koyoku.view.tki.pengadaan.FormGridBarang', {
	extend: 'Ext.grid.Panel',
	xtype: 'grid_barang_pengadaan',
	requires: [
		'koyoku.components.combo.Barang'		
	],
	initComponent: function() {
		var me = this;
		Ext.apply(me, {
			store: Ext.create('Ext.data.Store', {
					storeId: 'store_barang',
					fields:[ 'BARANG_PENGADAAN_ID', 'BARANG_ID', 'BARANG_NAMA', 'BARANG_KODE', 'JUMLAH', 'SATUAN',
							'CARA_PEMENUHAN', 'KETERANGAN'],					
							 
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
		align : 'center',
		width: 130,
		editor: 'textfield'
	}, {
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
	{
		text: 'CARA PEMENUHAN',
		dataIndex: 'CARA_PEMENUHAN',
		flex: 1,
		editor: 'textfield'
	}]
});