Ext.define('koyoku.view.master.barang.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'barangList',

    requires: [
        'koyoku.store.Barang'
    ],
    store: {
        type: 'listBarang',
        storeId : 'listBarang',
        autoLoad: true,
        listeners: {
            beforeload:function(str) {
				var pencarian = Ext.getCmp("page_barang").down("#pencarian_barang");
                str.proxy.extraParams = {
                    query: pencarian.getValue()
                };
            }
        }
    },
    columns: [{
        text: 'No',
        xtype : 'rownumberer',
        width: 60,
    },{
        text: 'Nama Barang',
        dataIndex: 'BARANG_NAMA',
        width: 300,
    },{
        text: 'Kode Barang',
        dataIndex: 'BARANG_CODE',
        width: 200,
    },{
        text: 'Satuan',
        dataIndex: 'BARANG_SATUAN',
        flex:1,
    },],
    listeners:{
        itemdblclick:'upd',
    }
});