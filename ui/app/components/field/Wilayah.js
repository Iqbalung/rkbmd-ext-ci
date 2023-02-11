Ext.define('koyoku.components.field.Wilayah', {
    extend: 'Ext.form.FieldContainer',
    xtype: 'wilayahfield',
    requires: [
        'koyoku.view.master.wilayah.Tree_wilayah'
    ],
    config: {
        name:'WILAYAH',        
    },
    emptyText: 'Pilih Lokasi',
    fieldLabel: 'Wilayah',
    layout: 'column',
    modal: true,
    initComponent: function(config) {
        var me = this;
        this.name = me.name;        
        this.initConfig(config);        
        this.items = [{
                xtype: 'hidden',
                name: me.name+'_ID'
            }, {
                xtype: 'textfield',
                name: me.name+'_NAMA',
                columnWidth: 0.7,
            }, {
                xtype: 'button',
                tooltips: 'Pilih',
                glyph: 'xf00e@fontAwesome',
                handler: function() {
                    Ext.create('Ext.Window', {
                        id: 'window_wilayah',
                        items: [Ext.create('koyoku.view.master.wilayah.Tree_wilayah', {
                            height : 450,
                            width : 400,
                            modal : true,
                            title : 'Pilih Wilayah',
                            bbar: [
                                '->', {
                                    text: 'Pilih',
                                    handler: function(){
                                        var win = Ext.getCmp('window_wilayah');
                                        var rec = win.down('tree_wilayah').getSelectionModel().getSelection();
                                        if(rec.length>0){
                                            me.down('[name='+me.name+'_ID]').setValue(rec[0].data.WILAYAH_ID);
                                            me.down('[name='+me.name+'_NAMA]').setValue(rec[0].data.WILAYAH_NAMA);
                                            win.destroy();
                                        }else{
                                            Ext.Msg.alert('Informasi', 'Pilih data terlebih dahulu.');
                                        }
                                    }
                                }
                            ]
                        })]
                    });

                    Ext.getCmp('window_wilayah').show();
                },
            }];
        this.callParent([arguments]);
    }    
});