Ext.define('koyoku.store.TreeBarang', {
    extend: 'Ext.data.TreeStore',
    alias: 'store.tree_barang',
    fields: [
        'ID', 'BARANG_ID', 'BARANG_NAMA', 'BARANG_CODE', 'CODE_TREE', 'ROWID', 'children'
    ],
    proxy: {
        type: 'ajax',
        actionMethods: {
            read: 'POST'
        },
        url: api.apiurl + "/barang/get_tree",
        reader: {
            type: 'json',
            rootProperty: 'items',
            //totalProperty: 'count'
        }
    },
    root: {
        BARANG_NAMA : 'Barang',
        id: '0',
        expanded: true,
        visble: true,
    },
    listeners : {
        beforeload : function( store, operation, eOpts ){            
            store.proxy.extraParams.CODE_TREE = operation.node.data.CODE_TREE;            
            store.proxy.extraParams.node = operation.node.data.CODE_TREE;   
        },
        load: function (cmp, data) {
            data.forEach(function(row) {
                if (row.data.children && row.data.children.length > 0) {                    
                    row.appendChild(row.data.children)
                }
            })
        },
    }
});
    