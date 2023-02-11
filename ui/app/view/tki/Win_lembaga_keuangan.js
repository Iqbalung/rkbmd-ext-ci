Ext.define('koyoku.view.tki.Win_lembaga_keuangan', {
    extend: 'Ext.Window',
    alias: 'widget.win_proses_lk',
    requires : [
        'koyoku.view.tki.Form_proses_lk'
    ],
    controller : 'tki',
    modal: true,
     bind : { title : '{language.signinglembagakeuangan}', },
    items : [
        {xtype : 'form_proses_lk'}
    ],
    bbar:['->',{
        text:"Simpan",
        glyph: 'xf0c7@fontAwesome',
        handler: 'simpanlk'
     }]
});
