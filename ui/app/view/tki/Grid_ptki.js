Ext.define('koyoku.view.tki.Grid_ptki', {
	extend: 'Ext.grid.Panel',
	xtype: 'grid_ptki',
	requires: [

	],
	initComponent: function() {
		var me = this;
		Ext.apply(me, {
			store: Ext.create('koyoku.store.lamaran.Store', {
				storeId: 'store_purna',
				autoLoad: true,
				listeners: {
					beforeload: function(store, operation, eOpts) {
						var cmp = Ext.getCmp("page_tki"),
							data = cmp.controller.getViewModel().data;
						store.proxy.extraParams.STATUS = '4.';						
					}
				}
			})
		});
		me.callParent([arguments]);
	},
	columns: [{
		text: 'No',
		xtype: 'rownumberer',
		width: 60
	}, {
		text: 'Kode Barang',
		dataIndex: 'ID',
		hidden : true,
		width: 100
	},{
		text: 'Register',
		dataIndex: 'NAMA_PEKERJA',
		width : 200,
		locked   : true,
	},{
		text: 'Nama/Jenis Barang',
		dataIndex: 'JENIS_KELAMIN',
		width: 100,
		align : 'center'
	},{
		text: 'Merek',
		dataIndex: 'UMUR',
		width: 100,
		align : 'center'
	},{
		text: 'NO SERTIFIKAT/PABRIK/MESIN',
		dataIndex: 'JABATAN_NAMA',
		width: 200
	},{
		text: 'Asal Perolehan',
		dataIndex: 'BARANG_NAMA',
		width: 200
	}, {
		text: 'Tahun Perolehan',
		dataIndex: 'OWNER_NAMA',
		width: 200
	},{
		text: 'Jml Barang',
		dataIndex: 'WILAYAH_NAMA',
		width: 120
	},{
		text: 'Harga',
		dataIndex: 'PERJANJIAN_START',
		width: 150,
		align : 'center'
	},{
		text: 'Rencana Pemindahtangan',
		dataIndex: 'PERJANJIAN_END',
		width: 150,
		align : 'center'
	},{
		text: 'Rencana Penghapusan',
		dataIndex: 'KEPULANGAN',
		width: 150
	},{
		text: 'Keterangan',
		dataIndex: 'KETERANGAN',
		width: 120
	},/* {
		text: 'Konfirmasi Kepulangan',
		dataIndex: 'PURNA',
		align: 'center',
		width: 220,
		locked : true,
		renderer : function(v){
			if(v){
				return '<i class="fa fa-check-circle" aria-hidden="true" style="margin:5px 0;font-size:18px;color:#ef0212;"></i>';
					} else {
						return '<i class="fa fa-circle" aria-hidden="true" style="margin:5px 0;font-size:18px;color:#999;"></i>';
					}
		}
	} */],
	bbar: [{
        xtype: 'pagingtoolbar',
        store: 'store_purna',
        flex:1,
        displayInfo: true
    }],
});