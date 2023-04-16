Ext.define('koyoku.view.tki.pengadaan.FormTelaah', {
    extend: 'Ext.Window',
    alias: 'widget.form_telaah_pengadaan',
    id: 'form_telaah_pengadaan',
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
                            name: 'PENGADAAN_ID',
                    }, 
                    {
                            xtype: 'hiddenfield',                            
                            name: 'BARANG_PENGADAAN_ID',
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
                        title: 'RENCANA KEBUTUHAN PEMELIHARAAN YANG DISETUJUI',                                                                        
                        items :[{
                            fieldLabel: 'JUMLAH',
                            xtype: 'numberfield',                            
                            width: '60%',
                            name: 'RENCANA_DISETUJUI_JUMLAH'   
                        }, {
                            fieldLabel: 'SATUAN',
                            xtype: 'textfield',                            
                            width: '60%',
                            name: 'RENCANA_DISETUJUI_SATUAN'   
                        }]
                    },
                    {
                        fieldLabel: 'CARA PEMENUHAN',
                        xtype: 'textfield',                            
                        width: '95%',
                        name: 'CARA_PEMENUHAN'   
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
                    handler: 'simpan_telaah_pengadaan',
                    glyph: 'xf0c7@fontAwesome'
                }]
        });
        me.callParent([arguments]);
    }
});