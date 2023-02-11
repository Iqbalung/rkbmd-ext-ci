Ext.define('koyoku.view.tki.Form_perpanjang', {
    extend: 'Ext.form.Panel',
    xtype: 'form_perpanjang',
    requires: [
        'koyoku.components.combo.Sarkes'
    ],
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
        xtype: 'hiddenfield',
        width : 250,
        name: 'PERJANJIAN_ID',
    },{
        xtype : 'label',
        bind : { text : '{language.tanggal}', },
    },{
        xtype: 'datefield',
        width : 250,
        name: 'PERJANJIAN_DATE',
        submitFormat : 'Y-m-d'
    },{
        xtype : 'label',
        bind : { text : '{language.berlakumulai}', },
    },{
        xtype: 'datefield',
        width : 250,
        name: 'PERJANJIAN_START',
        submitFormat : 'Y-m-d'
    },{
        xtype : 'label',
         bind : { text : '{language.berlakusampai}', },
    },{
        xtype: 'datefield',
        width : 250,
        name: 'PERJANJIAN_END',
        submitFormat : 'Y-m-d'
    },{
        xtype : 'label',
         bind : { text : '{language.uraian}', },
    },{
        width : '100%',
        xtype : 'textarea',
        name: 'PERJANJIAN_URAIAN',
    }]
});