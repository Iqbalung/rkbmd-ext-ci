Ext.define('koyoku.view.master.asuransi.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'asuransiList',

    requires: [
        'koyoku.store.Asuransi'
    ],
    store: {
        type: 'listAsuransi',
        storeId : 'listAsuransi',
        autoLoad: true,
    },
    columns: [{
        text: 'No',
        xtype : 'rownumberer',
        width: 60,
    },{
        text: 'Nama',
        dataIndex: 'NAMA',
        width: 300,
    },{
        text: 'No.Telephone',
        dataIndex: 'TELP',
        width: 200,
    },{
        text: 'Website',
        dataIndex: 'WEBSITE',
        width: 200,
    },{
        text: 'Produk dan Layanan',
        dataIndex: 'PRODUK_LAYANAN',
        hidden : true,
        flex:1,
    },{
        text: 'Alamat',
        dataIndex: 'ALAMAT',
        flex:1,
    }],
    listeners:{
        itemdblclick:'upd',
    }
});