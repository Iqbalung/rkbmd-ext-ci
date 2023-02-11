Ext.define('koyoku.view.profile_pptkis.Form_pegawai', {
    extend: 'Ext.Window',
    alias: 'widget.form_pegawai',
    controller: 'profile_pptkis',
    padding: 10,
    modal: true,
    width: 700,
    title:'Form Pegawai',
    //selama close action destroy tidak pakai Hide window diberi ID tidak masalah
    id : 'window_form_sarker',
    requires:[
        "koyoku.components.combo.Usergroup"
    ],
    items: [{
        xtype : 'form',
        items: [
            {
                xtype: 'hiddenfield',
                name: 'ID'
            },{
                xtype: 'hiddenfield',
                name: 'SATKER_ID'
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
                fieldLabel: 'Sandi',
                inputType:'password',
                name: 'PASSWORD',
                width : '100%',
                allowBlank: false
            }, {
                xtype: 'textfield',
                fieldLabel: 'No Telp',
                name: 'NO_TELP',
                width : '100%',
                allowBlank: false
            }, {
                xtype: 'textarea',
                fieldLabel: 'Alamat',
                name: 'ALAMAT_TINGGAL',
                width : '100%',
                allowBlank: false
            }, {
                xtype:'combo_usergroup',
                name:'USERGROUP_ID',
                fieldLabel: 'Usergroup',                
                width : '100%',
                allowBlank: false,
                allowItems:[2,3],
                disallowItems:[],
            }

        ],
    }],
    bbar:['->',{
        text:"Simpan",
        handler:'save_pegawai',
        glyph: 'xf0c7@fontAwesome'

    }]
});
