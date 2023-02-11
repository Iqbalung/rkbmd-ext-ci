Ext.define('koyoku.view.job.ListLingkunganJob', {
    extend: 'Ext.grid.Panel',
    xtype: 'lingkunganListJob',

    requires: [
        'koyoku.store.job.Lingkungan'
    ],
    store: {
        type: 'listLingkunganJob',
        storeId : 'listLingkunganJob',
        autoLoad: false,
    },
    features: [{
        groupHeaderTpl: '{name}',
        ftype: 'groupingsummary'
    }],
    initComponent: function() {
        var me = this;
        Ext.apply(me, {
    columns: [{
        text: 'No',
        xtype : 'rownumberer',
        width: 60,
    },{
        text: 'Klasifikasi Lingkungan',
        dataIndex: 'KLASIFIKASI_LING_NAMA',
        width: 300,
        editor: 'textfield',
    },{
        text: 'Lingkungan',
        dataIndex: 'KLASIFIKASI_LING_ITEM',
        width: 300,
        editor: 'textfield',
    },{ 
        text: 'Deskripsi',
        dataIndex: 'KLASIFIKASI_LING_VALUE',
        flex:1,
        editor: 'textfield',
    }],
    plugins: [{
                ptype: 'rowediting',
            }],
    });
     me.callParent([arguments]);
    },
    listeners:{
        itemdblclick:'detail',
    },
    

});