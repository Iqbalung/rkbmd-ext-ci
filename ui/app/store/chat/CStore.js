Ext.define('koyoku.store.chat.CStore', {
    extend: 'Ext.data.Store',
    alias: 'store.store_chat',
    model: 'koyoku.model.Chat',
    proxy: {
        type: 'ajax',
        actionMethods: {
            read: 'POST',
        },
        autoLoad: false,
        url:  api.siteurl + '/Chat/getchathelp',
        reader: {
            type: 'json',
            rootProperty: 'items',
            totalProperty: 'count'
        }
    }
});
