Ext.define('koyoku.view.tki.Win_bnp2tki', {
    extend: 'Ext.Window',
    alias: 'widget.win_bnp2tki',
    requires : [
        'koyoku.view.tki.Form_bnp2tki'
    ],
    modal: true,
    controller: 'tki',
    bind : { title : '{language.legalisasibp3tki}', },
    items : [
        {xtype : 'form_bnp2tki'}
    ],
    bbar:['->',{
        text:"Simpan",
        glyph: 'xf0c7@fontAwesome',
        handler: 'simpanBnp2tki'
     }]
});
