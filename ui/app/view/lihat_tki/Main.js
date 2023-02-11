Ext.define('koyoku.view.lihat_tki.Main', {
	extend: 'Ext.panel.Panel',
	xtype: 'page_lihat_tki',
	requires: [
		'koyoku.view.lihat_tki.Controller',
		'koyoku.view.lihat_tki.Form_identitas',
		'koyoku.view.lihat_tki.Riw_kerja',
		'koyoku.view.lihat_tki.Riw_perjanjian',
		'koyoku.view.lihat_tki.Riw_pendidikan',
		'koyoku.view.lihat_tki.Riw_medical',
		'koyoku.view.lihat_tki.Riw_visa',
		'koyoku.view.lihat_tki.Riw_pak',
		'koyoku.view.lihat_tki.Riw_asuransi',
		'koyoku.view.lihat_tki.Riw_bnptki',
		'koyoku.view.lihat_tki.Riw_kasus',
		'koyoku.view.lihat_tki.Riw_purna',
		'koyoku.view.lihat_tki.Riw_hilang',
		'koyoku.view.lihat_tki.Riw_pindah',
		'koyoku.view.lihat_tki.Riw_lk',
		'koyoku.view.lihat_tki.Riw_medical_full',
		'koyoku.view.lihat_tki.Riw_keberangkatan',
		'koyoku.view.lihat_tki.Riw_keluarga',
		'koyoku.view.lihat_tki.Media'
	],
	controller: 'lihat_tki',
	border: 1,
	id: 'page_lihat_tki',
	title: 'Profile TKI',
	//layout: 'border',
	//layout:'fit',
	layout: {
		type: 'vbox',
		align: 'stretch'
	},

	autoScroll: true,
	tbar: [
		'->', {
			text: 'Kembali',
			href: '#tki',
			hrefTarget: '_self',
			handler: function() {
				Ext.getCmp('page_lihat_tki').down('#card').setActiveItem(1);
			},
			glyph: 'xf060@fontAwesome'
		}
	],
	items: [{
		xtype: 'form_identitas_detail',
		listeners: {
			afterrender: 'load_identitas'
		}
	}, {
		xtype: 'panel',
		layout: 'border',
		height: 300,
		width: '100%',
		items: [{
			region: 'west',
			itemId: 'gridriwayat',
			title : 'Daftar Riwayat Hidup',
			html: '<div class=" x-panel mainPageGroupPanel" id="ext-comp-1106">',

			xtype: 'grid',
			flex: 1,
			requires: [
				'koyoku.store.tki.Menutki'
			],
			store: Ext.create('koyoku.store.tki.Menutki', {
				autoLoad: true
			}),
			columns: [{
				dataIndex: 'name',
				flex: 1,
				renderer: function(v) {
						return  '<a style="cursor:pointer;font-size:18px;display: block;">' + v + ' <i class="fa fa-arrow-circle-right" aria-hidden="true" style="float: right;font-size:18px;color:#ef0212;"></i></a>';
				},

			}],
			listeners: {
				cellclick: 'detailriwayat',
			},

		}, {
			region: 'center',
			layout: 'card',
			itemId: 'card',
			flex: 4,
			items: [{
				title: 'Pengalaman',
				xtype: 'grid_riw_kerja_detail',
			}, {
				title: 'Pendidikan',
				xtype: 'grid_riw_pendidikan_detail'
			}, {
				title: 'Keluarga',
				xtype: 'grid_riw_keluarga_detail'
			}, {
				title: 'Media',
				xtype: 'grid_media_pengguna_detail',
			}, {
				title: 'Riwayat Medical Pra',
				xtype: 'grid_riw_medical'
			}, {
				title: 'Riwayat Medical Full',
				xtype: 'grid_riw_medical_full'
			}, {
				title: 'Perjanjian Kerja',
				xtype: 'grid_riw_perjanjian'
			}, {
				title: 'Asuransi',
				xtype: 'grid_riw_asuransi'
			}, {
				title: 'Legislasi Pengurusan BP3TKI',
				xtype: 'grid_riw_bnptki'
			}, {
				title: 'Pengurusan Visa',
				xtype: 'grid_riw_visa',
			}, {
				title: 'Signing Lembaga Keuangan',
				xtype: 'grid_riw_lk',
			},{
				title: 'Pembekalan Akhir Keberangkatan',
				xtype: 'grid_riw_pak',
			},{
				title: 'Pembekalan Keberangkatan',
				xtype: 'grid_riw_keberangkatan',
			},{
				title: 'Hilang',
				xtype: 'grid_riw_hilang',
			},{
				title: 'Kasus',
				xtype: 'grid_riw_kasus',
			},{
				title: 'Pindah',
				xtype: 'grid_riw_pindah',
			},{
				title: 'Kepulangan',
				xtype: 'grid_riw_purna',
			}
			]

		}]

	}]
});