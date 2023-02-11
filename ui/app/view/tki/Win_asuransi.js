Ext.define('koyoku.view.tki.Win_asuransi', {
    extend: 'Ext.Window',
    alias: 'widget.win_asuransi',
    requires : [
        'koyoku.view.tki.Form_asuransi'
    ],
    modal: true,
    controller : 'tki',
    bind : { title : '{language.pengurusanasuransi}', },
    items : [
        {xtype : 'form_asuransi'}
    ],
    bbar:['->',{
        text:"Simpan",
        glyph: 'xf0c7@fontAwesome',
        handler:'simpanasuransi'
     }]
});
