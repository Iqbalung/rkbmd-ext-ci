Ext.define('koyoku.view.master.sarkes.Main', {
    extend: 'Ext.panel.Panel',
    xtype: 'page_sarkes',
    requires: [
        'koyoku.view.master.sarkes.Controller',
        'koyoku.view.master.sarkes.List',
        'koyoku.view.master.sarkes.Form',
    ],
    controller: 'sarkes',
    border: 1,
    id: 'page_sarkes',
    layout: 'fit',
    title: 'Daftar Sarana Kesehatan',
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
                        itemId: 'pencarian_sarkes',
                        forceSelection: false,
                        displayField: 'NAMA',
                        width: 250,
                        emptyText: "Ketik Kata Kunci",
                        hideTrigger: true,
                        listeners: {
                            specialkey: function(field, e){
                                if (e.getKey() == e.ENTER) {
                                    cmp = Ext.getCmp("page_sarkes"),
                                    grid = cmp.down("sarkesList");
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
                    xtype: 'sarkesList',
                    region: 'center',
                    layout : 'fit',
                    autoScroll:true

                }]
            }]
        });
        me.callParent([arguments]);
    },
    
});