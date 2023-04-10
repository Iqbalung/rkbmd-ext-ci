Ext.define('koyoku.store.tki.Riw_bidang', {
    extend: 'Ext.data.Store',
    alias: 'store.store_riw_bidang',
    fields: [
		'BIDANG_ID',
		'BIDANG_NAMA',
    ],
    proxy: {
        type: 'ajax',
        actionMethods: {
            read: 'POST',
        },
        autoLoad: true,
        url: 'http://localhost:8888/project/rkbmd/api/index.php/Pekerja/get_riw_bidang',
        reader: {
            type: 'json',
            rootProperty: 'items',
            totalProperty: 'count'
        }
    }
});
