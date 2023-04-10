Ext.define('koyoku.store.Perjanjian', {
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
        url: 'http://localhost:8888/project/rkbmd/api/index.php/Tki/riwperjanjian',
        reader: {
            type: 'json',
            rootProperty: 'items',
            totalProperty: 'count'
        }
    }
});
