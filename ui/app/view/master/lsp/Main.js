Ext.define('koyoku.view.master.lsp.Main', {
    extend: 'Ext.panel.Panel',
    xtype: 'page_lsp',
    requires: [
        'koyoku.view.master.lsp.Controller',
        'koyoku.view.master.lsp.List',
        'koyoku.view.master.lsp.Form',
    ],
    controller: 'lsp',
    border: 1,
    id: 'page_lsp',
    layout: 'fit',
    title: 'Daftar Lembaga Sertifikasi Profesi',
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
                        itemId: 'pencarian_lsp',
                        forceSelection: false,
                        displayField: 'NAMA',
                        width: 250,
                        emptyText: "Ketik Kata Kunci",
                        hideTrigger: true,
                        listeners: {
                            specialkey: function(field, e){
                                if (e.getKey() == e.ENTER) {
                                    cmp = Ext.getCmp("page_lsp"),
                                    grid = cmp.down("lspList");
                                    store = grid.getStore();
                                    store.clearFilter();
                                    value = field.lastValue;
                                    store.clearFilter();
                                    store.filter('NAMA', value, false, false);
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
                    xtype: 'lspList',
                    region: 'center',
                    layout : 'fit',
                    autoScroll:true

                }]
            }]
        });
        me.callParent([arguments]);
    },
    
});