Ext.define('koyoku.store.portal.Data_jk', {
    extend: 'Ext.data.Store',
    alias: 'store.data_jk',
    fields: [
       'NAME','DATA'
    ],
    proxy: {
        type: 'ajax',
        actionMethods: {
            read: 'POST',
        },
        url: 'http://karya-inovasi.com/beta-rkbmdapi/index.php/chart/get_jk',
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    }
});
