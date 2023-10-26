Ext.define('koyoku.view.tki.pemeliharaan.FormTelaah', {
    extend: 'Ext.Window',
    alias: 'widget.form_telaah_pemeliharaan',
    id: 'form_telaah_pemeliharaan',
    controller: 'tki',
    layout: 'form',
    padding: 10,
    modal: true,
    width: 580,
    closeAction: 'destroy',
    title: 'Telaah',
    initComponent: function() {
		var me = this;
		Ext.apply(me, {
                items: [{
                    xtype: 'form',
                    defaults:{
                        labelWidth: 150,
                    },
                    items: [{
                            xtype: 'hiddenfield',                            
                            name: 'PEMELIHARAAN_ID',
                    }, 
                    {
                            xtype: 'hiddenfield',                            
                            name: 'BARANG_PEMELIHARAAN_ID',
                    }, 
                    {
                        fieldLabel: 'OPD',
                        xtype: 'textfield',
                        readOnly: true,
                        width: '95%',
                        name: 'BIDANG_NAMA'            
                    },
                    {
                        fieldLabel: 'PROGRAM',
                        xtype: 'textfield',
                        readOnly: true,
                        width: '95%',
                        name: 'PROGRAM_NAMA'            
                    },
                    {
                        fieldLabel: 'KEGIATAN',
                        xtype: 'textfield',
                        readOnly: true,
                        width: '95%',
                        name: 'KEGIATAN_NAMA'            
                    },
                    {
                        fieldLabel: 'SUB KEGIATAN',
                        xtype: 'textfield',
                        readOnly: true,
                        width: '95%',
                        name: 'SUB_KEGIATAN_NAMA'            
                    },                 
                    {
                        fieldLabel: 'NAMA BARANG',
                        xtype: 'textfield',
                        readOnly: true,
                        width: '95%',
                        name: 'BARANG_NAMA'            
                    }, 
                    {
                        fieldLabel: 'KODE BARANG',
                        xtype: 'textfield',
                        readOnly: true,
                        width: '95%',
                        name: 'BARANG_KODE'            
                    }, 
                     {                        
                        xtype:'fieldset',
                        width: '80%',
                        title: 'USULAN',                                                                        
                        items :[{
                            fieldLabel: 'JUMLAH',
                            xtype: 'numberfield',
                            readOnly: true,
                            width: '60%',
                            name: 'USULAN_JUMLAH'   
                        }, {
                            fieldLabel: 'SATUAN',
                            xtype: 'textfield',                            
                            readOnly: true,
                            width: '60%',
                            name: 'USULAN_SATUAN'   
                        }]
                    },
                    {                        
                        xtype:'fieldset',
                        width: '80%',
                        title: 'RENCANA KEBUTUHAN PEMELIHARAAN YANG DISETUJUI',                                                                        
                        items :[{
                            fieldLabel: 'NAMA PEMELIHARAAN',
                            xtype: 'textfield',                            
                            width: '95%',
                            labelWidth: 160,
                            name: 'PEMELIHARAAN_NAMA'   
                        },{
                            fieldLabel: 'JUMLAH',
                            xtype: 'numberfield',                            
                            width: '60%',
                            labelWidth: 160,
                            name: 'RENCANA_JUMLAH'   
                        }, {
                            fieldLabel: 'SATUAN',
                            xtype: 'textfield',                            
                            width: '60%',
                            labelWidth: 160,
                            name: 'RENCANA_SATUAN'   
                        }]
                    },                    
                    {
                        fieldLabel: 'KETERANGAN',
                        xtype: 'textareafield',                            
                        width: '95%',
                        name: 'KETERANGAN'   
                    }
                ],
                }],
                bbar: ['->', {
                    text: "Simpan",
                    cls:'btn-main btn-x-m2',
                    handler: 'simpan_telaah_pemeliharaan',
                    glyph: 'xf0c7@fontAwesome'
                }]
        });
        me.callParent([arguments]);
    }
});