Ext.define('koyoku.view.lihat_pptkis.Rekruiter', {
    extend: 'Ext.panel.Panel',
    xtype:'rekruiter_detail',
    requires:[
        'koyoku.view.lihat_pptkis.Tree_satker',
        'koyoku.view.lihat_pptkis.Pegawai',
    ],    
    layout: {
        type: 'hbox',
        align: 'stretch'
    },
    width:'100%',    
    height:'100%',
    initComponent: function() {
        var me = this;        
        Ext.apply(me, {            
            items: [{
                //xtype:'panel',                      
                //title:'Satuan Kerja',
                xtype: 'tree_satker_detail',                
                width:300,
                listeners:{
                    itemclick:function(ths,record,data) {
                        var storePegawai = me.down("grid_pegawai_detail").getStore();
                        storePegawai.proxy.extraParams = {
                            SATKER_ID:record.get("SATKER_ID")
                        };
                        storePegawai.load();
                    }
                }
            }, {
                xtype: 'grid_pegawai_detail',               
                flex:1,
            }]        
        });
        me.callParent([arguments]);
    }
});