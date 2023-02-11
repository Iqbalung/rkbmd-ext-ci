Ext.define('koyoku.view.master.pptkis.Form_pptkis', {
    extend: 'Ext.Window',
    alias: 'widget.form_pptkis',
    controller: 'pptkis',
    padding: 10,
    modal: true,
    width: 700,
    title:'Form PPTKIS',
    //selama close action destroy tidak pakai Hide window diberi ID tidak masalah
    id : 'window_form_pptkis',
    items: [{
        xtype : 'form',
        items: [
            {
                xtype: 'hiddenfield',
                name: 'PPTKIS_ID'
            },{
                xtype: 'textfield',
                fieldLabel: 'Nama',
                name: 'PPTKIS_NAMA',
                width : '100%',
                allowBlank: false
            },{
                xtype: 'textfield',
                fieldLabel: 'No Telp',
                name: 'PPTKIS_NOMOR_TELPHONE',
                width : '100%',
                allowBlank: false
            },{
                xtype: 'textarea',
                fieldLabel: 'Alamat',
                name: 'PPTKIS_ALAMAT',
                width : '100%',
                allowBlank: false
            },{
                xtype: 'textarea',
                fieldLabel: 'DESKRIPSI PENDEK',
                name: 'PPTKIS_DES_PENDEK',
                width : '100%',
                allowBlank: true
            },{
                xtype: 'textarea',
                fieldLabel: 'DESKRIPSI PANJANG',
                name: 'PPTKIS_DES_PANJANG',
                width : '100%',
                allowBlank: true
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
