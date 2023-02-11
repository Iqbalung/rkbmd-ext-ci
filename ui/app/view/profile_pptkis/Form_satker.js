Ext.define('koyoku.view.profile_pptkis.Form_satker', {
    extend: 'Ext.Window',
    alias: 'widget.form_satker',
    controller: 'profile_pptkis',
    padding: 10,
    modal: true,
    width: 700,
    title:'Form Satuan Kerja',
    //selama close action destroy tidak pakai Hide window diberi ID tidak masalah
    id : 'window_form_sarker',
    items: [{
        xtype : 'form',
        items: [
            {
                xtype: 'hiddenfield',
                name: 'SATKER_ID'
            },{
                xtype: 'hiddenfield',
                name: 'PPTKIS_ID'
            },{
                xtype: 'hiddenfield',
                name: 'SATKER_TIPE',                
            },{
                xtype: 'textfield',
                fieldLabel: 'Nama',
                name: 'SATKER_NAMA',
                width : '100%',
                allowBlank: false
            }, {
                xtype: 'textfield',
                fieldLabel: 'No Telp',
                name: 'SATKER_TELP',
                width : '100%',
                allowBlank: false
            }, {
                xtype: 'textarea',
                fieldLabel: 'Alamat',
                name: 'SATKER_ALAMAT',
                width : '100%',
                allowBlank: false
            },{
                xtype: 'wilayahfield',
            }
        ],
    }],
    bbar:['->',{
        text:"Simpan",
        handler:'save_satker',
        glyph: 'xf0c7@fontAwesome'

    }]
});
