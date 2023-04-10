Ext.define('koyoku.store.Kompetensi_Jabatan', {
    extend: 'Ext.data.Store',
    alias: 'store.listKompetensiJabatan',
    fields: [
       'KOMPETENSI_ID','KOMPETENSI_NAMA',
    ],
    proxy: {
        type: 'ajax',
        actionMethods: {
            read: 'POST',
        },
        autoLoad: true,
        url: 'http://karya-inovasi.com/beta-rkbmdapi/index.php/Job/get_kompetensi',
        reader: {
            type: 'json',
            rootProperty: 'items',
            totalProperty: 'count'
        }
    }
});