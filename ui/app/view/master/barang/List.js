Ext.define('koyoku.view.master.barang.List', {
    extend: 'Ext.tree.Panel',
    xtype: 'barangList',

    requires: [
        'koyoku.store.TreeBarang'
    ],
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
            }, {
                text: 'Satuan',
                dataIndex: 'BARANG_SATUAN',
                flex:1,
            }],
            store: Ext.create('koyoku.store.TreeBarang',{
                storeId:"listBarang",
                proxy: {
                    // extraParams: { BIDANG_ID: me.params.BIDANG_ID, PROGRAM_ID: me.params.PROGRAM_ID}
                }
            })
        });
        me.callParent([arguments]);
    },
    // store: {
    //     type: 'listBarang',
    //     storeId : 'listBarang',
    //     autoLoad: true,
    //     listeners: {
    //         beforeload:function(str) {
	// 			var pencarian = Ext.getCmp("page_barang").down("#pencarian_barang");
    //             str.proxy.extraParams = {
    //                 query: pencarian.getValue()
    //             };
    //         }
    //     }
    // },
    // columns: [{
    //     text: 'No',
    //     xtype : 'rownumberer',
    //     width: 60,
    // },{
    //     text: 'Nama Barang',
    //     dataIndex: 'BARANG_NAMA',
    //     width: 300,
    // },{
    //     text: 'Kode Barang',
    //     dataIndex: 'BARANG_CODE',
    //     width: 200,
    // },{
    //     text: 'Satuan',
    //     dataIndex: 'BARANG_SATUAN',
    //     flex:1,
    // },],
    listeners:{
        itemdblclick:'upd',
    }
});