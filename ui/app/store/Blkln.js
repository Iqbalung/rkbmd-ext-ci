Ext.define('koyoku.store.Blkln', {
    extend: 'Ext.data.Store',
    alias: 'store.listBlkln',
    fields: [
       'ID','NAMA','TELP','ALAMAT','PROFILE','NEGARA',
    ],
    proxy: {
        type: 'ajax',
        actionMethods: {
            read: 'POST',
        },
        autoLoad: true,
        url: 'http://karya-inovasi.com/beta-rkbmdapi/index.php/Blkln/get',
        reader: {
            type: 'json',
            rootProperty: 'items',
            totalProperty: 'count'
        }
    }
});
