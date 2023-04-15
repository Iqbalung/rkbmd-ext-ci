Ext.define('koyoku.components.field.TreeFieldKegiatan', {
    extend: 'Ext.form.FieldContainer',
    xtype: 'kegiatantreefield',
    requires: [
        'koyoku.components.tree.Kegiatan'
    ],
    config: {
        emptyText: 'Pilih Kegiatan/Sub Kegiatan',
        fieldLabel: 'Kegiatan/Sub Kegiatan',
        params: {
            BIDANG_ID: null,
            PROGRAM_ID: null,
        },
        root_text: ''
    },
    layout: 'column',
    modal : true,    
    initComponent: function() {
        var me = this;
        modal : true,
        Ext.apply(me, {
            items: [{
                xtype: 'hidden',
                name: 'KEGIATAN_ID'
            }, {
                xtype: 'hidden',
                name: 'SUB_KEGIATAN_ID'
            }, {
                xtype: 'textfield',
                name: 'KEGIATAN_NAMA',
                padding: '2 5 5 0',
                columnWidth: 0.6,
            },{
                xtype: 'button',
                tooltips: 'Pilih',
                padding: '5 0 5 0',
                width: 50,
                glyph: 'xf00e@fontAwesome',
                handler: function() {
                    Ext.create('Ext.Window', {
                        id: 'window_kegiatan',
                        modal: true,
                        items: [Ext.create('koyoku.components.tree.Kegiatan', {
                            params: me.params,
                            root_text: me.root_text,
                            height : 450,
                            width : 400,
                            modal : true,
                            bbar: [
                                '->', {
                                    text: 'Pilih',
                                    handler: function(){
                                        var win = Ext.getCmp('window_kegiatan');
                                        var rec = win.down('tree_kegiatan').getSelectionModel().getSelection();
                                        if(rec.length>0){
                                            var rowData = rec[0].data;
                                            if (rowData.TIPE == "SUB") {                                                
                                                me.down('[name=SUB_KEGIATAN_ID]').setValue(rec[0].data.KEGIATAN_ID);
                                                me.down('[name=SUB_KEGIATAN_NAMA]').setValue(rec[0].data.KEGIATAN_NAMA);
                                                me.down('[name=KEGIATAN_ID]').setValue(rec[0].data.PARENT_KEGIATAN_ID);
                                                me.down('[name=KEGIATAN_NAMA]').setValue(rec[0].data.PARENT_KEGIATAN_NAMA);
                                            } else {
                                                me.down('[name=KEGIATAN_ID]').setValue(rec[0].data.KEGIATAN_ID);
                                                me.down('[name=KEGIATAN_NAMA]').setValue(rec[0].data.KEGIATAN_NAMA);
                                            }
                                            win.destroy();
                                        }else{
                                            Ext.Msg.alert('Informasi', 'Pilih data terlebih dahulu.');
                                        }
                                    }
                                }
                            ]
                        })]
                    });

                    var str = Ext.getCmp('window_kegiatan').down("tree_kegiatan").getStore();
                    str.getRootNode().data.KEGIATAN_NAMA = me.root_text;
                    Ext.getCmp('window_kegiatan').show();
                },
            }, {
                xtype: 'textfield',
                padding: '5 0 5 0',
                name: 'SUB_KEGIATAN_NAMA',
                columnWidth: 0.6,
            }]
        });
        me.callParent([arguments]);
    },
});