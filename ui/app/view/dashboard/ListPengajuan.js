Ext.define('koyoku.view.dashboard.ListPengajuan', {
    extend: 'Ext.grid.Panel',
    xtype: 'list_pengajuan',
    requires: [
        'koyoku.store.dashboard.PengajuanSKPD'
    ],
    store: {
        type: 'storePengajuanSKPD',
        storeId : 'storePengajuanSKPD',
        autoLoad: true,
    },
    columns: [{
        text: 'No',
        xtype : 'rownumberer',
        width: 60,
    },{
        text: 'Lokasi',
        dataIndex: 'BIDANG_NAMA',
        flex: 2
    },{
        text: 'Jumlah Barang',
        dataIndex: 'JML_BARANG',
        width: 120,
    },{
        text: 'Total Nilai',
        dataIndex: 'TOTAL_HARGA',
        flex:1,
    }]    
});