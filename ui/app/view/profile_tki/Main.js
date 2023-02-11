Ext.define('koyoku.view.profile_tki.Main', {
	extend: 'Ext.panel.Panel',
	xtype: 'page_profile_tki',
	requires: [
		'koyoku.view.profile_tki.Controller',
		'koyoku.view.profile_tki.Form_identitas',
		'koyoku.view.profile_tki.Riw_kerja',
		'koyoku.view.profile_tki.Riw_pendidikan',
		'koyoku.view.profile_tki.Riw_keluarga',
		'koyoku.view.profile_tki.Riw_kompetensi',
		'koyoku.view.profile_tki.Riw_bidang',
		'koyoku.view.profile_tki.Media'
	],

	controller: 'profile_tki',

	border: 1,
	id: 'page_profile_tki',
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
			text: 'Simpan',
			handler: 'simpan_identitas',
			glyph: 'xf0c7@fontAwesome'
		}, {
			text: 'Kembali',
			href: '#tki',
			hrefTarget: '_self',
			glyph: 'xf060@fontAwesome'
		}
	],
	items: [{
		xtype: 'form_identitas',
		listeners: {
			afterrender: 'load_identitas'
		}
	}, {
		xtype: 'tabpanel',
		padding: '0 10',
		items: [{
			title: 'Pengalaman',
			xtype: 'grid_riw_kerja'
		}, {
			title: 'Pendidikan',
			xtype: 'grid_riw_pendidikan'
		}, {
			title: 'Keluarga',
			xtype: 'grid_riw_keluarga'
		}, {
			title: 'Media',
			xtype: 'grid_media_pengguna',
		},{
			title: 'Komptensi',
			xtype: 'grid_riw_kompetensi',
		},{
			title: 'Bidang',
			xtype: 'grid_riw_bidang',
		}]
	}]
});