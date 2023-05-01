Ext.define('koyoku.store.tki.Media', {
    extend: 'Ext.data.Store',
    alias: 'store.store_pekerja',
    fields: [
        'ID',
        'DOKUMEN_NAMA',
        'DOKUMEN_DESKRIPSI',
        'NAMA_FILE',
        'DOKUMEN_NAMA_GENERATE',        
    ],
    proxy: {
        type: 'ajax',
        actionMethods: {
            read: 'POST',
        },
        autoLoad: true,
        url:  api.apiurl + '/Pekerja/get_media',
        reader: {
            type: 'json',
            rootProperty: 'items',
            totalProperty: 'count'
        }
    }
});
