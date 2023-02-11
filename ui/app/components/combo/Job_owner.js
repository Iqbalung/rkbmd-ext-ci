Ext.define('koyoku.components.combo.Job_owner', {
    extend: 'Ext.form.ComboBox',
    xtype: 'combo_job_owner',
    fieldLabel: 'Job_owner',
    striggerAction:'all',
    typeAhead:true,
    mode:'remote',
    minChars:2,
    forceSelection:true,
    store: Ext.create('koyoku.store.Owner'),
    displayField: 'OWNER_NAMA',
    valueField: 'OWNER_ID',
    name : 'OWNER_ID'
});