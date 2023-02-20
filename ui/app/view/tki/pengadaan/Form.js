Ext.define('koyoku.view.tki.pengadaan.Form', {
    extend: 'Ext.panel.Panel',
    xtype: 'form_pengadaan',
    requires: [
        'koyoku.components.field.TreeFieldKegiatan',
        'koyoku.view.tki.pengadaan.FormGridBarang',              
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
            cls: 'lefty'
        }, {
            xtype: 'button',
            text: 'Kembali',
            handler: 'kembali'
        }]
    },
    bbar:[{
        xtype: 'button',
        text: 'Simpan Draft',
        height: 40,
        width: 100,
        handler: 'simpan_draft_pengadaan'
    },{
        xtype: 'button',
        text: 'Ajukan',
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
                text: 'Tambah',
                glyph: 'xf067@fontAwesome',
                handler: 'tambah_barang_pengadaan'
            }, {
                bind : { text : '{language.ubah}', },
                glyph: 'xf044@fontAwesome',
                handler: 'ubah_barang_pengadaan'
            }, {
                text: 'Hapus',
                glyph: 'xf1f8@fontAwesome',
                handler: 'hapus_barang_pengadaan'
            }
        ],
        itemId: 'grid_form_pengadaan',
        xtype: 'grid_barang_pengadaan'
    }]
});