Ext.define('koyoku.view.master.jabatan.Tabs', {
    extend: 'Ext.TabPanel',
    alias: 'widget.form_tabs',
    xtype: 'tabs_panel',
    requires : [
        'koyoku.view.master.jabatan.Form_syarat_jabatan'
    ],
    items: [{
        itemId: 'tab1',
        title: 'Tugas',
        padding: 10,
        items: [{
            xtype: 'label',
            text: 'Uraian Tugas'
        }, {
            xtype: 'textarea',
            name: 'JABATAN_TUGAS',
            width: '100%',
        }]
    }, {
        xtype : 'form_syarat_jabatan'
    }, {
        title: 'Lingkungan Kerja',
        tbar: [
            '->', {
                text: 'Tambah',
                handler: 'onTambahLingkungan',
                glyph: 'xf067@fontAwesome'
            }, {
                bind : { text : '{language.ubah}', },
                itemId: 'btnSimpan',
                handler: 'deleteling',
                glyph: 'xf1f8@fontAwesome'
            }
        ],
        items: [{
            xtype: 'lingkunganList',
            region: 'center'
        }]
    }, {
        title: 'Alat Kerja',
        tbar: [
            '->', {
                text: 'Tambah',
                handler: 'onTambah',
                glyph: 'xf067@fontAwesome',
            }, {
                bind : { text : '{language.hapus}', },
                itemId: 'btnSimpan',
                handler: 'deleteAlat',
                glyph: 'xf1f8@fontAwesome'
            }
        ],
        items: [{
            xtype: 'alatList',
            region: 'center'
        }]
    }]

});
