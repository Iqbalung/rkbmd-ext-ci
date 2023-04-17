Ext.define('koyoku.store.barang.Fasilitas', {
    extend: 'Ext.data.Store',
    alias: 'store.fasilitasPptkis',
    fields: [
       'FASILITAS_ID','FASILITAS_NAMA','FASILITAS_DESKRIPSI','FASILITAS_FILE'
    ],
    proxy: {
        type: 'ajax',
        actionMethods: {
            read: 'POST',
        },
        autoLoad: false,
        url:  api.siteurl + '/Pptkis/get_fasilitas',
        reader: {
            type: 'json',
            rootProperty: 'items',
            totalProperty: 'count'
        }
    }
});
