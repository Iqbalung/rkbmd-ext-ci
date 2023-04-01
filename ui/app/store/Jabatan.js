Ext.define('koyoku.store.Jabatan', {
    extend: 'Ext.data.Store',
    alias: 'store.listJabatan',
    fields: [
       'JABATAN_ID','JABATAN_NAMA','JABATAN_TUGAS','JABATAN_DESKRIPSI', 'BIDANG_ID', 'BIDANG_NAMA'
    ],
    proxy: {
        type: 'ajax',
        actionMethods: {
            read: 'POST',
        },
        autoLoad: true,
        url: 'http://localhost/project/rkbmd/api/index.php/Jabatan/get',
        reader: {
            type: 'json',
            rootProperty: 'items',
            totalProperty: 'count'
        }
    }
});
