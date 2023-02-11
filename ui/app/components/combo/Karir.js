Ext.define('koyoku.components.combo.Karir', {
    extend: 'Ext.form.ComboBox',
    xtype: 'combo_karir',
	name: 'JOB_JENJANG_KARIR',
    width: '30%',
    displayField: 'JENJANG_NAMA',
    valueField: 'JOB_JENJANG_KARIR',
    store: Ext.create('Ext.data.Store', {
        fields: ['id', 'value'],
        data: [{
            'JOB_JENJANG_KARIR': '0',
            'JENJANG_NAMA': 'Ada'
        }, {
            'JOB_JENJANG_KARIR': '1',
            'JENJANG_NAMA': '-'
        }, ],
    }),
});
