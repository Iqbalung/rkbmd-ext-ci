Ext.define('koyoku.view.lihat_pptkis.Identitas', {
    extend: 'Ext.form.Panel',
    xtype: 'identitas_detail',
    witdth: '100%',
    height: '100%',
    autoScroll: true,
    bodyPadding: '20',
    controller: 'lihat_pptkis',
    
    requires: [
        "koyoku.view.lihat_pptkis.Fasilitas",
        "koyoku.view.lihat_pptkis.Rekan_kerja"
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
                        xtype: 'displayfield'
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
                        xtype: 'displayfield',
                        fieldLabel: 'Deskripsi Singkat',
                        minHeight:100,
                        name: 'PPTKIS_DES_PENDEK',
                    }, {
                        xtype: 'displayfield',
                        fieldLabel: 'Profil',
                        minHeight:300,
                        name: 'PPTKIS_DES_PANJANG',
                    }]
                }]
            }, {
                xtype: 'tabpanel',
                items: [{
                    title: 'Fasilitas dan Layanan',
                    xtype: 'grid_fasilitas_detail'
                }, {
                    title: 'Rekan Kerja',
                    xtype: 'grid_rekan_kerja_detail'
                }]
            }]

        });
        me.callParent([arguments]);
    },
});