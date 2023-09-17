Ext.define('koyoku.view.master.pengguna.Form_pengguna', {
    extend: 'Ext.Window',
    alias: 'widget.form_pengguna',
    controller: 'pengguna',
    padding: 10,
    modal: true,
    width: 700,
    title:'Form Pengguna',
    requires : [
        'koyoku.components.field.Bidang'
    ],
    //selama close action destroy tidak pakai Hide window diberi ID tidak masalah
    id : 'window_form_pengguna',
    items: [{
        xtype : 'form',
        items: [
            {
                xtype: 'hiddenfield',
                name: 'PASSWORD'
            },{
                xtype: 'hiddenfield',
                name: 'ID'
            },{
                xtype: 'textfield',
                fieldLabel: 'Nama',
                name: 'NAMA',
                width : '100%',
                allowBlank: false
            },{
                xtype: 'textfield',
                fieldLabel: 'Email',
                name: 'EMAIL',
                width : '100%',
                allowBlank: false
            },{
                xtype: 'textfield',
                fieldLabel: 'Password', 
                name: 'NEW_PASSWORD',
                width : '100%',
                allowBlank: false
            },{
                xtype: 'combo_usergroup',
                fieldLabel: 'Usergroup',
                allowBlank: false,
            },
            {
                xtype: 'bidangfield',
                fieldLabel: 'OPD',
                modal: true,
            },
        ],
    }],
    bbar:['->',{
        text:"Simpan",
        handler:'save',
        glyph: 'xf0c7@fontAwesome'

    }]
});
