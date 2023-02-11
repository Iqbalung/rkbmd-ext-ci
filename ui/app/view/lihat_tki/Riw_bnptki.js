Ext.define('koyoku.view.lihat_tki.Riw_bnptki', {
    extend: 'Ext.grid.Panel',
    xtype: 'grid_riw_bnptki',

    requires: [
        'koyoku.store.tki.Bnptki'
    ],
    store: {
        type: 'bnptki',
        storeId : 'bnptki',
        autoLoad: true,
    },
    columns: [{
        text: 'No',
        xtype : 'rownumberer',
        width:60
    },{
        text: 'Tanggal Pengesahan',
        dataIndex: 'BNP2TKI_DATE',
        flex : 1,
    },{
        text: 'Uraian',
        dataIndex: 'BNP2TKI_URAIAN',
        flex : 2,
    }],
    
    listeners:{
        itemdblclick:'detail',
    },

    

});