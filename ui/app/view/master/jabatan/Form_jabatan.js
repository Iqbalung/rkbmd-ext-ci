Ext.define('koyoku.view.master.jabatan.Form_jabatan', {
    extend: 'Ext.form.Panel',
    alias: 'widget.form_jabatan',
    xtype: 'main_form_jabatan',
    requires : [
        'koyoku.components.field.Bidang'
    ],
    padding : 5,
    items: [{
        xtype: 'panel',
        region:'north',
        height : 'auto',
        items: [{
            xtype: 'hiddenfield',
            name: 'JABATAN_ID',
        }, {
            xtype: 'textfield',
            fieldLabel: 'Nama',
            name: 'JABATAN_NAMA',
            width: '100%',
            allowBlank: false
        }, {
            xtype: 'bidangfield',
            fieldLabel: 'Bidang',
            modal: true,
        }, {
            xtype: 'textarea',
            bind : { fieldLabel : '{language.deskripsi}', },
            name: 'JABATAN_DESKRIPSI',
            width: '100%',
            allowBlank: false
        }, {
            xtype: 'hiddenfield',
            readOnly: true,
            name: "UPDATE"
        }]
    }, {
        xtype: 'tabs_panel',
        region:'center',
        autoScroll : true
    }],
});