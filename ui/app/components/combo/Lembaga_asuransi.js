Ext.define('koyoku.components.combo.Lembaga_asuransi', {
    extend: 'Ext.form.ComboBox',
    xtype: 'combo_lembaga_asuransi',
    fieldLabel: 'Lembaga Asuransi',
    store: Ext.create('koyoku.store.Asuransi'),
    displayField: 'NAMA',
    valueField: 'ID',
    name : 'ASURANSI_ID'
});