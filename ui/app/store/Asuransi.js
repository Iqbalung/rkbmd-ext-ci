Ext.define('koyoku.store.Asuransi', {
    extend: 'Ext.data.Store',
    alias: 'store.listAsuransi',
    fields: [
       'ID','NAMA','TELP','ALAMAT','PROFILE',
    ],
    proxy: {
        type: 'ajax',
        actionMethods: {
            read: 'POST',
        },
        autoLoad: true,
        url: 'http://localhost:8888/project/rkbmd/api/index.php/Asuransi/get',
        reader: {
            type: 'json',
            rootProperty: 'items',
            totalProperty: 'count'
        }
    }
});
