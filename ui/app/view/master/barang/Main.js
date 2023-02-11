Ext.define('koyoku.view.master.barang.Main', {
    extend: 'Ext.panel.Panel',
    xtype: 'page_barang',
    requires: [
        'koyoku.view.master.barang.Controller',
        'koyoku.view.master.barang.List',
        'koyoku.view.master.barang.Form_barang',
    ],
    controller: 'barang',
    border: 1,
    id: 'page_barang',
    layout: 'fit',
    title: 'Daftar Barang',
    initComponent: function() {
        var me = this;
        Ext.apply(me, {
            items: [{
                layout: 'border',
                tbar : [
                    '->',
                    {
                        labelWidth  : 50,
                        xtype: 'textfield',
                        triggerAction: 'all',
                        typeAhead: true,
                        queryMode: 'remote',
                        minChars: 2,
                        itemId: 'pencarian_agency',
                        forceSelection: false,
                        displayField: 'BARANG_NAMA',
                        width: 250,
                        emptyText: "Ketik Kata Kunci",
                        hideTrigger: true,
                        listeners: {
                            specialkey: function(field, e){
                                if (e.getKey() == e.ENTER) {
                                    cmp = Ext.getCmp("page_barang"),
                                    grid = cmp.down("barangList");
                                    store = grid.getStore();
                                    store.clearFilter();
                                    value = field.lastValue;
                                    store.clearFilter();
                                    store.filter('BARANG_NAMA', value, false, false);
                                    store.load();
                                }
                            }

                        }
                    },
                    {
                        text : 'Tambah',
                        handler : 'add',
                        glyph: 'xf067@fontAwesome'
                    },{
                        text : 'Ubah',
                        glyph: 'xf044@fontAwesome',
                        handler:'upd',
                    },{
                        text : 'Hapus',
                        glyph: 'xf1f8@fontAwesome',
                        handler:'delete',
                    }
                ],
                items: [{
                    xtype: 'barangList',
                    region: 'center',
                    layout : 'fit',
                    autoScroll:true
                },],
            }],
        });
        me.callParent([arguments]);
    },
    
    
});