Ext.define('koyoku.view.lihat_tki.Riw_asuransi', {
    extend: 'Ext.grid.Panel',
    xtype: 'grid_riw_asuransi',

    requires: [
        'koyoku.store.tki.Asuransi'
    ],
    store: {
        type: 'asuransi',
        storeId : 'asuransi',
        autoLoad: true,
    },
    columns: [{
        text: 'No',
        xtype : 'rownumberer',
        width:60,
        flex : 1,
    },{
        text: 'Lembaga Asuransi',
        dataIndex: 'NAMA',
        width: 100,
        flex : 2,
    },{
        text: 'Tanggal Persetuajuan',
        dataIndex: 'ASURANSI_DATE',
        width:150,
        flex : 2,
    },{
        text: 'Nomor Akun',
        dataIndex: 'ASURANSI_AKUN',
        width: 100,
         flex : 2,
    },{
        text: 'Uraian',
        dataIndex: 'ASURANSI_URAIAN',
        width: 100,
        flex : 3,
    }],

    listeners:{
        itemdblclick:'detail',
    },
});