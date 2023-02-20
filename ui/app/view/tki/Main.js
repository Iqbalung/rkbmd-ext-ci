Ext.define('koyoku.view.tki.Main', {
	extend: 'Ext.panel.Panel',
	xtype: 'page_tki',
	requires: [
		'koyoku.view.tki.Controller',				

		'koyoku.view.tki.pemeliharaan.Grid',
		'koyoku.view.tki.pemeliharaan.Form',

		'koyoku.view.tki.pemanfaatan.Grid',
		'koyoku.view.tki.pemanfaatan.Form',

		'koyoku.view.tki.penghapusan.Grid',
		'koyoku.view.tki.penghapusan.Form',

		'koyoku.view.tki.pengadaan.Grid',
		'koyoku.view.tki.pengadaan.Form',

		'koyoku.components.combo.StatusData'
	],

	controller: 'tki',

	border: 1,
	id: 'page_renbut',
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
				tbar: [{
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
					'->', {
						bind : { text : '{language.tambah}', },
						glyph: 'xf067@fontAwesome',
						handler: 'tambah_pengadaan'
					}, {
						bind : { text : '{language.ubah}', },
						glyph: 'xf044@fontAwesome',
						handler: 'ubah_pengadaan'
					}
				]
			}, {
				title: 'Pemeliharaan',
				xtype: 'grid_pemeliharaan',				
				tbar: [{
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
					'->', {
						bind : { text : '{language.tambah}', },
						glyph: 'xf067@fontAwesome',
						handler: 'tambah_pemeliharaan'
					}, {
						bind : { text : '{language.ubah}', },
						glyph: 'xf044@fontAwesome',
						handler: 'ubah_pemeliharaan'
					}
				]
			}, {
				xtype: 'grid_pemanfaatan',
				title: 'Pemanfaatan',				
				tbar: [{
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
					'->', {
						bind : { text : '{language.tambah}', },
						glyph: 'xf067@fontAwesome',
						handler: 'tambah_pemanfaatan'
					}, {
						bind : { text : '{language.ubah}', },
						glyph: 'xf044@fontAwesome',
						handler: 'ubah_pemanfaatan'
					}
				]
			}, {
				title: 'Penghapusan',
				xtype: 'grid_penghapusan',				
				tbar: [{
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
					'->', {
						bind : { text : '{language.tambah}', },
						glyph: 'xf067@fontAwesome',						
						handler: 'tambah_penghapusan'
					}, {
						bind : { text : '{language.ubah}', },
						glyph: 'xf044@fontAwesome',
						handler: 'ubah_penghapusan'
					}
				]
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