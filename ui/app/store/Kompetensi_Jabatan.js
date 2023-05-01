Ext.define('koyoku.store.Kompetensi_Jabatan', {
    extend: 'Ext.data.Store',
    alias: 'store.listKompetensiJabatan',
    fields: [
       'KOMPETENSI_ID','KOMPETENSI_NAMA',
    ],
    proxy: {
        type: 'ajax',
        actionMethods: {
            read: 'POST',
        },
        autoLoad: true,
        url:  api.apiurl + '/Job/get_kompetensi',
        reader: {
            type: 'json',
            rootProperty: 'items',
            totalProperty: 'count'
        }
    }
});