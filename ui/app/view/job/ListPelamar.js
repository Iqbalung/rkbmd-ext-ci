Ext.define('koyoku.view.job.ListPelamar', {
    extend: 'Ext.grid.Panel',
    xtype: 'pelamarList',
    requires: [
        'koyoku.store.pelamar.Store'
    ],
    store: {
        type: 'store_pelamar',
        storeId: 'store_pelamar'
    },
    columns: [{
        text: 'No',
        xtype: 'rownumberer',
        width: 60
    }, {
        text: 'ID TKI',
        dataIndex: 'ID_TKI',
        width: 100,
        align: 'center',
    }, {
        text: 'NAMA',
        dataIndex: 'NAMA',
        flex: 1
    }, {
        text: 'L/P',
        dataIndex: 'JENIS_KELAMIN',
         align: 'center',
        width: 100,
    }, {
        text: 'Umur',
        dataIndex: 'UMUR',
         align: 'center',
        width: 100,
    },{
        text: 'Kompetensi',
        dataIndex: 'KOMPETENSI',
        flex: 1
    },{
        text: 'Bidang',
        dataIndex: 'BIDANG',
        flex: 1
    },{
        text: 'Minat Wilayah',
        dataIndex: 'WILAYAH_MINAT',
        flex: 1
    }],
    listeners: {
        itemdblclick: 'detail',
    },


});