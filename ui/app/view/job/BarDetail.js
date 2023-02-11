    Ext.define('koyoku.view.job.BarDetail', {
        extend: 'Ext.form.Panel',
        xtype: 'bar_detail',
        padding: 10,
        bind: {
            html: '<table width="100%"><tr>' +
                '<td><span style="font-size:20px;font-weight:bold;">{detail.JABATAN_NAMA}</span><br>' +
                '<span>{detail.BIDANG_NAMA}</span></td>' +
                '<td>{detail.JOB_START_DATE}<br>Mulai</td>' +
                '<td>{detail.JOB_END_DATE}<br>Selesai</td>' +
                '<td width="10%">{detail.TERSISA_WAKTU}<br>Sisa</td>' +
                '<td align="center"><span  style="font-size:18px;font-weight:bold;">{detail.TERISI}</span><br>Terisi</td>' +
                '<td align="center"><span  style="font-size:18px;font-weight:bold;">{detail.JOB_KEBUTUHAN}</span><br>Dibutuhkan</td>' +
                '<td width="20%"><span  style="font-size:12px;font-weight:bold;">{detail.BARANG_NAMA}</span><br>Barang</td>' +
                '<td width="20%"><span  style="font-size:12px;font-weight:bold;">{detail.OWNER_NAMA}</span><br>Job Owner, {detail.WILAYAH_NAMA}</td>' +
                '</tr></table>',
        },
        items: [{
            name: 'JOB_ID',
            xtype:'hiddenfield',
        }, /*{
            xtype: 'fieldcontainer',
            layout: 'column',
            items: [{
                xtype: 'fieldcontainer',
                columnWidth: 0.5,
                defaults: {
                    xtype: 'displayfield'
                },
                items: [{
                    name: 'OWNER_NAMA'
                }, {
                    name: 'BARANG_NAMA'
                }, {
                    name: 'WILAYAH_NAMA'
                }, {
                    name: 'JABATAN_NAMA'
                }, {
                    name: 'BIDANG_NAMA'
                }, {
                    xtype: 'fieldcontainer',
                    layout: 'hbox',
                    padding: 2,
                    items: [{
                        xtype: 'displayfield',
                        name: 'JOB_START_DATE',
                        renderer: function(value, field) {
                            return '<span>' + '' + value + '' + ' </span>'
                        }
                    }, {
                        xtype: 'displayfield',
                        value: ' s.d. ',
                        style: {
                            marginRight: '5px',
                            marginLeft: '5px',
                        },
                        renderer: function(value, field) {
                            return '<span>' + '' + value + '' + ' </span>'
                        }
                    }, {
                        xtype: 'displayfield',
                        name: 'JOB_END_DATE',
                        renderer: function(value, field) {
                            return '<span>' + '' + value + '' + ' </span>'
                        }
                    }]
                }],
            }, {
                xtype: 'fieldcontainer',
                columnWidth: 0.5,
                defaults: {
                    xtype: 'displayfield'
                },
                items: [{
                    name: 'TERISI'
                }, {
                    name: 'JOB_KEBUTUHAN'
                }]
            }]
        }*/]
    });