Ext.define('koyoku.view.tki.Win_hilang', {
    extend: 'Ext.Window',
    alias: 'widget.window_hilang',
    modal: true,
    controller : 'tki',
    requires : [
        'koyoku.view.tki.Form_hilang'
    ],
     bind : { title : '{language.konfirmasitkihilang}', },
    bodyPadding: 10,
    items: [{
        xtype : 'form_hilang'
    }],
    bbar:['->',{
        text:"Simpan",
        glyph: 'xf0c7@fontAwesome',
        handler:'simpansampai'
     }]
});
