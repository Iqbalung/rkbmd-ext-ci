Ext.define('koyoku.store.Tipe_partner', {
    extend: 'Ext.data.Store',

    alias: 'store.tipe_partner',

    model: 'koyoku.model.Tipe_partner',

    data: { items: [
        { value: 1, text: "BLKLN", table_name:"PARTNER_BLKLN"},
        { value: 2, text: "Lembaga Keuangan", table_name:"PARTNER_LK"},
        { value: 3, text: "Lembaga Sertifikasi Profesi", table_name:"PARTNER_LSP"},
        { value: 4, text: "Sarana Kesehatan", table_name:"PARTNER_SARKES"},
        { value: 5, text: "Asuransi", table_name:"PARTNER_ASURANSI"},
    ]},

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
