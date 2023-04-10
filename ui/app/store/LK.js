Ext.define('koyoku.store.LK', {
    extend: 'Ext.data.Store',
    alias: 'store.listLK',
    fields: [
       'ID','NAMA','TELP','ALAMAT','PROFILE',
    ],
    proxy: {
        type: 'ajax',
        actionMethods: {
            read: 'POST',
        },
        autoLoad: true,
        url: 'http://localhost:8888/project/rkbmd/api/index.php/Lembaga_keuangan/get',
        reader: {
            type: 'json',
            rootProperty: 'items',
            totalProperty: 'count'
        }
    }
});
