Ext.define('koyoku.store.MataUang', {
    extend: 'Ext.data.Store',
    alias: 'store.listMataUang',
    fields: [
        'MATAUANG_ID', 'MATAUANG_NAMA',
    ],
    proxy: {
        type: 'ajax',
        actionMethods: {
            read: 'POST',
        },
        autoLoad: true,
        url:  api.siteurl + '/Matauang/get',
        reader: {
            type: 'json',
            rootProperty: 'items',
            totalProperty: 'count'
        }
    }
});
