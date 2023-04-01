Ext.define('koyoku.components.combo.Tahun', {
    extend: 'Ext.form.ComboBox',
    xtype: 'combo_tahun',
    editable: false,
    mode: 'local',	
    store: Ext.create('koyoku.store.Tahun'),
    displayField: 'TAHUN',
    valueField: 'TAHUN',    
});