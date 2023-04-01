Ext.define('koyoku.store.Barang', {
    extend: 'Ext.data.Store',
    alias: 'store.listBarang',
    fields: [
       'BARANG_ID','BARANG_NAMA','BARANG_CODE','BARANG_SATUAN','LEGALITAS',
    ],
    proxy: {
        type: 'ajax',
        actionMethods: {
            read: 'POST',
        },
        autoLoad: true,
        url: 'http://localhost/project/rkbmd/api/index.php/Barang/get',
        reader: {
            type: 'json',
            rootProperty: 'items',
            totalProperty: 'count'
        }
    }
});
