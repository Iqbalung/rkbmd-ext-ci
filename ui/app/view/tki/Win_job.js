Ext.define('koyoku.view.tki.Win_job', {
    extend: 'Ext.Window',
    alias: 'widget.window_job',
    modal: true,
    controller: 'tki',
    requires: [
        'koyoku.view.job.List'
    ],
     bind : { title : '{language.pilihpekerjaanuntuktki}', },
    bodyPadding: 10,
    items: [{
        xtype: 'form',
        items: [{
            xtype: 'hiddenfield',
            width: 250,
            name: 'ID',
        }, {
            xtype: 'hiddenfield',
            width: 250,
            name: 'PEKERJA_ID',
        }],
    }, {
        xtype: 'jobList',
        height: 300,
        width: 700,
    }],
    bbar: ['->', {
        text: "Simpan",
        glyph: 'xf0c7@fontAwesome',
        handler: 'set_job'
    }]
});