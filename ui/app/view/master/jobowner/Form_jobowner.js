Ext.define('koyoku.view.master.jobowner.Form_jobowner', {
    extend: 'Ext.Window',
    alias: 'widget.form_jobowner',
    controller: 'jobowner',
    padding: 10,
    modal: true,
    width: 700,
    closeAction: 'hide',   
    title:'Form Job Owner',
    items: [{
        xtype : 'form',
        items: [
            {
                xtype: 'hiddenfield',
                name: 'OWNER_ID'
            },{
                xtype: 'textfield',
                fieldLabel: 'Nama',
                name: 'OWNER_NAMA',
                width : '100%',
                allowBlank: false
            },{
                xtype: 'wilayahfield',
                fieldLabel: 'Wilyah', 
            },{
                xtype: 'textfield',
                fieldLabel: 'No Telp',
                name: 'OWNER_NOMOR_TELPHONE',
                width : '100%',
                allowBlank: false
            },{
                xtype: 'textarea',
                fieldLabel: 'Alamat Lengkap',
                name: 'OWNER_ALAMAT_LENGKAP',
                width : '100%',
                allowBlank: false
            },{
                xtype: 'textfield',
                fieldLabel: 'Website',
                name: 'OWNER_WEBSITE',
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
