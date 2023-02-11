Ext.define('koyoku.view.master.lk.Main', {
    extend: 'Ext.panel.Panel',
    xtype: 'page_lk',
    requires: [
        'koyoku.view.master.lk.Controller',
        'koyoku.view.master.lk.List',
        'koyoku.view.master.lk.Form',
    ],
    controller: 'lk',
    border: 1,
    id: 'page_lk',
    layout: 'fit',
    title: 'Daftar Lembaga Keuangan',
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
                        itemId: 'pencarian_keuangan',
                        forceSelection: false,
                        displayField: 'NAMA',
                        width: 250,
                        emptyText: "Ketik Kata Kunci",
                        hideTrigger: true,
                        listeners: {
                            specialkey: function(field, e){
                                if (e.getKey() == e.ENTER) {
                                    cmp = Ext.getCmp("page_lk"),
                                    grid = cmp.down("lkList");
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
                    xtype: 'lkList',
                    region: 'center',
                    layout : 'fit',
                    autoScroll:true

                }]
            }]
        });
        me.callParent([arguments]);
    },
    
});