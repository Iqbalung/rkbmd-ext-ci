Ext.define('koyoku.view.master.wilayah.Tree_wilayah', {
    extend: 'Ext.tree.Panel',
    xtype: 'tree_wilayah',
    border: 1,
    requires: [
        'koyoku.store.Wilayah',
    ],
    initComponent: function() {
        var me = this;
        Ext.apply(me, {
            rootVisible: true,
            hideHeaders: true,
            columns: [{
                dataIndex: 'WILAYAH_NAMA',
                xtype: 'treecolumn',
                flex: 1,

            }],
            
            store: Ext.create('koyoku.store.Wilayah',{
                storeId:"store_wilayah",
            })
        });
        me.callParent([arguments]);
    },
});