Ext.define('koyoku.view.tki.Form_kasus', {
    extend: 'Ext.form.Panel',
    xtype: 'form_kasus',
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
        name: ' STATUS_ID',
        value : '4.5.'
    },{
        xtype: 'hiddenfield',
        width : 250,
        name: 'JOB_ID',
    },{
        xtype : 'label',
        bind : { text : '{language.tglditetapkan}', },
    },{ 
        xtype: 'datefield',
        name: 'RIWAYAT_DATE',
        submitFormat : 'Y-m-d'
    },{
        xtype : 'label',
        bind  : { text : '{language.uraian}', },
    },{
        width : '100%',
        xtype : 'textarea',
        name: 'RIWAYAT_KETERANGAN',

    }]
});