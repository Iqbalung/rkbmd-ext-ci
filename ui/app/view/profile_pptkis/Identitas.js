Ext.define('koyoku.view.profile_pptkis.Identitas', {
    extend: 'Ext.form.Panel',
    xtype: 'identitas',
    witdth: '100%',
    height: '100%',
    autoScroll: true,
    bodyPadding: '20',
    controller: 'profile_pptkis',
    tbar: ['->', {
       bind : { text : '{language.simpan}', },
        handler: 'save_profile',
        glyph: 'xf0c7@fontAwesome'
    }],
    requires: [
        "koyoku.view.profile_pptkis.Fasilitas",
        "koyoku.view.profile_pptkis.Fasilitas",
        "koyoku.view.profile_pptkis.Rekan_kerja",
    ],
    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    initComponent: function() {
        var me = this;
        Ext.apply(me, {
            items: [{
                xtype: 'panel',
                width: '100%',
                items: [{
                    xtype: 'fieldset',
                    width: '100%',
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
                    items: [{
                        xtype: 'image',
                        width: '100%',
                        itemId: 'preview_pptkis_cover',
                        height: 300,
                        src: 'http://www.sencha.com/img/20110215-feat-html5.png',
                    }, {
                        xtype: 'filefield',
                        width: '0',
                        buttonOnly: true,
                        buttonText: "Pilih Cover",
                        name: 'PPTKIS_COVER',
                    }]
                }]
            }, {
                xtype: 'panel',
                width: '100%',
                layout: 'column',
                items: [, {
                    xtype: 'fieldcontainer',
                    columnWidth: '0.3',
                    items: [{
                        xtype: 'image',
                        width: '95%',
                        itemId: 'preview_pptkis_logo',
                        height: 250,
                        src: 'http://www.sencha.com/img/20110215-feat-html5.png',
                    }, {
                        xtype: 'filefield',
                        width: '20%',
                        buttonOnly: true,
                        buttonText: "Pilih Logo",
                        name: 'PPTKIS_LOGO',
                        listeners: {
                            change: function(ths, value) {

                            }
                        }
                    }, {
                        xtype: 'filefield',
                        width: '100%',
                        buttonText: "Pilih Struktur Organisasi",
                        width: '2%',
                        buttonOnly: true,
                        name: 'PPTKIS_STRUKTUR_ORGANISASI',
                    }, {
                        xtype: 'fieldset',
                        width: '100%',
                        title: "Struktur Organisasi",
                        collapsible: true,
                        collapsed: true,
                        listeners: {
                            collapse: function(f) {
                                f.setTitle("Struktur Organisasi");
                            },
                            expand: function(f) {
                                f.setTitle('');
                            }
                        },
                        items: [{
                            xtype: 'image',
                            width: '100%',
                            height: 300,
                            itemId: 'preview_pptkis_struktur_organisasi',
                            src: 'http://www.sencha.com/img/20110215-feat-html5.png',
                        }]
                    }]
                }, {
                    xtype: 'fieldcontainer',
                    columnWidth: 1,
                    padding: '5 50',
                    columnWidth: '0.7',
                    //autoScroll: true,
                    defaults: {
                        width: '100%',
                        xtype: 'textfield'
                    },
                    items: [{
                        xtype: 'hiddenfield',
                        name: "PPTKIS_ID"
                    }, {
                        fieldLabel: 'PPTKIS',
                        name: 'PPTKIS_NAMA',
                        allowBlank: false,
                    }, {
                        fieldLabel: 'Legalitas',
                        width: 350,
                        name: 'PPTKIS_LEGALITAS',
                    }, {
                        xtype: 'textarea',
                        fieldLabel: 'Deskripsi Singkat',
                        name: 'PPTKIS_DES_PENDEK',
                    }, {
                        xtype: 'htmleditor',
                        fieldLabel: 'Profil',
                        grow: true,
                        growMin: 300,
                        name: 'PPTKIS_DES_PANJANG',
                    }]
                }]
            }, {
                xtype: 'tabpanel',
                items: [{
                    title: 'Fasilitas dan Layanan',
                    xtype: 'grid_fasilitas'
                }, {
                    title: 'Rekan Kerja',
                    xtype: 'grid_rekan_kerja'
                }]
            }]

        });
        me.callParent([arguments]);
    },
});