Ext.define('koyoku.view.master.jabatan.Controller', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.jabatan',

    add: function(ths) {
        var me = this,
            cmp = Ext.getCmp("page_jabatan"),

            form = Ext.getCmp('page_jabatan').getLayout().setActiveItem(1);
        cmp = Ext.getCmp("page_jabatan"),
        alatgrid = cmp.down("alatList");
        form1 = cmp.down('main_form_jabatan');
        form1.reset();
        lingkungangrid = cmp.down("lingkunganList");
        storeLingkungan = lingkungangrid.getStore();
        storeLingkungan.proxy.extraParams = {
            JABATAN_ID: ''
        };
        storealat = alatgrid.getStore();
        storealat.proxy.extraParams = {
            JABATAN_ID: ''
        };
        storealat.load();
        storeLingkungan.load();
    },

    upd: function(ths) {
        var me = this,
            cmp = Ext.getCmp("page_jabatan"),
            grid = cmp.down("jabatanList");
        selected = grid.getSelectionModel().getSelection();
        cmp = Ext.getCmp('page_jabatan'),
            form = cmp.down('main_form_jabatan');
        form.reset();
        combohard = form.down('[name=KOMPETENSI_NAMA]');
        storeCombohard = combohard.getStore();
        storeCombohard.proxy.extraParams = {
            JABATAN_ID: selected[0].data.JABATAN_ID
        };
        storeCombohard.load();
        storeCombohard.on('load', function() {
            combohard.setValue(combohard.getStore().collect(combohard.valueField));
        });
        if (selected.length > 0) {
            formactive = Ext.getCmp('page_jabatan').getLayout().setActiveItem(1);
            form.getForm().setValues(selected[0].data);
            var name = form.down("[name=UPDATE]");
            gridAlat = cmp.down("alatList");
            gridLing = cmp.down("lingkunganList");
            storeAlat = gridAlat.getStore();
            storeAlat.proxy.extraParams = {
                JABATAN_ID: selected[0].data.JABATAN_ID
            };
            storeLing = gridLing.getStore();
            storeLing.proxy.extraParams = {
                JABATAN_ID: selected[0].data.JABATAN_ID
            }
            storeAlat.load();
            storeLing.load();
            name.setValue("1");
        } else {
            Ext.Msg.alert('Peringatan', 'Pilih Data Yang Akan Diubah');
        }
    },

    onTambah: function() {
        cmp = Ext.getCmp("page_jabatan"),
            grid = cmp.down("alatList");
        me = cmp.down("alatList");
        store = grid.getStore();
        length = store.getCount();
        rec_new = {};
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
    },

    onTambahLingkungan : function(){
         cmp = Ext.getCmp("page_jabatan"),
            grid = cmp.down("lingkunganList");
        me = cmp.down("lingkunganList");
        store = grid.getStore();
        length = store.getCount();
        rec_new = {};
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

    },

    deleteAlat : function(){
        cmp = Ext.getCmp("page_jabatan"),
        grid = cmp.down("alatList");
        var rec = grid.getSelectionModel().getSelection()[0];
        grid.getStore().remove(rec);
    },

    deleteLing : function(){
        cmp = Ext.getCmp("page_jabatan"),
        grid = cmp.down("lingkunganList");
        grid.getStore().remove(rec);
        var rec = grid.getSelectionModel().getSelection()[0];
        grid.getStore().remove(rec);
    },

    edit: function(ths) {
        this.resetReport();
    },

    save: function(ths) {
        var me = this,
            cmp = Ext.getCmp('page_jabatan'),
            form = cmp.down('main_form_jabatan');
        tableAlat = cmp.down('alatList').getStore().getRange();
        tableLingkungan  = cmp.down('lingkunganList').getStore().getRange();
        //ambil kompetensi softskill dari combo
        data_alat = tableAlat.map(function(key, index) {
            return key.data
        });

        //ambil data lingkungan kerja
        data_lingkungan = tableLingkungan.map(function(key, index){
            return key.data
        });

        //ambil kompetensi softskill dari combo
        data_kompetensi = form.down('#pencarian_kompetensi').getValue();
        //ambil kompetensi hardkill dari combo
        gridAlat = cmp.down("alatList");
        store = gridAlat.getStore();
        data_alat = JSON.stringify(data_alat);
        data_kompetensi = JSON.stringify(data_kompetensi);
        data_lingkungan = JSON.stringify(data_lingkungan);
        if (form.isValid()) {
            form.submit({
                url: 'http://karya-inovasi.com/beta-rkbmd/api/index.php/Jabatan/save',
                params: {
                    DATA_ALAT: data_alat,
                    DATA_KOMPETENSI: data_kompetensi,
                    DATA_LINGKUNGAN: data_lingkungan,
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
                            var store = Ext.getStore("listJabatan");
                            store.load();
                            form = Ext.getCmp('page_jabatan').getLayout().setActiveItem(0);
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

            cmp = Ext.getCmp("page_jabatan"),
            grid = cmp.down("jabatanList");
        parent = grid.getSelectionModel().getSelection();

        if (parent.length > 0) {
            var params = {
                JABATAN_ID: parent[0].get("JABATAN_ID"),
            };
            Ext.Msg.show({
                title: 'Konfirmasi',
                msg: 'Apakah anda yakin akan hapus Data ini ?',
                buttons: Ext.Msg.YESNO,
                fn: function(btn) {
                    if (btn == 'yes') {
                        Ext.Ajax.request({
                            url: "../api/index.php/Jabatan/del",
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
                                        var store = Ext.getStore("listJabatan");
                                        store.load();
                                        grid.windowForm.hide();
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

    resetReport: function() {

    },

    /* Form */
    kembali: function(ths) {
        Ext.getCmp('page_jabatan').getLayout().setActiveItem(0);
        Ext.getCmp('page_jabatan').setTitle("Jabatan");
    },

    bidang: function(ths) {
        var me = this,
            cmp = Ext.getCmp("page_jabatan"),
            windowForm = cmp.window;
        windowForm.show();
    },


    simpanItems: function() {


    },

});