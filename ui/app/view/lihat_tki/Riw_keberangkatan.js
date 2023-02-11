Ext.define('koyoku.view.lihat_tki.Riw_keberangkatan', {
    extend: 'Ext.grid.Panel',
    xtype: 'grid_riw_keberangkatan',

    requires: [
        'koyoku.store.tki.Keberangkatan'
    ],
    store: {
        type: 'keberangkatan',
        storeId : 'keberangaktan',
        autoLoad: false,
    },
    columns: [{
        text: 'No',
        xtype : 'rownumberer',
        width:60
    },{
        text: 'BANDARA ASAL',
        dataIndex: 'BANDARA_START',
        flex : 2,
    },{
        text: 'BANDARA TUJUAN',
        dataIndex: 'BANDARA_END',
        flex : 2,
        align : 'center',
    },{
        text: 'Tanggal Pemberangkatan',
        dataIndex: 'PEMBERANGKATAN_DATE',
        flex : 1,
    }],
    
    listeners:{
        itemdblclick:'detail',
    },

    

});