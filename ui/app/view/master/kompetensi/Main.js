
Ext.define('koyoku.view.master.kompetensi.Main', {
    extend: 'Ext.panel.Panel',
    xtype: 'page_kompetensi',
     requires: [
        'koyoku.view.master.kompetensi.Controller',
        'koyoku.view.master.kompetensi.List',
        'koyoku.view.master.kompetensi.SubList',
        'koyoku.view.master.kompetensi.OutputList',
        'koyoku.view.master.bidang.Tree_bidang',
        'koyoku.view.master.kompetensi.Window_bidang',
    ],
    controller: 'kompetensi',
    border: 1,
    id: 'page_kompetensi',
    layout: 'card',
    title: 'Kamus Kegiatan',
    height: '100%',
    isDetail:false,
    initComponent: function() {
        var me = this;
        me.window = Ext.create('koyoku.view.master.kompetensi.Window_bidang');
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
                        itemId: 'pencarian_kompetensi',
                        forceSelection: false,
                        displayField: 'KOMPETENSI_NAMA',
                        width: 250,
                        emptyText: "Ketik Kata Kunci",
                        hideTrigger: true,
                        listeners: {
                            specialkey: function(field, e){
                                if (e.getKey() == e.ENTER) {
                                    cmp = Ext.getCmp("page_kompetensi"),
                                    grid = cmp.down("kompetensiList");
                                    store = grid.getStore();
                                    store.clearFilter();
                                    value = field.lastValue;
                                    store.clearFilter();
                                    store.filter('KOMPETENSI_NAMA', value, false, false);
                                    store.load();
                                }
                            }

                        }
                    },
                    {
                        cls: 'btn-round-small btn-tambah',
                        glyph: 'xf067@fontAwesome',
                        handler : 'onTambahKegiatan'
                    },{
                        cls: 'btn-round-small btn-edit',
                        glyph: 'xf044@fontAwesome',
                        handler:'onUbahKegiatan',
                    },{
                        cls: 'btn-round-small btn-hapus',
                        glyph: 'xf1f8@fontAwesome',
                        handler:'onHapusKegiatan'
                    }

                ],
                items: [{
                    title: 'BIDANG',
                    collapsible : true,
                    xtype: 'tree_bidang',
                    resizable :true,
                    region: 'west',
                    width: 300,
                    listeners : {
                        select : function(){
                            me.pencarian();
                        }
                    }
                }, {
                    xtype: 'panel',
                    region: 'center',
                    layout:'vbox',
                    items:[{
                        title: 'Kegiatan',
                        width: '100%',
                        flex:1,
                        xtype: 'kompetensiList',
                    }, {
                        title: 'Sub Kegiatan',
                        width: '100%',
                        flex:1,
                        xtype: 'subkompetensiList',
                        tbar : [
                            '->',
                            {
                                labelWidth  : 50,
                                xtype: 'textfield',
                                triggerAction: 'all',
                                typeAhead: true,
                                queryMode: 'remote',
                                minChars: 2,
                                itemId: 'pencarian_subkompetensi',
                                forceSelection: false,
                                displayField: 'SUB_KEGIATAN_NAMA',
                                width: 250,
                                emptyText: "Ketik Kata Kunci",
                                hideTrigger: true,
                                listeners: {
                                    specialkey: function(field, e){
                                        if (e.getKey() == e.ENTER) {
                                            cmp = Ext.getCmp("page_kompetensi"),
                                            grid = cmp.down("subkompetensiList");
                                            store = grid.getStore();
                                            store.clearFilter();
                                            value = field.lastValue;
                                            store.clearFilter();
                                            store.filter('SUB_KEGIATAN_NAMA', value, false, false);
                                            store.load();
                                        }
                                    }
        
                                }
                            },
                            {
                                cls: 'btn-round-small btn-tambah',
                                handler : 'onTambahSub',
                                glyph: 'xf067@fontAwesome'
                            }, {
                                cls: 'btn-round-small btn-hapus',
                                handler:'delete_sub',
                                glyph: 'xf1f8@fontAwesome'
                            }
        
                        ]                       
                    }, {
                        title: 'Output',
                        width: '100%',
                        flex:1,
                        xtype: 'outputSubKegiatanList',
                        tbar : [
                            '->',
                            {
                                labelWidth  : 50,
                                xtype: 'textfield',
                                triggerAction: 'all',
                                typeAhead: true,
                                queryMode: 'remote',
                                minChars: 2,
                                itemId: 'pencarian_output',
                                forceSelection: false,
                                displayField: 'SUB_KEGIATAN_OUTPUT',
                                width: 250,
                                emptyText: "Ketik Kata Kunci",
                                hideTrigger: true,
                                listeners: {
                                    specialkey: function(field, e){
                                        if (e.getKey() == e.ENTER) {
                                            cmp = Ext.getCmp("page_kompetensi"),
                                            grid = cmp.down("outputSubKegiatanList");
                                            store = grid.getStore();
                                            store.clearFilter();
                                            value = field.lastValue;
                                            store.clearFilter();
                                            store.filter('SUB_KEGIATAN_OUTPUT', value, false, false);
                                            store.load();
                                        }
                                    }
        
                                }
                            },
                            {
                                cls: 'btn-round-small btn-tambah',
                                handler : 'onTambahOutput',
                                glyph: 'xf067@fontAwesome'
                            },
                            {
                                cls: 'btn-round-small btn-edit',
                                handler : 'onUbahOutput',
                                glyph: 'xf044@fontAwesome'
                            },
                            {
                                cls: 'btn-round-small btn-hapus',
                                handler:'onDeleteOutput',
                                glyph: 'xf1f8@fontAwesome'
                            }
        
                        ],                            
                    }]
                }]
            }]
        });
        me.callParent([arguments]);
    },
    pencarian:function(){        
        var me = this, 
            gridSatker = me.down("tree_bidang"),
            wilayahSelected = gridSatker.getSelectionModel().getSelection(),                  
            gridList = me.down("kompetensiList"),            
            storeList = gridList.getStore(); 
            if (wilayahSelected.length > 0) {
                var satkerData = wilayahSelected[0];
                storeList.proxy.extraParams.BIDANG_ID = satkerData.get("BIDANG_ID");
            }
            storeList.load();
    },

   
});