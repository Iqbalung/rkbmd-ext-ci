Ext.define('koyoku.store.tki.Pekerja', {
    extend: 'Ext.data.Store',
    alias: 'store.store_pekerja',
    model: 'koyoku.model.Pengguna',
    proxy: {
        type: 'ajax',
        actionMethods: {
            read: 'POST',
        },
        autoLoad: true,
        url:  api.siteurl + '/Pekerja/get',
        reader: {
            type: 'json',
            rootProperty: 'items',
            totalProperty: 'count'
        }
    }
});
