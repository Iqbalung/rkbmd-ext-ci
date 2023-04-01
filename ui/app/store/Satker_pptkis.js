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
        url: 'http://localhost/koyoku/api/index.php/pptkis/get_satker',
        reader: {
            type: 'json',
            rootProperty: 'items',
            totalProperty: 'count'
        }
    }    
});
