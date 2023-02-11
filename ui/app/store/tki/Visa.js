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
        url: 'http://localhost/koyoku/api/index.php/Tki/riwvisa',
        reader: {
            type: 'json',
            rootProperty: 'items',
            totalProperty: 'count'
        }
    }
});
