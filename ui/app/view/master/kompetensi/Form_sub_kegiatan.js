Ext.define('koyoku.view.master.kompetensi.Form_sub_kegiatan', {
    extend: 'Ext.Window',
    alias: 'widget.form_sub_kegiatan',
    controller: 'kompetensi',
    padding: 10,
    modal: true,
    width: 700,
    title:'Form Kegiatan',
    //selama close action destroy tidak pakai Hide window diberi ID tidak masalah
    id : 'window_form_sub_kegiatan',
    items: [{
        xtype : 'form',
        items: [
            {
                xtype: 'hiddenfield',
                name: 'KEGIATAN_ID'
            },{
                xtype: 'textarea',
                fieldLabel: 'Sub Kegiatan',
                name: 'SUB_KEGIATAN_NAMA',
                width : '100%',
                allowBlank: false
            },{
                xtype: 'textfield',
                fieldLabel: 'Kode Sub Kegiatan',
                name: 'SUB_KEGIATAN_SLUG',
                width : '100%',
                allowBlank: false
            },{
                xtype: 'textfield',
                fieldLabel: 'Satuan',
                name: 'SUB_KEGIATAN_TIPE',
                width : '100%',
                allowBlank: false
            }
        ],
    }],
    bbar:['->',{
        text:"Simpan",
        handler:'saveSub',
        glyph: 'xf0c7@fontAwesome'

    }]
});
