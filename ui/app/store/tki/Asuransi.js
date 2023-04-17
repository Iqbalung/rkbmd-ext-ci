Ext.define('koyoku.store.tki.Asuransi', {
    extend: 'Ext.data.Store',
    alias: 'store.asuransi',
    fields: [
       'ASURANSI_ID','NAMA','ASURANSI_URAIAN','ASURANSI_DATE',
    ],
    proxy: {
        type: 'ajax',
        actionMethods: {
            read: 'POST',
        },
        autoLoad: false,
        url:  api.siteurl + '/Tki/riwasuransi',
        reader: {
            type: 'json',
            rootProperty: 'items',
            totalProperty: 'count'
        }
    }
});
