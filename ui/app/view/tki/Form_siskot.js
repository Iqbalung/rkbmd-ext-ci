Ext.define('koyoku.view.tki.Form_siskot', {
    extend: 'Ext.form.Panel',
    xtype: 'form_siskot',
    requires: [
        'koyoku.components.combo.Jenis_kelamin',
        'koyoku.components.field.Wilayah',
        'koyoku.components.field.Wilayah_multi',
        'koyoku.components.combo.Kompetensi',
        'koyoku.components.combo.Bidang'
    ],
    bodyPadding: 5,
    width: 800,   
    layout: 'column',
    items: [{
        xtype: 'fieldset',        
        title: "Cover",
        collapsible: true,
        collapsed: true,
        listeners: {
            collapse: function(f) {
                f.setTitle("Cover");
            },
            expand: function(f) {
                f.setTitle('');
            }
        },
        columnWidth: 1,
        width: '300px',
        items: [{
            xtype: 'image',
            width: '300px',
            itemId: 'preview_cover',
            height: 240,
            src: 'http://enadcity.org/enadcity/wp-content/uploads/2017/02/profile-pictures.png',
        }, {
            xtype: 'filefield',
            width: '0',
            buttonOnly: true,
            buttonText: "Pilih Cover",
            name: 'COVER',
        }]
    }, {
        xtype: 'fieldcontainer',
        columnWidth: '0.4',
        padding: 10,
        items: [{
            xtype: 'image',
            width: '80%',
            itemId: 'preview_photo',
            height: 240,
            width: 240,
            src: 'http://enadcity.org/enadcity/wp-content/uploads/2017/02/profile-pictures.png',
        }, {
            xtype: 'filefield',
            width: '2%',
            buttonOnly: true,
            buttonText: "Pilih Photo",
            name: 'PHOTO',
            listeners: {
                change: function(ths, value) {

                }
            }
        }]
    }, {
        xtype: 'fieldcontainer',
        columnWidth: 0.5,
        padding: '5',
        defaults: {
            width: '90%',
            xtype: 'textfield',
            allowBlank: false
        },
        items: [{
            xtype: 'hiddenfield',
            name: 'ID',
        },{
            fieldLabel: 'Email',
            name: 'EMAIL',
        }, {
            fieldLabel: 'Nama',
            name: 'NAMA',
        }, {
            fieldLabel: 'No KTP',
            width: 400,
            name: 'NO_KTP',
        }, {
                fieldLabel: 'Wilayah Tinggal',
                xtype: 'wilayahfield',
                name: 'WILAYAH_TINGGAL',
                allowBlank: false
            }, {
                fieldLabel: 'Alamat Tinggal',
                xtype: 'textarea',
                name: 'ALAMAT_TINGGAL',
                allowBlank: false
            }]
    }, {
        xtype: 'panel',
        columnWidth: 1,
        layout: 'column',        
        items: [{
            xtype: 'fieldcontainer',
            columnWidth: 0.4,
            padding: 10,
            defaults: {
                width: '90%',
                xtype: 'textfield'
            },
            items: [{
            fieldLabel: 'No Telpn/HP',
            width: 300,
            name: 'NO_TELP',
        }, {
            width: 300,
            xtype: 'combo_jenis_kelamin',
            fieldLabel: 'L/P',
            name: 'JENIS_KELAMIN'
        }, {
            xtype: 'fieldcontainer',
            layout: 'column',
            items: [{
                xtype: 'textfield',
                fieldLabel: 'TTL',
                columnWidth: 0.5,
                name: 'TEMPAT_LAHIR',
                allowBlank: false
            }, {
                xtype: 'datefield',
                padding: '0 0 0 5',
                columnWidth: 0.5,
                name: 'TANGGAL_LAHIR',
                submitFormat: 'Y-m-d',
                allowBlank: false
            }]

        }]
        }, {
            xtype: 'fieldcontainer',
            columnWidth: 0.5,
            padding: 5,
            defaults: {
                width: '90%',
                xtype: 'textfield'
            },
            items: [{
                fieldLabel: 'Wilayah KTP',
                xtype: 'wilayahfield',
                name: 'WILAYAH_KTP'
            }, {
                fieldLabel: 'Alamat KTP',
                xtype: 'textarea',
                name: 'ALAMAT_KTP',
            },{
                fieldLabel: 'Minat Wilayah',
                xtype: 'wilayahfieldmulti',


            },{
                fieldLabel : 'Kompetensi',
                xtype : 'combo_kompetensi',
                itemId : 'pencarian_kompetensi',
                name: 'Kompetensi',
            },{
                fieldLabel : 'Bidang',
                xtype : 'combo_bidang',
                itemId : 'pencarian_bidang',
                name: 'Bidang',
                allowBlank: true,
                multiSelect: true,
            }]
        }]
    }],
});