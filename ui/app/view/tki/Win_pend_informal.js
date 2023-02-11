Ext.define('koyoku.view.tki.Win_pend_informal', {
    extend: 'Ext.Window',
    alias: 'widget.win_pend_informal',
    requires: [
        'koyoku.view.tki.C_blkln',
        'koyoku.view.tki.Grid_pend_informal'
    ],
    controller: 'c_blkln',
    modal: true,
    bind : { title : '{language.pelatihandiblkln}', },
    items: [{
        xtype : 'form',
        items : [{
        xtype: 'hiddenfield',
        width: 250,
        name: 'ID',
    }, {
        xtype: 'hiddenfield',
        width: 250,
        name: 'PEKERJA_ID',
    }, {
        xtype: 'hiddenfield',
        width: 250,
        name: 'JOB_ID',
    }],

    }, {
        xtype: 'grid_pend_informal'
    }],
    tbar: [
        '->', {
            bind : { text : '{language.tambah}', },
            handler: 'add_grid_crud',
            glyph: 'xf067@fontAwesome'
        }, {
            bind : { text : '{language.ubah}', },
            handler: 'upd_grid_crud',
            glyph: 'xf044@fontAwesome'
        }, {
            bind : { text : '{language.hapus}', },
            handler: 'del_grid_crud',
            glyph: 'xf1f8@fontAwesome'
        }
    ],
    bbar: ['->', {
        text: "Simpan",
        glyph: 'xf0c7@fontAwesome',
        handler: 'simpan'
    }]
});