Ext.define('koyoku.view.profile_pptkis.Rekruiter', {
    extend: 'Ext.panel.Panel',
    xtype: 'rekruiter',
    requires: [
        'koyoku.view.profile_pptkis.Tree_satker',
        'koyoku.view.profile_pptkis.Pegawai',
    ],
    layout: {
        type: 'hbox',
        align: 'stretch'
    },
    width: '100%',
    height: '100%',
    initComponent: function() {
        var me = this;
        Ext.apply(me, {
            tbar: ['->', {
                text: 'Tambah',
                handler: 'add_pegawai',
                glyph: 'xf067@fontAwesome'
            }, {
                bind : { text : '{language.ubah}', },
                glyph: 'xf044@fontAwesome',
                handler: 'upd_pegawai',
            }, {
                bind : { text : '{language.hapus}', },
                glyph: 'xf1f8@fontAwesome',
                handler: 'delete_pegawai',
            }],
            items: [{
                //xtype:'panel',                      
                //title:'Satuan Kerja',
                xtype: 'tree_satker',
                width: 300,
                listeners: {
                    itemclick: function(ths, record, data) {
                        var storePegawai = me.down("grid_pegawai").getStore();
                        storePegawai.proxy.extraParams = {
                            SATKER_ID: record.get("SATKER_ID")
                        };
                        storePegawai.load();
                    }
                },
                viewConfig: {
                    getRowClass: function(record, index) {
                        if (record.get("SATKER_ID")=="1.2.") {
                            return 'iconCls:refreshIconCls';
                           
                        }
                    }
                },

            }, {
                xtype: 'grid_pegawai',
                flex: 1,
            }],
        });
        me.callParent([arguments]);
    }
});