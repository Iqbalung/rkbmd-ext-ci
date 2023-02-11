Ext.define('koyoku.view.master.jobowner.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'jobownerList',
    requires: [
        'koyoku.store.Owner'
    ],
    store: {
        type: 'listOwner',
        storeId : 'listOwner',
        autoLoad: true,
    },
    features: [{
        groupHeaderTpl: '{name}',
        ftype: 'groupingsummary'
    }],
    columns: [{
        text: 'No',
        xtype : 'rownumberer',
        width : '5%',
    },{
        text: 'Nama',
        dataIndex: 'OWNER_NAMA',
        flex : 2,
    },{
        text: 'No. Telephone',
        dataIndex: 'OWNER_NOMOR_TELPHONE',
        flex : 2,
    },{
        text: 'Alamat',
        dataIndex: 'OWNER_ALAMAT_LENGKAP',
        flex : 3,
    }],
    listeners:{
        itemdblclick:'detail',
    },
    

});