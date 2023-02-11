Ext.define('koyoku.view.lihat_tki.Riw_perjanjian', {
    extend: 'Ext.grid.Panel',
    xtype: 'grid_riw_perjanjian',

    requires: [
        'koyoku.store.tki.Perjanjian'
    ],
    store: {
        type: 'perjanjian',
        storeId : 'perjanjian',
        autoLoad: true,
    },
    columns: [{
        text: 'No',
        xtype : 'rownumberer',
        width:60
    },{
        text: 'Tgl Perjanjian',
        dataIndex: 'PERJANJIAN_DATE',
        width: 100,
        flex : 1,
    },{
        text: 'Tgl Awal',
        dataIndex: 'PERJANJIAN_START',
        width: 100,
        flex : 1,
    },{
        text: 'Tgl Akhir',
        dataIndex: 'PERJANJIAN_END',
        width: 100,
        flex : 1,
    },{
        text: 'Uraian',
        dataIndex: 'PERJANJIAN_URAIAN',
        width: 100,
        flex : 2,
    }],
    
    listeners:{
        itemdblclick:'detail',
    },

    

});