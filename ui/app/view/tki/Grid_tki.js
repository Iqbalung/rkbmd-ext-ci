Ext.define('koyoku.view.tki.Grid_tki', {
	extend: 'Ext.grid.Panel',
	xtype: 'grid_tki',
	requires: [

	],
	initComponent: function() {
		var me = this;
		Ext.apply(me, {
			store: Ext.create('koyoku.store.lamaran.Store', {
				storeId: 'store_aktif',
				autoLoad: true,
				listeners: {
					beforeload: function(store, operation, eOpts) {
						var cmp = Ext.getCmp("page_tki"),
							data = cmp.controller.getViewModel().data;
						store.proxy.extraParams.STATUS = '3.';
						/*store.proxy.extraParams.USERGROUP_ID = data.USER.USERGROUP_ID;
						store.proxy.extraParams.PPTKIS_ID = data.USER.PPTKIS_ID;
						store.proxy.extraParams.REKRUITER_ID = data.USER.ID;
						store.proxy.extraParams.TEXT_CARI = cmp.down("grid_tki").down("#text_cari").getValue();
						store.proxy.extraParams.JOB_JABATAN_ID = cmp.down("grid_tki").down("#combo_posisi").getValue();*/
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
		text: 'URAIAN/ NAMA BARANG',
		dataIndex: 'ID',
		hidden: true,
		width: 100
	}, {
		text: 'JENIS KIB',
		columns: [
			{ text: 'A',  dataIndex: 'name' },
			{ text: 'B', dataIndex: 'email' },
			{ text: 'C', dataIndex: '2'}
		],
	}, {
		text: 'Keterangan',
		dataIndex: 'NAMA_PEKERJA',
		width: 200
	}],
	viewConfig: {
		getRowClass: function(record, index) {
			if(record.get("DANGER")=="1"){
				return 'hijau';
			}else if(record.get("DANGER")=="2"){
				return 'kuning';
			}else if(record.get("DANGER")=="3"){
				return 'orange';
			}else if(record.get("DANGER")=="4"){
				return 'merah';
			}
		}
	},
	dockedItems: [{
  				xtype : 'panel',
  				dock: 'bottom',
  				html  : '<table><tr>'
  				+'<td>Masa Kontrak Tersisa  : <i class="fa  fa-circle" aria-hidden="true" style="margin:5px; 0;font-size:18px;color:#FFF176;"></i>Kurang dari 3 Bulan</td>'
  				+'<td style="padding-right:15px;"><i class="fa  fa-circle" aria-hidden="true" style="margin:5px ;padding-left:10px;font-size:18px;color:#4DD0E1;"></i>Kurang dari 2 Bulan</td></td>'
  				+'<td style="padding-right:15px;"><i class="fa  fa-circle" aria-hidden="true" style="margin:5px 0;font-size:18px;padding-left:10px;color:#FFA726;"></i>Kurang dari 1 Bulan</td>'
  				+'<td ><i class="fa  fa-circle" aria-hidden="true" style="margin:5px 0;font-size:18px;color:#FF8A80;padding-left:10px;"></i>Lewat Masa Kontrak</td>'
  				+'</td></tr></table> '
			},{
		xtype: 'pagingtoolbar',
		store: 'store_aktif',
		dock: 'bottom',
		flex: 1,
		displayInfo: true
	}]
});