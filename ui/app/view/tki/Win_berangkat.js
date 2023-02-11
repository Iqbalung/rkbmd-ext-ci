Ext.define('koyoku.view.tki.Win_berangkat', {
    extend: 'Ext.Window',
    alias: 'widget.Win_berangkat',
    requires : [
        'koyoku.view.tki.Form_berangkat'
    ],
    modal: true,
    controller : 'tki',
    bind : { title : '{language.keberangkatan}', },
    items : [
        {xtype : 'form_berangkat'}
    ],
    bbar:['->',{
        text:"Simpan",
        glyph: 'xf0c7@fontAwesome',
        handler:'simpanberangkat'
     }]
});

