Ext.define('Admin.store.Bidangs', {
    extend: 'Ext.data.Store',
    alias: 'store.bidangs',
    fields: [
       'KOMPETENSI_ID','KOMPETENSI_NAMA','KOMPETENSI_TUGAS','KOMPETENSI_TIPE',
    ],
    proxy: {
        type: 'ajax',
        actionMethods: {
            read: 'POST',
        },
        autoLoad: true,
        url: 'http://karya-inovasi.com/beta-rkbmdapi/index.php/Kompetensi/get',
        reader: {
            type: 'json',
            rootProperty: 'items',
            totalProperty: 'count'
        }
    }
});