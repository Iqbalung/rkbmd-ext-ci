Ext.define('koyoku.view.profile_tki.Controller', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.profile_tki',
    get_params:function(index){
        var cmp = Ext.getCmp("page_profile_tki");
        return cmp.params[index];
    },

    load_identitas: function(ths) {
        var me = this,
            id = me.getView().params[1],
            cmp = Ext.getCmp('page_profile_tki');

        if (typeof id != 'undefined') {
            ths.load({
                url: 'http://localhost/koyoku/api/index.php/pekerja/get_by_id',
                params: {
                    ID: id
                },
                success: function(form, action) {
                    var success_opt = true;
                    try {
                        res = Ext.JSON.decode(action.response.responseText);
                    } catch (err) {
                        var success_opt = false;
                        Ext.Msg.alert('Error', form.responseText);
                    }
                    if (success_opt) {                      
                        if (!Ext.isEmpty(res.data.PHOTO)) {                           
                            ths.down("#preview_photo").setSrc("../api/uploads/tki/identitas/"+res.data.PHOTO);
                        }                                              
                        if (!Ext.isEmpty(res.data.COVER)) {                           
                            ths.down("#preview_cover").setSrc("../api/uploads/tki/identitas/"+res.data.COVER);
                        }                                     
                    }
                },
                failure: function(form, action) {
                    Ext.Msg.alert('Error', action.response);
                    return false;
                }   
            });
            cmp.down('tabpanel').setHidden(false);
            me.load_riw_kerja();
            me.load_riw_pend();
            me.load_riw_keluarga();
            me.load_media();
            me.load_bidang();
            me.load_kompetensi();
        }else{            
            cmp.down('tabpanel').setHidden(true);
        }
    },

    simpan_identitas: function() {
        var me = this,
            form = t= Ext.getCmp('page_profile_tki').down('form_identitas'),
            cmp = Ext.getCmp('page_profile_tki');
        if (form.isValid()) {
            var myMask = new Ext.LoadMask({
                target: Ext.getCmp('app_main'),
                msg: "Menyimpan Form ..."
            });
            myMask.show();
            id_kompetensi = form.down('#pencarian_kompetensi').getValue();
            text_kompetensi = form.down('#pencarian_kompetensi').getRawValue();
            id_kompetensi = JSON.stringify(id_kompetensi);
            text_kompetensi = text_kompetensi;
            //text_kompetensi = JSON.stringify(text_kompetensi);
            id_bidang = form.down('#pencarian_bidang').getValue();
            text_bidang = form.down('#pencarian_bidang').getRawValue();
            id_bidang = JSON.stringify(id_bidang);
            text_bidang = text_bidang;
            str_kerja = Ext.getCmp('page_profile_tki').down('grid_riw_kerja').getStore();
            str_pend = Ext.getCmp('page_profile_tki').down('grid_riw_pendidikan').getStore();
            str_keluarga = Ext.getCmp('page_profile_tki').down('grid_riw_keluarga').getStore();
            var dataModel = me.getViewModel();
            data_kerja = [];
            if (str_kerja.getCount() > 0) {
                for (var i = str_kerja.getRange().length - 1; i >= 0; i--) {
                    data_kerja[i] = str_kerja.getRange()[i].data;
                }
            }

            data_pend = [];
            if (str_pend.getCount() > 0) {
                for (var i = str_pend.getRange().length - 1; i >= 0; i--) {
                    data_pend[i] = str_pend.getRange()[i].data;
                }
            }

            data_keluarga = [];
            if (str_keluarga.getCount() > 0) {
                for (var i = str_keluarga.getRange().length - 1; i >= 0; i--) {
                    data_keluarga[i] = str_keluarga.getRange()[i].data;
                }
            }

            form.submit({
                url: 'http://localhost/koyoku/api/index.php/pekerja/save',
                params: {
                    data_kerja: JSON.stringify(data_kerja),
                    data_pend: JSON.stringify(data_pend),
                    id_kompetensi: id_kompetensi,
                    text_kompetensi: text_kompetensi,
                    id_bidang: id_bidang,
                    text_bidang: text_bidang,
                    data_keluarga: JSON.stringify(data_keluarga),
                    PPTKIS_ID : dataModel.data.INSTANSI.ID
                },
                success: function(form, action) {
                    var success_opt = true;
                    myMask.hide();
                    try {
                        res = Ext.JSON.decode(action.response.responseText);
                    } catch (err) {
                        var success_opt = false;
                        Ext.Msg.alert('Error', form.responseText);
                    }
                    if (success_opt) {                        
                        Ext.Msg.alert('Informasi', res.msg);
                        me.redirectTo('profile_tki/' + res.id);
                        me.load_identitas(cmp.down("form_identitas"));
                    }
                },
                failure: function(form, action) {
                    myMask.hide();
                    Ext.Msg.alert('Error', action.response);
                    return false;
                }
            });
        }
    },

    load_riw_kerja:function(){
        var me = this,
            cmp = Ext.getCmp('page_profile_tki');
            store = cmp.down('grid_riw_kerja').getStore();
        store.proxy.extraParams = {
            PEKERJA_ID:me.get_params(1)
        };
        store.load();
    },

    add_riw_kerja() {
        grid = Ext.getCmp('page_profile_tki').down('grid_riw_kerja');
        this.add_grid_crud(grid);
    },

    upd_riw_kerja() {
        grid = Ext.getCmp('page_profile_tki').down('grid_riw_kerja');
        this.upd_grid_crud(grid);
    },

    del_riw_kerja() {
        grid = Ext.getCmp('page_profile_tki').down('grid_riw_kerja');
        this.del_grid_crud(grid);
    },


    load_riw_pend:function(){
        var me = this,
            cmp = Ext.getCmp('page_profile_tki');
            store = cmp.down('grid_riw_pendidikan').getStore();
        store.proxy.extraParams = {
            PEKERJA_ID:me.get_params(1)
        };
        store.load();
    },

    add_riw_pend() {
        grid = Ext.getCmp('page_profile_tki').down('grid_riw_pendidikan');
        this.add_grid_crud(grid);
    },

    upd_riw_pend() {
        grid = Ext.getCmp('page_profile_tki').down('grid_riw_pendidikan');
        this.upd_grid_crud(grid);
    },

    add_riw_pend_attch() {
        grid = Ext.getCmp('page_profile_tki').down('grid_riw_pendidikan');
        this.upd_grid_attch(grid);
    },

    del_riw_pend() {
        grid = Ext.getCmp('page_profile_tki').down('grid_riw_pendidikan');
        this.del_grid_crud(grid);
    },

    load_riw_keluarga:function(){
        var me = this,
            cmp = Ext.getCmp('page_profile_tki');
            store = cmp.down('grid_riw_keluarga').getStore();
        store.proxy.extraParams = {
            PEKERJA_ID:me.get_params(1)
        };
        store.load();
    },

    add_riw_keluarga() {
        grid = Ext.getCmp('page_profile_tki').down('grid_riw_keluarga');
        this.add_grid_crud(grid);
    },

    upd_riw_keluarga() {
        grid = Ext.getCmp('page_profile_tki').down('grid_riw_keluarga');
        this.upd_grid_crud(grid);
    },

    del_riw_keluarga() {
        grid = Ext.getCmp('page_profile_tki').down('grid_riw_keluarga');
        this.del_grid_crud(grid);
    },

    /*
        
    */
    add_grid_crud(grid) {
        new_index = grid.getStore().getCount();
        grid.getStore().insert(new_index, {
            ID: ''
        });

        grid.getSelectionModel().select(new_index);
        var rec = grid.getSelectionModel().getSelection()[0];
        var editor = grid.plugins[0];
        editor.startEdit(rec, 0);
    },

    upd_grid_crud(grid) {

        var rec = grid.getSelectionModel().getSelection();
        if (rec.length > 0) {
            var editor = grid.plugins[0];
            editor.startEdit(rec[0], 0);
        } else {
            Ext.Msg.alert('Info', 'Pilih data Terlebih dahulu');
        }
    },

    upd_grid_attch(grid) {

        var rec = grid.getSelectionModel().getSelection();
        if (rec[0].data.ID) {
            var me = this,

            cmp = Ext.getCmp("page_profile_tki"),                        
            windowForm = Ext.create("koyoku.view.profile_tki.Form_media"),
            form = windowForm.down("form");
            windowForm.setTitle("Tambah Media");
            form.reset();                                   
            windowForm.show();   
        } else {
            Ext.Msg.alert('Info', 'Pilih data Terlebih dahulu');
        }
    },

    del_grid_crud(grid) {
        var rec = grid.getSelectionModel().getSelection();
        if (rec.length == 0) {
            Ext.Msg.alert('Info', 'Pilih Terlebih data dahulu');
            return;
        } else {
            Ext.Msg.confirm('Perhatian', 'Yakin ingin menghapus data ini?', function(btn) {
                if (btn == 'yes') {                    
                    grid.getStore().remove(rec[0]);                    
                }
            });
        }
    },

    load_media:function(){
        var me = this,
            cmp = Ext.getCmp('page_profile_tki');
            store = cmp.down('grid_media_pengguna').getStore();
        store.proxy.extraParams = {
            PEKERJA_ID:me.get_params(1)
        };
        store.load();
    },


    load_kompetensi:function(){
        var me = this,
            cmp = Ext.getCmp('page_profile_tki');
            store = cmp.down('grid_riw_kompetensi').getStore();
        store.proxy.extraParams = {
            PEKERJA_ID:me.get_params(1)
        };
        store.load();
    },

    load_bidang:function(){
        var me = this,
            cmp = Ext.getCmp('page_profile_tki');
            store = cmp.down('grid_riw_bidang').getStore();
        store.proxy.extraParams = {
            PEKERJA_ID:me.get_params(1)
        };
        store.load();
    },

    ajaxRequest:function(url,params,callback) {
        Ext.Ajax.request({
            url: "../api/index.php/"+url,
            method:'POST',
            params: params,
            success: function(form, action, value) {
                var success_opt = true;
                try {
                    res = Ext.JSON.decode(form.responseText);
                } catch (err) {
                    var success_opt = false;
                    Ext.Msg.alert('Error', form.responseText);
                }
                if (success_opt) {
                    if (callback) {
                        callback(res)
                    }                   
                }
            },
            failure: function(form) {
                Ext.Msg.alert('Error', form.responseText);
                return false;
            }
        });
    },

    add_media: function(ths) {
        var me = this,
            cmp = Ext.getCmp("page_profile_tki"),                        
            windowForm = Ext.create("koyoku.view.profile_tki.Form_media"),
            form = windowForm.down("form");
        windowForm.setTitle("Tambah Media");
        form.reset();                                   
        windowForm.show();      
    },

    upd_media: function(ths) {
        var me = this,
            cmp = Ext.getCmp("page_profile_tki"),
            grid = cmp.down("grid_media_pengguna");
        selected = grid.getSelectionModel().getSelection();
        if (selected.length > 0) {
            var windowForm = Ext.create("koyoku.view.profile_tki.Form_media");
            var form = windowForm.down("form");
            windowForm.setTitle("Ubah Media");
            var store = form.down("[name=KLASIFIKASI_ID]").getStore();            
            store.load();
            setTimeout(function(){
                store.load(function(){
                    form.getForm().setValues(selected[0].data);
                });
            },500);
            windowForm.show();
        } else {
            Ext.Msg.alert('Peringatan', 'Pilih Data Yang Akan Diubah');
        }

    },

    save_media: function(ths) {
        var me = this;
        var cmp = Ext.getCmp("page_profile_tki"),
            windowForm = Ext.getCmp('window_form_media');
        form = windowForm.down("form");
        if (form.isValid()) {
            form.submit({
                url: 'http://localhost/koyoku/api/index.php/pekerja/save_media',      
                params:{
                    PEKERJA_ID:me.get_params(1),
                },  
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
                            me.load_media();
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

    delete_media: function() {
        var me = this;
        var cmp = Ext.getCmp("page_profile_tki"),
            grid = cmp.down("grid_media_pengguna"),
            rec = grid.getSelectionModel().getSelection();
        if (rec.length > 0) {
            var params = {
                ID: rec[0].get("ID")                
            };
            Ext.Msg.show({
                title: 'Konfirmasi',
                msg: 'Apakah anda yakin akan hapus Data ini ?',
                buttons: Ext.Msg.YESNO,
                fn: function(btn) {
                    if (btn == 'yes') {
                        me.ajaxRequest("pekerja/del_media",params,function(res) {
                            var store = Ext.getStore("store_media_tki");                                                            
                            store.load();
                            Ext.Msg.alert('Informasi', res.msg);
                        });
                    }
                }
            });
        } else {
            Ext.Msg.alert("Informasi", "Pilih data terlebih dahulu");
        }
    },

});