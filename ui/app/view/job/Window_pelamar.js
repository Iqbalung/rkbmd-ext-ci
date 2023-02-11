Ext.define('koyoku.view.job.Window_pelamar', {
    extend: 'Ext.Window',
    alias: 'widget.Window_pelamar',
    xtype: 'Window',
    rec: {},
    initComponent: function() {
        var me = this;
        Ext.apply(me, {
                padding: 10,
                modal: true,
                width: 1200,
                bind : { title : '{language.caripekerja}', },
                closeAction: 'hide',
                items: [{
                    xtype: 'fieldcontainer',
                    layout: 'column',
                    items: [{
                        xtype: 'textfield',
                        name: 'KEYWORD',
                        padding: 2,
                        emptyText: 'Cari',
                        triggerAction: 'all',
                        typeAhead: true,
                        queryMode: 'remote',
                        minChars: 2,
                        listeners: {
                            specialkey: function(field, e) {
                                if (e.getKey() == e.ENTER) {
                                
                                    cmp = Ext.getCmp("page_job"),
                                    grid = windowForm.down("pelamarListNonKerja");
                                    storePelamar = grid.getStore();
                                    storePelamar.proxy.extraParams = {
                                        KEYWORD: field.lastValue
                                    };
                                    storePelamar.load();
                                }
                            }
                        }
                    }, {
                        xtype: 'combo_jenis_kelamin',
                        name: 'JENIS_KELAMIN',
                        padding: 2,
                        listeners: {
                        select: function(combo, record, index) {
                          
                          cmp = Ext.getCmp("page_job"),
                            grid = windowForm.down("pelamarListNonKerja");
                            storePelamar = grid.getStore();
                            storePelamar.proxy.extraParams = {
                                JENIS_KELAMIN: record.data.ID
                            };
                            storePelamar.load();
                        }
                      }

                    }]
                }, {
                    xtype: 'pelamarListNonKerja',
                    height:300,                    
                    region: 'center'
                }],
                buttons: [{
                    bind : { text: '{language.pilihpekerja}', },
                    handler: function() {
                        var me = this,

                            cmp = Ext.getCmp("page_job"),
                            grid = cmp.down("pelamarListNonKerja");
                        selection = windowForm.down('pelamarListNonKerja').getSelectionModel().getSelection();
                        data_pelamar = selection.map(function(key, index) {
                            return key.data
                        });
                        Ext.Msg.confirm('Konfirmasi', 'Apakah anda yankin menambahkan pegawai ke daftar lamaran', function(e) {
                            if (e == 'yes') {
                                var ID = cmp.down('#second_form_job').down('bar_detail').down('[name=JOB_ID]').getValue();
                                data_pelamar = data_pelamar.map(function(rec){
                                    rec.PEKERJA_ID = rec.ID;
                                    return rec; 
                                });
                                data_pelamar = JSON.stringify(data_pelamar);
                                Ext.Ajax.request({
                                    url: "../api/index.php/Pekerja/addtolamaran",
                                    params: {
                                        DATA: data_pelamar,
                                        JOB_ID: ID,
                                        STATUS_ID:"1."
                                    },
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
                                                cmp = Ext.getCmp("page_job"),
                                                gridPelamar = cmp.down("pelamarList");
                                                gridJob = cmp.down("jobList");
                                                store = gridPelamar.getStore()
                                                storejob = gridJob.getStore()
                                                windowForm.hide();
                                                store.load();
                                                storejob.load();
                                            }
                                            Ext.Msg.alert('Informasi', res.msg);

                                        }
                                    },
                                    failure: function(form) {
                                        Ext.Msg.alert('Error', form.responseText);
                                        return false;
                                    }
                                })
                            }
                        });



                    },
                }],
            }),
            me.callParent([arguments]);
    },
});