Ext.define('koyoku.view.tki.Form_visa', {
    extend: 'Ext.form.Panel',
    xtype: 'form_visa',
    width: 600,
    height: 'auto',
    bodyPadding: 10,
    items: [{
        xtype: 'hiddenfield',
        width : 250,
        name: 'ID',
    },{
        xtype: 'hiddenfield',
        width : 250,
        name: 'PEKERJA_ID',
    },{
        xtype: 'hiddenfield',
        width : 250,
        name: 'JOB_ID',
    },{
        xtype: 'hiddenfield',
        width : 250,
        name: 'VISA_ID',
    },{
        bind : { fieldLabel : '{language.nomor}', },
        width : '100%',
        xtype : 'textfield',
        name: 'VISA_NOMOR',
        allowBlank : false
    },{
        bind : { fieldLabel : '{language.masaberlaku}', },
        xtype: 'datefield',
        name: 'VISA_DATE_END',
        allowBlank : false
    },{
        bind : { fieldLabel : '{language.dokumen}', },
        xtype: 'filefield',
        name: 'VISA_FILE',
        allowBlank : false
    },]
});