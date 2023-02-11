Ext.define('koyoku.view.master.jabatan.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'jabatanList',

    requires: [
        'koyoku.store.Jabatan'
    ],
    store: {
        type: 'listJabatan',
        storeId : 'listJabatan',
        autoLoad: true,
    },
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
        dataIndex: 'JABATAN_NAMA',
        width: 300,
    },{
        text: 'Deskripsi',
        dataIndex: 'JABATAN_DESKRIPSI',
        flex:1
    }],
    listeners:{
        itemdblclick:'detail',
    }
});
