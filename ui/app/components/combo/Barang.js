Ext.define('koyoku.components.combo.Barang', {
    extend: 'Ext.form.ComboBox',
    xtype: 'combo_barang',
    // fieldLabel: 'Barang',
    triggerAction:'all',
    typeAhead:true,
    mode:'remote',
    minChars:2,
    forceSelection:true,
    store: Ext.create('koyoku.store.Barang'),
    displayField: 'BARANG_NAMA',
    valueField: 'BARANG_ID',
    name : 'BARANG_ID'
});