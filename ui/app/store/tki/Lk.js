Ext.define('koyoku.store.tki.Lk', {
    extend: 'Ext.data.Store',
    alias: 'store.lk',
    fields: [
       'lk_ID','LK_AKUN',
    ],
    proxy: {
        type: 'ajax',
        actionMethods: {
            read: 'POST',
        },
        autoLoad: false,
        url: 'http://localhost:8888/project/rkbmd/api/index.php/Tki/riwlk',
        reader: {
            type: 'json',
            rootProperty: 'items',
            totalProperty: 'count'
        }
    }
});
