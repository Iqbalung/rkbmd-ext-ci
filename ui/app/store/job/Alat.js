Ext.define('koyoku.store.job.Alat', {
    extend: 'Ext.data.Store',
    alias: 'store.listAlatJob',
    fields: [
       'ALAT_KERJA_ID','ALAT_KERJA_NAMA'
    ],
    proxy: {
        type: 'ajax',
        actionMethods: {
            read: 'POST',
        },
        autoLoad: true,
        url: 'http://localhost/project/rkbmd/api/index.php/Alat/get_job',
        reader: {
            type: 'json',
            rootProperty: 'items',
            totalProperty: 'count'
        }
    }
});
