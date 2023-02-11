Ext.define('koyoku.view.portal.Pie_jk', {
	extend: 'Ext.chart.PolarChart',
	xtype: 'pie_jk',
	requires: [

	],
	theme: 'red',
	interactions: ['rotate', 'itemhighlight'],
	store: Ext.create('koyoku.store.portal.Data_jk',{
		autoLoad : true
	}),
	series: {
		type: 'pie',
		highlight: true,
		angleField: 'data',
		donut: 30,
		label: {
			field: 'name'
		},
	},
	legend: {
		type: 'sprite',
		docked: 'bottom'
	}
});