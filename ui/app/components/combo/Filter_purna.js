Ext.define('koyoku.components.combo.Filter_purna', {
    extend: 'Ext.form.ComboBox',
    xtype: 'combo_filterpurna',
    fieldLabel: 'Konfirmasi Kepulangan',
    editable : false,
   store: Ext.create('Ext.data.Store', {
        fields: ['ID', 'TEXT'],
        data: [{
                "ID": "1",
                "TEXT": "Sudah Konfirmasi"
            },{
                "ID": "2",
                "TEXT": "Belum Konfirmasi"
            }]
    }),
    displayField: 'TEXT',
    valueField: 'ID',
});