Ext.define('koyoku.view.master.kompetensi.OutputList', {
    extend: 'Ext.grid.Panel',
    xtype: 'outputSubKegiatanList',
    selectionModel: 'spreadsheet',

    requires: [
        'koyoku.store.OutputSubKegiatan'
    ],
    store: {
        type: 'subOutputSubKegiatan',
        storeId : 'subOutputSubKegiatan',
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
                dataIndex: 'OUTPUT_NAMA',
                flex : 2,
                editor: 'textfield', 
            }],
            plugins: [{
            ptype: 'rowediting',
            clicksToEdit: 0,
            listeners: {  
                edit: 'outputredit'
            }
    }],     
    });
         me.callParent([arguments]);
         
    },
    edit(editor, context, eOpts){
    }
    
});

