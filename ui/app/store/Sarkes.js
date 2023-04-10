Ext.define('koyoku.store.Sarkes', {
    extend: 'Ext.data.Store',
    alias: 'store.listSarkes',
    fields: [
       'ID','NAMA','TELP','ALAMAT','PROFILE',
    ],
    proxy: {
        type: 'ajax',
        actionMethods: {
            read: 'POST',
        },
        autoLoad: true,
        url: 'http://localhost:8888/project/rkbmd/api/index.php/Sarana_kesehatan/get',
        reader: {
            type: 'json',
            rootProperty: 'items',
            totalProperty: 'count'
        }
    }
});
