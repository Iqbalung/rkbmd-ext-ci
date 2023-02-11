Ext.define('Admin.view.bidang.Form_bidang', {
    extend: 'Ext.Window',
    alias: 'widget.form_bidang',
    controller: 'bidangs',
    layout: 'form',
    padding: 10,
    modal: true,
    width: 500,
    closeAction: 'hide',
    title: 'Form Bidang',
    items: [{
        xtype: 'form',
        items: [{
            xtype: 'hiddenfield',
            name: 'PARENT_BIDANG_ID'
        }, {
            xtype: 'hiddenfield',
            name: 'BIDANG_ID'
        }, {
            xtype: 'textfield',
            fieldLabel: 'Nama',
            name: 'BIDANG_NAMA',
            width: '100%',
            allowBlank: false
        }],
    }],
    bbar: ['->', {
        text: "Simpan",
        handler: 'save',
        glyph: 'xf0c7@fontAwesome'
    }]
});