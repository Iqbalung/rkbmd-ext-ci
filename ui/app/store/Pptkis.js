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
        url: 'http://localhost:8888/project/rkbmd/api/index.php/Pptkis/get',
        reader: {
            type: 'json',
            rootProperty: 'items',
            totalProperty: 'count'
        }
    }
});
