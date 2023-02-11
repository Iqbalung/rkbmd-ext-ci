Ext.define('koyoku.components.combo.Lembaga_keuangan', {
    extend: 'Ext.form.ComboBox',
    xtype: 'combo_lembaga_keuangan',
    fieldLabel: 'Lembaga Keuangan',
    store: Ext.create('koyoku.store.LK'),
    displayField: 'NAMA',
    valueField: 'ID',
    name : 'LK_ID'
});