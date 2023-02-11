Ext.define('koyoku.view.master.partner.Main', {
    extend: 'Ext.panel.Panel',
    xtype: 'page_partner',
    requires: [
        'koyoku.view.master.partner.Controller',
        'koyoku.view.master.partner.List',
        'koyoku.view.master.partner.Form_partner',
      
    ],
    controller: 'partner',
    border: 1,
    id: 'page_partner',
    layout: 'fit',
    title: 'Daftar Parnter',
    initComponent: function() {
        var me = this;
        me.form = Ext.create('koyoku.view.master.partner.Form_partner');
        Ext.apply(me, {
            items: [{
                layout: 'border',
                tbar : [
                    '->',
                    {
                        text : 'Tambah',
                        handler : 'add',
                        glyph: 'xf067@fontAwesome'
                    },{
                        text : 'Ubah',
                        glyph: 'xf02f@fontAwesome',
                        handler:'cetakList',
                    }
                ],
                items: [{
                    xtype: 'partnerList',
                    region: 'center',
                    layout : 'fit',
                    autoScroll:true

                }]
            }]
        });
        me.callParent([arguments]);
    },
    
});