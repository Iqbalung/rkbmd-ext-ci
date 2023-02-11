Ext.define('koyoku.view.profile_pptkis.Main', {
	extend: 'Ext.panel.Panel',
	xtype: 'page_profile_pptkis',
	id: 'page_profile_pptkis',
	layout:'fit',
	controller:'profile_pptkis',
	requires: [
		'koyoku.view.profile_pptkis.Tabs',
		'koyoku.view.profile_pptkis.Identitas',
		'koyoku.view.profile_pptkis.Satuan_kerja',
		'koyoku.view.profile_pptkis.Controller',
		'koyoku.view.profile_pptkis.Rekruiter',
		
	],		
	items: [
	{
		xtype: 'tab_pptkis',				
	}],
	listeners:{
		afterrender:function() {
		}
	},
	border: 1,			
	
});