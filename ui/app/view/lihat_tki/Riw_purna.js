Ext.define('koyoku.view.lihat_tki.Riw_purna', {
    extend: 'Ext.grid.Panel',
    xtype: 'grid_riw_purna',
    requires: [
        'koyoku.store.tki.Purna'
    ],
    store: {
        type: 'purna',
        storeId : 'purna',
        autoLoad: false,
    },
    columns: [{
        text: 'No',
        xtype : 'rownumberer',
        width:60
    },{
        bind : { text : '{language.jabatan}', },
        dataIndex: 'JABATAN_NAMA',
        flex : 2,
    },{
        text: 'TANGGAL DITETAPKAN',
        dataIndex: 'PURNA_DATE',
        flex : 2,
        align : 'center',
    },{
        text: 'Keterangan',
        dataIndex: 'PURNA_KETERANGAN',
        flex : 1,
    }],
    
    listeners:{
        itemdblclick:'detail',
    },

    

});