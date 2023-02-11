Ext.define('koyoku.view.lihat_tki.Form_identitas', {
    extend: 'Ext.form.Panel',
    xtype: 'form_identitas_detail',
    requires: [
        'koyoku.components.combo.Jenis_kelamin',
        'koyoku.components.field.Wilayah'
    ],
    bodyPadding: 5,
    width: '100%',
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
        width: '100%',
        items: [{
            xtype: 'image',
            width: '100%',
            itemId: 'preview_cover',
            height: 280,
            bind : {
                src: '../api/uploads/tki/identitas/{detail.COVER}',    
            }
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
            bind : {
                src: '../api/uploads/tki/identitas/{detail.PHOTO}',    
            }
            
        }]
    }, {
        xtype: 'fieldcontainer',
        columnWidth: 0.5,
        padding: '0',
        defaults: {
            width: '90%',
            xtype: 'displayfield',
        },
        items: [{
            xtype: 'hidden',
            name: 'ID',
        }, {
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
            name: 'WILAYAH_TINGGAL_NAMA',
        }, {
            fieldLabel: 'Alamat Tinggal',
            name: 'ALAMAT_TINGGAL',
        }]
    }, {
        xtype: 'panel',
        columnWidth: 1,
        layout: 'column',
        items: [{
            xtype: 'fieldcontainer',
            columnWidth: 0.4,
            padding: 2,
            defaults: {
                width: '90%',
                xtype: 'displayfield'
            },
            items: [{
                fieldLabel: 'No Telpn/HP',
                width: 300,
                name: 'NO_TELP',
            }, {
                width: 300,
                fieldLabel: 'L/P',
                name: 'JENIS_KELAMIN',
                renderer: function(v) {
                    var view = "";
                    if (v == "L") {
                        view = "Laki - Laki";
                    } else if (v == "P") {
                        view = "Perempuan";
                    }
                    return view;
                }
            }, {
                xtype: 'fieldcontainer',
                layout: 'column',
                items: [{
                    xtype: 'displayfield',
                    fieldLabel: 'TTL',
                    columnWidth: 0.5,
                    name: 'TEMPAT_LAHIR',
                }, {
                    xtype: 'displayfield',
                    padding: '0 0 0 5',
                    columnWidth: 0.5,
                    name: 'TANGGAL_LAHIR',
                    renderer: function(v) {
                        var view = "";
                        if (v != undefined) {
                            view = "," + v;
                        }
                        return view;
                    }
                }]

            }]
        }, {
            xtype: 'fieldcontainer',
            columnWidth: 0.5,
            padding: 2,
            defaults: {
                width: '90%',
                xtype: 'displayfield'
            },
            items: [{
                fieldLabel: 'Wilayah KTP',
                name: 'WILAYAH_KTP_NAMA'
            }, {
                fieldLabel: 'Alamat KTP',
                minHeight: 100,
                name: 'ALAMAT_KTP',
            },{
                fieldLabel: 'Minat Negara',
                minHeight: 20,
                name: 'WILAYAH_MINAT',
            },{
                fieldLabel: 'Kompetensi',
                minHeight: 20,
                name: 'KOMPETENSI',
            },{
                fieldLabel: 'Minat Bidang',
                minHeight: 20,
                name: 'BIDANG',
            }]
        }]
    }],
});