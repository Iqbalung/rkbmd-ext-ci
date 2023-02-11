Ext.define('koyoku.components.combo.Jabatan', {
    extend: 'Ext.form.ComboBox',
    xtype: 'combo_jabatan',
    fieldLabel: 'Jabatan',
    triggerAction:'all',
    typeAhead:true,
    mode:'remote',
    minChars:2,
    forceSelection:true,
    store: Ext.create('koyoku.store.Jabatan'),
    displayField: 'JABATAN_NAMA',
    valueField: 'JABATAN_ID',
    name : 'JABATAN_ID'
});