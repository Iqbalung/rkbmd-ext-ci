Ext.define('koyoku.view.profile_tki.Form_media', {
    extend: 'Ext.Window',
    alias: 'widget.form_media',
    controller: 'profile_tki',
    padding: 10,
    modal: true,
    width: 700,
    title:'Form Fasilitas',
    requires: [
        "koyoku.components.combo.Klasifikasi"
    ],
    //selama close action destroy tidak pakai Hide window diberi ID tidak masalah
    id : 'window_form_media',
    items: [{
        xtype : 'form',
        items: [
            {
                xtype: 'hiddenfield',
                name: 'ID'
            },{
                xtype: 'combo_klasifikasi',                
                name: 'KLASIFIKASI_ID',
                width : '100%',                
            },{
                xtype: 'filefield',
                fieldLabel: 'File',
                buttonText:"Cari",
                name: 'PENGUNA_DOKUMEN',
                width : '100%',                
            }, {
                xtype: 'textarea',
                bind : { fieldLabel : '{language.deskripsi}', },
                name: 'DOKUMEN_DESKRIPSI',                
                width : '100%',                
            }
        ],
    }],
    bbar:['->',{
        text:"Simpan",
        handler:'save_media',
        glyph: 'xf0c7@fontAwesome'

    }]
});
