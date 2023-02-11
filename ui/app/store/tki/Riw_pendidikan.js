Ext.define('koyoku.store.tki.Riw_pendidikan', {
    extend: 'Ext.data.Store',
    alias: 'store.store_riw_pendidikan',
    fields: [
		{
            mapping: 'FORMAL_ID',
            name: 'ID',
        },
		'ID_PEKERJA',
		'TPENDIDIKAN_ID',		
		'FORMAL_JURUSAN',
		'FORMAL_START',
		'FORMAL_END',
		'NAMA_INSTANSI',
        'NILAI',
        'DOKUMEN_NAMA'
    ],
    proxy: {
        type: 'ajax',
        actionMethods: {
            read: 'POST',
        },
        autoLoad: true,
        url: 'http://localhost/koyoku/api/index.php/Pekerja/get_riw_pendidikan',
        reader: {
            type: 'json',
            rootProperty: 'items',
            totalProperty: 'count'
        }
    }
});
