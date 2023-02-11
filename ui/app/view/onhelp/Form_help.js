Ext.define('koyoku.view.onhelp.Form_help', {
    extend: 'Ext.Window',
    alias: 'widget.form_help',
    controller: 'onhelp',
    padding: 10,
    modal: true,
    width: 700,
    height: 950,
    id : 'window_onhelp',
    items: [{
        xtype : 'form',
        items: [
            {
                xtype: 'hiddenfield',
                name: 'PPTKIS_ID'
            },{
                xtype: 'textfield',
                fieldLabel: 'Legalitass',
                name: 'PPTKIS_LEGALITAS',
                width : '100%',
                allowBlank: false
            }
        ],
    }],
    bbar:['->',{
        text:"Simpan",
        handler:'save',
        glyph: 'xf0c7@fontAwesome'

    }]
});
