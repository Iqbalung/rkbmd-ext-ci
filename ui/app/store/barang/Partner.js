Ext.define('koyoku.store.barang.Partner', {
    extend: 'Ext.data.Store',
    alias: 'store.partnerPptkis',
    fields: [
       'ID','NAMA'
    ],
    proxy: {
        type: 'ajax',
        actionMethods: {
            read: 'POST',
        },
        autoLoad: false,
        url: 'http://localhost:8888/project/rkbmd/api/index.php/Pptkis/get_partner_bytype',
        reader: {
            type: 'json',
            rootProperty: 'items',
            totalProperty: 'count'
        }
    }
});
