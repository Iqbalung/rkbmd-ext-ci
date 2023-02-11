Ext.define('koyoku.view.master.asuransi.Main', {
    extend: 'Ext.panel.Panel',
    xtype: 'page_asuransi',
    requires: [
        'koyoku.view.master.asuransi.Controller',
        'koyoku.view.master.asuransi.List',
        'koyoku.view.master.asuransi.Form',
    ],
    controller: 'asuransi',
    border: 1,
    id: 'page_asuransi',
    layout: 'fit',
    title: 'Daftar Asuransi',
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
                        itemId: 'pencarian_asuransi',
                        forceSelection: false,
                        displayField: 'NAMA',
                        width: 250,
                        emptyText: "Ketik Kata Kunci",
                        hideTrigger: true,
                        listeners: {
                            specialkey: function(field, e){
                                if (e.getKey() == e.ENTER) {
                                    cmp = Ext.getCmp("page_asuransi"),
                                    grid = cmp.down("asuransiList");
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
                    xtype: 'asuransiList',
                    region: 'center',
                    layout : 'fit',
                    autoScroll:true

                }]
            }]
        });
        me.callParent([arguments]);
    },
    
});