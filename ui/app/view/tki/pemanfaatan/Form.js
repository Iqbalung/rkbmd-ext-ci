Ext.define('koyoku.view.tki.pemanfaatan.Form', {
    extend: 'Ext.panel.Panel',
    xtype: 'form_pemanfaatan',
    requires: [
        'koyoku.components.field.TreeFieldKegiatan',
        'koyoku.view.tki.pemanfaatan.FormGridBarang',              
    ],        
    bodyPadding: 10,
    // layout: 'column',
    scrollable: true,
    width: '100%',
    header: {        
        titlePosition: 1,
        items: [{            
            xtype:'label',
            text: 'Tambah Pemanfaatan Barang',
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
        height: 40,
        width: 100,
        handler: 'simpan_draft_pemanfaatan'
    },{
        xtype: 'button',
        text: 'Ajukan',
        height: 40,
        width: 100,
        handler: 'simpan_ajukan_pemanfaatan'
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
            name: 'PEMANFAATAN_ID',
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
                cls: 'btn-round-small btn-tambah',
                glyph: 'xf067@fontAwesome',
                handler: 'tambah_barang_pemanfaatan'
            }, {
                cls: 'btn-round-small btn-edit',
                glyph: 'xf044@fontAwesome',
                handler: 'ubah_barang_pemanfaatan'
            }, {
                cls: 'btn-round-small btn-hapus',
                glyph: 'xf1f8@fontAwesome',
                handler: 'hapus_barang_pemanfaatan'
            }
        ],
        itemId: 'grid_form_pemanfaatan',
        xtype: 'grid_barang_pemanfaatan'
    }]
});