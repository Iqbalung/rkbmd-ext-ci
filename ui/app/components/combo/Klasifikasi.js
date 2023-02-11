Ext.define('koyoku.components.combo.Klasifikasi', {
    extend: 'Ext.form.ComboBox',
    xtype: 'combo_klasifikasi',
    fieldLabel: 'Klasifikasi',
    store: Ext.create('koyoku.store.Klasifikasi'),
    displayField: 'KLASIFIKASI_NAMA',
    valueField: 'KLASIFIKASI_ID',
    name : 'KLASIFIKASI_ID',
    autoLoad : true,
});