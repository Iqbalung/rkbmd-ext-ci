Ext.define('koyoku.view.master.pptkis.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'pptkisList',

    requires: [
        'koyoku.store.Pptkis'
    ],
    store: {
        type: 'listPptkis',
        storeId : 'listPptkis',
        autoLoad: true,
    },
    columns: [{
        text: 'No',
        xtype : 'rownumberer',
        width: 60,
    },{
        text: 'Nama',
        dataIndex: 'PPTKIS_NAMA',
        width: 300,
    },{
        text: 'No. Telephone',
        dataIndex: 'PPTKIS_NOMOR_TELPHONE',
        width: 200,
    },{
        text: 'Alamat',
        dataIndex: 'PPTKIS_ALAMAT',
        flex:1,
    },{
        text: 'Legalitas',
        dataIndex: 'PPTKIS_LEGALITAS',
        width: 200,
    }]    
});