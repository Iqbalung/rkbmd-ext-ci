Ext.define('koyoku.view.profile_pptkis.Form_fasilitas', {
    extend: 'Ext.Window',
    alias: 'widget.form_fasilitas',
    controller: 'profile_pptkis',
    padding: 10,
    modal: true,
    width: 700,
    title:'Tambah Fasilitas',
    //selama close action destroy tidak pakai Hide window diberi ID tidak masalah
    id : 'window_form_fasilitas',
    items: [{
        xtype : 'form',
        items: [
            {
                xtype: 'hiddenfield',
                name: 'FASILITAS_ID'
            },{
                xtype: 'textfield',
                fieldLabel: 'Nama',
                name: 'FASILITAS_NAMA',
                width : '100%',
                allowBlank: false
            },{
                xtype: 'filefield',
                fieldLabel: 'Foto',
                buttonText:"Cari",
                name: 'FASILITAS_DOKUMEN',
                width : '100%',                
            }, {
                xtype: 'textarea',
                bind : { fieldLabel : '{language.deskripsi}', },
                name: 'FASILITAS_DESKRIPSI',
                width : '100%',                
            }
        ],
    }],
    bbar:['->',{
        text:"Simpan",
        handler:'save_fasilitas',
        glyph: 'xf0c7@fontAwesome'

    }]
});
