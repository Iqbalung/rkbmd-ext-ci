Ext.define('koyoku.view.master.barang.Form_barang', {
    extend: 'Ext.Window',
    alias: 'widget.form_barang',
    controller: 'barang',
    padding: 10,
    modal: true,
    width: 700,
    closeAction: 'destroy',
    title:'Form Barang',
    //selama close action destroy tidak pakai Hide window diberi ID tidak masalah
    id : 'window_form_baang',
    items: [{
        xtype : 'form',
        items: [
            {
                xtype: 'hiddenfield',
                name: 'BARANG_ID'
            }, {
                xtype: 'hiddenfield',
                name: 'PARENT_BARANG_CODE'
            }, {
                xtype: 'textfield',
                fieldLabel: 'Nama',
                name: 'BARANG_NAMA',
                width : '100%',
                allowBlank: false
            },{
                xtype: 'textfield',
                fieldLabel: 'Kode',
                name: 'BARANG_CODE',
                width : '100%',
                allowBlank: false,
                editable: false,
                readonly: true
            },{
                xtype: 'textarea',
                fieldLabel: 'Satuan',
                name: 'BARANG_SATUAN',
                width : '100%',
                allowBlank: false
            }
        ],
    }],
    bbar:['->',{
        text:"Simpan",
        cls:'btn-main btn-x-m2',
        handler:'save',
        glyph: 'xf0c7@fontAwesome'

    }]
});
