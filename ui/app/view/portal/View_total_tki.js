Ext.define('koyoku.view.portal.View_total_tki', {
	extend: 'Ext.view.View',
	xtype: 'view_total_tki',
	requires: [

	],
	store: Ext.create('koyoku.store.portal.Data_total_tki',{
		autoLoad : true
	}),
	tpl: new Ext.XTemplate(
		'<tpl for=".">',
		'<div style="display:inline-block;margin:5px;width:17%;background:#eaeaea;">',
			'<div style="padding:15px;font-size:30px;text-align:right">{JML}</div>',
			'<div style="padding:15px;font-size:14px;background:#ccc">{STATUS}</div>',
		'</div>',
		'</tpl>'
	),
	itemSelector: 'div.thumb-wrap',
	emptyText: 'No images available',
});