Ext.define('koyoku.view.onhelp.Main', {
    extend: 'Ext.panel.Panel',
    xtype: 'page_online_help',
    requires: [
        'koyoku.view.onhelp.Controller',
        'koyoku.view.onhelp.List',
        'koyoku.view.onhelp.ListUser',
        'koyoku.view.onhelp.Win_add',
    ],
    controller: 'onhelp',
    border: 1,
    id: 'page_online_help',
    layout: 'fit',
    title: 'Bantuan',
    initComponent: function() {
        var me = this;
        Ext.apply(me, {
            items: [{
                layout: 'border',
                items: [{
                    tbar: [{
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
                            emptyText: "Pencarian Topik ",
                            hideTrigger: true,
                            listeners: {
                                specialkey: function(field, e) {
                                    if (e.getKey() == e.ENTER) {
                                        Ext.getCmp('page_online_help').down('onhelpList').setHidden(true);
                                        cmp = Ext.getCmp("page_online_help"),
                                            grid = cmp.down("onhelpListUser");
                                        store = grid.getStore();
                                        store.clearFilter();
                                        value = field.lastValue;
                                        store.proxy.extraParams = {
                                            HELP_JUDUL: value,
                                        };
                                        store.load();
                                    }
                                }

                            }
                        }, {
                            text: 'Buat Pertanyaan',
                            handler: 'addpertanyaan',
                            glyph: 'xf067@fontAwesome'
                        },
                        '->',
                    ],
                    xtype: 'onhelpListUser',
                    region: 'west',
                    layout: 'fit',
                    width: 400,
                    autoScroll: true,
                    listeners: {
                        select: 'detail',

                    },
                }, {
                    tbar: [
                        '->', {
                            xtype: 'displayfield',
                            itemId : 'SenderName',
                            fieldStyle: "text-align:center;",
                            renderer: function(v, a, record) {
                                return '<table style="color: #8a8c91; font-size: 20px;"><td >'+ v + '</tr></table>';
                            }
                        }
                    ],
                    xtype: 'onhelpList',
                    region: 'center',
                    layout: 'fit',
                    interval: 5000,
                    flex: 4,

                    hidden: true,
                    autoScroll: true,
                    bbar: [
                        '->', {
                            labelWidth: 50,
                            xtype: 'textarea',
                            triggerAction: 'all',
                            typeAhead: true,
                            queryMode: 'remote',
                            minChars: 2,
                            itemId: 'kirim_pesan',
                            forceSelection: false,
                            width: '90%',
                            emptyText: "Ketik Pertanyaan Anda",
                            hideTrigger: true,
                            /*listeners: {
                                specialkey: 'add',
                            }*/
                        }, {
                            text: 'Kirim',
                            handler: 'add',
                            glyph: 'xf067@fontAwesome'
                        },
                    ],
                    listeners: {

                    },
                }]
            }]
        });
        me.callParent([arguments]);
    },
});