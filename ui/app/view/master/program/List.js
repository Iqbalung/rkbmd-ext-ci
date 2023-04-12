Ext.define('koyoku.view.master.program.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'programList',

    requires: [
        'koyoku.store.Program'
    ],
    store: {
        type: 'listProgram',
        storeId : 'listProgram',
        autoLoad: true,
    },
    columns: [{
        text: 'No',
        xtype : 'rownumberer',
        width: 60,
    },{
        text: 'Nama Program',
        dataIndex: 'PROGRAM_NAMA',
        flex: 1
    },],
    listeners:{
        itemdblclick:'upd',
    }
});