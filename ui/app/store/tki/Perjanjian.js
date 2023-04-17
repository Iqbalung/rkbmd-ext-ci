Ext.define('koyoku.store.tki.Perjanjian', {
    extend: 'Ext.data.Store',
    alias: 'store.perjanjian',
    fields: [
       'ID','PERJANJIAN_DATA','PERJANJIAN_URAIAN','PERJANJIAN_START','PERJANJIAN_URAIAN',
    ],
    proxy: {
        type: 'ajax',
        actionMethods: {
            read: 'POST',
        },
        autoLoad: true,
        url:  api.apiurl + '/Tki/riwperjanjian',
        reader: {
            type: 'json',
            rootProperty: 'items',
            totalProperty: 'count'
        }
    }
});
