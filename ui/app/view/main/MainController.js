/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define('koyoku.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    listen: {
        controller: {
            '#': {
                unmatchedroute: 'onUnmatchedRoute'
            }
        }
    },

    onUnmatchedRoute: function(hash) {
        this.redirectTo('dashboard');
    },

    routes: {
        'dashboard|portal|tki|pptkis|profile_pptkis|job|pengguna|wilayah|jabatan|barang|program|bidang|kompetensi': {
            before: 'onBeforeLoadPage',
            action: 'loadPage'
        }
    },

    load_portal: function() {
        this.redirectTo('dashboard');
    },

    load_404 : function() {
        this.redirectTo('p404');
    },

    onBeforeLoadPage: function(action) {
        Ext.Ajax.request({
            url     :  api.apiurl + '/login/is_login',
            success : function(form, act, value) {                
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
                        action.stop(true);
                    }else{
                        action.resume();
                    }
                }
            },
            failure: function(form) {
                action.stop(true);
                Ext.Msg.alert('Error', form.responseText);
                return false;
            }
        });
    },

    loadPage: function() {
        me = this;
        me.get_data_viewmodel();
        me.get_data_bahasa();
        var myMask = new Ext.LoadMask({
            target: Ext.getCmp('app_main'),
            msg: "Please wait..."
        });
        myMask.show();
        var hashTag = document.location.hash;
        var tag = hashTag.replace("#", "");
        if (tag == '') {
            tag = 'dashboard';
        }

        tag = tag.split('/');
        var params = tag;
        

        var dataModel = me.getViewModel();
        /*if(dataModel.get('akses.page_' + tag[0])==false){
            tag[0] = 'p404';
        }*/

        Ext.getCmp('mainPanel').removeAll();
        Ext.getCmp('mainPanel').add({
            xtype: 'page_' + tag[0],
            params: params,
            listeners: {
                afterrender: function() {
                    myMask.hide();
                }
            }
        });
    },

    get_data_viewmodel: function() {
        me = this;
        Ext.Ajax.request({
            url: "http://localhost/project/rkbmd/api/index.php/app/get_viewmodel",
            success: function(form, action, value) {
                var success_opt = true;
                try {
                    res = Ext.JSON.decode(form.responseText);
                } catch (err) {
                    var success_opt = false;
                    Ext.Msg.alert('Error', form.responseText);
                }
                if (success_opt) {
                    var dataModel = me.getViewModel();
                    dataModel.set('TAHUN',res.TAHUN);
                    for (r in res.USER) {
                        dataModel.set('USER.'+r,res.USER[r]);
                    }
                    localStorage.setItem("IS_BIDANG_TELAAH", res.USER.IS_BIDANG_TELAAH);
                    koyoku.app.IS_BIDANG_TELAAH = res.USER.IS_BIDANG_TELAAH;
                    for (r in res.INSTANSI) {
                        dataModel.set('INSTANSI.'+r,res.INSTANSI[r]);
                    }
                    for (r in res.akses) {
                        dataModel.set('akses.'+r,res.akses[r]);
                    }
                    if(res.message!=undefined){
                        dataModel.set('message',res.message);
                    }
                }
            },
            failure: function(form) {
                Ext.Msg.alert('Error', form.responseText);
                return false;
            }
        });
    },


    set_indonesia : function(){
         localStorage.setItem("lang", 'id');
         window.location.reload();
    },

    set_english : function(){
         localStorage.setItem("lang", 'en');
         window.location.reload();
    },

    get_data_bahasa: function() {
        me = this;
        var langValue = localStorage.getItem("lang");
        if(langValue==""){
            localStorage.setItem("lang", 'id');
        }
        console.log(langValue);
        Ext.Ajax.request({

            url : '../api/language/'+ langValue +'_lang.js',
            success: function(form, action, value) {
                var success_opt = true;
                try {
                    res = Ext.JSON.decode(form.responseText);
                } catch (err) {
                    var success_opt = false;
                    Ext.Msg.alert('Error', form.responseText);
                }
                if (success_opt) {
                    var dataBahasa = me.getViewModel();
                    var menu = me.getViewModel();
                    for (r in res.language) {
                        dataBahasa.set('language.'+r,res.language[r]);
                       
                    }                   
                }
            },
            failure: function(form) {
                Ext.Msg.alert('Error', form.responseText);
                return false;
            }
        });
    },
    showSandiForm : function(){
        var me = this,
        windowForm = Ext.create('koyoku.view.master.pengguna.Form_pengguna_ubah');
        windowForm.show();
        var dataModel = me.getViewModel();
        form = Ext.getCmp('window_form_pengguna_ubah').down('form');
        var dataModel = me.getViewModel();
        form.getForm().setValues(dataModel.data.USER);

    },

    save: function(ths) {
        var me = this,
        cmp = Ext.getCmp("page_pengguna"),
        windowForm = Ext.getCmp('window_form_pengguna');
        form = windowForm.down("form");
        if (form.isValid()) {
            form.submit({
                url:  api.apiurl + '/Pengguna/save',
                success: function(form, action) {
                    var success_opt = true;
                    try {
                        res = Ext.JSON.decode(action.response.responseText);
                    } catch (err) {
                        var success_opt = false;
                        Ext.Msg.alert('Error', form.responseText);
                    }
                    if (success_opt) {
                        if (res.success) {
                            var store = Ext.getStore("listPengguna");
                            store.load();
                            windowForm.destroy();
                        }
                        Ext.Msg.alert('Informasi', res.msg);
                    }
                },
                failure: function(form, action) {
                    Ext.Msg.alert('Error', action.response);
                    return false;
                }
            });
        } else {
            Ext.Msg.alert('Informasi', 'Form belum diisi dengan lengkap');
        }    
    },

    saveupd: function(ths) {
        var me = this,
        cmp = Ext.getCmp("page_pengguna"),
        windowForm = Ext.getCmp('window_form_pengguna_ubah');
        form = windowForm.down("form");
        if (form.isValid()) {
            form.submit({
                url:  api.apiurl + '/Pengguna/saveupd',
                success: function(form, action) {
                    var success_opt = true;
                    try {
                        res = Ext.JSON.decode(action.response.responseText);
                    } catch (err) {
                        var success_opt = false;
                        Ext.Msg.alert('Error', form.responseText);
                    }
                    if (success_opt) {
                        if (res.success) {
                            var store = Ext.getStore("listPengguna");
                            if(store!=undefined){
                                store.load();    
                            }
                            windowForm.destroy();
                        }
                        Ext.Msg.alert('Informasi', res.msg);
                    }
                },
                failure: function(form, action) {
                    Ext.Msg.alert('Error', action.response);
                    return false;
                }
            });
        } else {
            Ext.Msg.alert('Informasi', 'Form belum diisi dengan lengkap');
        }    
    },

});