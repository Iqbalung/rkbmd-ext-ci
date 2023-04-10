Ext.define('koyoku.store.Wilayah', {
    extend: 'Ext.data.TreeStore',
    alias: 'store.wilayah',
    fields: [
        'WILAYAH_ID', 'WILAYAH_NAMA', 'WILAYAH_PARENT', 'WILAYAH_DES_PENDEK', 'WILAYAH_LAT', 'WILAYAH_LONG'
    ],
    proxy: {
        type: 'ajax',
        actionMethods: {
            read: 'POST'
        },
        url: 'http://karya-inovasi.com/beta-rkbmdapi/index.php/Wilayah/get',
        reader: {
            type: 'json',
            rootProperty: 'items',
        }
    },
    root: {
        WILAYAH_NAMA : 'MASTER WILAYAH',
        text : 'wilayah',
        id: '0',
         expanded: true,
        visble: true,

    },
    listeners : {
        beforeload : function( store, operation, eOpts ){
            store.proxy.extraParams.WILAYAH_ID = operation.node.data.WILAYAH_ID;
        }
    }
});
