Ext.define('koyoku.components.combo.JenisKIB', {
    extend: 'Ext.form.ComboBox',
    xtype: 'combo_jenis_kib',
	config: {
        name: 'JENIS_KIB',        
        displayField: 'JENIS_KIB',
        valueField: 'JENIS_KIB',
    },
    store: Ext.create('Ext.data.Store', {
        fields: ['JENIS_KIB_ID', 'JENIS_KIB'],
        data: [{
            'JENIS_KIB_ID': 'A',
            'JENIS_KIB': 'A'
        }, {
            'JENIS_KIB_ID': 'B',
            'JENIS_KIB': 'B'
        }, {
            'JENIS_KIB_ID': 'C',
            'JENIS_KIB': 'C'
        }],
    }),
});
