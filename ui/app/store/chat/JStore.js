Ext.define('koyoku.store.chat.JStore', {
    extend: 'Ext.data.Store',
    alias: 'store.store_judul',
    model: 'koyoku.model.Chat',
    proxy: {
        type: 'ajax',
        actionMethods: {
            read: 'POST',
        },
        autoLoad: false,
        url: 'http://karya-inovasi.com/beta-rkbmdapi/index.php/Chat/gettitlehelp',
        reader: {
            type: 'json',
            rootProperty: 'items',
            totalProperty: 'count'
        }
    }
});
