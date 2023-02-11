Ext.define('koyoku.view.onhelp.ListUser', {
    extend: 'Ext.grid.Panel',
    xtype: 'onhelpListUser',
    requires: [
        'koyoku.store.chat.JStore'
    ],
    store: {
        type: 'store_judul',
        storeId : 'store_judul',
        autoLoad: true,
    },
    columns: [{
        dataIndex: 'HELP_JUDUL',
        flex : 1,
        renderer : function(v, a, record){
            return   '<span style="color: #8a8c91; font-size: 10px;">' +  record.data.NAMA + ' | ' + record.data.HELP_DATE +  '</span><br>' + record.data.HELP_JUDUL;
        }
    }],
    
});