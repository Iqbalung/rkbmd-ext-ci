/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('koyoku.view.main.Main', {
    extend: 'Ext.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',

        'Ext.tip.*',


        'koyoku.view.login.Login',

        'koyoku.view.main.MainController',
        'koyoku.view.main.MainModel',
        'koyoku.view.master.pengguna.Form_pengguna',
        'koyoku.view.portal.Main',
        'koyoku.view.p404.Main',
        'koyoku.view.master.partner.Main',
        'koyoku.view.tki.Main',
        'koyoku.view.lihat_tki.Main',
        'koyoku.view.profile_tki.Main',
        'koyoku.view.job.Main',
        'koyoku.view.profile_pptkis.Main',
        'koyoku.view.detail_pptkis.Main',
        'koyoku.view.master.pengguna.Main',
        'koyoku.view.master.wilayah.Main',
        'koyoku.view.master.bidang.Main',
        'koyoku.view.master.barang.Main',
        'koyoku.view.master.jobowner.Main',
        'koyoku.view.master.jabatan.Main',
        'koyoku.view.master.blkln.Main',
        'koyoku.view.master.lk.Main',
        'koyoku.view.master.lsp.Main',
        'koyoku.view.master.pptkis.Main',
        'koyoku.view.master.sarkes.Main',
        'koyoku.view.master.asuransi.Main',
        'koyoku.view.onhelp.Main',
        'koyoku.view.master.kompetensi.Main',
    ],

    controller: 'main',
    viewModel: 'main',

    plugins: 'viewport',

    ui: 'navigation',

    layout: 'border',
    id: 'app_main',
    items: [{

        region: 'north',
        tbar: [
            '<img src="../api/media/images/logo.png" height="30">', {
                xtype: 'label',
                bind: {
                    text: '{message}',
                },
            },
            '->', {
                bind: {
                    //text: '{mn_beranda}',
                    hidden: '{!akses.page_portal}',
                    tooltip: '{language.menu.Beranda}',
                },
                xtype: 'button',
                scale: 'large',
                href: '#',
                glyph: 'xf015@fontAwesome',
                hrefTarget: '_self',
            }, {
                //text: 'TKI',
                bind: {
                    tooltip: 'Inventory',
                    hidden: '{!akses.page_tki}'
                },
                scale: 'large',
                href: '#tki',
                hrefTarget: '_self',
                glyph: 'xf0c0@fontAwesome',

            }, {
                //text: 'Lowongan',
                bind: {
                    tooltip: 'Kegiatan',
                    hidden: '{!akses.page_job}'
                },
                href: '#kompetensi',
                scale: 'large',
                hrefTarget: '_self',
                glyph: 'xf0b1@fontAwesome'
            }, {
                bind: {
                    tooltip: '{language.menu.Master}',
                    hidden: '{!akses.menu_master}'
                },
                scale: 'large',
                glyph: 'xf03a@fontAwesome',
                menu: [{
                   
                    href: '#wilayah',
                    bind: {
                        text: '{language.menu.submaster.wilayah}',
                    },
                    glyph: 'xf041@fontAwesome',
                    hrefTarget: '_self',
                }, {
                    
                    bind: {
                        text: '{language.menu.submaster.bidang}',
                    },
                    href: '#bidang',
                    glyph: 'xf02b@fontAwesome',
                    hrefTarget: '_self',
                }, {
                    bind: {
                        text: '{language.menu.submaster.kompetensi}',
                    },
                    glyph: 'xf0a3@fontAwesome',
                    href: '#kompetensi',
                }
                 , {
                    bind: {
                        text: '{language.menu.submaster.jabatan}',
                    },
                    href: '#jabatan',
                    hrefTarget: '_self',
                    glyph: 'xf0b1@fontAwesome'
                },
                {
                    bind: {
                        text: '{language.menu.submaster.pengguna}',
                    },
                    tooltip: 'Pengguna',
                    href: '#pengguna',
                    hrefTarget: '_self',
                    glyph: 'xf007@fontAwesome'
                },
                {
                    bind: {
                        text: 'Master Barang',
                    },
                    tooltip: 'Master Barang',
                    href: '#barang',
                    hrefTarget: '_self',
                    glyph: 'xf0d1s@fontAwesome'
                },
                /*
                {
                    bind: {
                        text: '{language.menu.submaster.pptkis}',
                    },
                    tooltip: 'pptkis',
                    href: '#pptkis',
                    hrefTarget: '_self',
                    glyph: 'xf1ad@fontAwesome'
                }, {
                    bind: {
                        text: '{language.menu.submaster.tki}',
                    },
                    tooltip: 'tki',
                    hidden: true,
                    href: '#tki',
                    hrefTarget: '_self',
                    glyph: 'xf0c0@fontAwesome'
                }, {
                    bind: {
                        text: '{language.menu.submaster.agensi}',
                    },
                    tooltip: 'Barang',
                    href: '#barang',
                    hrefTarget: '_self',
                    glyph: 'xf0d1s@fontAwesome'
                }, {
                    bind: {
                        text: '{language.menu.submaster.pemilikpekerjaan}',
                    },
                    tooltip: 'Pemilik Pekerjaan',
                    href: '#jobowner',
                    hrefTarget: '_self',
                    glyph: 'xf187@fontAwesome'
                }, {
                    bind: {
                        text: '{language.menu.submaster.pengguna}',
                    },
                    tooltip: 'Pengguna',
                    href: '#pengguna',
                    hrefTarget: '_self',
                    glyph: 'xf007@fontAwesome'
                }, {
                    
                    bind: {
                        text: '{language.menu.submaster.rekankerja}',
                    },
                    // href: '#partner',
                    // hrefTarget: '_self',
                    glyph: 'xf02e@fontAwesome',
                    menu: [{
                        bind: {
                            text: '{language.menu.submaster.blkln}',
                        },
                        href: '#blkln',
                        hrefTarget: '_self',
                        glyph: 'xf0a3@fontAwesome'
                    }, {
                        bind: {
                            text: '{language.menu.submaster.lk}',
                        },
                        href: '#lk',
                        hrefTarget: '_self',
                        glyph: 'xf09d@fontAwesome'
                    }, {
                        bind: {
                            text: '{language.menu.submaster.lsp}',
                        },
                        href: '#lsp',
                        hrefTarget: '_self',
                        glyph: 'xf0a3@fontAwesome'
                    }, {
                        bind: {
                            text: '{language.menu.submaster.sarana}',
                        },
                        href: '#sarkes',
                        hrefTarget: '_self',
                        glyph: 'xf0f1@fontAwesome'
                    }, {
                        bind: {
                            text: '{language.menu.submaster.asuransi}',
                        },
                        href: '#asuransi',
                        hrefTarget: '_self',
                        glyph: 'xf09d@fontAwesome'
                    }]
                } */
            ]
            }, {
                //text: 'Bantuan',
                bind: {
                    tooltip: '{language.menu.Help}',
                },
                scale: 'large',
                glyph: 'xf059@fontAwesome',
                menu: [{
                    bind: {
                            text: '{language.menu.tanyajawab}',
                        },
                    href: '#online_help',
                    glyph: 'xf075@fontAwesome',
                    hrefTarget: '_self',
                }, {
                    bind: {
                            text: '{language.menu.bukupanduan}',
                        },
                    href: '../api/media/panduan/bukpan.pdf',
                    glyph: 'xf02d@fontAwesome',
                    hrefTarget: '_self',
                }],
            }, {
                tooltip: 'Akun',
                itemId: 'btn_akun',
                scale: 'large',
                bind: {
                    text: '{USER.NAMA}',
                },
                glyph: 'xf007@fontAwesome',
                menu: [{
                    text: 'Profile',
                    hidden: true,
                    glyph: 'xf007@fontAwesome',
                }, {
                    text: 'Ubah Sandi',
                    handler: 'showSandiForm',
                    glyph: 'xf023@fontAwesome',
                }, {
                    bind: {
                        text: '{Logout}',
                    },
                    handler: function() {
                        koyoku.app.keluar();
                    },
                    glyph: 'xf011@fontAwesome',
                },{ 
                    text : 'Bahasa',
                    menu: [{
                        bind: {
                            text: '{language.indonesia}',
                        },
                        iconCls : 'big-indo-image',
                        hrefTarget: '_self',
                        handler: 'set_indonesia'
                    }, {
                        bind: {
                            text: '{language.english}',
                        },
                        iconCls : 'big-eng-image',
                        hrefTarget: '_self',
                        handler: 'set_english',
                    }]
                }]
            },
        ]
    }, {
        region: 'center',
        id: 'mainPanel',
        layout: 'fit',
        listeners: {
            afterrender: 'loadPage'
        }
    }]
});