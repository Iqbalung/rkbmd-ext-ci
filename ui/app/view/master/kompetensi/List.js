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
        itemdblclick: function(field, e){
            cmp = Ext.getCmp("page_kompetensi"),
            grid = cmp.down("kompetensiList");
            store = grid.getStore();
            
            selected = grid.getSelectionModel().getSelection();

            console.log("selected",selected[0].data);

            value = field.lastValue;
            grid = cmp.down("subkompetensiList");
            storeList = grid.getStore();

            storeList.proxy.extraParams =  selected[0].data; 
            storeList.load();
            
        },
    }
    
});

