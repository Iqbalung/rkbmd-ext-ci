Ext.define('koyoku.view.tki.Win_medup', {
    extend: 'Ext.Window',
    alias: 'widget.win_medup',
    requires: [
        'koyoku.view.tki.Form_medup'
    ],
    controller: 'tki',
    modal: true,
    bind : { title : '{language.medicalcheckup}', },
    items: [{
        xtype: 'form_medup'
    }],
    bbar: ['->', {
        text: "Simpan",
        glyph: 'xf0c7@fontAwesome',
        handler: 'savemedical',
    }]
});