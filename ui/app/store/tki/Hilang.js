Ext.define('koyoku.store.tki.Hilang', {
    extend: 'Ext.data.Store',
    alias: 'store.hilang',
    fields: [
       'JOB_ID','JABATAN_NAMA','RIWAYAT_DATE','RIWAYAT_KETERANGAN',
    ],
    proxy: {
        type: 'ajax',
        actionMethods: {
            read: 'POST',
        },
        autoLoad: false,
        url: 'http://localhost:8888/project/rkbmd/api/index.php/Tki/getriwayat',
        reader: {
            type: 'json',
            rootProperty: 'items',
            totalProperty: 'count'
        }
    }
});
