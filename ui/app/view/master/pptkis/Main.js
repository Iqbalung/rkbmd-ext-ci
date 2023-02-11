Ext.define('koyoku.view.master.pptkis.Main', {
    extend: 'Ext.panel.Panel',
    xtype: 'page_pptkis',
    requires: [
        'koyoku.view.master.pptkis.Controller',
        'koyoku.view.master.pptkis.List',
        'koyoku.view.master.pptkis.Form_pptkis',
    ],
    controller: 'pptkis',
    border: 1,
    id: 'page_pptkis',
    layout: 'fit',
    title: 'Daftar PPTKIS',
    initComponent: function() {
        var me = this;
        Ext.apply(me, {
            items: [{
                layout: 'border',
                tbar: [
                    '->', {
                        labelWidth: 50,
                        xtype: 'textfield',
                        triggerAction: 'all',
                        typeAhead: true,
                        queryMode: 'remote',
                        minChars: 2,
                        itemId: 'pencarian_pptkis',
                        forceSelection: false,
                        displayField: 'PPTKIS_NAMA',
                        width: 250,
                        emptyText: "Ketik Kata Kunci",
                        hideTrigger: true,
                        listeners: {
                            specialkey: function(field, e) {
                                if (e.getKey() == e.ENTER) {
                                    cmp = Ext.getCmp("page_pptkis"),
                                        grid = cmp.down("pptkisList");
                                    store = grid.getStore();
                                    store.clearFilter();
                                    value = field.lastValue;
                                    store.clearFilter();
                                    store.filter('PPTKIS_NAMA', value, false, false);
                                    store.load();
                                }
                            }

                        }
                    }, {
                        text: 'Tambah',
                        handler: 'add',
                        glyph: 'xf067@fontAwesome'
                    }, {
                        bind : { text : '{language.ubah}', },
                        glyph: 'xf044@fontAwesome',
                        handler: 'upd',
                    }, {
                        bind : { text : '{language.hapus}', },
                        glyph: 'xf1f8@fontAwesome',
                        handler: 'delete',
                    }
                ],
                items: [{
                    xtype: 'pptkisList',
                    region: 'center',
                    layout: 'fit',
                    autoScroll: true,
                    listeners:{
                        itemdblclick:'detail',
                    }
                }]
            }]
        });
        me.callParent([arguments]);
    },
});