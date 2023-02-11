Ext.define('koyoku.view.job.ListPelamarNonKerja', {
    extend: 'Ext.grid.Panel',
    xtype: 'pelamarListNonKerja',
    
    selModel:Ext.create('Ext.selection.CheckboxModel', {
           checkOnly: true,
           enableKeyNav: false,
           allowDeselect: true
    }),

    requires: [
        'koyoku.store.pelamar.StoreNonKerja'
    ],
    store: {
        type: 'store_pelamar_nonkerja',
        storeId : 'store_pelamar_nonkerja',
        autoLoad: true,
    },
    columns: [{
        text: 'No',
        xtype : 'rownumberer',
        width:60
    },{
        text: 'ID_TKI',
        dataIndex: '',
        width: 100,
        align : 'center',
    },{
        text: 'Nama',
        dataIndex: 'NAMA',
        flex:1
    },{
        text: 'L/P',
        dataIndex: 'JENIS_KELAMIN',
        width: 50,
    },{
        text: 'Minat Negara',
        dataIndex: 'WILAYAH_MINAT',
        flex:2
    },{
        text: 'Kompetensi',
        dataIndex: 'KOMPETENSI',
        flex:2
    },{
        text: 'Bidang',
        dataIndex: 'BIDANG',
        flex:2
    },{
        text: 'Umur',
        dataIndex: 'UMUR',
        flex:1
    },{
        text: 'Pendidikan Terakhir',
        dataIndex: 'PENDIDIKAN_NAMA',
        flex:2
    },{
        text: 'Pekerjaan Terakhir',
        dataIndex: 'POSISI',
        flex:2
    }],
    listeners:{
        itemdblclick:'detail',
    },
});