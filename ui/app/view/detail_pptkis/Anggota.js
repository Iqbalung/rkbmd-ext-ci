Ext.define('koyoku.view.detail_pptkis.Anggota', {
	extend: 'Ext.panel.Panel',
	xtype: 'anggota_detail',
	requires: [
		'koyoku.view.portal.Controller',
		'koyoku.view.portal.Pie_jk',
		'koyoku.view.portal.Batang_tki',
		'koyoku.view.portal.Grid_job_populer',
		'koyoku.view.portal.View_total_tki',
		'koyoku.view.portal.Profile'
	],
	autoScroll: true,
	border: 1,
	width: '100%',
	height: '100%',
	/*layout: {
		type: 'hbox',
		align: 'stretch'
	},*/
	layout: 'column',
	items: [{
		xtype: 'panel',
		padding:'10',
		columnWidth: '0.4',
		items: [{
			xtype: 'pie_jk',
			height: 300,
			title: 'Jenis Kelamin',
		}, {
			xtype: 'grid_job_populer',
			hideHeaders: true,
			title: 'Jabatan Terpopuler',
			height: 400,
		}]
	},{
		xtype: 'panel',
		padding:'10',
		columnWidth: '0.6',
		items: [{
			xtype: 'panel',
			title: 'Total TKI',
			items: [{
				xtype: 'view_total_tki'
			}],
			height:200,
		}, {
			xtype: 'batang_tki',
			title: 'Keberangkatan ke Luar Negeri',
			height:500,
		}]
	}]
});