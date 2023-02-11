Ext.define('koyoku.view.master.jabatan.Form_syarat_jabatan', {
    extend: 'Ext.form.Panel',
    alias: 'widget.form_syarat_jabatan',
    xtype: 'form_syarat_jabatan',
    padding: 5,
    title : 'Syarat',
     requires : [
        'koyoku.components.combo.Kompetensi',
        'koyoku.components.combo.Tingkatpendidikan',
    ],
    defaults : {
        width : '70%'
    },
    items: [{
        xtype: 'combo_kompetensi',
        fieldLabel : 'Kompetensi',
    }, {
        xtype: 'fieldcontainer',
        layout: 'column',
        items: [{
            xtype: 'combobox',
            fieldLabel: 'Pendidikan',
            xtype: 'combo_tingkatpendidikan',
            columnWidth: 0.5,
            name : 'PENDIDIKAN_ID',
        }, {
            margin: '0 10',
            xtype: 'textfield',
            name: 'JABATAN_JURUSAN',
            emptyText: 'Jurusan',
            columnWidth: 0.5
        }]
    }, {
        xtype: 'combo_jenis_kelamin',
        name: 'JABATAN_KELAMIN',
    },{
        xtype: 'textarea',
        name: 'JABATAN_SYARAT_LAIN',
        fieldLabel: 'Lainya'
    }],
});