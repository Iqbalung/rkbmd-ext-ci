Ext.define('koyoku.components.combo.Bidang', {
    extend: 'Ext.form.ComboBox',
    xtype: 'combo_bidang',
    forceSelection: true,
	allowBlank: false,
    forceSelection: true,
    store: Ext.create('koyoku.store.Bidang'),
    displayField: 'BIDANG_NAMA',
    valueField: 'BIDANG_ID',
    name : 'BIDANG_ID'
});