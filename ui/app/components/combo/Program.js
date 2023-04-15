Ext.define('koyoku.components.combo.Program', {
    extend: 'Ext.form.ComboBox',
    xtype: 'combo_program',
    forceSelection: true,
	allowBlank: false,
    forceSelection: true,
    store: Ext.create('koyoku.store.Program'),
    displayField: 'PROGRAM_NAMA',
    valueField: 'PROGRAM_ID',
    name : 'PROGRAM_ID'
});