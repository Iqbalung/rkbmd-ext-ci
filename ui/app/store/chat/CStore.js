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
        url: 'http://localhost/koyoku/api/index.php/Chat/getchathelp',
        reader: {
            type: 'json',
            rootProperty: 'items',
            totalProperty: 'count'
        }
    }
});
