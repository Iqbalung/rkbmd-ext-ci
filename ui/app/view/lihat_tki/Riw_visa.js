Ext.define('koyoku.view.lihat_tki.Riw_visa', {
    extend: 'Ext.grid.Panel',
    xtype: 'grid_riw_visa',

    requires: [
        'koyoku.store.tki.Visa'
    ],
    store: {
        type: 'visa',
        storeId : 'visa',
        autoLoad: false,
    },
    columns: [{
        text: 'No',
        xtype : 'rownumberer',
        width:60
    },{
        text: 'NOMOR VISA',
        dataIndex: 'VISA_NOMOR',
        flex:1,
    },{
        text: 'BERLAKU SAMPAI',
        dataIndex: 'VISA_DATE_END',
        flex : 1,
    }],
    
    listeners:{
        itemdblclick:'detail',
    },

    

});