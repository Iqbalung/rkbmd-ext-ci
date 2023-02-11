Ext.define('koyoku.view.onhelp.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'onhelpList',
    requires: [
        'koyoku.store.chat.CStore'
    ],
    store: {
        type: 'store_chat',
        storeId : 'store_chat',
        autoLoad: true,
    },
    columns: [{
        dataIndex: 'CHAT_TEXT', 
        width: '100%',

        renderer : function(v, a, record){
            var v = Ext.getCmp('page_online_help').controller.getViewModel().data.USER.ID;
            if(record.data.ID==v){
                v = 'align=left';
            }else{
                v = 'align=right';
            }
            return   '<table ' + v + ' width="100%"><tr ><td  ' + v + ' style=" font-size: 12px;"> ' +   record.data.NAMA + ' | ' + record.data.CHAT_DATE +  '</td></tr><tr><td  style="color: #8a8c91; font-size: 10px;" ' + v + '><p  >' +  record.data.CHAT_TEXT + '</p></td></tr></table>';
        }
    }],    
    listeners:{
        itemdblclick:'detail',
    },
});