Ext.define('koyoku.view.tki.Win_selesai', {
    extend: 'Ext.Window',
    alias: 'widget.window_selesai',
    modal: true,
    controller: 'tki',
    requires: [
        'koyoku.view.tki.Form_selesai'
    ],
    bind : { title : '{language.konfirmasitkiselesai}', },
    bodyPadding: 10,
    items: [{
        xtype: 'form_selesai'
    }],
    bbar: ['->', {
        text: "Simpan",
        glyph: 'xf0c7@fontAwesome',
        handler: 'simpansampai'
    }]
});