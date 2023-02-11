Ext.define('koyoku.view.tki.Win_pap', {
    extend: 'Ext.Window',
    alias: 'widget.window_pap',
    requires : [
        'koyoku.view.tki.Form_pap'
    ],
    modal: true,
    controller : 'tki',
    bind : { title : '{language.pap}', },
    items : [
        {xtype : 'form_pap'}
    ],
    bbar:['->',{
        text:"Simpan",
        glyph: 'xf0c7@fontAwesome',
        handler: 'simpanpembekalan'
     }]
});
