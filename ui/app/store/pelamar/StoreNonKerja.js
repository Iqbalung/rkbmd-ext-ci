Ext.define('koyoku.store.pelamar.StoreNonKerja', {
    extend: 'Ext.data.Store',
    alias: 'store.store_pelamar_nonkerja',
    proxy: {
        type: 'ajax',
        actionMethods: {
            read: 'POST',
        },
        autoLoad: true,
        url: 'http://karya-inovasi.com/beta-rkbmdapi/index.php/Pekerja/get_nonbekerja',
        reader: {
            type: 'json',
            rootProperty: 'items',
            totalProperty: 'count'
        }
    }
});
