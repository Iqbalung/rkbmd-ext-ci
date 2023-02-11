    Ext.define('koyoku.view.job.Form_jabatan', {
        extend: 'Ext.form.Panel',
        xtype: 'form_job_jabatan',
        requires: [
            'koyoku.components.combo.Jabatan',
            'koyoku.components.combo.Job_owner',
            'koyoku.components.combo.Kontrak',
            'koyoku.components.combo.Karir',
            'koyoku.components.combo.Barang',
            'koyoku.components.combo.Matauang'
        ],
        bodyPadding: 5,
        items: [{
            xtype: 'hiddenfield',
            name: 'JOB_ID',
        }, {
            xtype: 'fieldcontainer',
            layout: 'column',
            items: [{
                xtype: 'fieldcontainer',
                columnWidth: 0.5,
                defaults: {
                    width: '90%',
                    allowBlank: false
                },
                items: [{
                    xtype: 'textfield',
                    bind : { fieldLabel : '{language.jobsiskot}', },
                    name : 'JOB_SISKOTKLN',
                },{
                   xtype: 'combo_job_owner',
                   bind : { fieldLabel : '{language.owner}', },
                }, {
                    xtype: 'combo_agency',
                }, {
                    xtype: 'wilayahfield',
                }, {
                    xtype: 'fieldcontainer',
                    layout: 'column',
                    items: [{
                        bind : { fieldLabel : '{language.gaji}', },
                        xtype: 'numberfield',
                        name: 'JOB_SALARY',
                        allowBlank: false
                    }, {
                        xtype: 'label',
                        padding: 5,
                        text: 's.d.'
                    }, {
                        xtype: 'numberfield',
                        name: 'JOB_SALARY_MAX',
                        allowBlank: false
                    }]
                },{
                    xtype: 'fieldcontainer',
                    layout: 'column',
                    items: [{
                        bind : { fieldLabel : '{language.umur}', },
                        xtype: 'numberfield',
                        name: 'RANGE_START',
                        allowBlank: false
                    }, {
                        xtype: 'label',
                        padding: 5,
                        text: 's.d.'
                    }, {
                        xtype: 'numberfield',
                        name: 'RANGE_END',
                        allowBlank: false
                    }]
                }, {
                    xtype: 'combo_jabatan',
                    bind : { fieldLabel : '{language.jabatan}', },
                    name: 'JOB_JABATAN_ID',
                    listeners: {
                        select: 'select_jabatan'
                    }
                },{
                    xtype: 'textfield',
                    bind : { fieldLabel : '{language.jumlahjam}', },
                    name: 'JOB_RANGEJAM',
                },{
                    xtype: 'textarea',
                    bind : { fieldLabel : '{language.deskirpsi}', },
                    name: 'JABATAN_DESKRIPSI',
                }]
            }, {
                xtype: 'fieldcontainer',
                columnWidth: 0.5,
                defaults: {
                    width: '90%'
                },
                items: [{
                    bind : { fieldLabel : '{language.kuota}', },
                    xtype: 'numberfield',
                    name: 'JOB_KEBUTUHAN',
                    width: '30%',
                    allowBlank: false
                }, {
                    xtype: 'fieldcontainer',
                    layout: 'column',
                    bind : { fieldLabel : '{language.pendaftaran}', },
                    items: [{
                        xtype: 'datefield',
                        name: 'JOB_START_DATE',
                        submitFormat: 'Y-m-d',
                        format: 'd-m-Y',
                    }, {
                        xtype: 'label',
                        padding: 5,
                        text: 's.d.',
                    }, {
                        xtype: 'datefield',
                        name: 'JOB_END_DATE',
                        submitFormat: 'Y-m-d',
                        format: 'd-m-Y',
                    }]
                }, {
                    bind : { fieldLabel : '{language.kontrakkerja}', },
                    hidden:true,
                    xtype: 'combo_kontrak',
                }, {
                    bind : { fieldLabel : '{language.jenjangkarir}', },
                    xtype: 'combo_karir',
                }, {
                    xtype: 'fieldcontainer',
                    bind : { fieldLabel : '{language.fasilitas}', },
                    width: '100%',
                    items: [{
                        xtype: 'checkboxgroup',
                        columns: 3,
                        vertical: true,
                        items: [{
                            bind : { boxLabel : '{language.makan}', },
                            name: 'JOB_FASILITAS_MAKAN',
                            width: 140,
                            inputValue: '1'
                        }, {
                             bind : { boxLabel : '{language.tempattinggal}', },
                            width: 140,
                            name: 'JOB_FASILITAS_TT',
                            inputValue: '1',
                        }, {
                            bind : { boxLabel : '{language.transportasi}', },
                            width: 140,
                            name: 'JOB_FASILITAS_TRANSPORTASI',
                            inputValue: '1'
                        }, {
                            bind : { boxLabel : '{language.kesehatan}', },
                            name: 'JOB_FASILITAS_KESEHATAN',
                            inputValue: '1'
                        }, {
                            boxLabel: 'Liburan',
                            name: 'JOB_FASILITAS_LIBURAN',
                            inputValue: '1'
                        }, {
                            bind : { boxLabel : '{language.komunikasi}', },
                            name: 'JOB_FASILITAS_KOMUNIKASI',
                            inputValue: '1'
                        }, {
                            bind : { boxLabel : '{language.lembur}', },
                            name: 'JOB_FASILITAS_LEMBUR',
                            inputValue: '1'
                        }]
                    }, {
                        bind : { fieldLabel : '{language.lainya}', },
                        xtype: 'textarea',
                        name: 'JOB_FASILITAS_LAINYA',
                        width: '100%',
                        allowBlank: true
                    }],
                }]
            }]
        }]
    });