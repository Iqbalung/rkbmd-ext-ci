Ext.define('koyoku.store.dashboard.RekapRKPBMD', {
    extend: 'Ext.data.Store',
    alias: 'store.storeRekapRKPBMD',
    fields: [ 'CLS', 'JUMLAH', 'LABEL'],
    proxy: {
        type: 'ajax',
        actionMethods: {
            read: 'POST',
        },
        autoLoad: false,
        url:  api.apiurl + '/dashboard/get_rekap_rkpbmd',
        reader: {
            type: 'json',
            rootProperty: 'items',
            totalProperty: 'count'
        }
    }
});
