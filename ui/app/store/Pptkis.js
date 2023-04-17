Ext.define('koyoku.store.Pptkis', {
    extend: 'Ext.data.Store',
    alias: 'store.listPptkis',
    fields: [
       'PPTKIS_ID','PPTKIS_NAMA','PPTKIS_NOMOR_TELPHONE','PPTKIS_ALAMAT','PPTKIS_LEGALITAS',
    ],
    proxy: {
        type: 'ajax',
        actionMethods: {
            read: 'POST',
        },
        autoLoad: true,
        url:  api.siteurl + '/Pptkis/get',
        reader: {
            type: 'json',
            rootProperty: 'items',
            totalProperty: 'count'
        }
    }
});
