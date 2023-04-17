Ext.define('koyoku.store.tki.Pindah', {
    extend: 'Ext.data.Store',
    alias: 'store.pindah',
    fields: [
       'JOB_ID','RIWAYAT_DATE','RIWAYAT_ID','RIWAYAT_KETERANGAN','RIWAYAT_TEXT'
    ],
    proxy: {
        type: 'ajax',
        actionMethods: {
            read: 'POST',
        },
        url:  api.siteurl + '/Tki/getriwayat',
        reader: {
            type: 'json',
            rootProperty: 'items',
            totalProperty: 'count'
        }
    }
});
