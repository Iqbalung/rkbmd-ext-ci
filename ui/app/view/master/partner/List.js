Ext.define('koyoku.view.master.partner.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'partnerList',

    /*requires: [
        'milis.store.inventory.Logistik'
    ],
    store: {
        type: 'listPartner',
        storeId : 'listLogistik',
        autoLoad: true,
        groupField: 'NAME',
        listeners: {
            load: function(ths, records, successful, eOpts) {
                var jml = 0;
                for (var i = records.length - 1; i >= 0; i--) {
                    jml += records[i].data.JUMLAH;
                }
                Ext.getCmp('page_inventory').down('#jumlah_item').setValue(jml);
            }
        }
    },*/
    features: [{
        groupHeaderTpl: '{name}',
        ftype: 'groupingsummary'
    }],
    columns: [{
        text: 'No',
        xtype : 'rownumberer',
        width: 60,
    },{
        text: 'Nama',
        dataIndex: 'CODE',
        width: 120,
    }],
    listeners:{
        itemdblclick:'detail',
    },
    

});