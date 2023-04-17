Ext.define('koyoku.store.tki.Bnptki', {
    extend: 'Ext.data.Store',
    alias: 'store.bnptki',
    fields: [
       'BNP2KTI_ID','BNP2KTI_DATE','BNP2KTI_URAIAN',
    ],
    proxy: {
        type: 'ajax',
        actionMethods: {
            read: 'POST',
        },
        url:  api.siteurl + '/Tki/riwbnptki',
        reader: {
            type: 'json',
            rootProperty: 'items',
            totalProperty: 'count'
        }
    }
});
