Ext.define('koyoku.view.tki.Win_kasus', {
    extend: 'Ext.Window',
    alias: 'widget.window_kasus',
    modal: true,
    controller : 'tki',
    requires : [
        'koyoku.view.tki.Form_kasus'
    ],
     bind : { title : '{language.konfirmasitkikasus}', },
    bodyPadding: 10,
    items: [{
        xtype : 'form_kasus'
    }],
    bbar:['->',{
        text:"Simpan",
        glyph: 'xf0c7@fontAwesome',
        handler:'simpansampai'
    }]
});
