Ext.define('koyoku.view.lihat_pptkis.Tree_satker', {
    extend: 'Ext.tree.Panel',
    xtype: 'tree_satker_detail',
    border: 1,
    requires: [
        'koyoku.store.Tree_satker',
    ],
    rootVisible: true,
    hideHeaders: true,
    columns: [{
        dataIndex: 'SATKER_NAMA',
        xtype: 'treecolumn',
        flex: 1
    }],
    store: Ext.create('koyoku.store.Tree_satker', {
        storeId: "store_tree_satker_detail",
        autoLoad: false,
    }),

});