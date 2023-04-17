Ext.define('koyoku.store.Bidang', {
    extend: 'Ext.data.TreeStore',
    alias: 'store.bidang',
    fields: [
        'BIDANG_ID', 'BIDANG_NAMA', 'BIDANG_PEJABAT', 'BIDANG_PEJABAT_NRP', 'BIDANG_ALAMAT'
    ],
    proxy: {
        type: 'ajax',
        actionMethods: {
            read: 'POST'
        },
        url:  api.apiurl + '/Bidang/get',
        reader: {
            type: 'json',
            rootProperty: 'items',
            //totalProperty: 'count'
        }
    },
    root: {
        BIDANG_NAMA : 'KAMUS BIDANG',
        id: '0',
        expanded: true,
        visble: true,
    },
    listeners : {
        beforeload : function( store, operation, eOpts ){
            store.proxy.extraParams.BIDANG_ID = operation.node.data.BIDANG_ID;
        }
    }
});
    