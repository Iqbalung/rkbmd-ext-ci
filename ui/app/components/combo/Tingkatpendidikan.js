Ext.define('koyoku.components.combo.Tingkatpendidikan', {
    extend: 'Ext.form.ComboBox',
    xtype: 'combo_tingkatpendidikan',
    store: Ext.create('koyoku.store.TingkatPendidikan'),
    displayField: 'PENDIDIKAN_NAMA',
    valueField: 'PENDIDIKAN_ID',
    name : 'PENDIDIKAN_ID'
});