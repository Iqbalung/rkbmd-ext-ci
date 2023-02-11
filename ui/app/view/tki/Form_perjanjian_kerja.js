Ext.define('koyoku.view.tki.Form_perjanjian_kerja', {
    extend: 'Ext.form.Panel',
    xtype: 'form_perjanjian_kerja',
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
        bind : { fieldLabel : '{language.tanggal}', },
        xtype: 'datefield',
        width : '100%',
        name: 'PERJANJIAN_DATE',
        submitFormat : 'Y-m-d'
    },{
        bind : { fieldLabel : '{language.berlakumulai}', },
        xtype: 'datefield',
        name: 'PERJANJIAN_START',
        submitFormat : 'Y-m-d'
    },{
        bind : { fieldLabel : '{language.berlakusampai}', },
        xtype: 'datefield',
        name: 'PERJANJIAN_END',
        submitFormat : 'Y-m-d'
    }, {
        bind : { fieldLabel : '{language.uraian}', },
        xtype : 'textarea',
        name: 'PERJANJIAN_URAIAN',
    },{
        bind : { fieldLabel : '{language.dokumen}', },
        width : 300,
        xtype : 'filefield',
        name: 'PERJANJIAN_FILES',
    }]
});