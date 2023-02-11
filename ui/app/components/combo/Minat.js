Ext.define('koyoku.components.combo.Minat', {
    extend: 'Ext.form.ComboBox',
    xtype: 'combo_kompetensi',
    name: 'KOMPETENSI_NAMA',
    multiSelect: true,
    queryMode: 'remote',
    minChars: 2,
    itemId: 'pencarian_kompetensi',
    forceSelection: false,
    displayField: 'KOMPETENSI_NAMA',
    emptyText: "Pencarian ..",
    valueField: 'KOMPETENSI_ID',
    store: Ext.create('koyoku.store.Kompetensi', {
            storeId: 'store_list_owner',
            autoLoad: true,
    })
});