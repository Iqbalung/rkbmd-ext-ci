Ext.define('koyoku.components.combo.Pindah', {
    extend: 'Ext.form.ComboBox',
    xtype: 'combo_pindah',
    editable : false,
    store: Ext.create('Ext.data.Store', {
        fields: ['ALASANPINDAH_ID', 'TEXT'],
        data: [{
                "ALASANPINDAH_ID": "1",
                "TEXT": "Mengikuti Majikan / Perusahaan"
            }, {
                "ALASANPINDAH_ID": "2",
                "TEXT": "Inisaiatif Sendiri"
            },{
                "ALASANPINDAH_ID": "3",
                "TEXT": "Oleh Barang"
            },
        ]
    }),
    displayField: 'TEXT',
    valueField: 'ALASANPINDAH_ID',
});