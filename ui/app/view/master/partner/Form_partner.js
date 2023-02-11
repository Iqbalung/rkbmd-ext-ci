Ext.define('koyoku.view.master.partner.Form_partner', {
    extend: 'Ext.Window',
    alias: 'widget.form_partner',
    controller: 'partner',
    padding: 10,
    modal: true,
    width: 700,
    closeAction: 'hide',   
    title:'Form Partner',
    items: [{
        xtype : 'form',
        items: [
            {
                xtype: 'hiddenfield',
                name: 'Nama_ID'
            },{
                xtype: 'textfield',
                fieldLabel: 'Nama',
                name: 'NAMA_PARTNER',
                width : '100%',
                allowBlank: false
            },{
                xtype: 'hiddenfield',
                readOnly: true,
                name: "UPDATE"
            }
        ],
    }],
    bbar:['->',{
        text:"Simpan",
        handler:'save',
        glyph: 'xf0c7@fontAwesome'
    }]
});
