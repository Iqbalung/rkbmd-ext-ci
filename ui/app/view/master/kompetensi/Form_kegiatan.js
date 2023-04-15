Ext.define('koyoku.view.master.kompetensi.Form_kegiatan', {
    extend: 'Ext.Window',
    alias: 'widget.form_kegiatan',
    xtype: 'main_form_kegiatan',
    controller: 'kompetensi',
    width:600,
    modal : true,    
    id : 'window_form_kegiatan',
    closeAction : 'destroy',
    condif:{
        title: ''
    },
    padding: 20,
    requires: [
        'koyoku.components.combo.Program'
    ],
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
                xtype: 'combo_program',
                fieldLabel: 'Program',
                name: 'PROGRAM_ID',
                width : '100%',
                allowBlank: false
            },
            {
                xtype: 'textfield',
                fieldLabel: 'Nama',
                name: 'KEGIATAN_NAMA',
                width : '100%',
                allowBlank: false
            }, {
                xtype: 'hiddenfield',
                readOnly: true,
                name: "UPDATE"
    }],
    }],
    bbar:['->',{
        text:"Simpan",
cls:'btn-main btn-x-m2',
        handler:'save',
        glyph: 'xf0c7@fontAwesome'

    }]
});
