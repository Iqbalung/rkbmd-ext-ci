Ext.define('koyoku.view.tki.Win_perjanjian_kerja', {
    extend: 'Ext.Window',
    alias: 'widget.win_perjanjian_kerja',
    requires : [
        'koyoku.view.tki.Form_perjanjian_kerja'
    ],
    modal: true,
    controller: 'tki',
    bind : { title : '{language.perjanjiankerja}', },
    items : [
        {xtype : 'form_perjanjian_kerja'}
    ],
    bbar:['->',{
        text:"Simpan",
        glyph: 'xf0c7@fontAwesome',
        handler: 'simpanPerjanjian'
     }]
});
