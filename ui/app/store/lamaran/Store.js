Ext.define('koyoku.store.lamaran.Store', {
    extend: 'Ext.data.Store',
    alias: 'store.store_lamaran',
    model: 'koyoku.model.Lamaran',
    proxy: {
        type: 'ajax',
        actionMethods: {
            read: 'POST',
        },
        autoLoad: false,
        url: 'http://localhost/project/rkbmd/api/index.php/lamaran/get',
        reader: {
            type: 'json',
            rootProperty: 'items',
            totalProperty: 'count'
        }
    }
});
