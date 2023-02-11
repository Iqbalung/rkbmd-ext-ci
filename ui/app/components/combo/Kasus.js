Ext.define('koyoku.components.combo.Kasus', {
    extend: 'Ext.form.ComboBox',
    xtype: 'combo_kasus',
    editable : false,
    store: Ext.create('Ext.data.Store', {
        fields: ['ALASANKASUS_ID', 'TEXT'],
        data: [{
                "ALASANKASUS_ID": "1",
                "TEXT": "Pemutusan Hubungan Kerja"
            },{
                "ALASANKASUS_ID": "2",
                "TEXT": "Sakit Keras"
            },{
                "ALASANKASUS_ID": "3",
                "TEXT": "Dipulangkan ke Indonesia (masa kontrak belum berakhir)"
            },{
                "ALASANKASUS_ID": "4",
                "TEXT": "Melakukan tindakan kriminal"
            },{
                "ALASANKASUS_ID": "5",
                "TEXT": "Terkena hukuman"
            },{
                "ALASANKASUS_ID": "6",
                "TEXT": "Terkena kriminalisasi (pemerkosaan, kekerasan, perampokan"
            },{
                "ALASANKASUS_ID": "7",
                "TEXT": "Overstay (dilihat dari paspor dan visa)"
            },{
                "ALASANKASUS_ID": "7",
                "TEXT": "Pindah kewarganegaraan"
            },{
                "ALASANKASUS_ID": "7",
                "TEXT": "Pekerjaan tidak sesuai kontrak"
            },{
                "ALASANKASUS_ID": "7",
                "TEXT": "Tidak digaji / gaji tidak sesuai kontrak"
            }
        ]
    }),
    displayField: 'TEXT',
    valueField: 'ALASANKASUS_ID',
});