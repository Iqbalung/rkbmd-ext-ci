Ext.define('koyoku.view.tki.Grid_pendaftar_tki', {
	extend: 'Ext.grid.Panel',
	xtype: 'grid_pendaftar_tki',
	requires: [
		'koyoku.store.lamaran.Store'
	],
	initComponent: function() {
		var me = this;
		Ext.apply(me, {
			store: Ext.create('koyoku.store.lamaran.Store', {
				storeId: 'store_lamaran',
				autoLoad: true,
				listeners: {
					beforeload: function(store, operation, eOpts) {
						var cmp = Ext.getCmp("page_tki"),
							data = cmp.controller.getViewModel().data;
						store.proxy.extraParams.STATUS = '1.';
						/*store.proxy.extraParams.USERGROUP_ID = data.USER.USERGROUP_ID;
						store.proxy.extraParams.PPTKIS_ID = data.USER.PPTKIS_ID;
						store.proxy.extraParams.REKRUITER_ID = data.USER.ID;*/
					},
				}
			}),
			height: 'auto',
			columns: [{
				text: 'No',
				xtype: 'rownumberer',
				width: 60
			}, {
				text: 'No Reg',
				dataIndex: 'ID 2',
				hidden: true,
				width: 100
			}, {
				text: 'Nama',
				dataIndex: 'PENGGUNA BARANG/ PROGRAM/KEGIATAN/ SUB KEGIATAN/ OUTPUT',
				width: 200,
				locked   : true,
			}, {
				text: 'Alamat',
				dataIndex: 'ALAMAT_TINGGAL',
				flex: 1
			}, {
				text: 'L/P',
				dataIndex: 'JENIS_KELAMIN',
				width: 50,
				align : 'center'

			}, {
				text: 'Umur',
				dataIndex: 'UMUR',
				width: 100,
				align : 'center'
			}, {
				text: 'Job',
				hidden: true,
				dataIndex: 'JABATAN_NAMA',
				width: 200
			}, {
				text: 'Barang',
				dataIndex: 'BARANG_NAMA',
				hidden: true,
				width: 200
			}, {
				text: 'Job Owner',
				hidden: true,
				dataIndex: 'OWNER_NAMA',
				width: 200
			}, {
				text: 'Penempatan',
				dataIndex: '',
				hidden: true,
				width: 120
			}, {
				text: 'Medical Pra',
				dataIndex: 'MEDICALPRA',
				width: 200,
				align : 'center',
				renderer: function(v) {
					if (v > 0) {
						return '<i class="fa fa-check-circle" aria-hidden="true" style="margin:5px 0;font-size:18px;color:#ef0212;"></i>';
					} else {
						return '<i class="fa fa-circle" aria-hidden="true" style="margin:5px 0;font-size:18px;color:#999;"></i>';
					}
				}
			}, {
				text: 'KTP',
				dataIndex: 'VALID_KTP',
				width: 70,
				align: 'center',
				renderer: function(v) {
					if (v || 1 == v) {
						return '<i class="fa fa-check-circle" aria-hidden="true" style="margin:5px 0;font-size:18px;color:#ef0212;"></i>';
					} else {
						return '<i class="fa fa-circle" aria-hidden="true" style="margin:5px 0;font-size:18px;color:#999;"></i>';
					}
				}
			}, {
				text: 'Akte',
				dataIndex: 'VALID_AKTA',
				width: 70,
				align: 'center',
				renderer: function(v) {
					if (v || 1 == v) {
						return '<i class="fa fa-check-circle" aria-hidden="true" style="margin:5px 0;font-size:18px;color:#ef0212;"></i>';
					} else {
						return '<i class="fa fa-circle" aria-hidden="true" style="margin:5px 0;font-size:18px;color:#999;"></i>';
					}
				}
			}, {
				text: 'KK',
				dataIndex: 'VALID_KK',
				width: 70,
				align: 'center',
				renderer: function(v) {
					if (v || 1 == v) {
						return '<i class="fa fa-check-circle" aria-hidden="true" style="margin:5px 0;font-size:18px;color:#ef0212;"></i>';
					} else {
						return '<i class="fa fa-circle" aria-hidden="true" style="margin:5px 0;font-size:18px;color:#999;"></i>';
					}
				}
			}, {
				text: 'Surat Izin',
				dataIndex: 'VALID_SURAT_IZIN',
				width: 70,
				align: 'center',
				renderer: function(v) {
					if (v || 1 == v) {
						return '<i class="fa fa-check-circle" aria-hidden="true" style="margin:5px 0;font-size:18px;color:#ef0212;"></i>';
					} else {
						return '<i class="fa fa-circle" aria-hidden="true" style="margin:5px 0;font-size:18px;color:#999;"></i>';
					}
				}
			}],
			bbar: [ {
				xtype: 'pagingtoolbar',
				store: 'store_lamaran',
				flex: 1,
				displayInfo: true
			}]
		});
		me.callParent([arguments]);
	}
});