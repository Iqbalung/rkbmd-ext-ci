Ext.define('koyoku.store.Tahun', {
    extend: 'Ext.data.Store',
    alias: 'store.tahun',
    fields: [
        'TAHUN'
    ],
    proxy: {
        type: 'ajax',
        actionMethods: {
            read: 'POST',
        },
        autoLoad: true,
        url:  api.siteurl + '/login/get_tahun',
        reader: {
            type: 'json',
            rootProperty: 'items',
            totalProperty: 'count'
        }
    }
});