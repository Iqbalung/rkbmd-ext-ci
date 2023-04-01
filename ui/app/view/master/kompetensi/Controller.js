Ext.define('koyoku.view.master.kompetensi.Controller', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.kompetensi',

    add: function(ths) {
        var me = this,
            cmp = Ext.getCmp("page_kompetensi"),
            grid = cmp.down("kompetensiList");
        selected = grid.getSelectionModel().getSelection();
        tree = cmp.down('tree_bidang').getSelectionModel().getSelection();
        
        windowForm = Ext.create('koyoku.view.master.kompetensi.Form_kompetensi');
        form = windowForm.down("form");
        form.reset();
        form.getForm().setValues(tree[0].data);
        
        windowForm.show();
    },

    onTambah: function() {
        cmp = Ext.getCmp("page_kompetensi"),
            grid = cmp.down("kompetensiList");
        me = cmp.down("kompetensiList");
        tree = cmp.down('tree_bidang').getSelectionModel().getSelection();
        if (tree.length < 1) {
            Ext.Msg.alert('Peringatan', 'Pilih Bidang Terlebih Dahulu');
        } else {
            data = tree[0].data.BIDANG_ID;
            store = grid.getStore();
            length = store.getCount();
            rec_new = {
                BIDANG_ID: data
            };
            if (me.length > 0) {
                for (i = 0; i < me.PARAM.length; i++) {
                    rec_new[me.PARAM[i]] = store.proxy.extraParams[me.PARAM[i]];
                }
            }
            store.insert(length, rec_new);
            me.getSelectionModel().select(length);
            var rec = me.getSelectionModel().getSelection()[0];
            var editor = me.plugins[0];
            editor.startEdit(rec, 0);

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
            windowForm = Ext.create('koyoku.view.master.kompetensi.Form_sub_kegiatan');
            form = windowForm.down("form");
            form.reset();
            form.getForm().setValues(selected[0].data);
            
            windowForm.show();
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

    upd: function(ths) {
         var me = this,
            cmp = Ext.getCmp("page_kompetensi"),
            grid = cmp.down("kompetensiList");
        selected = grid.getSelectionModel().getSelection();
        tree = cmp.down('tree_bidang').getSelectionModel().getSelection();
        
        windowForm = Ext.create('koyoku.view.master.kompetensi.Form_kompetensi');
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
                url: 'http://localhost/project/rkbmd/api/index.php/Kegiatan/save',
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
        windowForm = Ext.create('koyoku.view.master.kompetensi.Form_sub_kegiatan');
        form = windowForm.down("form");
        if (form.isValid()) {
            form.submit({
                url: 'http://localhost/project/rkbmd/api/index.php/SubKegiatan/save',
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

    delete: function() {
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

});