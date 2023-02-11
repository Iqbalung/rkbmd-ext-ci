Ext.define('koyoku.view.tki.Win_siskot', {
    extend: 'Ext.Window',
    alias: 'widget.win_siskot',
    requires : [
        'koyoku.view.tki.Form_siskot'
    ],
    controller : 'tki',
    modal: true,
    bind : { title : '{language.pendaftaransiskot}', },
    items : [
        {xtype : 'form_siskot'}
    ],
    bbar:['->',{
        text:"Simpan",
        glyph: 'xf0c7@fontAwesome',
        handler: 'simpansiskot'
    }]
});