Ext.define('koyoku.view.tki.Form_berangkat', {
    extend: 'Ext.form.Panel',
    xtype: 'form_berangkat',
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
        bind : { fieldLabel : '{language.bandaraberangkat}', },
        xtype: 'textfield',
        name: 'BANDARA_START',
        width : '100%',
    },{
        bind : { fieldLabel : '{language.bandaratujuan}', },
        xtype: 'textfield',
        name: 'BANDARA_END',
        width : '100%',
    },{
        bind : { fieldLabel : '{language.tanggal}', },
        xtype: 'datefield',
        name: 'PEMBERANGKATAN_DATE',
        submitFormat : 'Y-m-d',
        width : '100%',
    },{
        bind : { fieldLabel : '{language.maskapai}', },
        width : '100%',
        xtype : 'textfield',
        name: 'PEMBERANGKATAN_MASKAPAI',

    }]
});