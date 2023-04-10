Ext.define('koyoku.store.Tree_satker', {
    extend: 'Ext.data.TreeStore',
    alias: 'store.tree_satker',
    fields: [
        'SATKER_ID', 'SATKER_NAMA'
    ],
    proxy: {
        type: 'ajax',
        actionMethods: {
            read: 'POST'
        },
        url: 'http://karya-inovasi.com/beta-rkbmd/api/index.php/pptkis/get_tree_satker',
        reader: {
            type: 'json',
            rootProperty: 'items',
            //totalProperty: 'count'
        }
    },
    root: {
        SATKER_NAMA: 'SATUAN KERJA',
        text: 'SATKER_NAMA',
        id: '0',
        expanded: true,
    },
    listeners: {
        beforeload: function(store, operation, eOpts) {
            var SATKER_ID = operation.node.data.SATKER_ID;
            var HAS_PEGAWAI = operation.node.data.has_pegawai;
            if (typeof SATKER_ID != 'undefined') {
                store.proxy.extraParams.node = SATKER_ID;
                store.proxy.extraParams.SATKER_ID = SATKER_ID;
            } 
            if (HAS_PEGAWAI) {
                store.proxy.extraParams.HAS_PEGAWAI = 1;
            }            
        }
    }
});