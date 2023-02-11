Ext.define('koyoku.view.tki.Main', {
	extend: 'Ext.panel.Panel',
	xtype: 'page_tki',
	requires: [
		'koyoku.view.tki.Controller',
		'koyoku.view.tki.Grid_tki_all',
		'koyoku.view.tki.Grid_pendaftar_tki',
		'koyoku.view.tki.Grid_ctki',
		'koyoku.view.tki.Grid_tki',
		'koyoku.view.tki.Grid_ptki',
		'koyoku.view.master.bidang.Tree_bidang',
		'koyoku.view.tki.Win_berangkat',
		'koyoku.view.tki.Win_siskot',
		'koyoku.components.combo.Jabatan',
		'koyoku.components.combo.Kasus',
		'koyoku.components.combo.Pindah',
		'koyoku.components.combo.Kepulangan',
		'koyoku.components.combo.Filter_purna'
	],

	controller: 'tki',

	border: 1,
	id: 'page_tki',
	layout: 'border',
	items: [{
		xtype: 'tree_bidang',
		region: 'west',
		border: 1,
		width: 300,
		title: 'Organisasi',
		collapsible: true,
		collapsed: true,
		
		listeners: {
			afterrender: 'load_organisasi',
			select: 'select_filter_org'
		}
	}, {
		xtype: 'tabpanel',
		region: 'center',
		items: [{
			title: 'Pemeliharaan',
			xtype: 'grid_tki_all',
			listeners: {
				itemdblclick: 'detail_tki',
			},
			tbar: [{
					xtype: 'textfield',
					emptyText: 'Cari ...',
					itemId: 'text_cari',
					listeners: {
						specialkey: 'load_tki_keyword'
					}
				},
				'->', {
					bind : { text : '{language.tambah}', },
					glyph: 'xf067@fontAwesome',
					handler: 'tambah_tki'
				}, {
					bind : { text : '{language.ubah}', },
					glyph: 'xf044@fontAwesome',
					handler: 'ubah_tki'
				}
			]
		}, {
			xtype: 'grid_tki',
			title: 'Pemanfaatan',
			listeners: {
				itemdblclick: 'detail_tki_lamaran',
			},
			tbar: [{
					xtype: 'textfield',
					emptyText: 'Cari',
					itemId: 'text_cari',
					listeners: {
						specialkey: function(field, e) {
							if (e.getKey() == e.ENTER) {
								var cmp = Ext.getCmp("page_tki");
								cmp.controller.load_aktif();
							}
						}
					}
				}, {
					xtype: 'combo_jabatan',
					itemId: 'combo_posisi',
					forceSelection: false,
					allowBlank: true,
					queryMode: 'remote',
					emptyText: 'Posisi',
					fieldLabel: 'Posisi',
					labelWidth: 80,
					listeners: {
						change: function() {
							var cmp = Ext.getCmp("page_tki");
							cmp.controller.load_aktif();
						}
					}
				},
				/*{
					xtype: 'combo',
					emptyText: 'Negara Tujuan'
				}, */
				/*{
									xtype: 'combo',
									emptyText: 'Status'
								},*/
				'->', {
					text: 'Proses',
					menu: [{
						text: 'Konfirmasi Sampai Tujuan',
						handler: 'show_konfirmasi'
					}, {
						text: 'Kasus',
						handler: 'show_kasus'
					}, {
						text: 'Perpanjang',
						handler: 'show_perpanjang'
					}, {
						text: 'Pindah',
						handler: 'show_pindah'
					}, {
						text: 'Hilang',
						handler: 'show_hilang'
					}, {
						text: 'Selesai',
						handler: 'show_selesai'
					}]
				},
			]
		}, {
			xtype: 'grid_ptki',
			listeners: {
				itemdblclick: 'detail_tki_lamaran',
			},
			title: 'Penghapusan',
			tbar: [{
					xtype: 'textfield',
					emptyText: 'Cari',
					itemId: 'text_cari',
					listeners: {
						specialkey: function(field, e) {
							if (e.getKey() == e.ENTER) {
								var cmp = Ext.getCmp("page_tki");
								cmp.controller.load_purna();
							}
						}
					}
				},{
					xtype: 'combo_filterpurna',
					itemId: 'combo_purna',
					forceSelection: false,
					allowBlank: true,
					queryMode: 'remote',
					fieldLabel: 'Status Pulang',
					labelWidth: 180,
					listeners: {
                        select: 'select_statuspurna',
                    }	
				},
				'->', {
					text: 'Proses',
					menu: [{
						text: 'Kepulangan',
						handler: 'show_purna'
					}]
				},
			],
		}]
	}]
});