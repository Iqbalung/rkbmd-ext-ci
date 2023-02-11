Ext.define('koyoku.view.master.wilayah.Main',{
	extend: 'Ext.panel.Panel',
    xtype: 'page_wilayah',
    requires: [
        'koyoku.view.master.wilayah.Controller',
        'koyoku.view.master.wilayah.Tree_wilayah',
    ],
    controller: 'wilayah',
    border: 1,
    id: 'page_wilayah',
    title: 'Master Wilayah',
    layout: 'fit',
    initComponent: function() {
        var me = this;
        me.windowForm = Ext.create('koyoku.view.master.wilayah.Form_wilayah');
        Ext.apply(me, {
            items: [{
                xtype: 'tree_wilayah',
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