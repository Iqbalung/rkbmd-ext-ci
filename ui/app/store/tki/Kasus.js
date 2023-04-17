Ext.define('koyoku.store.tki.Kasus', {
    extend: 'Ext.data.Store',
    alias: 'store.kasus',
    fields: [
       'JOB_ID','JABATAN_NAMA','RIWAYAT_KERTERANGAN','RIWAYAT_TEXT',
    ],
    proxy: {
        type: 'ajax',
        actionMethods: {
            read: 'POST',
        },
        autoLoad: false,
        url:  api.siteurl + '/Tki/getriwayat',
        reader: {
            type: 'json',
            rootProperty: 'items',
            totalProperty: 'count'
        }
    }
});
