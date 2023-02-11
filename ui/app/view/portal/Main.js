Ext.define('koyoku.view.portal.Main', {
	extend: 'Ext.panel.Panel',
	xtype: 'page_portal',
	requires: [
		'koyoku.view.portal.Controller',
		'koyoku.view.portal.Pie_jk',
		'koyoku.view.portal.Batang_tki',
		'koyoku.view.portal.Grid_job_populer',
		'koyoku.view.portal.View_total_tki',
		'koyoku.view.portal.Profile'
	],

	controller: 'portal',

	border: 1,
	id: 'page_portal',
	layout: {
		type: 'hbox',
		align: 'stretch'
	},
	initComponent: function() {
		var me = this;
		me.controller.getViewModel();
		Ext.apply(this, {
			items: [/* {
				xtype: 'portal_profile',
				title: 'Profil',
				bind: {
					hidden: '{!akses.portal_profile}'
				},
				padding: 2,
				flex: 1
			}, {
				xtype: 'panel',
				flex: 1,
				layout: {
					type: 'vbox',
					align: 'stretch',
					padding: 2
				},
				items: [{
					xtype: 'pie_jk',
					bind : {
						title: '{language.jeniskelamin}',
					},
					flex: 1
				}, {
					xtype: 'grid_job_populer',
					hideHeaders: true,
					bind: {
						title : '{language.jabatanpopuler}',
					},
					flex: 1
				}]
			}, {
				xtype: 'panel',
				flex: 2,
				layout: {
					type: 'vbox',
					align: 'stretch',
					padding: 2
				},
				items: [{
					xtype: 'panel',
					bind: {
						title : '{language.totaltki}',	
					},
					items: [{
						xtype: 'view_total_tki'
					}],
					flex: 1
				}, {
					xtype: 'batang_tki',
					bind: {
						title : '{language.keberangkatan}',
					},
					flex: 2
				}]
			} */]
		});


		me.callParent(arguments);
	},

});