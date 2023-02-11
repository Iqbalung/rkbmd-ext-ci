Ext.define('Admin.view.bidang.Tree_bidang', {
    extend: 'Ext.tree.Panel',
    xtype: 'tree_bidang',
    border: 1,
    modal : true,
    requires: [
        'Admin.store.Bidangs',
    ],
    initComponent: function() {
        var me = this;
        Ext.apply(me, {
            rootVisible: true,
            hideHeaders: true,
            columns: [{
                dataIndex: 'BIDANG_NAMA',
                xtype: 'treecolumn',
                flex: 1
            }],
            store: Ext.create('Admin.store.Bidangs',{
                storeId:"store_bidang",
            })
        });
        me.callParent([arguments]);
    },
});