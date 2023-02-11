Ext.define('koyoku.components.field.Wilayah_multi', {
    extend: 'Ext.form.FieldContainer',
    xtype: 'wilayahfieldmulti',
    requires: [
        'koyoku.view.master.wilayah.Tree_wilayah_multi'
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
                name: me.name+'_ID_MULTI'
            }, {
                xtype: 'textfield',
                name: me.name+'_NAMA_MULTI',
                columnWidth: 0.7,
            }, {
                xtype: 'button',
                tooltips: 'Pilih',
                glyph: 'xf00e@fontAwesome',
                handler: function() {
                    Ext.create('Ext.Window', {
                        id: 'window_wilayah_multi',
                        items: [Ext.create('koyoku.view.master.wilayah.Tree_wilayah_multi', {
                            height : 450,
                            width : 400,
                            modal : true,
                            title : 'Pilih Wilayah',
                            bbar: [
                                '->', {
                                    text: 'Pilih',
                                    handler: function(node){
                                        var win = Ext.getCmp('window_wilayah_multi');
                                        var wilayah = [];
                                        var wilayahid = [];
                                        var rec = win.down('tree_wilayah_multi').getSelectionModel().getSelection();
                                        rec.forEach(function(item){
                                                wilayah.push(item.data.WILAYAH_NAMA);
                                                wilayahid.push(item.data.WILAYAH_ID);

                                            });
                                        var wilayah = wilayah.join();
                                        console.log(wilayah);


                                        if(rec.length>0 && rec.length<4){
                                            me.down('[name='+me.name+'_ID_MULTI]').setValue(wilayahid);
                                            me.down('[name='+me.name+'_NAMA_MULTI]').setValue(wilayah);
                                            win.destroy();
                                        }else if(rec.length >3 ){
                                            Ext.Msg.alert('Peringatan', 'Maksimal Memilih 3 Lokasi Negara');
                                        }else{
                                            Ext.Msg.alert('Informasi', 'Pilih data terlebih dahulu ');
                                        }
                                    }
                                }
                            ]
                        })]
                    });

                    Ext.getCmp('window_wilayah_multi').show();
                },
            }];
        this.callParent([arguments]);
    }    
});