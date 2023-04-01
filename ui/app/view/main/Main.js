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
        'koyoku.view.main.Sidebar',
        'koyoku.view.dashboard.Main',
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
        region: 'west',
        cls:'side-menu',
        hidden: true,
        xtype: 'sideMenu'
    },{

        region: 'north',
        tbar: [
            '<i id="action_side_menu" class="fa fa-navicon btn-side-bar"></i>',
            '<img src="../api/media/images/logo.png" height="30">', {
                xtype: 'label',
                bind: {
                    text: '{message}',
                },
            },
            '->', {
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