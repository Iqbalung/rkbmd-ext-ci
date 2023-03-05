Ext.define('koyoku.view.dashboard.Main', {
	extend: 'Ext.panel.Panel',
	xtype: 'page_dashboard',
	requires: [
		'koyoku.view.dashboard.Controller',
		'koyoku.view.dashboard.ChartTopPengajuan',
		'koyoku.view.dashboard.ListPengajuan'		
	],

	controller: 'dashboard',
	padding: 10,	
	id: 'page_dashboard',
	cls: 'page-dashboard',
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

			}, {
				xtype: 'panel',
				layout: {
					type: 'hbox',		
				},
				cls: 'top-pengajuan',
				// title: 'V',				
				width: '100%',
				items:[
				{
					xtype: 'dataview',
					width: '100%',
					height: 150,
					flex: 10,
					store: {
						fields: ['cls', 'age', 'label'],
						data: [
							{nilai: 119830000,  progress: 26, label:'Dinas A'},
							{nilai: 100110000,   progress: 41, label:'Dinas B'},
							{nilai: 100121900, progress: 64, label:'Dinas C'},
							{nilai: 101319000, progress: 34, label:'Dinas D'},
							{nilai: 100112219, progress: 74, label:'Dinas E'},
						]
					},
					cls: 'my-top-pengajuan',
					itemCls: 'my-card-top-pengajuan',
					itemTpl: ['<div class="my-card-top-pengajuan-item">',
								'<div class="label">{label}</div>',
								'<progress value="{progress}" max="100"></progress>',
								'<div class="nilai">Rp. {nilai}</div>',
							'</div>'],

				},
				{
					flex: 3,
					height: 150,			
					xtype: 'chart_top_pengajuan', 					
					
				}
				]
			}, {
				xtype: 'list_pengajuan',
				cls: 'list-pengajuan',
				width: '100%',
				flex: 1,
				tbar: [
					{
						xtype:'label',
						text: 'Daftar Pengajuan SKPD'
					}, 
					'->', 
					{
						xtype: 'textfield',
						emptyText: 'Pencarian...',
						itemId: 'text_cari',
						listeners: {
							specialkey: 'load_penghapusan_keyword'
						}
					}
				]
			}]
		});


		me.callParent(arguments);
	},

});