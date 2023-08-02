Ext.define('koyoku.store.pemeliharaan.Daftar', {
    extend: 'Ext.data.Store',
    alias: 'store.store_pemeliharaan',
    fields: [ 'PEMELIHARAAN_ID', 'NAMA_KEGIATAN', 'SUB_KEGIATAN_NAMA', 'BARANG_PEMELIHARAAN_ID', 'BARANG_PEMELIHARAAN_ID', 'BARANG_KODE', 'BARANG_ID', 'BARANG_NAMA', 'KONDISI_BAIK', 'KONDISI_RUSAK_RINGAN', 'KONDISI_RUSAK_BERAT', 'STATUS_BARANG', 'STATUS_BARANG_ID',
				'PEMELIHARAAN_NAMA', 'USULAN_JUMLAH', 'USULAN_SATUAN', 'RENCANA_JUMLAH', 'RENCANA_SATUAN', 'KETERANGAN', 'STATUS_DATA'],
    proxy: {
        type: 'ajax',
        actionMethods: {
            read: 'POST',
        },
        autoLoad: false,
        url:  api.apiurl + '/pemeliharaan/get',
        reader: {
            type: 'json',
            rootProperty: 'items',
            totalProperty: 'count'
        }
    }
});
