Ext.define('koyoku.view.master.kompetensi.Controller', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.kompetensi',

    onTambahKegiatan: function(ths) {
        var me = this,
            cmp = Ext.getCmp("page_kompetensi"),
            grid = cmp.down("kompetensiList");
        selected = grid.getSelectionModel().getSelection();
        tree = cmp.down('tree_bidang').getSelectionModel().getSelection();

        if (tree.length < 1) {
            Ext.Msg.alert('Peringatan', 'Pilih Bidang Terlebih Dahulu');
            return ;
        }
        
        windowForm = Ext.create('koyoku.view.master.kompetensi.Form_kegiatan',{
            title: 'Tambah Kegiatan'
        });
        form = windowForm.down("form");
        form.reset();
        form.getForm().setValues(tree[0].data);
        
        windowForm.show();
    },

    onUbahKegiatan: function(ths) {
        var me = this,
            cmp = Ext.getCmp("page_kompetensi"),
            grid = cmp.down("kompetensiList");
        selected = grid.getSelectionModel().getSelection();
        tree = cmp.down('tree_bidang').getSelectionModel().getSelection();
        
        windowForm = Ext.create('koyoku.view.master.kompetensi.Form_kegiatan', {
            title: 'Ubah Kegiatan'
        });
        form = windowForm.down("form");

        form.reset();
        if (selected.length > 0) {
            //formactive = Ext.getCmp('page_kompetensi').getLayout().setActiveItem(1);
            windowForm.show();
            form.getForm().setValues(selected[0].data);
            var name = form.down("[name=UPDATE]");
            name.setValue("1");
        } else {
            Ext.Msg.alert('Peringatan', 'Pilih Data Yang Akan Diubah');
        }

    },

    onHapusKegiatan: function() {
        var me = this,

             cmp = Ext.getCmp("page_kompetensi"),
            grid = cmp.down("kompetensiList");
        parent = grid.getSelectionModel().getSelection();

        if (parent.length > 0) {
            var params = {
                KEGIATAN_ID: parent[0].get("KEGIATAN_ID"),
            };
            Ext.Msg.show({
                title: 'Konfirmasi',
                msg: 'Apakah anda yakin akan hapus Data ini ?',
                buttons: Ext.Msg.YESNO,
                fn: function(btn) {
                    if (btn == 'yes') {
                        Ext.Ajax.request({
                            url: "../api/index.php/Kegiatan/del",
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
                                    if (res.success) {
                                        var store = Ext.getStore("listKompetensi");
                                        store.load();
                                    }
                                    Ext.Msg.alert('Informasi', res.msg);
                                }
                            },
                            failure: function(form) {
                                Ext.Msg.alert('Error', form.responseText);
                                return false;
                            }
                        });
                    }
                }
            });
        } else {
            Ext.Msg.alert("Informasi", "Pilih data parent terlebih dahulu");
        }

    },

    onTambahSub: function() {
        cmp = Ext.getCmp("page_kompetensi"),
            grid = cmp.down("kompetensiList");
        me = cmp.down("kompetensiList");
        selected = grid.getSelectionModel().getSelection();
        console.log(selected[0]);
        if (me.length < 1) {
            Ext.Msg.alert('Peringatan', 'Pilih Bidang Terlebih Dahulu');
        } else {
            var windowForm = Ext.create('koyoku.view.master.kompetensi.Form_sub_kegiatan', {
                title: 'Tambah Sub Kegiatan'
            });
            form = windowForm.down("form");
            form.reset();
            form.getForm().setValues(selected[0].data);
            
            windowForm.show();
        }

    },

    onUbahSub: function() {

        var me = this,
            cmp = Ext.getCmp("page_kompetensi"),
            grid = cmp.down("subkompetensiList");
            selected = grid.getSelectionModel().getSelection();
                        
        if (selected.length > 0) {
            var windowForm = Ext.create('koyoku.view.master.kompetensi.Form_sub_kegiatan', {
                title: 'Ubah Sub Kegiatan'
            });            
            var form = windowForm.down("form");
            form.reset();
            windowForm.show();
            form.getForm().setValues(selected[0].data);
            var name = form.down("[name=UPDATE]");
            name.setValue("1");
        } else {
            Ext.Msg.alert('Peringatan', 'Pilih Data Yang Akan Diubah');
        }

    },

    redit: function(editor, context, eOpts) {
        data = context.record.data;
        console.log(data);
        cmp = Ext.getCmp("page_kompetensi"),
            grid = cmp.down("kompetensiList");
        Ext.Ajax.request({
            url: "../api/index.php/Kegiatan/rsave",
            params: data,
            success: function(form, action, data) {
                var success_opt = true;
                try {
                    res = Ext.JSON.decode(form.responseText);
                } catch (err) {
                    var success_opt = false;
                    Ext.Msg.alert('Error', form.responseText);
                }
                if (success_opt) {
                    if (res.success) {
                        var store = Ext.getStore("listKompetensi");
                        store.load();
                    }
                    Ext.Msg.alert('Informasi', res.msg);
                }
            },
            failure: function(form) {
                Ext.Msg.alert('Error', form.responseText);
                return false;
            }
        });

    },
    subredit: function(editor, context, eOpts) {
        data = context.record.data;
        console.log(data);
        cmp = Ext.getCmp("page_kompetensi"),
            grid = cmp.down("subkompetensiList");
        Ext.Ajax.request({
            url: "../api/index.php/SubKegiatan/rsave",
            params: data,
            success: function(form, action, data) {
                var success_opt = true;
                try {
                    res = Ext.JSON.decode(form.responseText);
                } catch (err) {
                    var success_opt = false;
                    Ext.Msg.alert('Error', form.responseText);
                }
                if (success_opt) {
                    if (res.success) {
                        var store = Ext.getStore("sublistKompetensi");
                        store.load();
                    }
                    Ext.Msg.alert('Informasi', res.msg);
                }
            },
            failure: function(form) {
                Ext.Msg.alert('Error', form.responseText);
                return false;
            }
        });

    },

    
    edit: function(ths) {
        this.resetReport();
    },

    save: function(ths) {
        var me = this,
        cmp = Ext.getCmp("page_kompetensi"),
        windowForm = Ext.getCmp('window_form_kegiatan');
        form = windowForm.down("form");
        if (form.isValid()) {
            form.submit({
                url: 'http://localhost:8888/project/rkbmd/api/index.php/Kegiatan/save',
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
                            var store = Ext.getStore("listKompetensi");
                            store.load();
                            windowForm.destroy()
  

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

    saveSub: function(ths) {
        var me = this,
        cmp = Ext.getCmp("page_kompetensi"),
        windowForm = Ext.getCmp("window_form_sub_kegiatan"),
        form = windowForm.down("form");
        if (form.isValid()) {
            form.submit({
                url: 'http://localhost:8888/project/rkbmd/api/index.php/SubKegiatan/save',
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
                            var store = Ext.getStore("sublistKompetensi");
                            store.load();
                            windowForm.destroy()

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

    
    delete_sub : function() {
        cmp = Ext.getCmp("page_kompetensi"),
        grid = cmp.down("subkompetensiList");
        me = cmp.down("kompetensiList");
        selected = grid.getSelectionModel().getSelection();
        console.log(selected[0].data)
        if (selected.length > 0) {
            var params = {
                SUB_KEGIATAN_ID:selected[0].data.SUB_KEGIATAN_ID,
            };
            Ext.Msg.show({
                    title: 'Konfirmasi',
                    msg: 'Apakah anda yakin akan hapus Data ini ?',
                    buttons: Ext.Msg.YESNO,
                    fn: function(btn) {
                        if (btn == 'yes') {                         
                            Ext.Ajax.request({
                                url: "../api/index.php/SubKegiatan/del",                
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
                                        if (res.success) {                                                                                                  
                                            var store = Ext.getStore("sublistKompetensi");
                                            store.load();                                                                 
                                        }
                                        Ext.Msg.alert('Informasi', res.msg);
                                    }
                                },
                                failure: function(form) {
                                    Ext.Msg.alert('Error', form.responseText);
                                    return false;
                                }
                            });
                        }
                    }
                });
        }else{
            Ext.Msg.alert("Informasi","Pilih data terlebih dahulu");
        }
        
    },

    resetReport: function() {

    },

    /* Form */
    kembali: function(ths) {
        Ext.getCmp('page_kompetensi').getLayout().setActiveItem(0);
        Ext.getCmp('page_kompetensi').setTitle("Jabatan");
    },

    bidang: function(ths) {
        var me = this,
            cmp = Ext.getCmp("page_kompetensi"),
            windowForm = cmp.window;
        windowForm.show();
    },


    simpanItems: function() {

    },

    onTambahOutput: function() {
        cmp = Ext.getCmp("page_kompetensi"),
            grid = cmp.down("subkompetensiList");
        me = cmp.down("subkompetensiList");
        selected = grid.getSelectionModel().getSelection();
        console.log(selected[0]);
        if (me.length < 1) {
            Ext.Msg.alert('Peringatan', 'Pilih Sub Kegiatan Terlebih Dahulu');
        } else {
            var windowForm = Ext.create('koyoku.view.master.kompetensi.Form_output', {
                title: 'Tambah Output'
            });
            form = windowForm.down("form");
            form.reset();
            form.getForm().setValues(selected[0].data);
            
            windowForm.show();
        }

    },

    onUbahOutput: function() {

        var me = this,
            cmp = Ext.getCmp("page_kompetensi"),
            grid = cmp.down("outputSubKegiatanList");
            selected = grid.getSelectionModel().getSelection();
                        
        if (selected.length > 0) {
            var windowForm = Ext.create('koyoku.view.master.kompetensi.Form_output', {
                title: 'Ubah Output'
            });            
            var form = windowForm.down("form");
            form.reset();
            windowForm.show();
            form.getForm().setValues(selected[0].data);
            var name = form.down("[name=UPDATE]");
            name.setValue("1");
        } else {
            Ext.Msg.alert('Peringatan', 'Pilih Data Yang Akan Diubah');
        }

    },

    saveOutput: function(ths) {
        var me = this,
        cmp = Ext.getCmp("page_kompetensi"),
        windowForm = Ext.getCmp("window_form_output"),
        form = windowForm.down("form");
        if (form.isValid()) {
            form.submit({
                url: 'http://localhost:8888/project/rkbmd/api/index.php/OutputSubKegiatan/save',
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
                            var store = Ext.getStore("subOutputSubKegiatan");
                            store.load();
                            windowForm.destroy()

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

    onDeleteOutput : function() {
        var me = this,
            cmp = Ext.getCmp("page_kompetensi"),
            grid = cmp.down("outputSubKegiatanList");        
            selected = grid.getSelectionModel().getSelection();
        
        if (selected.length > 0) {
            var params = {
                OUTPUT_ID:selected[0].data.OUTPUT_ID,
            };
            Ext.Msg.show({
                    title: 'Konfirmasi',
                    msg: 'Apakah anda yakin akan hapus Data ini ?',
                    buttons: Ext.Msg.YESNO,
                    fn: function(btn) {
                        if (btn == 'yes') {                         
                            Ext.Ajax.request({
                                url: "../api/index.php/OutputSubKegiatan/del",                
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
                                        if (res.success) {                                                                                                  
                                            var store = Ext.getStore("subOutputSubKegiatan");
                                            store.load();                                                                 
                                        }
                                        Ext.Msg.alert('Informasi', res.msg);
                                    }
                                },
                                failure: function(form) {
                                    Ext.Msg.alert('Error', form.responseText);
                                    return false;
                                }
                            });
                        }
                    }
                });
        }else{
            Ext.Msg.alert("Informasi","Pilih data terlebih dahulu");
        }
        
    },

    outputredit: function(editor, context, eOpts) {
        data = context.record.data;
        console.log(data);
        cmp = Ext.getCmp("page_kompetensi"),
            grid = cmp.down("outputSubKegiatanList");
        data.UPDATE = 1;
        Ext.Ajax.request({
            url: "../api/index.php/OutputSubKegiatan/save",
            params: data,
            success: function(form, action, data) {
                var success_opt = true;
                try {
                    res = Ext.JSON.decode(form.responseText);
                } catch (err) {
                    var success_opt = false;
                    Ext.Msg.alert('Error', form.responseText);
                }
                if (success_opt) {
                    if (res.success) {
                        var store = Ext.getStore("subOutputSubKegiatan");
                        store.load();
                    }
                    Ext.Msg.alert('Informasi', res.msg);
                }
            },
            failure: function(form) {
                Ext.Msg.alert('Error', form.responseText);
                return false;
            }
        });

    },

});