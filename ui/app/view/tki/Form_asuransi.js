Ext.define('koyoku.view.tki.Form_asuransi', {
    extend: 'Ext.form.Panel',
    xtype: 'form_asuransi',
    requires: [
        'koyoku.components.combo.Lembaga_asuransi'
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
        name: 'ASURANSI_STATUS',
    },{
        xtype: 'hiddenfield',
        width : 250,
        name: 'ASURANSI_ID',
    },{
        xtype: 'hiddenfield',
        width : 250,
        name: 'JOB_ID',
    },{
        bind : { fieldLabel : '{language.tanggal}', },
        xtype: 'datefield',
        name: 'ASURANSI_DATE',
        allowBlank : false,
        submitFormat : 'Y-m-d'
    }, {
        width: '100%',
        xtype: 'combo_lembaga_asuransi',
        name: 'ASURANSI_LK',
        allowBlank : false
    }, {
        bind : { fieldLabel : '{language.noakun}', },
        xtype: 'textfield',
        width: 250,
        name: 'ASURANSI_AKUN',
        allowBlank : false
    }, {
        bind : { fieldLabel : '{language.uraian}', },
        xtype: 'textarea',
        width: '100%',
        name: 'ASURANSI_URAIAN',
        allowBlank : false
    }, {
        bind : { fieldLabel : '{language.dokumen}', },
        width: 300,
        xtype: 'filefield',
        name: 'ASURANSI_FILES',
    }]
});