Ext.define('koyoku.store.Usergroup', {
    extend: 'Ext.data.Store',
    alias: 'store.listBlkln',
    fields: [
       'ID','USERGROUP',
    ],
    proxy: {
        type: 'ajax',
        actionMethods: {
            read: 'POST',
        },
        autoLoad: true,
        url:  api.siteurl + '/Pekerja/getusergroup',
        reader: {
            type: 'json',
            rootProperty: 'items',
            totalProperty: 'count'
        }
    }
});
