Ext.define('koyoku.view.tki.Main', {
	extend: 'Ext.panel.Panel',
	xtype: 'page_tki',
	requires: [
		'koyoku.view.tki.Controller',				

		'koyoku.view.tki.pemeliharaan.Grid',
		'koyoku.view.tki.pemeliharaan.Form',
		'koyoku.view.tki.pemeliharaan.FormTelaah',
		'koyoku.view.tki.pengadaan.FormTelaahSubKegiatan',

		'koyoku.view.tki.pemanfaatan.Grid',
		'koyoku.view.tki.pemanfaatan.Form',

		'koyoku.view.tki.penghapusan.Grid',
		'koyoku.view.tki.penghapusan.Form',

		'koyoku.view.tki.pengadaan.Grid',
		'koyoku.view.tki.pengadaan.Form',
		'koyoku.view.tki.pengadaan.FormTelaah',

		'koyoku.components.combo.StatusData'
	],

	viewModel: 'main',
	controller: 'tki',	
	border: 1,
	id: 'page_renbut',
	layout: 'border',
	initComponent: function() {
		var me = this;		
		Ext.apply(me, {
			items: [{
				xtype: 'tree_bidang',
				region: 'west',
				border: 1,
				width: 300,
				title: 'Organisasi',
				collapsible: true,
				collapsed: true,
				
				listeners: {			
					select: 'select_filter_bidang'
				}
			}, {
				layout: 'card',
				id: 'panel_pemeliharaan',
				region: 'center',
				items: [{
					xtype: 'tabpanel',			
					items: [{
						title: 'Pengadaan',				
						xtype: 'grid_pengadaan',							
						dockedItems: [{
							xtype: 'toolbar',
							dock: 'top',
							height: 60,
							items: [{
								xtype: 'textfield',
								emptyText: 'Cari ...',
								itemId: 'text_cari',
								listeners: {
									specialkey: 'load_pengadaan_keyword'
								}
							}, {
								xtype: 'combo_status_data',
								itemId: 'combo_status',
								listeners: {
									change: 'load_pengadaan_status'
								}
							},
							'->',
							{
								text : 'TELAAH',
								hidden : !__dtlg_.cek_akses("ft-telaah"),
								cls: 'btn-main btn-box',
								menu: [{
									text: 'Telaah Sub Kegiatan',									
									handler: 'telaah_pengadaan_sub_kegiatan'
								}, {
									text: 'Telaah Barang',
									handler: 'telaah_pengadaan'
								}]
							},					
							{
								// text : 'Cetak',
								glyph: 'f02f@fontAwesome',						
								cls: 'btn-round-menu btn-main btn-box',
								// handler: 'cetak_pengadaan'								
								menu: [{
									text: 'Cetak Usulan',									
									handler: 'cetak_pengadaan_usulan'
								}, {
									text: 'Cetak Telaah',
									handler: 'cetak_pengadaan_telaah'
								}, {
									text: 'Cetak Final',									
									handler: 'cetak_pengadaan_final'
								}]
							}, {					
								glyph: 'xf067@fontAwesome',
								cls: 'btn-round btn-tambah',
								handler: 'tambah_pengadaan'
							}, {						
								glyph: 'xf044@fontAwesome',
								cls: 'btn-round btn-edit',
								handler: 'ubah_pengadaan'
							}, {						
								glyph: 'xf1f8@fontAwesome',
								cls: 'btn-round btn-hapus',
								handler: 'hapus_pengadaan'
							}
						]
						}],
					}, {
						title: 'Pemeliharaan',
						xtype: 'grid_pemeliharaan',		
						dockedItems: [{
							xtype: 'toolbar',
							dock: 'top',
							height: 60,
							items: [{
								xtype: 'textfield',
								emptyText: 'Cari ...',
								itemId: 'text_cari',
								listeners: {
									specialkey: 'load_pemeliharaan_keyword'
								}
							}, {
								xtype: 'combo_status_data',
								itemId: 'combo_status',
								listeners: {
									change: 'load_pemeliharaan_status'
								}
							},
							'->',
							{
								text : 'TELAAH',											
								cls: 'btn-main btn-box',
								hidden : !__dtlg_.cek_akses("ft-telaah"),								
								menu: [{
									text: 'Telaah Sub Kegiatan',
									handler: 'telaah_pemeliharaan_sub_kegiatan'
								}, {
									text: 'Telaah Barang',
									handler: 'telaah_pemeliharaan'
								}]
							},
							{
								// text : 'Cetak',
								glyph: 'f02f@fontAwesome',						
								cls: 'btn-round-menu btn-main btn-box',
								// handler: 'cetak_pemeliharaan'								
								menu: [{
									text: 'Cetak Usulan',									
									handler: 'cetak_pemeliharaan_usulan'
								}, {
									text: 'Cetak Telaah',
									handler: 'cetak_pemeliharaan_telaah'
								}, {
									text: 'Cetak Final',									
									handler: 'cetak_pemeliharaan_final'
								}]
							}, {	
								glyph: 'xf067@fontAwesome',
								cls: 'btn-round btn-tambah',
								handler: 'tambah_pemeliharaan'
							}, {						
								glyph: 'xf044@fontAwesome',
								cls: 'btn-round btn-edit',
								handler: 'ubah_pemeliharaan'
							}, {						
								glyph: 'xf1f8@fontAwesome',
								cls: 'btn-round btn-hapus',
								handler: 'hapus_pemeliharaan'
							}
						]
						}],
					}, {
						xtype: 'grid_pemanfaatan',
						title: 'Pemanfaatan',				
						dockedItems: [{
							xtype: 'toolbar',
							dock: 'top',
							height: 60,
							items: [{
								xtype: 'textfield',
								emptyText: 'Cari ...',
								itemId: 'text_cari',
								listeners: {
									specialkey: 'load_pemanfaatan_keyword'
								}
							}, {
								xtype: 'combo_status_data',
								itemId: 'combo_status',
								listeners: {
									change: 'load_pemanfaatan_status'
								}
							},
							'->',{
								// text : 'Cetak',
								glyph: 'f02f@fontAwesome',						
								cls: 'btn-round btn-main',
								handler: 'cetak_pemanfaatan'
							}, {					
								glyph: 'xf067@fontAwesome',
								cls: 'btn-round btn-tambah',
								handler: 'tambah_pemanfaatan'
							}, {						
								glyph: 'xf044@fontAwesome',
								cls: 'btn-round btn-edit',
								handler: 'ubah_pemanfaatan'
							}, {						
								glyph: 'xf1f8@fontAwesome',
								cls: 'btn-round btn-hapus',
								handler: 'hapus_pemanfaatan'
							}
						]
						}],
					}, {
						title: 'Penghapusan/Pemindahtanganan',
						xtype: 'grid_penghapusan',				
						dockedItems: [{
							xtype: 'toolbar',
							dock: 'top',
							height: 60,
							items: [{
								xtype: 'textfield',
								emptyText: 'Cari ...',
								itemId: 'text_cari',
								listeners: {
									specialkey: 'load_penghapusan_keyword'
								}
							}, {
								xtype: 'combo_status_data',
								itemId: 'combo_status',
								listeners: {
									change: 'load_penghapusan_status'
								}
							},
							'->',{
								// text : 'Cetak',
								glyph: 'f02f@fontAwesome',						
								cls: 'btn-round btn-main',
								handler: 'cetak_penghapusan'
							}, {					
								glyph: 'xf067@fontAwesome',
								cls: 'btn-round btn-tambah',
								handler: 'tambah_penghapusan'
							}, {						
								glyph: 'xf044@fontAwesome',
								cls: 'btn-round btn-edit',
								handler: 'ubah_penghapusan'
							}, {						
								glyph: 'xf1f8@fontAwesome',
								cls: 'btn-round btn-hapus',
								handler: 'hapus_penghapusan'
							}
						]
						}],
					}]
				}, {
					xtype: 'form_pemeliharaan'
				}, {
					xtype: 'form_pemanfaatan'
				}, {
					xtype: 'form_penghapusan'
				}, {
					xtype: 'form_pengadaan'
				}]
			}]
		});
		me.callParent([arguments]);
	}	
});