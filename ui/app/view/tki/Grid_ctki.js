Ext.define('koyoku.view.tki.Grid_ctki', {
	extend: 'Ext.grid.Panel',
	xtype: 'grid_ctki',
	requires: [

	],
	initComponent: function() {
		var me = this;
		Ext.apply(me, {
			store: Ext.create('koyoku.store.lamaran.Store', {
				storeId: 'store_calon',
				autoLoad: true,
				listeners: {
					beforeload: function(store, operation, eOpts) {
						var cmp = Ext.getCmp("page_tki"),
							data = cmp.controller.getViewModel().data;
						store.proxy.extraParams.STATUS = '2.';
						/*store.proxy.extraParams.USERGROUP_ID = data.USER.USERGROUP_ID;
						store.proxy.extraParams.PPTKIS_ID = data.USER.PPTKIS_ID;
						store.proxy.extraParams.REKRUITER_ID = data.USER.ID;
						store.proxy.extraParams.TEXT_CARI = cmp.down("grid_ctki").down("#text_cari").getValue();
						store.proxy.extraParams.JOB_JABATAN_ID = cmp.down("grid_ctki").down("#combo_posisi").getValue();*/
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
		text: 'No Reg',
		dataIndex: 'ID',
		hidden : true,
		locked   : true,
		width: 100
	},{
		text: 'Nama',
		dataIndex: 'NAMA_PEKERJA',
		locked   : true,
		width : 200
	},{
		text: 'L / P',
		dataIndex: 'JENIS_KELAMIN',
		width: 100,
		align : 'center'
	},{
		text: 'Umur',
		dataIndex: 'UMUR',
		width: 100,
		align : 'center'
	},{
		text: 'Job',
		dataIndex: 'JABATAN_NAMA',
		width: 200
	},{
		text: 'Barang',
		dataIndex: 'BARANG_NAMA',
		width: 200
	}, {
		text: 'Job Owner',
		dataIndex: 'OWNER_NAMA',
		width: 200
	},{
		text: 'Penempatan',
		dataIndex: 'PENEMPATAN',
		hidden:true,
		width: 120
	},{
		text: 'S',
		dataIndex: 'ID_TKI',
		width: 50,
		align : 'center',
		renderer : function(v){
			if(v===null){
				return '<i class="fa fa-circle" aria-hidden="true" style="margin:5px 0;font-size:18px;color:#999;"></i>';
			} else {
				return '<i class="fa fa-check-circle" aria-hidden="true" style="margin:5px 0;font-size:18px;color:#ef0212;"></i>';
			}
		}
	},{
		text: 'AP',
		dataIndex: 'ASURANSI',
		width: 50,
		align : 'center',
		renderer : function(v){
			if(v<1){
				return '<i class="fa fa-circle" aria-hidden="true" style="margin:5px 0;font-size:18px;color:#999;"></i>';
					} else {
				return '<i class="fa fa-check-circle" aria-hidden="true" style="margin:5px 0;font-size:18px;color:#ef0212;"></i>';
					}
		}
	},{
		text: 'BLK',
		dataIndex: 'BLKLN',
		width: 50,
		align : 'center',
		renderer : function(v){
			if(v===null){
				return '<i class="fa fa-circle" aria-hidden="true" style="margin:5px 0;font-size:18px;color:#999;"></i>';
					} else {
				return '<i class="fa fa-check-circle" aria-hidden="true" style="margin:5px 0;font-size:18px;color:#ef0212;"></i>';
					}
		}
	},{
		text: 'LK',
		dataIndex: 'LK',
		width: 50,
		align : 'center',
		renderer : function(v){
			if(v===null){
				return '<i class="fa fa-circle" aria-hidden="true" style="margin:5px 0;font-size:18px;color:#999;"></i>';
					} else {
				return '<i class="fa fa-check-circle" aria-hidden="true" style="margin:5px 0;font-size:18px;color:#ef0212;"></i>';
					}
				}
	},{
		text: 'MF',
		dataIndex: 'MEDICALFULL',
		width: 50,
		align : 'center',
		renderer : function(v){
			if(v<1){
				return '<i class="fa fa-circle" aria-hidden="true" style="margin:5px 0;font-size:18px;color:#999;"></i>';
					} else {
				return '<i class="fa fa-check-circle" aria-hidden="true" style="margin:5px 0;font-size:18px;color:#ef0212;"></i>';
					}
		}
		
	},{
		text: 'L',
		dataIndex: 'L',
		width: 50,
		align : 'center',
		renderer : function(v){
			if(v===null){
				return '<i class="fa fa-circle" aria-hidden="true" style="margin:5px 0;font-size:18px;color:#999;"></i>';
					} else {
				return '<i class="fa fa-check-circle" aria-hidden="true" style="margin:5px 0;font-size:18px;color:#ef0212;"></i>';
					}
		}
	},{
		text: 'V',
		dataIndex: 'VISA',
		width: 50,
		align : 'center',
		renderer : function(v){
			if(v===null){
				return '<i class="fa fa-circle" aria-hidden="true" style="margin:5px 0;font-size:18px;color:#999;"></i>';
					} else {
				return '<i class="fa fa-check-circle" aria-hidden="true" style="margin:5px 0;font-size:18px;color:#ef0212;"></i>';
					}
		}
	},{
		text: 'A',
		dataIndex: 'ASURANSI_PENEMPATAN',
		width: 50,
		align : 'center',
		renderer : function(v){
			if(v<1){
				return '<i class="fa fa-circle" aria-hidden="true" style="margin:5px 0;font-size:18px;color:#999;"></i>';
					} else {
				return '<i class="fa fa-check-circle" aria-hidden="true" style="margin:5px 0;font-size:18px;color:#ef0212;"></i>';
					}
		}
	},{
		text: 'PK',
		dataIndex: 'PERJANJIAN',
		width: 50,
		align : 'center',
		renderer : function(v){
			if(v===null){
				return '<i class="fa fa-circle" aria-hidden="true" style="margin:5px 0;font-size:18px;color:#999;"></i>';
					} else {
				return '<i class="fa fa-check-circle" aria-hidden="true" style="margin:5px 0;font-size:18px;color:#ef0212;"></i>';
					}
		}
	},{
		text: 'PAP',
		dataIndex: 'PEMBEKALAN',
		width: 50,
		align : 'center',
		renderer : function(v){
			if(v===null){
				return '<i class="fa fa-circle" aria-hidden="true" style="margin:5px 0;font-size:18px;color:#999;"></i>';
					} else {
				return '<i class="fa fa-check-circle" aria-hidden="true" style="margin:5px 0;font-size:18px;color:#ef0212;"></i>';
					}
		}
	},{
		text: 'K',
		align : 'center',
		dataIndex: 'KEBERANGKATAN',
		width: 50,
		renderer : function(v){
			if(v===null){
				return '<i class="fa fa-check-circle" aria-hidden="true" style="margin:5px 0;font-size:18px;color:#ef0212;"></i>';
					} else {
						return '<i class="fa fa-circle" aria-hidden="true" style="margin:5px 0;font-size:18px;color:#999;"></i>';
					}
		}
	}],
	dockedItems: [ {
  				xtype : 'panel',
  				dock: 'bottom',
  				html  : '<table style="margin:10px;width:100%;"><tr ><td><b>S</b></td><td style="margin:10px">:</td><td >SISKOTKLN</td><td><b>MF</b></td><td>:</td><td>Medical Full</td><td><b>L</b></td><td>:</td><td>Legalisasi BNPTKI</td><td><b>A</b></td><td>:</td><td>Asuransi</td><td><b>PAP</b></td><td>:</td><td>Pembekalan Akhir Pemberangkatan</td></tr>'
  						+'<tr><td><b>BLK</b></td><td>:</td><td>Pelatihan Kerja BLKLN</td><td><b>PK</b></td><td>:</td><td>Perjanjian Kerja</td><td><b>V</b></td><td>:</td><td>Visa</td><td><b>LK</b></td><td>:</td><td>Signing Lembaga Keuangan</td><td><b>AP</b></td><td>:</td><td>ASURANSI PRA</td></tr></table> '
			},{
        xtype: 'pagingtoolbar',
        store: 'store_calon',
        flex:1,
        dock: 'bottom',
        displayInfo: true
    }],

});