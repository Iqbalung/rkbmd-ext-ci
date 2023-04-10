Ext.define('koyoku.store.OutputSubKegiatan', {
    extend: 'Ext.data.Store',
    alias: 'store.subOutputSubKegiatan',
    fields: [
       'OUTPUT_ID', 'OUTPUT_NAMA', 'KEGIATAN_ID', 'SUB_KEGIATAN_ID', 'TAHUN',
    ],
    proxy: {
        type: 'ajax',
        actionMethods: {
            read: 'POST',
        },
        autoLoad: true,
        url: 'http://karya-inovasi.com/beta-rkbmd/api/index.php/OutputSubKegiatan/get',
        reader: {
            type: 'json',
            rootProperty: 'items',
            totalProperty: 'count'
        }
    }
});