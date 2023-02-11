Ext.define('koyoku.view.profile_pptkis.Tabs', {
    extend: 'Ext.TabPanel',
    alias: 'widget.form_tabs',
    xtype: 'tab_pptkis',   
    layout:'fit',
    items: [{
        itemId : 'tab1',
        layout:'fit',
        title: 'Profile',        
        items: [{
            xtype : 'identitas',      
            //autoScroll:true,
            listeners:{
                afterrender:'load_profile',
            }      
        }]
    }, {
        title: 'Kantor',
        xtype:'satuan_kerja',                
    },{
        title: 'Recruiter',
        anchor: '100% 100%',
        xtype:'rekruiter',                 
    }]

});