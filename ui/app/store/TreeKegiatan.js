Ext.define('koyoku.store.TreeKegiatan', {
    extend: 'Ext.data.TreeStore',
    alias: 'store.tree_kegiatan',
    fields: [
        'ID', 'KEGIATAN_ID', 'KEGIATAN_NAMA', 'TIPE', 'PARENT_KEGIATAN_ID', 'PARENT_KEGIATAN_NAMA'
    ],
    proxy: {
        type: 'ajax',
        actionMethods: {
            read: 'POST'
        },
        url: "https://rkbmd-banjarnegara.id/api/index.php/kegiatan/get_tree",
        reader: {
            type: 'json',
            rootProperty: 'items',
            //totalProperty: 'count'
        }
    },
    root: {
        BIDANG_NAMA : 'Kegiatan & SUb Kegiatan',
        id: '0',
        expanded: true,
        visble: true,
    },
    listeners : {
        beforeload : function( store, operation, eOpts ){
            store.proxy.extraParams.ID = operation.node.data.ID;            
            if (operation.node.data.TIPE && operation.node.data.TIPE == "KEGIATAN") {
                store.proxy.extraParams.TIPE = "SUB";
            }
        }
    }
});
    