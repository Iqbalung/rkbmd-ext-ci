Ext.define('koyoku.components.combo.Kepulangan', {
    extend: 'Ext.form.ComboBox',
    xtype: 'combo_kepulangan',
    editable : false,
    store: Ext.create('Ext.data.Store', {
        fields: ['ALASANPULANG_ID', 'TEXT'],
        data: [{
                "ALASANPULANG_ID": "1",
                "TEXT": "Mandiri"
            },{
                "ALASANPULANG_ID": "2",
                "TEXT": "Bantuan"
            }]
    }),
    displayField: 'TEXT',
    valueField: 'ALASANPULANG_ID',
});