Ext.define('koyoku.view.master.kompetensi.Form_output', {
    extend: 'Ext.Window',
    alias: 'widget.form_output',
    controller: 'kompetensi',
    padding: 10,
    modal: true,
    width: 700,
    title:'Form Output',
    closeAction : 'destroy',
    //selama close action destroy tidak pakai Hide window diberi ID tidak masalah
    id : 'window_form_output',
    items: [{
        xtype : 'form',
        items: [
            {
                xtype: 'hiddenfield',
                name: 'OUTPUT_ID'
            },
            {
                xtype: 'hiddenfield',
                name: 'SUB_KEGIATAN_ID'
            },
            {
                xtype: 'hiddenfield',
                name: 'KEGIATAN_ID'
            }, {
                xtype: 'textarea',
                fieldLabel: 'Output',
                name: 'OUTPUT_NAMA',
                width : '100%',
                allowBlank: false
            }, {
                xtype: 'hiddenfield',
                readOnly: true,
                name: "UPDATE"
            }
        ],
    }],
    bbar:['->',{
        text:"Simpan",
cls:'btn-main btn-x-m2',
        handler:'saveOutput',
        glyph: 'xf0c7@fontAwesome'

    }]
});
