Ext.define('koyoku.view.onhelp.Win_add', {
    extend: 'Ext.Window',
    alias: 'widget.window_add',
    modal: true,
    controller : 'onhelp',
    requires : [
        'koyoku.view.onhelp.Form_help'
    ],
    title:'Buat Topik',
    bodyPadding: 10,
    width : 600,
    height : 300,
    items: [{
        xtype : 'form',
        items: [{
                xtype: 'textfield',
                fieldLabel: 'Topik',
                name: 'HELP_JUDUL',
                emptyText : 'Merubah Sandi',
                width : '100%',
                allowBlank: false
            },{
                xtype: 'textarea',
                fieldLabel: 'Pertanyaan',
                name: 'CHAT_TEXT',
                emptyText : 'Saya tidak bisa merubah sandi, bagaimana caranya ?',
                width : '100%',
                allowBlank: false
            }
        ],
    }],
    bbar:['->',{
        text:"Simpan",
        glyph: 'xf0c7@fontAwesome',
        handler:'save'
    }]
});
