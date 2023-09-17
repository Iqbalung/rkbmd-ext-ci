Ext.define('koyoku.view.master.pengguna.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'penggunaList',

    requires: [
        'koyoku.store.pengguna.Pengguna'
    ],
    store: {
        type: 'store_pengguna',
        storeId: 'listPengguna',
        autoLoad: true,
    },
    columns: [{
        text: 'No',
        xtype: 'rownumberer',
        width: 60,
    }, {
        text: 'Email',
        dataIndex: 'EMAIL',
        flex: 1,
    }, {
        text: 'Nama',
        dataIndex: 'NAMA',
        flex: 1,
    }, {
        text: 'OPD',
        dataIndex: 'BIDANG_NAMA',
        width: 150,
    }, {
        text: 'Tanggal Dibuat',
        dataIndex: 'DATE_CREATED',
        width: 150,
    }, {
        text: 'Terkahir Diperbaharui',
        dataIndex: 'LAST_UPDATED',
        width: 150,
    }, {
        text: 'Tanggal Terkonfirmasi',
        dataIndex: 'DATE_CONFIRMED',
        width: 150,
    }, {
        text: 'Usergroup',
        dataIndex: 'USERGROUP',
        width: 150,
    }, {
        text: 'Status',
        dataIndex: 'ACTIVE',
        width: 150,
    }],
    listeners: {
        itemdblclick: 'upd',
    }
});