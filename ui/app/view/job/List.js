Ext.define('koyoku.view.job.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'jobList',
    requires: [
        'koyoku.store.Job'
    ],
    store: {
        type: 'listJob',
        storeId: 'listJob',
        autoLoad: true,
        listeners: {
            load: function(ths) {
                var data = ths.data.items;
                kurang = 0;
                terisi = 0;
                kebutuhan = 0;
                data.forEach(function(rec) {
                    kurang += rec.data.KURANG;
                    terisi += rec.data.TERISI;
                    kebutuhan += rec.data.KURANG + rec.data.TERISI;
                });
                var me = Ext.getCmp('page_job');
                if(me!=undefined){
                    me = me.controller;
                     var dataModel = me.getViewModel();
                    dataModel.set('Kurang', kurang);
                    dataModel.set('Terisi', terisi);
                    dataModel.set('Kebutuhan', kebutuhan);
                }              
            }
        },
    },
    columns: [{
        text: 'No',
        xtype: 'rownumberer',
        width: 60
    }, {
        text: 'Jabatan',
        dataIndex: 'JABATAN_NAMA',
        width: 220,
        locked : true,
    }, {
        text: 'Tgl Awal',
        dataIndex: 'JOB_START_DATE',
        width: 100,
        align: 'center',
    }, {
        text: 'Tgl Akhir',
        dataIndex: 'JOB_END_DATE',
        width: 100,
        align: 'center',
    }, {
        text: 'Sisa ',
        dataIndex: 'TERSISA_WAKTU',
        width: 100,
        align: 'center',
    },{
        text: 'Kuota',
        dataIndex: '',
        columns: [{
            text: 'Dibutuhkan',
            dataIndex: 'JOB_KEBUTUHAN',
            align: 'center',
        }, {
            text: 'Terisi',
            dataIndex: 'TERISI',
            align: 'center',
        }, {
            text: 'Kurang',
            dataIndex: 'KURANG',
            align: 'center',
        }, ]
    }, {
        text: 'Owner',
        dataIndex: 'OWNER_NAMA',
        width: 150
    }, {
        text: 'Lokasi Kerja',
        dataIndex: 'WILAYAH_NAMA',
        width: 150
    }, {
        text: 'Barang',
        dataIndex: 'BARANG_NAMA',
        width: 150
    },  {
        text: 'Bidang',
        dataIndex: 'BIDANG_NAMA',
        width: 150
    }, {
        text: 'No. SISKOTKLN',
        dataIndex: 'JOB_SISKOTKLN',
        width: 150
    }],
    bbar: [{
        xtype: 'panel',
        itemId: 'Totalpanel',
        bind: {
            html: '<html><table align=center><tr><td><b>Total Dibutuhkan <b/> : {Kebutuhan}  | </td> <td><b> Total Terisi  <b/>: {Terisi}  |</td><td><b> Total Kekurangan  <b/>: {Kurang} </td></tr></table></html> '
        },
    }],
    listeners: {
        itemdblclick: 'detail',
    },



});