Ext.define('koyoku.view.lihat_pptkis.Main', {
	extend: 'Ext.panel.Panel',
	xtype: 'page_lihat_pptkis',
	id: 'page_lihat_pptkis',
	//title : 'Profile PPTKIS',
	layout:'fit',
	//width: '100%',
	//height : '100%',	
	controller:'lihat_pptkis',
	requires: [
		'koyoku.view.lihat_pptkis.Tabs',
		'koyoku.view.lihat_pptkis.Identitas',
		'koyoku.view.lihat_pptkis.Satuan_kerja',
		'koyoku.view.lihat_pptkis.Controller',
		'koyoku.view.lihat_pptkis.Rekruiter'
	],		
	items: [
	{
		xtype: 'tab_pptkis_detail',				
	}],
	listeners:{
		afterrender:function() {
		}
	},
	border: 1,			
	
});