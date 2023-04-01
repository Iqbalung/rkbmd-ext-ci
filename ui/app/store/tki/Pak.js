Ext.define('koyoku.store.tki.Pak', {
    extend: 'Ext.data.Store',
    alias: 'store.pak',
    fields: [
       'PEMBEKALAN_URAIAN','PEMBEKALAN_START','PEMBEKALAN_END',
    ],
    proxy: {
        type: 'ajax',
        actionMethods: {
            read: 'POST',
        },
        autoLoad: false,
        url: 'http://localhost/project/rkbmd/api/index.php/Tki/riwpap',
        reader: {
            type: 'json',
            rootProperty: 'items',
            totalProperty: 'count'
        }
    }
});
