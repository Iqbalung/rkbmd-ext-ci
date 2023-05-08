Ext.define('koyoku.view.master.kompetensi.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'kompetensiList',
    selectionModel: 'spreadsheet',

    requires: [
        'koyoku.store.Kompetensi'
    ],
    store: {
        type: 'listKompetensi',
        storeId : 'listKompetensi',
        autoLoad: true,
    },
    initComponent: function() {
        var me = this;
        Ext.apply(me, {
            columns: [{
                text: 'No',
                xtype : 'rownumberer',
                width : 60,
            },{
                text: 'Nama',
                dataIndex: 'KEGIATAN_NAMA',
                flex : 2,
                editor: 'textfield', 
            }],
            plugins: [],     
    });
         me.callParent([arguments]);
         
    },
    listeners:{
        itemclick: function(field, e){
            var cmp = Ext.getCmp("page_kompetensi"),
            grid = cmp.down("kompetensiList");
            gridOutput = cmp.down("outputSubKegiatanList"),
            store = grid.getStore();
            
            var selected = grid.getSelectionModel().getSelection();            
            
            var grid = cmp.down("subkompetensiList"),
                storeList = grid.getStore();

            storeList.proxy.extraParams =  selected[0].data; 
            storeList.load();

            gridOutput.getStore().proxy.extraParams = {};
            gridOutput.getStore().load()
            
        },
    }
    
});

