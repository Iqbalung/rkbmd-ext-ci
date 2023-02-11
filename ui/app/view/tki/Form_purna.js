Ext.define('koyoku.view.tki.Form_purna', {
    extend: 'Ext.form.Panel',
    xtype: 'form_purna',
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
        name: 'PURNA_ID',
    },{
        xtype: 'hiddenfield',
        width : 250,
        name: ' STATUS_ID',
        value : '4.2.'
    },{
        xtype: 'hiddenfield',
        width : 250,
        name: 'JOB_ID',
    },{
        xtype : 'label',
        bind : { text : '{language.uraian}', },
    },{ 
        xtype: 'datefield',
        name: 'PURNA_DATE',
        allowBlank : false,
        submitFormat : 'Y-m-d'
    },{
        xtype : 'label',
        bind : { text : '{language.statuskepulangan}', },
    },{
        xtype: 'combo_kepulangan',
        forceSelection: false,
        allowBlank: true,
        queryMode: 'remote',
        allowBlank : false,
        labelWidth: 80,
        name: 'ALASANPULANG_ID',
        itemId:'riwayat',
    },{
        xtype : 'label',
        bind : { text : '{language.uraian}', },
    },{
        width : '100%',
        xtype : 'textarea',
        allowBlank : false,
        name: 'PURNA_KETERANGAN',

    }]
});