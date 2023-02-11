Ext.define('koyoku.view.master.blkln.Main', {
    extend: 'Ext.panel.Panel',
    xtype: 'page_blkln',
    requires: [
        'koyoku.view.master.blkln.Controller',
        'koyoku.view.master.blkln.List',
        'koyoku.view.master.blkln.Form',
    ],
    controller: 'blkln',
    border: 1,
    id: 'page_blkln',
    layout: 'fit',
    title: 'Daftar BLKLN',
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
                        itemId: 'pencarian_blkn',
                        forceSelection: false,
                        displayField: 'NAMA',
                        width: 250,
                        emptyText: "Ketik Kata Kunci",
                        hideTrigger: true,
                        listeners: {
                            specialkey: function(field, e){
                                if (e.getKey() == e.ENTER) {
                                    cmp = Ext.getCmp("page_blkln"),
                                    grid = cmp.down("blklnList");
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
                    xtype: 'blklnList',
                    region: 'center',
                    layout : 'fit',
                    autoScroll:true

                }]
            }]
        });
        me.callParent([arguments]);
    },
    
});