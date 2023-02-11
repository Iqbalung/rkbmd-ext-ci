Ext.define('koyoku.view.lihat_tki.Riw_pindah', {
    extend: 'Ext.grid.Panel',
    xtype: 'grid_riw_pindah',

    requires: [
        'koyoku.store.tki.Pindah'
    ],
    store: {
        type: 'pindah',
        storeId : 'pindah',
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
        text: 'Tanggal Ditetapkan',
        dataIndex: 'RIWAYAT_DATE',
        flex : 1,
    },{
        text: 'Alasan Kepindahan',
        dataIndex: 'RIWAYAT_TEXT',
        flex : 1,
    }],
    
    listeners:{
        itemdblclick:'detail',
    },

    

});