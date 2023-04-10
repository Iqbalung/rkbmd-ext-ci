Ext.define('koyoku.store.barang.Rekan_kerja', {
    extend: 'Ext.data.Store',
    alias: 'store.rekan_kerjaPptkis',
    fields: [
       'PPTKIS_PARTNER_ID','PARTNER_ID','PPTKIS_ID','NAMA_PARTNER'
    ],
    proxy: {
        type: 'ajax',        
        autoLoad: false,
        actionMethods: {
            read: 'POST',
        },
        url: 'http://localhost:8888/project/rkbmd/api/index.php/Pptkis/get_partner',
        reader: {
            type: 'json',
            rootProperty: 'items',
            totalProperty: 'count'
        }
    }
});
