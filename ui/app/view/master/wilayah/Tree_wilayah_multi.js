Ext.define('koyoku.view.master.wilayah.Tree_wilayah_multi', {
    extend: 'Ext.tree.Panel',
    xtype: 'tree_wilayah_multi',
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
            selModel: {
                selType: 'checkboxmodel',
                mode: 'MULTI',
                maxSelections : 2,
            },
            listeners: 
            {
              itemclick: function(view, record, item, index, e)
              {
                selected_node = record;
              }
            },

            store: Ext.create('koyoku.store.Wilayah',{
                storeId:"store_wilayah",
            })
        });
        me.callParent([arguments]);
    },
});