Ext.define('koyoku.store.Program', {
    extend: 'Ext.data.Store',
    alias: 'store.listProgram',
    fields: [
       'PROGRAM_ID','PROGRAM_NAMA','BIDANG_ID', 'TAHUN',
    ],
    autoLoad: true,
    proxy: {
        type: 'ajax',
        actionMethods: {
            read: 'POST',
        },
        autoLoad: true,
        url: api.baseurl + '/api/index.php/Program/get',
        reader: {
            type: 'json',
            rootProperty: 'items',
            totalProperty: 'count'
        }
    }
});
