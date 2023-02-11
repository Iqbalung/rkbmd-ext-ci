Ext.define('koyoku.view.tki.Form_proses_lk', {
    extend: 'Ext.form.Panel',
    xtype: 'form_proses_lk',
    requires: [
        'koyoku.components.combo.Lembaga_keuangan'
    ],
    width: 700,
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
        name: 'LLK_ID',
    },{
        xtype: 'hiddenfield',
        width : 250,
        name: 'JOB_ID',
    },{
        fieldLabel: 'Tanggal',
        xtype: 'datefield',
        name: 'LK_DATE',
        submitFormat : 'Y-m-d', 
        allowBlank : false,
    }, {
        width: '100%',
        xtype: 'combo_lembaga_keuangan',
        name: 'LK_ID',
    }, {
        bind : { fieldLabel : '{language.noakun}', },
        xtype: 'textfield',
        width: 250,
        allowBlank : false,
        name: 'LK_AKUN',
    }, {
        bind : { fieldLabel : '{language.uraian}', },
        xtype: 'textarea',
        width: '100%',
        allowBlank : false,
        name: 'LK_URAIAN',
    },{
        bind : { fieldLabel : '{language.dokumen}', },
        width: 300,
        xtype: 'filefield',
        name: 'LK_FILE',
    }]
});