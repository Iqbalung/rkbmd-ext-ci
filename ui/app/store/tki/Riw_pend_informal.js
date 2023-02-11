Ext.define('koyoku.store.tki.Riw_pend_informal', {
    extend: 'Ext.data.Store',
    alias: 'store.store_riw_pend_informal',
    fields: [
        'PENGGUNA_ID',
        'INFORMAL_ID',
        'INFORMAL_NILAI',
        'INFORMAL_URAIAN',
		'PELATIHAN_NAMA',
        'INSTANSI_NAMA',
        'INFORMAL_START',
        'INFORMAL_END',
        'BLKLN_ID',
        'HAPUS'
    ],
    proxy: {
        type: 'ajax',
        actionMethods: {
            read: 'POST',
        },
        autoLoad: true,
        url: 'http://localhost/koyoku/api/index.php/Pekerja/get_riw_pend_informal',
        reader: {
            type: 'json',
            rootProperty: 'items',
            totalProperty: 'count'
        }
    }
});
