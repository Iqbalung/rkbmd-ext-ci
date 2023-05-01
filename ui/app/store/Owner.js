Ext.define('koyoku.store.Owner', {
    extend: 'Ext.data.Store',
    alias: 'store.listOwner',
    
    fields: [
       'OWNER_ID','OWNER_NAMA','OWNER_NO_TELPHONE',"OWENR_ALAMAT_LENGKAP", "WILAYAH_ID", "WILAYAH_NAMA"
    ],
    proxy: {
        type: 'ajax',
        actionMethods: {
            read: 'POST',
        },
        autoLoad: true,
        url:  api.apiurl + '/Owner/get',
        reader: {
            type: 'json',
            rootProperty: 'items',
            totalProperty: 'count'
        }
    }
});
