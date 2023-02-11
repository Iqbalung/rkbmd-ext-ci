Ext.define('koyoku.view.tki.Win_perpanjang', {
    extend: 'Ext.Window',
    alias: 'widget.window_perpanjang',
    modal: true,
    controller : 'tki',
    requires : [
        'koyoku.view.tki.Form_perpanjang'
    ],
    bind : { title : '{language.konfirmasitkiperpanjang}', },
    items: [{
        xtype : 'form_perpanjang'
    }],
    bbar:['->',{
        text:"Simpan",
        glyph: 'xf0c7@fontAwesome',
        handler:'simpanperpanjang'
     }]
});
