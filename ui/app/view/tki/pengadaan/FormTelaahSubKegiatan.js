Ext.define('koyoku.view.tki.pengadaan.FormTelaahSubKegiatan', {
    extend: 'Ext.Window',
    alias: 'widget.form_telaah_pengadaan_sub_kegiatan',
    id: 'form_telaah_pengadaan_sub_kegiatan',
    controller: 'tki',
    layout: 'form',
    padding: 10,
    modal: true,
    width: 1100,
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
                            name: 'KEGIATAN_ID',
                    }, {
                            xtype: 'hiddenfield',                            
                            name: 'SUB_KEGIATAN_ID',
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
                   
                ],
                }, {
                    xtype: 'grid',
                    height: 400,
                    store: Ext.create('Ext.data.Store', {
	    				storeId: 'store_barang_telaah',
                        fields:[ 'BARANG_PENGADAAN_ID', 'BARANG_ID', 'BARANG_NAMA', 'BARANG_KODE', 'JUMLAH', 'SATUAN',
                                'CARA_PEMENUHAN', 'KETERANGAN', 
                                'RENCANA_DISETUJUI_JUMLAH', 'RENCANA_DISETUJUI_SATUAN'
                            ],					
                                    
                    }),
                    plugins: [
                        {
                            clicksToEdit: 1,            
                            ptype: 'cellediting',
                            pluginId: 'cellediting'
                        },                
                    ],
                    columns: [{
                        text: 'No',
                        xtype: 'rownumberer',
                        width: 60
                    }, {
                        text: 'NAMA BARANG',
                        flex: 1,
                        dataIndex: 'BARANG_NAMA',
                    }, {
                        text: 'KODE',
                        dataIndex: 'BARANG_KODE',
                        align : 'center',
                        width: 130,
                    }, {
                        text: 'USULAN',
                        align : 'center',
                        columns: [
                            {
                                text: 'JUMLAH',
                                align : 'center',
                                dataIndex: 'JUMLAH',
                                width: 90,
                            }, 
                            {
                                text: 'SATUAN',
                                dataIndex: 'SATUAN',
                                width: 120,
                            },
                        ]
                    }, {
                        text: 'RENCANA KEBUTUHAN </br>PENGADAAN YANG </br>DISETUJUI',
                        align : 'center',
                        columns: [
                            {
                                text: 'JUMLAH',
                                align : 'center',
                                dataIndex: 'RENCANA_DISETUJUI_JUMLAH',
                                width: 90,                                
                                editor: 'textfield',
                                renderer : function(value, meta) {                                    
                                    meta.style = "background-color:#bcbc39;";
                                    return value;
                                }
                            }, 
                            {
                                text: 'SATUAN',
                                dataIndex: 'RENCANA_DISETUJUI_SATUAN',
                                width: 120,
                                editor: 'textfield',
                                renderer : function(value, meta) {                                    
                                    meta.style = "background-color:#bcbc39;";
                                    return value;
                                }
                            },
                        ]
                    }, {
                        text: 'CARA </br>PEMENUHAN',
                        dataIndex: 'CARA_PEMENUHAN',                        
                        width: 130,
                        editor: 'textfield',
                        renderer : function(value, meta) {                                    
                            meta.style = "background-color:#bcbc39;";
                            return value;
                        }
                    }, {
                        text: 'KETERANGAN',
                        dataIndex: 'KETERANGAN',                        
                        width: 130,
                        editor: 'textfield',
                        renderer : function(value, meta) {                                    
                                meta.style = "background-color:#bcbc39;";
                                return value;
                            }
                    }]
                }],
                bbar: ['->', {
                    text: "Simpan",
                    cls:'btn-main btn-x-m2',
                    handler: 'simpan_telaah_pengadaan_sub_kegiatan',
                    glyph: 'xf0c7@fontAwesome'
                }]
        });
        me.callParent([arguments]);
    }
});