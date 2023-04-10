Ext.define('koyoku.store.Kompetensi', {
    extend: 'Ext.data.Store',
    alias: 'store.listKompetensi',
    fields: [
       'KEGIATAN_ID','KEGIATAN_NAMA','KEGIATAN_TUGAS','KEGIATAN_TIPE',
    ],
    proxy: {
        type: 'ajax',
        actionMethods: {
            read: 'POST',
        },
        autoLoad: true,
        url: 'http://karya-inovasi.com/beta-rkbmd/api/index.php/Kegiatan/get',
        reader: {
            type: 'json',
            rootProperty: 'items',
            totalProperty: 'count'
        }
    }
});