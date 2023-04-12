Ext.define('koyoku.view.master.program.Main', {
    extend: 'Ext.panel.Panel',
    xtype: 'page_program',
    requires: [
        'koyoku.view.master.program.Controller',
        'koyoku.view.master.program.List',
        'koyoku.view.master.program.Form',
        'koyoku.view.master.bidang.Tree_bidang',
    ],
    controller: 'program',
    border: 1,
    id: 'page_program',
    layout: 'fit',
    title: 'Daftar Program',
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
                        itemId: 'pencarian_program',
                        forceSelection: false,
                        displayField: 'PROGRAM_NAMA',
                        width: 250,
                        emptyText: "Ketik Kata Kunci",
                        hideTrigger: true,
                        listeners: {
                            specialkey: function(field, e){
                                if (e.getKey() == e.ENTER) {
                                    cmp = Ext.getCmp("page_program"),
                                    grid = cmp.down("programList");
                                    store = grid.getStore();
                                    store.clearFilter();
                                    value = field.lastValue;
                                    store.clearFilter();
                                    store.filter('PROGRAM_NAMA', value, false, false);
                                    store.load();
                                }
                            }

                        }
                    },
                    {
                        cls: 'btn-round btn-tambah',
                        handler : 'add',
                        glyph: 'xf067@fontAwesome'
                    },{
                        cls: 'btn-round btn-edit',
                        glyph: 'xf044@fontAwesome',
                        handler:'upd',
                    },{
                        cls: 'btn-round btn-hapus',
                        glyph: 'xf1f8@fontAwesome',
                        handler:'delete',
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
                    xtype: 'programList',
                    region: 'center',
                    layout : 'fit',
                    autoScroll:true
                },],
            }],
        });
        me.callParent([arguments]);
    },
     pencarian:function(){        
        var me = this, 
            gridSatker = me.down("tree_bidang"),
            bidangSelected = gridSatker.getSelectionModel().getSelection(),                  
            gridList = me.down("programList"),            
            storeList = gridList.getStore(); 
            if (bidangSelected.length > 0) {
                var satkerData = bidangSelected[0];
                storeList.proxy.extraParams.BIDANG_ID = satkerData.get("BIDANG_ID");
            }
            storeList.load();
    }, 
    
});