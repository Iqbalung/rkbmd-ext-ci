Ext.define('koyoku.view.lihat_tki.Riw_kasus', {
    extend: 'Ext.grid.Panel',
    xtype: 'grid_riw_kasus',

    requires: [
        'koyoku.store.tki.Kasus'
    ],
    store: {
        type: 'kasus',
        storeId : 'kasus',
        autoLoad: false,
    },
    columns: [{
        text: 'No',
        xtype : 'rownumberer',
        width:60
    },{
        bind : { text : '{language.jabatan}', },
        dataIndex: 'JABATAN_NAMA',
        flex : 2,
    },{
        text: 'URAIAN',
        dataIndex: 'RIWAYAT_KETERANGAN',
        flex : 2,
        align : 'center',
    },{
        text: 'KLASIFIKASI KASUS',
        dataIndex: 'RIWAYAT_TEXT',
        flex : 1,
    }],
    
    listeners:{
        itemdblclick:'detail',
    },

    

});