Ext.define('koyoku.store.pemanfaatan.Daftar', {
    extend: 'Ext.data.Store',
    alias: 'store.store_pemanfaatan',
    fields: [ 'PEMANFAATAN_ID', 'NAMA_KEGIATAN', 'SUB_KEGIATAN_NAMA', 'BARANG_PEMANFAATAN_ID', 'JENIS_KIB', 'BARANG_KODE', 'BARANG_ID', 'BARANG_NAMA',
				'JUMLAH', 'SATUAN', 'RENCANA_PEMANFAATAN', 'KETERANGAN', 'STATUS_DATA'],
    proxy: {
        type: 'ajax',
        actionMethods: {
            read: 'POST',
        },
        autoLoad: false,
        url: 'http://karya-inovasi.com/beta-rkbmd/api/index.php/pemanfaatan/get',
        reader: {
            type: 'json',
            rootProperty: 'items',
            totalProperty: 'count'
        }
    }
});
