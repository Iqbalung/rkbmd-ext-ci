Ext.define('koyoku.view.lihat_tki.Riw_medical_full', {
    extend: 'Ext.grid.Panel',
    xtype: 'grid_riw_medical_full',

    requires: [
        'koyoku.store.tki.Medical'
    ],
    store: {
        type: 'medical',
        storeId : 'medical',
        autoLoad: false,
    },
    columns: [{
        text: 'No',
        xtype : 'rownumberer',
        width:60
    },{
        text: 'Tanggal Pemeriksaan',
        dataIndex: 'MEDICAL_PEMERIKSAAN',
        flex: 1,
    },{
        text: 'Status Pemeriksaan',
        dataIndex: 'MEDICAL_STATUS',
        align : 'center',
        flex: 1,
        renderer: function(v) {
            if(v>0){
                return  'Layak';
            }else{
                return 'Tidak Layak'
            }
        },
    },{
        text: 'Sarana Kesehatan',
        dataIndex: 'NAMA',
        flex: 1,
    }],
    
    listeners:{
        itemdblclick:'detail',
    },

    

});