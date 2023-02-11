Ext.define('koyoku.store.tki.Riw_kompetensi', {
    extend: 'Ext.data.Store',
    alias: 'store.store_riw_kompetensi',
    fields: [
		'KOMPETENSI_ID',
		'KOMPETENSI_NAMA',
    ],
    proxy: {
        type: 'ajax',
        actionMethods: {
            read: 'POST',
        },
        autoLoad: true,
        url: 'http://localhost/koyoku/api/index.php/Pekerja/get_riw_kompetensi',
        reader: {
            type: 'json',
            rootProperty: 'items',
            totalProperty: 'count'
        }
    }
});
