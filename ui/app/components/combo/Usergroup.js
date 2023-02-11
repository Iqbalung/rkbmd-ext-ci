Ext.define('koyoku.components.combo.Usergroup', {
    extend: 'Ext.form.ComboBox',
    xtype: 'combo_usergroup',
    fieldLabel: 'Barang',
    store: Ext.create('koyoku.store.Usergroup'),
    displayField: 'USERGROUP',
    valueField: 'ID',
    name : 'USERGROUP_ID',
    autoLoad : true,
});