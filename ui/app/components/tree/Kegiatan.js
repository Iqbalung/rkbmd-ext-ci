Ext.define('koyoku.components.tree.Kegiatan', {
    extend: 'Ext.tree.Panel',
    xtype: 'tree_kegiatan',
    border: 1,
    modal : true,
    requires: [
        'koyoku.store.TreeKegiatan',
    ],
    config: {
        params: {
            BIDANG_ID: ''
        }
    },
    initComponent: function() {
        var me = this;
        Ext.apply(me, {
            rootVisible: true,
            hideHeaders: true,
            columns: [{
                dataIndex: 'KEGIATAN_NAMA',
                xtype: 'treecolumn',
                flex: 1
            }],
            store: Ext.create('koyoku.store.TreeKegiatan',{
                storeId:"store_tree_kegiatan",
                proxy: {
                    extraParams: { BIDANG_ID: me.params.BIDANG_ID}
                }
            })
        });
        me.callParent([arguments]);
    },
});