Ext.define('koyoku.view.dashboard.ListPengajuan', {
    extend: 'Ext.grid.Panel',
    xtype: 'list_pengajuan',
    requires: [
        'koyoku.store.Barang'
    ],
    store: {
        type: 'listBarang',
        storeId : 'listBarang',
        autoLoad: true,
    },
    columns: [{
        text: 'No',
        xtype : 'rownumberer',
        width: 60,
    },{
        text: 'Lokasi',
        dataIndex: 'BARANG_NAMA',
        flex: 2
    },{
        text: 'Jumlah Barang',
        dataIndex: 'BARANG_CODE',
        width: 70,
    },{
        text: 'Total Nilai',
        dataIndex: 'BARANG_SATUAN',
        flex:1,
    }]    
});