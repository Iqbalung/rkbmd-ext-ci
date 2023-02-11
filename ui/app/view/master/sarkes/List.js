Ext.define('koyoku.view.master.sarkes.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'sarkesList',

    requires: [
        'koyoku.store.Sarkes'
    ],
    store: {
        type: 'listSarkes',
        storeId : 'listSarkes',
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
        text: 'No. Telephone',
        dataIndex: 'TELP',
        width: 200,
    },{
        text: 'Akreditasi',
        dataIndex: 'AKREDITASI',
        width: 150,
    },{
        text: 'Layanan',
        dataIndex: 'LAYANAN',
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