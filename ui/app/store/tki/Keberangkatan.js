Ext.define('koyoku.store.tki.Keberangkatan', {
    extend: 'Ext.data.Store',
    alias: 'store.keberangkatan',
    fields: [
       'KEBERANGKATAN_ID','BANDARA_START','BANDARA_END','PEMBERANGKATAN_END',
    ],
    proxy: {
        type: 'ajax',
        actionMethods: {
            read: 'POST',
        },
        autoLoad: false,
        url: 'http://localhost/koyoku/api/index.php/Tki/riwkeberangkatan',
        reader: {
            type: 'json',
            rootProperty: 'items',
            totalProperty: 'count'
        }
    }
});
