
Ext.define('koyoku.view.master.kompetensi.Main', {
    extend: 'Ext.panel.Panel',
    xtype: 'page_kompetensi',
     requires: [
        'koyoku.view.master.kompetensi.Controller',
        'koyoku.view.master.kompetensi.List',
        'koyoku.view.master.kompetensi.SubList',
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
                        text : 'Tambah',
                        handler : 'add',
                        glyph: 'xf067@fontAwesome'
                    },{
                        text : 'Ubah',
                        glyph: 'xf044@fontAwesome',
                        handler:'upd',
                    },{
                        text : 'Hapus',
                        handler:'delete',
                        glyph: 'xf1f8@fontAwesome'
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
                    items:[{
                        title: 'Kegiatan',
                        xtype: 'kompetensiList',
                    },
                    
                    {
                        xtype:'panel',
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
                                text : 'Tambah',
                                handler : 'onTambahSub',
                                glyph: 'xf067@fontAwesome'
                            },{
                                text : 'Hapus',
                                handler:'delete_sub',
                                glyph: 'xf1f8@fontAwesome'
                            }
        
                        ],
                        items: [{
                            title: 'Sub Kegiatan',
                            xtype: 'subkompetensiList',
                        }]
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