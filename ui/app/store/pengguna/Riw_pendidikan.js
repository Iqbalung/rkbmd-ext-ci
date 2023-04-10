Ext.define('koyoku.store.pengguna.Riw_pendidikan', {
    extend: 'Ext.data.Store',
    alias: 'store.store_pengguna',
    fields: [
        'ID_PEKERJA',
        'TPENDIDIKAN_ID',
        'FORMAL_JURUSAN',
        'FORMAL_ID',
        'FORMAL_START',
        'FORMAL_END',
        'NAMA_INSTANSI'
    ],
    proxy: {
        type: 'ajax',
        actionMethods: {
            read: 'POST',
        },
        autoLoad: true,
        url: 'http://localhost:8888/project/rkbmd/api/index.php/Pengguna/get',
        reader: {
            type: 'json',
            rootProperty: 'items',
            totalProperty: 'count'
        }
    }
});
