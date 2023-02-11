Ext.define('koyoku.view.master.blkln.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'blklnList',

    requires: [
        'koyoku.store.Blkln'
    ],
    store: {
        type: 'listBlkln',
        storeId : 'listBlkln',
        autoLoad: true,
    },
    columns: [{
        text: 'No',
        xtype : 'rownumberer',
        width: 60,
    },{
        text: 'Nama',
        dataIndex: 'NAMA',
        flex : 1,
    },{
        text: 'Negara Tujuan',
        dataIndex: 'NEGARA',
        width : 150
    },{
        text: 'No. Telephone',
        dataIndex: 'TELP',
        width : 120
    },{
        text: 'Alamat',
        dataIndex: 'ALAMAT',
        flex:1,
    },{
        text: 'Akreditasi',
        dataIndex: 'AKREDITASI',
        width : 100
    },{
        text: 'Legalitas',
        dataIndex: 'LEGALITAS',
        width : 100
    }],
    listeners:{
        itemdblclick:'upd',
    }
});