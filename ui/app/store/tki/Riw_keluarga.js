Ext.define('koyoku.store.tki.Riw_keluarga', {
    extend: 'Ext.data.Store',
    alias: 'store.store_riw_keluarga',
    fields: [
		'ID',
		'HUBUNGAN',
		'NAMA',
		'NO_TELEPHON',
		'ALAMAT',
		'TEMPAT_LAHIR',
		'TANGGAL_LAHIR',
		'PENGGUNA_ID'
    ],
    proxy: {
        type: 'ajax',
        actionMethods: {
            read: 'POST',
        },
        autoLoad: true,
        url: 'http://localhost/koyoku/api/index.php/Pekerja/get_riw_keluarga',
        reader: {
            type: 'json',
            rootProperty: 'items',
            totalProperty: 'count'
        }
    }
});
