Ext.define('koyoku.store.portal.Data_jabatan_populer', {
    extend: 'Ext.data.Store',
    alias: 'store.data_jabatan_populer',
    fields: [
       'JABATAN_ID','JABATAN_NAMA','JML'
    ],
    proxy: {
        type: 'ajax',
        actionMethods: {
            read: 'POST',
        },
        url:  api.siteurl + '/chart/get_jabatan_populer',
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    }
});
