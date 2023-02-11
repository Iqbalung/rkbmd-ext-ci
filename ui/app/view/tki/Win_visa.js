Ext.define('koyoku.view.tki.Win_visa', {
    extend: 'Ext.Window',
    alias: 'widget.win_visa',
    requires : [
        'koyoku.view.tki.Form_visa'
    ],
    controller : 'tki',
    modal: true,
    bind : { title : '{language.pengurusanvisa}', },
    items : [
        {xtype : 'form_visa'}
    ],
    bbar:['->',{
        text:"Simpan",
        glyph: 'xf0c7@fontAwesome',
        handler: 'simpanvisa'
    }]
});
