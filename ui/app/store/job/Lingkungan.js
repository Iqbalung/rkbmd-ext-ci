Ext.define('koyoku.store.job.Lingkungan', {
    extend: 'Ext.data.Store',
    alias: 'store.listLingkunganJob',
    fields: [
        'KLASIFIKASI_LING_ID',
        'KLASIFIKASI_LING_NAMA',
        'KLASIFIKASI_LING_ITEM',
        'KLASIFIKASI_LING_VALUE',
    ],
    proxy: {
        type: 'ajax',
        actionMethods: {
            read: 'POST',
        },
        autoLoad: true,
        url: 'http://karya-inovasi.com/beta-rkbmd/api/index.php/Lingkungan/get_job',
        reader: {
            type: 'json',
            rootProperty: 'items',
            totalProperty: 'count'
        }
    }
});
