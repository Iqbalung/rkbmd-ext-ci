Ext.define('koyoku.store.tki.Medical', {
    extend: 'Ext.data.Store',
    alias: 'store.medical',
    fields: [
       'MEDICAL_ID','MEDICAL_SARANA','MEDICAL_PEMERIKSAAN','MEDICAL_HASIL','MEDICAL_STATUS',
    ],
    proxy: {
        type: 'ajax',
        actionMethods: {
            read: 'POST',
        },
        autoLoad: true,
        url:  api.apiurl + '/Tki/riwmedical',
        reader: {
            type: 'json',
            rootProperty: 'items',
            totalProperty: 'count'
        }
    }
});
