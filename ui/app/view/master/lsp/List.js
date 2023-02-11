Ext.define('koyoku.view.master.lsp.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'lspList',

    requires: [
        'koyoku.store.LSP'
    ],
    store: {
        type: 'listLSP',
        storeId : 'listLSP',
        autoLoad: true,
    },
    columns: [{
        text: 'No',
        xtype : 'rownumberer',
        width: 60,
    },{
        text: 'Nama',
        dataIndex: 'NAMA',
        width: 260,
    },{
        text: 'Jenis',
        dataIndex: 'JENIS',
        width: 100,
    },{
        text: 'Bidang',
        dataIndex: 'BIDANG',
        width: 150,
    },{
        text: 'No. Telephone',
        dataIndex: 'TELP',
        width: 150,
    },{
        text: 'Alamat',
        dataIndex: 'ALAMAT',
        flex:1,
    },{
        text: 'Nomor Lisensi BNSP',
        dataIndex: 'NO_LISENSI_BNSP',
        width: 150,
    }],
    listeners:{
        itemdblclick:'upd',
    }
});