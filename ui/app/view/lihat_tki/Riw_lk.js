Ext.define('koyoku.view.lihat_tki.Riw_lk', {
    extend: 'Ext.grid.Panel',
    xtype: 'grid_riw_lk',

    requires: [
        'koyoku.store.tki.Lk'
    ],
    store: {
        type: 'lk',
        storeId : 'lk',
        autoLoad: false,
    },
    columns: [{
        text: 'No',
        xtype : 'rownumberer',
        width : 60
    },{
        text: 'Nama Lembaga',
        dataIndex: 'NAMA',
        flex : 2,
    },{
        text: 'Nomor Akun',
        dataIndex: 'LK_URAIAN',
        flex : 2,
       
    },{
        text: 'Tanggal',
        dataIndex: 'LK_DATE',
        flex : 2,
        
    }],
    
    listeners:{
        itemdblclick:'detail',
    },

    

});