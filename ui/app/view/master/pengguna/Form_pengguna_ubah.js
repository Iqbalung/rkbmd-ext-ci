Ext.define('koyoku.view.master.pengguna.Form_pengguna_ubah', {
    extend: 'Ext.Window',
    alias: 'widget.form_pengguna',
    controller: 'main',
    padding: 10,
    modal: true,
    width: 700,
    title:'Ubah Sandi',
    
    //selama close action destroy tidak pakai Hide window diberi ID tidak masalah
    id : 'window_form_pengguna_ubah',
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
                xtype: 'hiddenfield',
                fieldLabel: 'Nama',
                name: 'NAMA',
                allowBlank: false
            },{
                xtype: 'hiddenfield',
                fieldLabel: 'Email',
                name: 'EMAIL',
                labelWidth: '20%', 
                width : '80%',
                allowBlank: false
            },{
                xtype: 'textfield',
                fieldLabel: 'Kata Sandi Lama', 
                name: 'OLD_PASSWORD',
                labelWidth: '20%', 
                width : '80%',
                allowBlank: false,
                inputType: 'password'

            },{
                xtype: 'textfield',
                fieldLabel: 'Kata Sandi Baru',
                name: 'NEW_PASSWORD',
                labelWidth: '20%', 
                width : '80%',
                allowBlank: false,
                inputType: 'password'
            },{
                xtype: 'textfield',
                fieldLabel: 'Konfirmasi Ulang Kata Sandi', 
                name: 'CON_PASSWORD',
                labelWidth: '20%', 
                width : '80%',
                allowBlank: false,
                inputType: 'password'
            }
        ],
    }],
    bbar:['->',{
        text:"Simpan",
        handler:'saveupd',
        glyph: 'xf0c7@fontAwesome'

    }]
});
