Ext.define('koyoku.store.pengadaan.Daftar', {
    extend: 'Ext.data.Store',
    alias: 'store.store_pengadaan',
    fields: [ 'PENGADAAN_ID', 'NAMA_KEGIATAN', 'SUB_KEGIATAN_NAMA', 'BARANG_PENGADAAN_ID', 'BARANG_KODE', 'BARANG_ID', 'BARANG_NAMA',
				'JUMLAH', 'SATUAN', 'CARA_PEMENUHAN', 'KETERANGAN', 'STATUS_DATA'],
    proxy: {
        type: 'ajax',
        actionMethods: {
            read: 'POST',
        },
        autoLoad: false,
        url: 'http://localhost:8888/project/rkbmd/api/index.php/pengadaan/get',
        reader: {
            type: 'json',
            rootProperty: 'items',
            totalProperty: 'count'
        }
    }
});
