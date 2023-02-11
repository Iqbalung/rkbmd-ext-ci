Ext.define('koyoku.view.master.jabatan.ListAlat', {
    extend: 'Ext.grid.Panel',
    xtype: 'alatList',

    requires: [
        'koyoku.store.Alat'
    ],
    store: {
        type: 'listAlat',
        storeId: 'listAlat',
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
                xtype: 'rownumberer',
                width: 60,

            }, {
                text: 'Nama Alat',
                dataIndex: 'ALAT_KERJA_NAMA',
                flex: '1',
                editor: 'textfield',
            }],
            plugins: [{
                ptype: 'rowediting',
            }],
        });
        me.callParent([arguments]);
    },
    listeners: {
        itemdblclick: 'detail',
    },

});