Ext.define('koyoku.view.job.Controller', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.job',
    
    add: function(ths) {
        var me = this,
            cmp = Ext.getCmp("page_job"),
            form = Ext.getCmp('page_job').setActiveItem(1);
            gridAlat = cmp.down("alatListJob");
        gridLing = cmp.down("lingkunganListJob");
        gridAlat = cmp.down("alatListJob");
        gridLing = cmp.down("lingkunganListJob");
        storeAlat = gridAlat.getStore();
        storeAlat.proxy.extraParams = {
            JOB_ID: '0'
        };
        storeLing = gridLing.getStore();
        storeLing.proxy.extraParams = {
            JOB_ID: '0'
        }
        storeAlat.load();
        storeLing.load();
        form = cmp.down('form').getForm();
        form.reset();
    },

    upd: function(ths) {
        var me = this,
            cmp = Ext.getCmp("page_job"),
            form = cmp.down('form').getForm();
        form.reset();
        grid = cmp.down("jobList");
        selected = grid.getSelectionModel().getSelection();
        combohard = cmp.down('#main_form_job').down('[name=KOMPETENSI_NAMA]');
        cmp.down('combo_jabatan').getStore().load();
        cmp.down('combo_job_owner').getStore().load();
        cmp.down('combo_agency').getStore().load();
        cmp.down('combo_tingkatpendidikan').getStore().load();
        cmp.down('combo_jenis_kelamin').getStore().load();
        storeCombohard = combohard.getStore();
        storeCombohard.proxy.extraParams = {
            JABATAN_ID: selected[0].data.JABATAN_ID
        };
        gridAlat = cmp.down("alatListJob");
        gridLing = cmp.down("lingkunganListJob");
        storeAlat = gridAlat.getStore();
        storeAlat.proxy.extraParams = {
            JOB_ID: selected[0].data.JOB_ID
        };
        storeLing = gridLing.getStore();
        storeLing.proxy.extraParams = {
            JOB_ID: selected[0].data.JOB_ID
        }
        storeCombohard.load();
        storeCombohard.on('load', function() {
            combohard.setValue(combohard.getStore().collect(combohard.valueField));
        });
        storeAlat.load();
        storeLing.load();
        if (selected.length > 0) {
            formactive = Ext.getCmp('page_job').getLayout().setActiveItem(1);
            form.setValues(selected[0].data);
            var name = forme.down("[name=UPDATE]");

        } else {
            Ext.Msg.alert('Peringatan', 'Pilih Data Yang Akan Diubah');
        }
    },

    edit: function(ths) {
        this.resetReport();
    },

    save: function(ths) {
        var me = this,
            cmp = Ext.getCmp('page_job'),
            form = cmp.down('form').getForm();
        tableAlat = cmp.down('alatListJob').getStore().getRange();
        tableLingkungan = cmp.down('lingkunganListJob').getStore().getRange();
        //ambil kompetensi softskill dari combo
        data_alat = tableAlat.map(function(key, index) {
            return key.data
        });

        //ambil data lingkungan kerja
        data_lingkungan = tableLingkungan.map(function(key, index) {
            return key.data
        });

        //ambil kompetensi softskill dari combo
        //data_kompetensi = form.down('#pencarian_kompetensi').getValue();
        //ambil kompetensi hardkill dari combo
        gridAlat = cmp.down("alatListJob");
        store = gridAlat.getStore();
        data_alat = JSON.stringify(data_alat);
        //data_kompetensi = JSON.stringify(data_kompetensi);
        data_lingkungan = JSON.stringify(data_lingkungan);

        if (form.isValid()) {
            form.submit({
                url:  api.siteurl + '/Job/save',
                params: {
                    DATA_ALAT: data_alat,
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
                            var store = Ext.getStore("listJob");
                            store.load();
                            form = Ext.getCmp('page_job').getLayout().setActiveItem(0);
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


    load: function() {
       var columns = [{
            text: 'No',
            xtype: 'rownumberer',
            width: 60
        }, {
            text : 'jabatan',
            dataIndex: 'JABATAN_NAMA',
            width: 220,
            locked : true,
        }, {
            text: 'start',
            dataIndex: 'JOB_START_DATE',
            width: 100,
            align: 'center',
        }, {
            text: 'end',
            dataIndex: 'JOB_END_DATE',
            width: 100,
            align: 'right',
        }, {
            text: 'sisa',
            dataIndex: 'TERSISA_WAKTU',
            width: 100,
            align: 'center',
        },{
            text: 'kuota',
            dataIndex: '',
            columns: [{
                text: 'dibutuhkan',
                dataIndex: 'JOB_KEBUTUHAN',
                align: 'center',
            }, {
                text: 'terisis',
                dataIndex: 'TERISI',
                align: 'center',
            }, {
                text: 'kurang',
                dataIndex: 'KURANG',
                align: 'center',
            }, ]
        }, {
            text: 'owner',
            dataIndex: 'OWNER_NAMA',
            width: 150
        }, {
            text: 'lokasi',
            dataIndex: 'WILAYAH_NAMA',
            width: 150
        }, {
            text: 'agensi',
            dataIndex: 'BARANG_NAMA',
            width: 150
        },  {
            text: 'bidang',
            dataIndex: 'BIDANG_NAMA',
            width: 150
        }, {
            text: 'nosiskot',
            dataIndex: 'JOB_SISKOTKLN',
            width: 150
        }];
        var me = Ext.getCmp('page_job');
        var dataModel = me.getViewModel().data.language.gridjob;
        /*cmp = Ext.getCmp("page_job"),
        grid = cmp.down("jobList");
        store_fields = grid.getStore();
            var col = columns.map(function(value, items) {
                value.text = dataModel[value.text];
                return value;
            });
        grid.reconfigure(store_fields, col);*/
    },

    delete: function() {
        var me = this,

            cmp = Ext.getCmp("page_job"),
            grid = cmp.down("jobList");
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
                                        var store = Ext.getStore("listJob");
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

    onTambah: function() {
        cmp = Ext.getCmp("page_job"),
            grid = cmp.down("alatListJob");
        me = cmp.down("alatListJob");
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

    detail: function() {
        var me = this,
            cmp = Ext.getCmp("page_job"),
            form = Ext.getCmp('page_job').setActiveItem(2);
        grid = cmp.down("jobList");
        var rec = grid.getSelectionModel().getSelection()[0];
        
        gridPelamar = cmp.down("pelamarList");
        storePelamar = gridPelamar.getStore();
        storePelamar.proxy.extraParams = {
            JOB_ID: rec.data.JOB_ID
        };
        storePelamar.load();
        display = cmp.down('#second_form_job').down('bar_detail').getForm().setValues(rec.data);
        storePelamar.on("load",function(store){
            
        })
        var dataModel = me.getViewModel();
        for (r in rec.data) {
            dataModel.set('detail.'+r,rec.data[r]);
        }
    },

    onTambahPelamar: function() {
        var me = this,
            cmp = Ext.getCmp("page_job");
        windowForm = Ext.create('koyoku.view.job.Window_pelamar');
        form = windowForm.down("form");
        windowForm.show();
    },

    onTambahLingkungan: function() {
        cmp = Ext.getCmp("page_job"),
            grid = cmp.down("lingkunganListJob");
        me = cmp.down("lingkunganListJob");
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

    deleteAlat: function() {
        cmp = Ext.getCmp("page_job"),
            grid = cmp.down("alatListJob");
        var rec = grid.getSelectionModel().getSelection()[0];
        grid.getStore().remove(rec);
    },

    deleteling: function() {
        cmp = Ext.getCmp("page_job"),
            grid = cmp.down("lingkunganListJob");
        grid.getStore().remove(rec);
        var rec = grid.getSelectionModel().getSelection()[0];
        grid.getStore().remove(rec);
    },

    select_jabatan: function(combo, records) {
        cmp = Ext.getCmp("page_job");
        combohard = cmp.down('#main_form_job').down('[name=KOMPETENSI_NAMA]');
        storeCombohard = combohard.getStore();
        storeCombohard.proxy.extraParams = {
            JABATAN_ID: records.data.JABATAN_ID
        };
        cmp = Ext.getCmp('page_job'),
            form = cmp.down('form_syarat_jabatan').getForm();
        form.setValues(records.data);
        form = cmp.down('form').getForm();
        form.setValues(records.data);

        gridAlat = cmp.down("alatListJob");
        gridLing = cmp.down("lingkunganListJob");
        storeAlat = gridAlat.getStore();
        storeAlat.proxy.extraParams = {
            JABATAN_ID: records.data.JABATAN_ID
        };
        storeLing = gridLing.getStore();
        storeLing.proxy.extraParams = {
            JABATAN_ID: records.data.JABATAN_ID
        };
        storeAlat.load();
        storeLing.load();
        storeCombohard.load();
        storeCombohard.on('load', function() {
            combohard.setValue(combohard.getStore().collect(combohard.valueField));
        });


    },


    select_bidang: function(combo, records) {
        cmp = Ext.getCmp("page_job");
        combohard = cmp.down('#main_form_job').down('combo_bidang');
        storeCombohard = combohard.getStore();
        storeCombohard.proxy.extraParams = {
            BIDANG_ID: records.data.BIDANG_ID
        };
        var store = Ext.getStore("listJob");
        store.load();
    },


    select_date: function(combo, records) {
        cmp = Ext.getCmp("page_job");
        data = me.getViewModel().data;
        start = Ext.getCmp("page_job").down('#job_start').lastValue;
        end = Ext.getCmp("page_job").down('#job_end').lastValue;
        keyword = Ext.getCmp("page_job").down('#pencarian_job').getValue()
        grid = cmp.down("jobList");
        gridSatker = cmp.down("tree_bidang");
        wilayahSelected = gridSatker.getSelectionModel().getSelection();
         if (wilayahSelected.length > 0) {
            var satkerData = wilayahSelected[0];
         }
        
        store = grid.getStore();
        if (wilayahSelected.length > 0) {
            store.proxy.extraParams = {
                JOB_START_DATE: start,
                JOB_END_DATE: end,
                BIDANG_ID:  satkerData.get("BIDANG_ID"),
                PPTKIS_ID:  data.USER.PPTKIS_ID+'.',
                KEYWORD: keyword,
            };
        }else{
             store.proxy.extraParams = {
                JOB_START_DATE: start,
                JOB_END_DATE: end,
                KEYWORD: keyword,
            };

        }

        store.load();



    },

    resetReport: function() {

    },

    /* Form */
    kembali: function(ths) {
        Ext.getCmp('page_job').getLayout().setActiveItem(0);
    },

    bidang: function(ths) {
        var me = this,
            cmp = Ext.getCmp("page_job"),
            windowForm = cmp.window;
        windowForm.show();
    },

    simpanItems: function() {

    },

    select_statuspurna: function() {
        console.log("test");
    },

    

});