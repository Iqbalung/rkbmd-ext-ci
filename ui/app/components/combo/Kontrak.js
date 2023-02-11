Ext.define('koyoku.components.combo.Kontrak', {
    extend: 'Ext.form.ComboBox',
    xtype: 'combo_kontrak',
    name: 'KONTRAK_ID',
    width: '30%',
    name: 'KONTRAK_ID',
    displayField: 'KONTRAK_NAMA',
    valueField: 'KONTRAK_ID',
    store: Ext.create('Ext.data.Store', {
        fields: ['id', 'value'],
        data: [{
            'KONTRAK_ID': '1',
            'KONTRAK_NAMA': 'FULLTIME'
        }, {
            'KONTRAK_ID': '2',
            'KONTRAK_NAMA': 'PARTTIME'
        }, ],
    }),
});
