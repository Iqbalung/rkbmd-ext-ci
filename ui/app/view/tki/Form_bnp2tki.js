Ext.define('koyoku.view.tki.Form_bnp2tki', {
    extend: 'Ext.form.Panel',
    xtype: 'form_bnp2tki',
    requires: [
        'koyoku.components.combo.Sarkes'
    ],
    defaults : {
        width : '100%',
    },
    width: 700,
    height: 'auto',
    bodyPadding: 5,
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
        name: 'PERJANJIAN_ID',
    },{
        bind : { fieldLabel : '{language.tglditetapkan}', },
        xtype: 'datefield',
        width : '100%',
        name: 'BNP2TKI_DATE',
        submitFormat : 'Y-m-d',
        allowBlank : false
    },{
        bind : { fieldLabel : '{language.uraian}', },
        xtype : 'textarea',
        name: 'BNP2TKI_URAIAN',
        allowBlank : false

    }]
});