Ext.define('koyoku.components.combo.StatusBarang', {
    extend: 'Ext.form.ComboBox',
    xtype: 'combo_status_barang',
	config: {
        name: 'STATUS_BARANG',        
        displayField: 'STATUS_NAMA',
        valueField: 'STATUS_ID',
    },
    store: Ext.create('Ext.data.Store', {
        fields: ['STATUS_ID', 'STATUS_NAMA'],
        data: [{
            'STATUS_ID': 'milik_pemkab',
            'STATUS_NAMA': 'Milik Pemkab'
        }, {
            'STATUS_ID': 'sewa',
            'STATUS_NAMA': 'Sewa'
        }, ],
    }),
});
