Ext.define('koyoku.view.master.pengguna.Main', {
    extend: 'Ext.panel.Panel',
    xtype: 'page_pengguna',
    requires: [
        'koyoku.view.master.pengguna.Controller',
        'koyoku.view.master.pengguna.List',
        'koyoku.view.master.pengguna.Form_pengguna',
        'koyoku.components.combo.Usergroup',
    ],
    controller: 'pengguna',
    border: 1,
    id: 'page_pengguna',
    layout: 'fit',
    title: 'Daftar Pengguna',
    initComponent: function() {
        var me = this;
        Ext.apply(me, {
            items: [{
                layout: 'border',
                tbar : [
                    '->',
                    {
                        labelWidth  : 50,
                        xtype: 'textfield',
                        triggerAction: 'all',
                        typeAhead: true,
                        queryMode: 'remote',
                        minChars: 2,
                        itemId: 'pencarian_pengguna',
                        forceSelection: false,
                        displayField: 'BARANG_NAMA',
                        width: 250,
                        emptyText: "Ketik Kata Kunci",
                        hideTrigger: true,
                        listeners: {
                            specialkey: function(field, e){
                                if (e.getKey() == e.ENTER) {
                                    cmp = Ext.getCmp("page_pengguna"),
                                    grid = cmp.down("penggunaList");
                                    store = grid.getStore();
                                    store.clearFilter();
                                    value = field.lastValue;
                                    store.clearFilter();
                                    store.filter('BARANG_NAMA', value, false, false);
                                    store.load();
                                }
                            }

                        }
                    },
                    {
                        text : 'Tambah',
                        handler : 'add',
                        glyph: 'xf067@fontAwesome'
                    },{
                        text : 'Ubah',
                        glyph: 'xf044@fontAwesome',
                        handler:'upd',
                    },{
                        text : 'Hapus',
                        glyph: 'xf1f8@fontAwesome',
                        handler:'delete',
                    }
                ],
                items: [{
                    xtype: 'penggunaList',
                    region: 'center',
                    layout : 'fit',
                    autoScroll:true
                }],
            }],
        });
        me.callParent([arguments]);
    },
    
    
});