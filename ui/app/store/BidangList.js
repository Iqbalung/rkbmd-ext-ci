Ext.define('koyoku.store.BidangList', {
    extend: 'Ext.data.Store',
    alias: 'store.listBidangList',
    fields: [
        'BIDANG_ID', 'BIDANG_NAMA', 'BIDANG_PEJABAT', 'BIDANG_PEJABAT_NRP', 'BIDANG_ALAMAT'
    ],
    proxy: {
        type: 'ajax',
        actionMethods: {
            read: 'POST',
        },
        autoLoad: true,
        url: 'http://karya-inovasi.com/beta-rkbmdapi/index.php/Bidang/get',
        reader: {
            type: 'json',
            rootProperty: 'items',
            totalProperty: 'count'
        }
    }
});
