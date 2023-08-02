Ext.define('koyoku.components.tree.Barang', {
    extend: 'Ext.tree.Panel',
    xtype: 'tree_barang',
    border: 1,
    modal : true,
    requires: [
        'koyoku.store.TreeBarang',
    ],
    config: {
        params: {
            BIDANG_ID: '',
            PROGRAM_ID: ''
        }
    },
    initComponent: function() {
        var me = this;
        Ext.apply(me, {
            rootVisible: true,
            // hideHeaders: true,
            columns: [{
                text: 'Barang Nama',
                dataIndex: 'BARANG_NAMA',
                xtype: 'treecolumn',
                flex: 2
            }, {
                 text: 'Barang Kode',
                 dataIndex: 'BARANG_CODE',
                 flex: 1
             }],
            store: Ext.create('koyoku.store.TreeBarang',{
                storeId:"store_tree_barang",
                proxy: {
                    // extraParams: { BIDANG_ID: me.params.BIDANG_ID, PROGRAM_ID: me.params.PROGRAM_ID}
                }
            })
        });
        me.callParent([arguments]);
    },
});