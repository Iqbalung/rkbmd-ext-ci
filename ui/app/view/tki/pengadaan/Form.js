Ext.define('koyoku.view.tki.pengadaan.Form', {
    extend: 'Ext.panel.Panel',
    xtype: 'form_pengadaan',
    requires: [
        'koyoku.components.field.TreeFieldKegiatan',
        'koyoku.view.tki.pengadaan.FormGridBarang',         
        'koyoku.components.combo.Program'     
    ],        
    bodyPadding: 10,
    // layout: 'column',
    scrollable: true,
    width: '100%',
    header: {        
        titlePosition: 1,
        items: [{            
            xtype:'label',
            text: 'Tambah Pengadaan Barang',
            cls: 'lefty text-white'
        }, {
            xtype: 'button',
            cls: 'btn-kembali',
            glyph: 'f053@fontAwesome',            
            handler: 'kembali'
        }]
    },
    bbar:[{
        xtype: 'button',
        text: 'Simpan Draft',
        cls: 'btn-main',
        height: 40,
        width: 100,
        handler: 'simpan_draft_pengadaan'
    },{
        xtype: 'button',
        text: 'Ajukan',
        cls: 'btn-main',
        height: 40,
        width: 100,
        handler: 'simpan_ajukan_pengadaan'
    }, {
        xtype: 'button',
        text: 'Batal',
        height: 40,
        width: 100
    }],
    items: [{
        xtype: 'form',
        height: 'auto',        
        defaults: {
            labelWidth: 140,
        },
        bodyPadding: 10,
        items: [{
            xtype: 'hiddenfield',
            width : 250,
            name: 'PENGADAAN_ID',
        }, {
            xtype: 'hiddenfield',
            width : 250,
            name: 'BIDANG_ID',
        }, {
            fieldLabel: 'Bidang',
            xtype: 'textfield',
            readOnly: true,
            width: 360,
            name: 'BIDANG_NAMA'            
        }, {
            xtype: 'combo_program',
            fieldLabel: 'Program',
            name: 'PROGRAM_ID',
            itemId:'cbo_program',
            width: 760,
            allowBlank: false,
            forceSelection: true,
            editable: false,
            listeners: {
                change: function(ths, val, x) {
                    var cmp = Ext.getCmp("page_renbut"),			
			            tree_bidang = cmp.down("tree_bidang"),
			            form = cmp.down("form_pengadaan").down("form");

                    if (ths.getSelectedRecord()) {                        
                        form.down("kegiatantreefield").root_text = ths.getSelectedRecord().data.PROGRAM_NAMA;
                        form.down("kegiatantreefield").params.PROGRAM_ID = val;       
                    }
                    
                }
            }
        },{
            xtype: 'kegiatantreefield',            
            width: 760,
        }]
    }, {
        title: 'Data Barang',
        flex: 1,
        minHeight: 200,        
        maxHeight: 500,        
        tbar: [				
            {
                cls: 'btn-round-small btn-tambah',
                glyph: 'xf067@fontAwesome',
                handler: 'tambah_barang_pengadaan'
            }, {
                cls: 'btn-round-small btn-edit',
                glyph: 'xf044@fontAwesome',
                handler: 'ubah_barang_pengadaan'
            }, {
                cls: 'btn-round-small btn-hapus',
                glyph: 'xf1f8@fontAwesome',
                handler: 'hapus_barang_pengadaan'
            }
        ],
        itemId: 'grid_form_pengadaan',
        xtype: 'grid_barang_pengadaan'
    }]
});