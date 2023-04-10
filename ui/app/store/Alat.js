Ext.define('koyoku.store.Alat', {
    extend: 'Ext.data.Store',
    alias: 'store.listAlat',
    fields: [
       'ALAT_KERJA_ID','ALAT_KERJA_NAMA'
    ],
    proxy: {
        type: 'ajax',
        actionMethods: {
            read: 'POST',
        },
        autoLoad: true,
        url: 'http://localhost:8888/project/rkbmd/api/index.php/Alat/get',
        reader: {
            type: 'json',
            rootProperty: 'items',
            totalProperty: 'count'
        }
    }
});
