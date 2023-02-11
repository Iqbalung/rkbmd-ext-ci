    Ext.define('koyoku.view.master.wilayah.Form_wilayah', {
    extend: 'Ext.Window',
    alias: 'widget.form_wilayah',
     controller: 'wilayah',
    layout : 'form',    
    padding: 10,
    modal: true,
    width: 700,
    closeAction: 'hide',    
    title:'Form Wilayah',
    items: [{
        xtype : 'form',
        items: [
            {
                xtype: 'hiddenfield',
                name: 'WILAYAH_ID'
            },{
                xtype: 'textfield',
                fieldLabel: 'Nama',
                name: 'WILAYAH_NAMA',
                width : '100%',
                allowBlank: false
            },{
                xtype: 'textarea',
                fieldLabel: 'Deskripsi Panjang',
                name: 'WILAYAH_DES_PANJANG',
                width : '100%',
                allowBlank: true
            },{
                xtype: 'textfield',
                fieldLabel: 'Deskripsi Pendek',
                name: 'WILAYAH_DES_PENDEK',
                width : '100%',
                allowBlank: true
            },{
                xtype: 'textfield',
                fieldLabel: 'Latitude',
                name: 'WILAYAH_LAT',
                width : '100%',
                allowBlank: true
            },{
                xtype: 'textfield',
                fieldLabel: 'Longitude',
                name: 'WILAYAH_LONG',
                width : '100%',
                allowBlank: true
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
