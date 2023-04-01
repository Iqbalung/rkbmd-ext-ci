Ext.define('koyoku.store.pelamar.Store', {
    extend: 'Ext.data.Store',
    alias: 'store.store_pelamar',
    proxy: {
        type: 'ajax',
        actionMethods: {
            read: 'POST',
        },
        autoLoad: true,
        url: 'http://localhost/project/rkbmd/api/index.php/Pelamar/get',
        reader: {
            type: 'json',
            rootProperty: 'items',
            totalProperty: 'count'
        }
    }
});
