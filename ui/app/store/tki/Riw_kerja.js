Ext.define('koyoku.store.tki.Riw_kerja', {
    extend: 'Ext.data.Store',
    alias: 'store.store_riw_kerja',
    fields: [        
        {
            mapping: 'PENGALAMAN_ID',
            name: 'ID',
        },
        'POSISI',
        'PERUSAHAAN',
        'START_DATE',
        'END_DATE',
        'IS_ACTIVE',
        'FUNGSI_PEKERJAAN',
        'TUGAS',
        'PEKERJA_ID',
        'INDUSTRI_PEKERJAAN',
        'LAMARAN_ID',
        'HAPUS',
        'DOKUMEN_NAMA'
    ],
    proxy: {
        type: 'ajax',
        actionMethods: {
            read: 'POST',
        },
        autoLoad: true,
        url: 'http://localhost/koyoku/api/index.php/Pekerja/get_riw_kerja',
        reader: {
            type: 'json',
            rootProperty: 'items',
            totalProperty: 'count'
        }
    }
});
