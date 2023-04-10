Ext.define('koyoku.store.Klasifikasi', {
    extend: 'Ext.data.Store',
    alias: 'store.listBlkln',
    fields: [
       'KLASIFIKASI_ID','KLASIFIKASI_NAMA',
    ],
    proxy: {
        type: 'ajax',
        actionMethods: {
            read: 'POST',
        },
        autoLoad: true,
        url: 'http://karya-inovasi.com/beta-rkbmd/api/index.php/Pekerja/get_klasifikasi',
        reader: {
            type: 'json',
            rootProperty: 'items',
            totalProperty: 'count'
        }
    }
});
