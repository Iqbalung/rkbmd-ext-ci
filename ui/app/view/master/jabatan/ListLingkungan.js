Ext.define('koyoku.view.master.jabatan.ListLingkungan', {
    extend: 'Ext.grid.Panel',
    xtype: 'lingkunganList',

    requires: [
        'koyoku.store.Lingkungan'
    ],
    store: {
        type: 'listLingkungan',
        storeId : 'listLingkungan',
        autoLoad: true,
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
        text: 'DESKRIPSI',
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