Ext.define('koyoku.view.lihat_pptkis.Tabs', {
    extend: 'Ext.TabPanel',
    alias: 'widget.form_tabs',
    xtype: 'tab_pptkis_detail',   
    layout:'fit',
    items: [{
        itemId : 'tab1',
        layout:'fit',
        bind : { title : '{language.profil}', },     
        items: [{
            xtype : 'identitas_detail',      
            //autoScroll:true,
            listeners:{
                afterrender:'load_profile',
            }      
        }]
    }, {
        bind : { title : '{language.kantor}', },
        xtype:'satuan_kerja_detail',                
    },{
        bind : { title : '{language.rekruiter}', },
        anchor: '100% 100%',
        xtype:'rekruiter_detail',                 
    }]

});