Ext.define('koyoku.store.portal.Data_total_tki', {
    extend: 'Ext.data.Store',
    alias: 'store.data_total_tki',
    fields: [
       'ID','STATUS','JML'
    ],
    proxy: {
        type: 'ajax',
        actionMethods: {
            read: 'POST',
        },
        url: 'http://localhost:8888/project/rkbmd/api/index.php/chart/get_total_tki',
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    }
});

