Ext.define('koyoku.components.combo.Sarkes', {
    extend: 'Ext.form.ComboBox',
    xtype: 'combo_sarkes',
    fieldLabel: 'Sarkes',
    store: Ext.create('koyoku.store.Sarkes'),
    displayField: 'NAMA',
    valueField: 'ID',
    name : 'SARKES_ID'
});