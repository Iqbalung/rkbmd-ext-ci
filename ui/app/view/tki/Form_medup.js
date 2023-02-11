Ext.define('koyoku.view.tki.Form_medup', {
    extend: 'Ext.form.Panel',
    xtype: 'form_medup',
    requires: [
        'koyoku.components.combo.Sarkes'
    ],
    width: 700,
    height: 'auto',
    bodyPadding: 10,
    defaults : {
        width : 250,
        xtype : 'hiddenfield'
    },
    items: [{
        name: 'ID',
    },{
        name: 'PEKERJA_ID',
    },{
        name: 'JOB_ID',
    },{
        name: 'MEDICAL_ID',
    },{
        name: 'MEDICAL_STATUS',
    },{
        bind : { fieldLabel : '{language.tglpemeriksaan}', },
        xtype: 'datefield',
        name: 'MEDICAL_PEMERIKSAAN',
        allowBlank : false,
    },{
        bind : { fieldLabel : '{language.sarana}', },
        width: '100%',
        xtype: 'combo_sarkes',
        allowBlank : 'false',
        name: 'MEDICAL_SARANA',
         allowBlank : false,
    }, {
        xtype: 'fieldcontainer',
        bind : { fieldLabel : '{language.hasilpemeriksaan}', },
        name : 'MEDICAL_HASIL',
        allowBlank : false,
        defaultType: 'radiofield',
        width : '100%',
        layout: 'hbox',
        items: [{
            bind : { boxLabel : '{language.layak}', },
            name: 'MEDICAL_HASIL',
            inputValue: '1',
            width : 80
        }, {
            bind : { boxLabel : '{language.tidaklayak}', },
            name: 'MEDICAL_HASIL',
            inputValue: '0',
            flex: 1
        }]
    }, {
        bind : { fieldLabel : '{language.dokumen}', },
        width : 300,
        xtype : 'filefield',
        name: 'MEDICAL_FILES',
    }]
});