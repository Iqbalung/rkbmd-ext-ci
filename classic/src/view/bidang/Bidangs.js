Ext.define('Admin.view.bidang.Bidangs', {
    extend: 'Ext.panel.Panel',
    xtype: 'bidangs',
    requires: [
        'Admin.view.bidang.BidangsController',
        'Admin.view.bidang.Tree_bidang',
        'Admin.store.Bidangs',
        'Admin.view.bidang.Form_bidang',
    ],
    controller: 'bidangs',
    viewModel: {
        type: 'bidangs'
    },
    id: 'bidangs',
    border: 1,
    title: 'Kamus Bidang',
    layout: 'fit',
    initComponent: function() {
        var me = this;
        me.windowForm = Ext.create('Admin.view.master.bidang.Form_bidang');
    
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
                        bind : 'Ubah',
                        handler: 'upd',
                        glyph: 'xf044@fontAwesome'
                    }, {
                        bind : 'Hapus',
                        handler: 'delete',
                        glyph: 'xf1f8@fontAwesome'
                    }
                ],
            }]
        });
        me.callParent([arguments]);
    }
});
