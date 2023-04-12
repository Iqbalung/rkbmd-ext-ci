Ext.define('koyoku.store.Program', {
    extend: 'Ext.data.Store',
    alias: 'store.listProgram',
    fields: [
       'PROGRAM_ID','PROGRAM_NAMA','BIDANG_ID', 'TAHUN',
    ],
    proxy: {
        type: 'ajax',
        actionMethods: {
            read: 'POST',
        },
        autoLoad: true,
        url: 'http://localhost/project/rkbmd/api/index.php/Program/get',
        reader: {
            type: 'json',
            rootProperty: 'items',
            totalProperty: 'count'
        }
    }
});
