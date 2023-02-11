Ext.define('koyoku.view.master.lsp.Form', {
    extend: 'Ext.Window',
    alias: 'widget.form_lsp',
    controller: 'lsp',
    padding: 10,
    modal: true,
    width: 700,
    title:'Form Lembaga Sertifikasi Profesi',
    //selama close action destroy tidak pakai Hide window diberi ID tidak masalah
    id : 'window_form_lsp',
    items: [{
        xtype : 'form',
        items: [
            {
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
                fieldLabel: 'Jenis',
                name: 'JENIS',
                width : '100%',
                allowBlank: false
            }, {
                xtype: 'textfield',
                fieldLabel: 'Bidang',
                name: 'BIDANG',
                width : '100%',
                allowBlank: false
            }, {
                xtype: 'textfield',
                fieldLabel: 'Profile',
                name: 'PROFILE',
                width : '100%',
                allowBlank: false
            }, {
                xtype: 'textfield',
                fieldLabel: 'No Telp',
                name: 'TELP',
                width : '100%',
                allowBlank: false
            },{
                xtype: 'textfield',
                fieldLabel: 'No Lisensi BNSP',
                name: 'NO_LISENSI_BNSP',
                width : '100%',
                allowBlank: false
            },{
                xtype: 'textarea',
                fieldLabel: 'Layanan',
                name: 'LAYANAN',
                width : '100%',
                allowBlank: false
            }, {
                xtype: 'textarea',
                fieldLabel: 'Alamat',
                name: 'ALAMAT',
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
