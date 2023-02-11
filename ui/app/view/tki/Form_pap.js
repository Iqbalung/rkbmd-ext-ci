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
        bind : { fieldLabel : '{language.tglmulai}', },
        xtype: 'datefield',
        name: 'PEMBEKALAN_START',
        submitFormat : 'Y-m-d',
        allowBlank : false
    },{
        bind : { fieldLabel : '{language.tglselesai}', },
        xtype: 'datefield',
        name: 'PEMBEKALAN_END',
        submitFormat : 'Y-m-d',
        allowBlank : false
    },{
        bind : { fieldLabel : '{language.uraian}', },
        width : '100%',
        xtype : 'textarea',
        name: 'PEMBEKALAN_URAIAN',
        allowBlank : false

    }]
});