Ext.define('koyoku.store.tki.Purna', {
    extend: 'Ext.data.Store',
    alias: 'store.purna',
    fields: [
       'JOB_ID','JABATAN_NAMA','PURNA_DATE','PURNA_KETERANGAN',
    ],
    proxy: {
        type: 'ajax',
        actionMethods: {
            read: 'POST',
        },
        autoLoad: false,
        url:  api.apiurl + '/Tki/getriwayat',
        reader: {
            type: 'json',
            rootProperty: 'items',
            totalProperty: 'count'
        }
    }
});
