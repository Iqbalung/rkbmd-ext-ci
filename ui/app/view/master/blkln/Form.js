Ext.define('koyoku.view.master.blkln.Form', {
    extend: 'Ext.Window',
    alias: 'widget.form_blkln',
    controller: 'blkln',
    padding: 10,
    modal: true,
    width: 700,
    title:'Form BLKLN',
    //selama close action destroy tidak pakai Hide window diberi ID tidak masalah
    id : 'window_form_blkln',
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
                fieldLabel: 'Profile',
                name: 'PROFILE',
                width : '100%',
                allowBlank: false
            }, {
                xtype: 'textfield',
                fieldLabel: 'Negara Tujuan',
                name: 'NEGARA',
                width : '100%',
                allowBlank: false
            }, {
                xtype: 'textfield',
                fieldLabel: 'Legalitas',
                name: 'LEGALITAS',
                width : '100%',
                allowBlank: false
            }, {
                xtype: 'textfield',
                fieldLabel: 'Akreditasi',
                name: 'AKREDITASI',
                width : '100%',
                allowBlank: false
            },{
                xtype: 'textfield',
                fieldLabel: 'No Telp',
                name: 'TELP',
                width : '100%',
                allowBlank: false
            }, {
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
