Ext.define('koyoku.view.master.kompetensi.Form_kompetensi', {
    extend: 'Ext.Window',
    alias: 'widget.form_kompetensi',
    xtype: 'main_form_kompetensi',
    controller: 'kompetensi',
    width:600,
    modal : true,
    Title : 'Form kompetensi',
    id : 'window_form_kegiatan',
    closeAction : 'hide',
    padding: 20,
    items:[{
        xtype : 'form',
        items: [{
                xtype: 'hiddenfield',
                name: 'BIDANG_ID'
            },
            {
                xtype: 'hiddenfield',
                name: 'KEGIATAN_ID'
            },
            /* {
                xtype: 'fieldcontainer',
                fieldLabel: 'Bidang',
                layout: 'hbox',
                items:[{
                    xtype: 'textfield',
                    name: 'BIDANG_NAMA',
                    width : '80%',
                    allowBlank: false
                },{
                    xtype:'button',
                    handler:'bidang',
                    width : '20%',
                    text: 'Pilih Bidang'
                }]
            }, */
            {
                xtype: 'textfield',
                fieldLabel: 'Nama',
                name: 'KEGIATAN_NAMA',
                width : '100%',
                allowBlank: false
            },{
                xtype: 'hiddenfield',
                readOnly: true,
                name: "UPDATE"
    }],
    }],
    bbar:['->',{
        text:"Simpan",
        handler:'save',
        glyph: 'xf0c7@fontAwesome'

    }]
});
