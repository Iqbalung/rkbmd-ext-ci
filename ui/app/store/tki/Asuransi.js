Ext.define('koyoku.store.tki.Asuransi', {
    extend: 'Ext.data.Store',
    alias: 'store.asuransi',
    fields: [
       'ASURANSI_ID','NAMA','ASURANSI_URAIAN','ASURANSI_DATE',
    ],
    proxy: {
        type: 'ajax',
        actionMethods: {
            read: 'POST',
        },
        autoLoad: false,
        url: 'http://localhost:8888/project/rkbmd/api/index.php/Tki/riwasuransi',
        reader: {
            type: 'json',
            rootProperty: 'items',
            totalProperty: 'count'
        }
    }
});
