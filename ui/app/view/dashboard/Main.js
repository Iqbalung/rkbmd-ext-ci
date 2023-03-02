Ext.define('koyoku.view.dashboard.Main', {
	extend: 'Ext.panel.Panel',
	xtype: 'page_dashboard',
	requires: [
		'koyoku.view.dashboard.Controller'		
	],

	controller: 'dashboard',
	padding: 10,	
	id: 'page_dashboard',
	layout: {
		type: 'vbox',		
	},
	initComponent: function() {
		var me = this;
		me.controller.getViewModel();
		Ext.apply(this, {
			items: [{
				xtype: 'dataview',
				width: '100%',
				height: 150,
				store: {
					fields: ['cls', 'age', 'label'],
					data: [
						{cls: 'orange',  age: 26, label:'Jumlah A'},
						{cls: 'green',   age: 21, label:'Jumlah B'},
						{cls: 'purple', age: 24, label:'Jumlah C'}
					]
				},
				cls: 'my-view',
                itemCls: 'my-card',
				itemTpl: ['<div class="my-card-item item-{cls}">',
                            '<div class="value">{age}</div>',
							'<div class="label">{label}</div>',
                          '</div>'],

			},{
				xtype:'panel'
			}
				/* {
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