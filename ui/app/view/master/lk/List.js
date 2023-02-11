Ext.define('koyoku.view.master.lk.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'lkList',

    requires: [
        'koyoku.store.LK'
    ],
    store: {
        type: 'listLK',
        storeId : 'listLK',
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
        text: 'Jenis',
        dataIndex: 'JENIS',
        width: 150,
    },{
        text: 'No. Telephone',
        dataIndex: 'TELP',
        width: 200,
    },{
        text: 'ALAMAT',
        dataIndex: 'ALAMAT',
        flex:1,
    }],
    listeners:{
        itemdblclick:'upd',
    }
});