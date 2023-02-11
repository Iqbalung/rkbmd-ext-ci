Ext.define('koyoku.view.master.bidang.Main',{
	extend: 'Ext.panel.Panel',
    xtype: 'page_bidang',
    requires: [
        'koyoku.view.master.bidang.Controller',
        'koyoku.view.master.bidang.Tree_bidang',
        'koyoku.store.Bidang',
        'koyoku.view.master.bidang.Form_bidang',
    ],
    controller: 'bidang',
    border: 1,
    id: 'page_bidang',
    title: 'Kamus Bidang',
    layout: 'fit',
    initComponent: function() {
        var me = this;
        me.windowForm = Ext.create('koyoku.view.master.bidang.Form_bidang');
    
        Ext.apply(me, {
            items: [{
                xtype: 'tree_bidang',
                allowDeselect: true,
                tbar: [
                    '->',{
                        text: 'Tambah',
                        handler: 'add',
                        glyph: 'xf067@fontAwesome'
                    }, {
                        bind : { text : '{language.ubah}', },
                        handler: 'upd',
                        glyph: 'xf044@fontAwesome'
                    }, {
                        bind : { text : '{language.hapus}', },
                        handler: 'delete',
                        glyph: 'xf1f8@fontAwesome'
                    }
                ],
            }]
        });
        me.callParent([arguments]);
    }
});