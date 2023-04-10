Ext.define('koyoku.store.SubKompetensi', {
    extend: 'Ext.data.Store',
    alias: 'store.sublistKompetensi',
    fields: [
       'SUB_KEGIATAN_ID','SUB_KEGIATAN_NAMA','KEGIATAN_TUGAS','KEGIATAN_TIPE',
    ],
    proxy: {
        type: 'ajax',
        actionMethods: {
            read: 'POST',
        },
        autoLoad: true,
        url: 'http://localhost:8888/project/rkbmd/api/index.php/SubKegiatan/get',
        reader: {
            type: 'json',
            rootProperty: 'items',
            totalProperty: 'count'
        }
    }
});