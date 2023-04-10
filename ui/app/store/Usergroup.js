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
        url: 'http://karya-inovasi.com/beta-rkbmdapi/index.php/Pekerja/getusergroup',
        reader: {
            type: 'json',
            rootProperty: 'items',
            totalProperty: 'count'
        }
    }
});
