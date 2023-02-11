Ext.define('koyoku.view.tki.Form_pindah', {
    extend: 'Ext.form.Panel',
    xtype: 'form_pindah',
    width: 600,
    height: 'auto',
    bodyPadding: 10,
    items: [{
        xtype: 'hiddenfield',
        width: 250,
        name: 'ID',
    }, {
        xtype: 'hiddenfield',
        width: 250,
        name: 'PEKERJA_ID',
    }, {
        xtype: 'hiddenfield',
        width: 250,
        name: ' STATUS_ID',
        value: '4.2.'
    }, {
        xtype: 'hiddenfield',
        width: 250,
        name: 'JOB_ID',
    }, {
        xtype: 'label',
        bind : { text : '{language.tglditetapkan}', },
    }, {
        xtype: 'datefield',
        name: 'RIWAYAT_DATE',
        submitFormat: 'Y-m-d'
    },{
        xtype: 'label',
        bind : { text : '{language.alasankepindahan}', },
    }, {
        xtype: 'combo_pindah',
        forceSelection: false,
        allowBlank: true,
        queryMode: 'remote',
        labelWidth: 80,
        itemId:'riwayat',
        name: 'ALASANPINDAH_ID',
    }, {
        xtype: 'label',
         bind : { text : '{language.uraian}', },
    }, {
        width: '100%',
        xtype: 'textarea',
        name: 'RIWAYAT_KETERANGAN',

    }]
});