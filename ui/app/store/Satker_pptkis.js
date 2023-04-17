Ext.define('koyoku.store.Satker_pptkis', {
    extend: 'Ext.data.Store',
    alias: 'store.listSatker_pptkis',
    fields: [
       'SATKER_ID','PPTKIS_ID','SATKER_NAMA','SATKER_NAMA','ICON'  
    ],
    proxy: {
        type: 'ajax',
        actionMethods: {
            read: 'POST',
        },
        autoLoad: false,
        url:  api.siteurl + '/pptkis/get_satker',
        reader: {
            type: 'json',
            rootProperty: 'items',
            totalProperty: 'count'
        }
    }    
});
