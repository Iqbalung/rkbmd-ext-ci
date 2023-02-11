Ext.define('koyoku.view.master.jobowner.Main', {
    extend: 'Ext.panel.Panel',
    xtype: 'page_jobowner',
    requires: [
        'koyoku.view.master.jobowner.Controller',
        'koyoku.view.master.jobowner.List',
        'koyoku.view.master.jobowner.Form_jobowner',
        'koyoku.view.master.jobowner.Window_wilayah',
        'koyoku.view.master.wilayah.Tree_wilayah',
    ],
    controller: 'jobowner',
    border: 1,
    id: 'page_jobowner',
    layout: 'fit',
    title: 'Daftar Job Owner',
    initComponent: function() {
        var me = this;
        me.form = Ext.create('koyoku.view.master.jobowner.Form_jobowner');
        Ext.apply(me, {
                tbar : [
                    '->',
                    {
                        labelWidth  : 50,
                        xtype: 'textfield',
                        triggerAction: 'all',
                        typeAhead: true,
                        queryMode: 'remote',
                        minChars: 2,
                        itemId: 'pencarian_owner',
                        forceSelection: false,
                        displayField: 'OWNER_NAMA',
                        width: 250,
                        emptyText: "Ketik Kata Kunci",
                        hideTrigger: true,
                        listeners: {
                            specialkey: function(field, e){
                                if (e.getKey() == e.ENTER) {
                                    cmp = Ext.getCmp("page_jobowner"),
                                    grid = cmp.down("jobownerList");
                                    store = grid.getStore();
                                    store.clearFilter();
                                    value = field.lastValue;
                                    store.clearFilter();
                                    store.filter('OWNER_NAMA', value, false, false);
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
                        glyph: 'xf067@fontAwesome',
                        handler:'delete',
                    }
                ],
                items: [{
                    xtype: 'jobownerList',
                    region: 'center',
                    width: '75%',
                    height : '100%',
                    autoScroll:true

                }]
        });
        me.callParent([arguments]);
    },
    
});