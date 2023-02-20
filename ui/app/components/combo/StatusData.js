Ext.define('koyoku.components.combo.StatusData', {
    extend: 'Ext.form.ComboBox',
    xtype: 'combo_status_data',
	config: {
        name: 'STATUS',        
        displayField: 'STATUS_TEXT',
        valueField: 'STATUS',
    },
    emptyText: 'Status',
    store: Ext.create('Ext.data.Store', {
        fields: ['STATUS', 'STATUS_TEXT'],
        data: [{
            'STATUS': '-1',
            'STATUS_TEXT': 'Semua Status'
        }, {
            'STATUS': '0',
            'STATUS_TEXT': 'Draft'
        }, {
            'STATUS': '1',
            'STATUS_TEXT': 'Diajukan'
        }, {
            'STATUS': '2',
            'STATUS_TEXT': 'Disetujui'
        }],
    }),
});
