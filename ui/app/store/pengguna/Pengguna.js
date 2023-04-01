Ext.define('koyoku.store.pengguna.Pengguna', {
    extend: 'Ext.data.Store',
    alias: 'store.store_pengguna',
    model: 'koyoku.model.Pengguna',
    proxy: {
        type: 'ajax',
        actionMethods: {
            read: 'POST',
        },
        autoLoad: true,
        url: 'http://localhost/koyoku/api/index.php/Pengguna/get',
        reader: {
            type: 'json',
            rootProperty: 'items',
            totalProperty: 'count'
        }
    }
});
