Ext.define('koyoku.view.job.Tabs', {
    extend: 'Ext.TabPanel',
    alias: 'widget.form_tabs',
    xtype: 'tabs_panel3',
    requires: [
        'koyoku.view.master.jabatan.Form_syarat_jabatan'
    ],
    items: [{
        itemId: 'tab1',
        title: 'Tugas',
        items: [{
            xtype: 'fieldcontainer',
            bind : { fieldLabel : '{language.uraianpekerjaan}', },
            labelWidth: '100%',

            layout: 'hbox',
        }, {
            xtype: 'textarea',
            name: 'JABATAN_TUGAS',
            width: '80%',
            labelWidth: '100%',
            allowBlank: false
        }]
    }, {
        xtype: 'form_syarat_jabatan'
    }, {
        bind : { title : '{language.lingkungankerja}', },
        tbar: [
            '->', {
                bind : { text : '{language.tambah}', },
                handler: 'onTambahLingkungan',
                glyph: 'xf067@fontAwesome'
            }, {
                bind : { text : '{language.hapus}', },
                itemId: 'btnSimpan',
                handler: 'deleteling',
                glyph: 'xf1f8@fontAwesome'
            }
        ],
        xtype: 'lingkunganListJob',
    }, {
        bind : { title : '{language.alatkerjas}', },
        tbar: [
            '->', {
                bind : { text : '{language.tambah}', },
                handler: 'onTambah',
                glyph: 'xf067@fontAwesome'
            }, {
                bind : { text : '{language.hapus}', },
                itemId: 'btnSimpan',
                handler: 'deleteAlat',
                glyph: 'xf1f8@fontAwesome'
            }
        ],
        items: [{
            xtype: 'alatListJob',
        }]
    }]

});