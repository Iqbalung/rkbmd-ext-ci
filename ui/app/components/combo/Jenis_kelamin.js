Ext.define('koyoku.components.combo.Jenis_kelamin', {
    extend: 'Ext.form.ComboBox',
    xtype: 'combo_jenis_kelamin',
    fieldLabel: 'Jenis Kelamin',
    editable : false,
    store: Ext.create('Ext.data.Store', {
        fields: ['ID', 'TEXT'],
        data: [{
                "ID": "L",
                "TEXT": "Laki - Laki"
            }, {
                "ID": "P",
                "TEXT": "Perempuan"
            }
        ]
    }),
    displayField: 'TEXT',
    valueField: 'ID',
});