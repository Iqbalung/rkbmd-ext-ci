Ext.define('koyoku.view.tki.Form_pap', {
    extend: 'Ext.form.Panel',
    xtype: 'form_pap',
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
        name: 'PEMBEKALAN_ID',
    },{
        xtype: 'hiddenfield',
        width : 250,
        name: 'PEKERJA_ID',
    },{
        xtype: 'hiddenfield',
        width : 250,
        name: 'JOB_ID',
    },{
        bind : { fieldLabel : '{language.tglsampai}', },
        xtype: 'datefield',
        name: 'SAMPAI_DATE',
        submitFormat : 'Y-m-d'
    },{
        bind : { fieldLabel : '{language.keterangan}', },
        width : '100%',
        xtype : 'textarea',
        name: 'SAMPAI_KETERANGAN',

    }]
});