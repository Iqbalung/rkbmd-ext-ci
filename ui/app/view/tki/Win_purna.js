Ext.define('koyoku.view.tki.Win_purna', {
    extend: 'Ext.Window',
    alias: 'widget.window_purna',
    modal: true,
    controller : 'tki',
    requires : [
        'koyoku.view.tki.Form_purna'
    ],
     bind : { title : '{language.konfirmasitkipulang}', },
    bodyPadding: 10,
    items: [{
        xtype : 'form_purna'
    }],
    bbar:['->',{
        text:"Simpan",
        glyph: 'xf0c7@fontAwesome',
        handler:'simpanpurna'
     }]
});
