Ext.define('koyoku.view.job.Main', {
    extend: 'Ext.panel.Panel',
    xtype: 'page_job',
    requires: [
        'koyoku.view.job.Controller',
        'koyoku.view.job.JobModel',
        'koyoku.view.job.List',
        'koyoku.view.job.ListPelamar',
        'koyoku.view.job.ListPelamarNonKerja',
        'koyoku.view.job.Form_jabatan',
        'koyoku.view.job.Tabs',
        'koyoku.view.job.BarDetail',
        'koyoku.view.job.Window_pelamar',
        'koyoku.view.master.bidang.Tree_bidang',
        'koyoku.view.master.bidang.Window_bidang',
        'koyoku.view.job.ListAlatJob',
        'koyoku.view.job.ListLingkunganJob',
        'koyoku.view.job.ListAlatJob',
        'koyoku.components.combo.Bidang',
        'koyoku.view.master.jabatan.Form_jabatan',
        'koyoku.view.master.bidang.Window_bidang',
        'koyoku.view.master.bidang.Tree_bidang',
    ],
    controller: 'job',
    viewModel: 'job',

    border: 1,
    id: 'page_job',
    layout: 'card',
    title: 'Lowongan',
    isDetail: false,
    initComponent: function() {
        var me = this;
        me.controller.getViewModel();  
        Ext.apply(me, {
            items: [{
                layout: 'border',
                tbar: [{
                        xtype: 'textfield',
                        itemId: 'pencarian_job',
                        width: 250,
                        emptyText: "Ketik Kata Kunci",
                        listeners: {
                            specialkey: function(field, e) {
                                cmp = Ext.getCmp("page_job"),
                                    gridPelamar = cmp.down("jobList");
                                storePelamar = gridPelamar.getStore()
                                storePelamar.proxy.extraParams = {
                                    KEYWORD: field.lastValue
                                };
                                storePelamar.load();
                            }
                        }
                    }, {
                        xtype: 'fieldcontainer',
                        layout: 'column',
                        items: [{
                            xtype: 'datefield',
                            itemId: 'job_start',
                            name: 'JOB_START_DATE',
                            submitFormat: 'Y-m-d',
                            listeners: {
                                select: 'select_date'
                            }
                        }, {
                            xtype: 'label',
                            padding: 5,
                            text: 's.d.'
                        }, {
                            xtype: 'datefield',
                            itemId: 'job_end',
                            name: 'JOB_END_DATE',
                            submitFormat: 'Y-m-d',
                            listeners: {
                                select: 'select_date'
                            }
                        }]
                    },
                    '->', {
                        bind : { text : '{language.tambah}', },
                        handler: 'add',
                        glyph: 'xf067@fontAwesome'
                    }, {
                        bind : { text : '{language.ubah}', },
                        handler: 'upd',
                        glyph: 'xf044@fontAwesome'
                    }, {
                        bind : { text : '{language.hapus}', },
                        handler: 'delete',
                        glyph: 'xf1f8@fontAwesome'
                    }
                ],
                items: [{
                    title: 'BIDANG',
                    collapsible: true,
                    collapsed: true,
                    xtype: 'tree_bidang',
                    resizable: true,
                    hidden:true,
                    region: 'west',
                    width: 300,
                    listeners: {
                        select: function() {
                            me.pencarian();
                        }
                    }
                }, {
                    xtype: 'jobList',
                    region: 'center'
                }]
            }, {
                xtype: 'form',
                itemId: 'main_form_job',
                layout: 'auto',
                width: 'auto',
                height: 'auto',
                layout: 'auto',
                autoScroll: true,
                tbar: [
                    '->', {
                        bind : { text : '{language.kembali}', },
                        handler: 'kembali',
                        glyph: 'xf060@fontAwesome'
                    }, {
                        bind : { text : '{language.simpan}', },
                        itemId: 'btnSimpan',
                        handler: 'save',
                        glyph: 'xf0c7@fontAwesome'
                    }
                ],
                items: [{
                    xtype: 'form_job_jabatan',
                    width: '100%',
                    height: 'auto'
                }, {
                    xtype: 'tabs_panel3',
                    width: '100%',
                    flex: 1,
                    minHeight: 220,
                }]
            }, {
                xtype: 'form',
                layout: 'border',
                itemId: 'second_form_job',
                autoScroll: true,
                items: [{
                    itemId: 'main_form_job',
                    region: 'north',
                    height: 'auto',
                    width: '100%',
                    tbar: [
                        '->',
                    ],
                    items: [{
                        xtype: 'bar_detail',
                        region: 'center',
                        height: 'auto',
                        width: '100%'
                    }, {
                        xtype: 'pelamarList',
                        region: 'south',
                        height: '100%',
                        autoScroll: 'true',
                        tbar: [{
                                bind : { text : '{language.kembali}', },
                                handler: 'kembali',
                                glyph: 'xf060@fontAwesome'
                            },
                            '->', {
                                bind : { text : '{language.tambah}', },
                                handler: 'onTambahPelamar',
                                glyph: 'xf067@fontAwesome'
                            }
                        ],
                    }]

                }]


            }]
        });
        me.callParent([arguments]);
    },
    pencarian: function() {
        var me = this,
            gridSatker = me.down("tree_bidang"),
            wilayahSelected = gridSatker.getSelectionModel().getSelection(),
            gridList = me.down("jobList"),
            storeList = gridList.getStore();
        storeList.proxy.extraParams.text = me.down('#pencarian_job').getValue();
        if (wilayahSelected.length > 0) {
            var satkerData = wilayahSelected[0];
            storeList.proxy.extraParams.BIDANG_ID = satkerData.get("BIDANG_ID");
        }
        storeList.load();
    }
});
