Ext.define('koyoku.view.master.program.Form', {
    extend: 'Ext.Window',
    alias: 'widget.form_program',
    controller: 'program',
    padding: 10,
    modal: true,
    width: 700,
    title:'Form Program',
    //selama close action destroy tidak pakai Hide window diberi ID tidak masalah
    id : 'window_form_program',
    items: [{
        xtype : 'form',
        items: [
            {
                xtype: 'hiddenfield',
                name: 'PROGRAM_ID'
            },{
                xtype: 'hiddenfield',
                name: 'BIDANG_ID'
            }, {
                xtype: 'hiddenfield',
                name: 'TAHUN'
            }, {
                xtype: 'textfield',
                fieldLabel: 'Nama',
                name: 'PROGRAM_NAMA',
                width : '100%',
                allowBlank: false
            }
        ],
    }],
    bbar:['->',{
        text:"Simpan",
        cls:'btn-main btn-x-m2',
        handler:'save',
        glyph: 'xf0c7@fontAwesome'

    }]
});
