Ext.define('koyoku.view.lihat_tki.Riw_pak', {
    extend: 'Ext.grid.Panel',
    xtype: 'grid_riw_pak',

    requires: [
        'koyoku.store.tki.Pak'
    ],
    store: {
        type: 'pak',
        storeId : 'pak',
        autoLoad: false,
    },
    columns: [{
        text: 'No',
        xtype : 'rownumberer',
        width:60
    },{
        text: 'Pembekalan',
        dataIndex: 'PEMBEKALAN_URAIAN',
        width:150,
        flex:2,
    },{
        text: 'Tgl Awal',
        dataIndex: 'PEMBEKALAN_START',
        flex:1,
        align : 'center',
    },{
        text: 'Tgl Akhir',
        dataIndex:'PEMBEKALAN_END',
        width: 100,
        flex:1,
        align : 'right',
    }],
    
    listeners:{
        itemdblclick:'detail',
    },

    

});