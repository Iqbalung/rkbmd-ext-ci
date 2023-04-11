Ext.define('koyoku.view.dashboard.Main', {
	extend: 'Ext.panel.Panel',
	xtype: 'page_dashboard',
	requires: [
		'koyoku.view.dashboard.Controller',
		'koyoku.view.dashboard.ChartTopPengajuan',
		'koyoku.view.dashboard.ListPengajuan',
		'koyoku.store.dashboard.RealisasiKegiatan',
		'koyoku.store.dashboard.RekapRKPBMD',
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
				// store: {
				// 	fields: ['cls', 'age', 'label'],
				// 	data: [
				// 		{cls: 'orange',  age: 26, label:'Jumlah Draft'},
				// 		{cls: 'green',   age: 21, label:'Jumlah Diajukan'},
				// 		{cls: 'purple', age: 24, label:'Jumlah Disetujui'}
				// 	]
				// },
				store: {
					type: 'storeRekapRKPBMD',
					storeId : 'storeRekapRKPBMD',
					autoLoad: true,
				},
				cls: 'my-view',
                itemCls: 'my-card',
				itemTpl: ['<div class="my-card-item item-{CLS}">',
                            '<div class="value">{JUMLAH}</div>',
							'<div class="label">{LABEL}</div>',
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
						type: 'storeRealisasiKegiatan',
						storeId : 'storeRealisasiKegiatan',
						autoLoad: true,
					},
					cls: 'my-top-pengajuan',
					itemCls: 'my-card-top-pengajuan',
					itemTpl: ['<div class="my-card-top-pengajuan-item">',
								'<div class="label">{BIDANG_NAMA}</div>',
								'<progress value="{JUMLAH_TERINPUT}" max="{JUMLAH_KEGIATAN}"></progress>',
								'<div class="nilai">Rp. {REALISASI}</div>',
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
					// {
					// 	xtype: 'textfield',
					// 	emptyText: 'Pencarian...',
					// 	itemId: 'text_cari',
					// 	listeners: {
					// 		specialkey: 'load_penghapusan_keyword'
					// 	}
					// }
				]
			}]
		});


		me.callParent(arguments);
	},

});