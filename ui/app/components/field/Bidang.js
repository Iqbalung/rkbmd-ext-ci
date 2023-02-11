Ext.define('koyoku.components.field.Bidang', {
    extend: 'Ext.form.FieldContainer',
    xtype: 'bidangfield',
    requires: [
        'koyoku.view.master.bidang.Tree_bidang'
    ],
    emptyText: 'Pilih Lokasi',
    fieldLabel: 'Bidang',
    layout: 'column',
    modal : true,
    initComponent: function() {
        var me = this;
        modal : true,
        Ext.apply(me, {
            items: [{
                xtype: 'hidden',
                name: 'BIDANG_ID'
            }, {
                xtype: 'textfield',
                name: 'BIDANG_NAMA',
                columnWidth: 0.7,
            }, {
                xtype: 'textfield',
                name: 'BIDANG_PEJABAT',
                columnWidth: 0.7,
            }, {
                xtype: 'textfield',
                name: 'BIDANG_PEJABAT_NRP',
                columnWidth: 0.7,
            }, {
                xtype: 'textarea',
                name: 'BIDANG_ALAMAT',
                columnWidth: 0.7,
            }, {
                xtype: 'button',
                tooltips: 'Pilih',
                glyph: 'xf00e@fontAwesome',
                handler: function() {
                    Ext.create('Ext.Window', {
                        id: 'window_bidang',
                        modal: true,
                        items: [Ext.create('koyoku.view.master.bidang.Tree_bidang', {
                            height : 450,
                            width : 400,
                            modal : true,
                            bbar: [
                                '->', {
                                    text: 'Pilih',
                                    handler: function(){
                                        var win = Ext.getCmp('window_bidang');
                                        var rec = win.down('tree_bidang').getSelectionModel().getSelection();
                                        if(rec.length>0){
                                            me.down('[name=BIDANG_ID]').setValue(rec[0].data.BIDANG_ID);
                                            me.down('[name=BIDANG_NAMA]').setValue(rec[0].data.BIDANG_NAMA);
                                            win.destroy();
                                        }else{
                                            Ext.Msg.alert('Informasi', 'Pilih data terlebih dahulu.');
                                        }
                                    }
                                }
                            ]
                        })]
                    });

                    Ext.getCmp('window_bidang').show();
                },
            }]
        });
        me.callParent([arguments]);
    },
});