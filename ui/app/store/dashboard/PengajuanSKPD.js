Ext.define('koyoku.store.dashboard.PengajuanSKPD', {
    extend: 'Ext.data.Store',
    alias: 'store.storePengajuanSKPD',
    fields: [ 'BIDANG_ID', 'BIDANG_NAMA', 'JML_PENGADAAN', 'JML_BARANG', 'TOTAL_HARGA'],
    proxy: {
        type: 'ajax',
        actionMethods: {
            read: 'POST',
        },
        autoLoad: false,
        url: 'http://localhost/project/rkbmd/api/index.php/dashboard/get_pengajuan_skpd',
        reader: {
            type: 'json',
            rootProperty: 'items',
            totalProperty: 'count'
        }
    }
});
