Ext.define('koyoku.view.tki.Win_pindah', {
    extend: 'Ext.Window',
    alias: 'widget.window_pindah',
    modal: true,
    controller : 'tki',
    requires : [
        'koyoku.view.tki.Form_pindah'
    ],
    bind : { title : '{language.konfirmasitkipindah}', },
    bodyPadding: 10,
    items: [{
        xtype : 'form_pindah'
    }],
    bbar:['->',{
        text:"Simpan",
        glyph: 'xf0c7@fontAwesome',
        handler:'simpansampai'
     }]
});
