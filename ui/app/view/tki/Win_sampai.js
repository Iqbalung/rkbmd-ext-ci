Ext.define('koyoku.view.tki.Win_sampai', {
    extend: 'Ext.Window',
    alias: 'widget.window_sampai',
    modal: true,
    controller : 'tki',
    requires : [
        'koyoku.view.tki.Form_sampai'
    ],
     bind : { title : '{language.konfimasitkisampaitujuan}', },
    bodyPadding: 10,
    items: [{
        xtype : 'form_sampai'
    }],
    bbar:['->',{
        text:"Simpan",
        glyph: 'xf0c7@fontAwesome',
        handler:'simpansampai'
     }]
});
