Ext.define('koyoku.store.TingkatPendidikan', {
    extend: 'Ext.data.Store',
    alias: 'store.listPendidikan',
    fields: [
        'PENDIDIKAN_ID', 'PENDIDIKAN_NAMA',
    ],
    proxy: {
        type: 'ajax',
        actionMethods: {
            read: 'POST',
        },
        autoLoad: true,
        url: 'http://karya-inovasi.com/beta-rkbmd/api/index.php/Tingkatpendidikan/get',
        reader: {
            type: 'json',
            rootProperty: 'items',
            totalProperty: 'count'
        }
    }
});
