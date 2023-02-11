Ext.define('koyoku.store.Pegawai_pptkis', {
    extend: 'Ext.data.Store',
    alias: 'store.listPegawai_pptkis',
    fields: [
       'PEGAWAI_ID','PPTKIS_ID','PEGAWAI_NAMA','PEGAWAI_ALAMAT','PEGAWAI_NO_TELP','PEGAWAI_EMAIL'  
    ],
    proxy: {
        type: 'ajax',
        actionMethods: {
            read: 'POST',
        },
        autoLoad: false,
        url: 'http://localhost/koyoku/api/index.php/pptkis/get_pegawai',
        reader: {
            type: 'json',
            rootProperty: 'items',
            totalProperty: 'count'
        }
    }    
});
