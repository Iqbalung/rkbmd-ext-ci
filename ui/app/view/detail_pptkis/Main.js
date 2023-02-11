Ext.define('koyoku.view.detail_pptkis.Main', {
	extend: 'Ext.panel.Panel',
	xtype: 'page_detail_pptkis',
	id: 'page_detail_pptkis',
	layout: 'border',
	requires: [
		'koyoku.view.detail_pptkis.Header',
		'koyoku.view.detail_pptkis.Controller',
		'koyoku.view.detail_pptkis.Kantor',
		'koyoku.view.detail_pptkis.Profil',
		'koyoku.view.detail_pptkis.Struktur_organisai',
		'koyoku.view.detail_pptkis.Fasilitas',
		'koyoku.view.detail_pptkis.Rekan_kerja',
		'koyoku.view.detail_pptkis.Anggota'
	],
	controller:'detail_pptkis',
	items: [{
		xtype: 'header_detail',
		region: 'north',
		height: 200,		
	}, {
		xtype: 'kantor_pptkis',
		region: 'east',
		width: '30%',
		title: 'Alamat Kantor'
	}, {
		xtype: 'tabpanel',
		region: 'center',
		items: [{
			title: 'Profil',
			xtype:'profil',
			listeners:{
				afterrender:'load_profil'
			}
		}, {
			title: 'Struktur Organisasi',
			xtype:'struktur_organisai',
		}, {
			title: 'TKI',
			xtype:'anggota_detail'
		}, {
			title: 'Fasilitas',
			xtype:'grid_fasilitas_detail',
		}, {
			title: 'Partner/Lembaga Terkait',
			xtype:'grid_rekan_kerja_detail',
		}]
	}]
});