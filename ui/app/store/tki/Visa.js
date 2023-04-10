Ext.define('koyoku.store.tki.Visa', {
    extend: 'Ext.data.Store',
    alias: 'store.visa',
    fields: [
       'VISA_ID','VISA_DATE_END',
    ],
    proxy: {
        type: 'ajax',
        actionMethods: {
            read: 'POST',
        },
        autoLoad: false,
        url: 'http://localhost:8888/project/rkbmd/api/index.php/Tki/riwvisa',
        reader: {
            type: 'json',
            rootProperty: 'items',
            totalProperty: 'count'
        }
    }
});
