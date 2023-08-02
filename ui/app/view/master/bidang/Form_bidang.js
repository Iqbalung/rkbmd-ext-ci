Ext.define('koyoku.view.master.bidang.Form_bidang', {
    extend: 'Ext.Window',
    alias: 'widget.form_bidang',
    controller: 'bidang',
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
            name: 'ROWID'
        }, {
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
        },
        {
            xtype: 'textfield',
            fieldLabel: 'Nama Pejabat',
            name: 'BIDANG_PEJABAT',
            columnWidth: 0.7,
        }, {
            xtype: 'textfield',
            fieldLabel: 'NRP Pejabat',
            name: 'BIDANG_PEJABAT_NRP',
            columnWidth: 0.7,
        }, {
            xtype: 'textarea',
            fieldLabel: 'Alamat',
            name: 'BIDANG_ALAMAT',
            columnWidth: 0.7,
        }
    ],
    }],
    bbar: ['->', {
        text: "Simpan",
        cls:'btn-main btn-x-m2',
        handler: 'save',
        glyph: 'xf0c7@fontAwesome'
    }]
});