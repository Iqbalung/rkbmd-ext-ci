Ext.define('koyoku.view.master.kompetensi.SubList', {
    extend: 'Ext.grid.Panel',
    xtype: 'subkompetensiList',
    selectionModel: 'spreadsheet',

    requires: [
        'koyoku.store.SubKompetensi'
    ],
    store: {
        type: 'sublistKompetensi',
        storeId : 'sublistKompetensi',
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
                dataIndex: 'SUB_KEGIATAN_NAMA',
                flex : 2,
                editor: 'textfield', 
            },{
                editor: {
                    xtype: 'checkbox',
                    cls: 'x-grid-checkheader-editor',
                    inputValue: 1,
                    uncheckedValue: 0
                },
                text: 'Active',
                hidden: true,
                dataIndex: 'active',
                renderer: function(value, metadata, record, rowIndex, colIndex, store) {
                    var tempVal = '',
                        me = this;
                    if (value === 1) {
                        tempVal = 'checked';
                    }
                    return "<input name=" + record.get('id') + "_" + record.get('id') + " type='checkbox'" + tempVal + ">";
                }
            }],
            // plugins: [{
            //     ptype: 'rowediting',
            //     clicksToEdit: 0,
            //     listeners: {  
            //         edit: 'subredit'                
            //     }
            // }],     
            listeners:{
                itemclick: function(field, e){                    
                    cmp = Ext.getCmp("page_kompetensi"),
                    grid = cmp.down("subkompetensiList");
                    store = grid.getStore();
                    
                    selected = grid.getSelectionModel().getSelection();                    

                    value = field.lastValue;
                    grid = cmp.down("outputSubKegiatanList");
                    storeList = grid.getStore();

                    storeList.proxy.extraParams =  selected[0].data; 
                    storeList.load();
                    
                },
            }
    });
         me.callParent([arguments]);
         
    },
    edit(editor, context, eOpts){
    }
    
});

