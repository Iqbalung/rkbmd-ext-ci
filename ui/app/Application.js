/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('koyoku.Application', {
    extend: 'Ext.app.Application',

    name: 'koyoku',

    quickTips: false,
    platformConfig: {
        desktop: {
            quickTips: true
        }
    },

    api: {
        siteurl: 'http://karya-inovasi.com/beta-rkbmdapi/index.php/index.php/',
        baseurl: 'http://karya-inovasi.com/beta-rkbmdapi/'
    },
    akses : {

    },

    stores: [
        // TODO: add global / shared stores here
    ],

    launch: function() {

        // TODO - Launch the application
        document.getElementById('wrap_loading').style.display = 'none';
        if (localStorage.is_login == 'yes') {
            koyoku.app.chekIsLoginServer();
            Ext.create({
                xtype: 'app-main'
            });
        } else {
            Ext.create({
                xtype: 'login'
            });
        }

        setInterval(function() {
            koyoku.app.chekIsLoginServer();
        }, 60 * 1000);

    },

    onAppUpdate: function() {
        Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
            function(choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
    },

    chekIsLoginServer: function() {
        Ext.Ajax.request({
            url: "http://karya-inovasi.com/beta-rkbmdapi/index.php/login/is_login",
            params: {},
            // async : false,
            success: function(form, action, value) {
                var success_opt = true;
                try {
                    res = Ext.JSON.decode(form.responseText);
                } catch (err) {
                    var success_opt = false;
                    Ext.Msg.alert('Error', form.responseText);
                }
                if (success_opt) {
                    if (!res.is_login) {
                        localStorage.is_login = false;
                        Ext.Msg.alert('Informasi',"Sesi anda sudah habis, Halaman akan di Refresh dan silahkan Login Kembali.");
                        window.location.reload();
                    }
                }
            },
            failure: function(form) {
                Ext.Msg.alert('Error', form.responseText);
                return false;
            }
        });
    },


    keluar: function() {
        localStorage.removeItem('is_login');
        Ext.Ajax.request({
            url: koyoku.app.api.siteUrl + "login/keluar",
            params: {},
            success: function(form, action, value) {
                localStorage.is_login = false;
                window.location.reload();
            },
            failure: function(form) {
                Ext.Msg.alert('Error', form.responseText);
                return false;
            }
        });
    },

    ajaxRequest: function(url, params, callback) {
        try {
            Ext.Ajax.request({
                url: koyoku.app.api.baseurl + "/" + url,
                params: params,
                // async : false,
                success: function(form, action, value) {
                    var success_opt = true;
                    try {
                        res = Ext.JSON.decode(form.responseText);
                    } catch (err) {
                        var success_opt = false;
                        Ext.Msg.alert('Error', form.responseText);
                    }
                    if (success_opt) {
                        if(callback) {
                            callback(res);
                        }
                    }
                },
                failure: function(form) {
                    Ext.Msg.alert('Error', form.responseText);
                    return false;
                }
            });
        } catch (error) {
            Ext.Msg.alert('Error', error);
            return false;
        }
    }
});