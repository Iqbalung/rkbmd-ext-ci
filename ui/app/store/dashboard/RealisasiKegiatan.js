Ext.define('koyoku.store.dashboard.RealisasiKegiatan', {
    extend: 'Ext.data.Store',
    alias: 'store.storeRealisasiKegiatan',
    fields: [ 'BIDANG_ID', 'BIDANG_NAMA', 'JUMLAH_TERINPUT', 'JUMLAH_KEGIATAN', 'REALISASI'],
    proxy: {
        type: 'ajax',
        actionMethods: {
            read: 'POST',
        },
        autoLoad: false,
        url: 'http://karya-inovasi.com/beta-rkbmd/api/index.php/dashboard/get_realisasi_kegiatan',
        reader: {
            type: 'json',
            rootProperty: 'items',
            totalProperty: 'count'
        }
    }
});
