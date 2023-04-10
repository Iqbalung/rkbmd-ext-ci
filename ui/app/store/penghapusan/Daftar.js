Ext.define('koyoku.store.penghapusan.Daftar', {
    extend: 'Ext.data.Store',
    alias: 'store.store_penghapusan',
    fields: [ 'PENGHAPUSAN_ID', 'NAMA_KEGIATAN', 'SUB_KEGIATAN_NAMA', 'BARANG_PENGHAPUSAN_ID', 'BARANG_KODE', 'BARANG_ID', 'BARANG_NAMA', 'BARANG_KODE', 
            'NO_REGISTER', 'MERK', 'NO_SERI', 'ASAL_PEROLEHAN', 'TAHUN_PEROLEHAN', 'JUMLAH', 'HARGA', 'RENCANA_PEMINDAHTANGANAN', 
            'RENCANA_PENGHAPUSAN', 'KETERANGAN', 'STATUS_DATA'
            ],
    proxy: {
        type: 'ajax',
        actionMethods: {
            read: 'POST',
        },
        autoLoad: false,
        url: 'http://karya-inovasi.com/beta-rkbmd/api/index.php/penghapusan/get',
        reader: {
            type: 'json',
            rootProperty: 'items',
            totalProperty: 'count'
        }
    }
});
