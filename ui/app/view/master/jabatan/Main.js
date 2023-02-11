Ext.define('koyoku.view.master.jabatan.Main', {
    extend: 'Ext.panel.Panel',
    xtype: 'page_jabatan',
    requires: [
        'koyoku.view.master.jabatan.Controller',
        'koyoku.view.master.jabatan.List',
        'koyoku.view.master.jabatan.ListAlat',
        'koyoku.view.master.jabatan.ListLingkungan',
        'koyoku.view.master.jabatan.Form_jabatan',
        'koyoku.view.master.bidang.Tree_bidang',
        'koyoku.view.master.bidang.Window_bidang',
        'koyoku.view.master.jabatan.Tabs',
    ],
    controller: 'jabatan',
    border: 1,
    id: 'page_jabatan',
    layout: 'card',
    title: 'Kamus Jabatan',
    height: '100%',
    autoScroll: true,
    isDetail: false,
    initComponent: function() {
        var me = this;
        me.window = Ext.create('koyoku.view.master.bidang.Window_bidang');
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
                        itemId: 'pencarian_jabatan',
                        forceSelection: false,
                        displayField: 'JABATAN_NAMA',
                        width: 250,
                        emptyText: "Ketik Kata Kunci",
                        hideTrigger: true,
                        listeners: {
                            specialkey: function(field, e) {
                                if (e.getKey() == e.ENTER) {
                                    cmp = Ext.getCmp("page_jabatan"),
                                    grid = cmp.down("jabatanList");
                                    store = grid.getStore();
                                    store.clearFilter();
                                    value = field.lastValue;
                                    store.clearFilter();
                                    store.filter('JABATAN_NAMA', value, false, false);
                                    store.load();
                                }
                            }

                        }
                    }, {
                        bind : { text : '{language.tambah}', },
                        handler: 'add',
                        glyph: 'xf067@fontAwesome'
                    }, {
                        bind : { text : '{language.ubah}', },
                        handler: 'upd',
                        glyph: 'xf044@fontAwesome'
                    }, {
                        bind : { text : '{language.hapus}', },
                        handler: 'delete',
                        glyph: 'xf1f8@fontAwesome'
                    }

                ],
                items: [{
                    title: 'BIDANG',
                    collapsible: true,
                    collapsed: true,
                    xtype: 'tree_bidang',
                    resizable: true,
                    region: 'west',
                    width: 300,
                    listeners: {
                        select: function() {
                            me.pencarian();
                        }
                    }
                }, {
                    xtype: 'jabatanList',
                    region: 'center'
                }]
            }, {
                xtype: 'main_form_jabatan',
                tbar: [
                    '->', {
                        bind : { text : '{language.kembali}', },
                        handler: 'kembali',
                        glyph: 'xf060@fontAwesome'
                    }, {
                        bind : { text : '{language.simpan}', },
                        itemId: 'btnSimpan',
                        hidden: me.isDetail,
                        handler: 'save',
                        glyph: 'xf0c7@fontAwesome'
                    }
                ],
            }]
        });
        me.callParent([arguments]);
    },
    pencarian: function() {
        var me = this,
            gridSatker = me.down("tree_bidang"),
            wilayahSelected = gridSatker.getSelectionModel().getSelection(),
            gridList = me.down("jabatanList"),
            storeList = gridList.getStore();
            
        if (wilayahSelected.length > 0) {
            var satkerData = wilayahSelected[0];
            storeList.proxy.extraParams.BIDANG_ID = satkerData.get("BIDANG_ID");
        }
        storeList.load();
    }
});
