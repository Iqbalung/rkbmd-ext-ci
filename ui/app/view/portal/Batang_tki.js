Ext.define('koyoku.view.portal.Batang_tki', {
	extend: 'Ext.chart.CartesianChart',
	xtype: 'batang_tki',
	requires: [

	],
	store: {
		fields: ['TAHUN', 'TOTAL', 'BERANGKAT'],
		data: [{
			TAHUN: '2013',
			BERANGKAT: 10,
			TOTAL: 2
		}, {
			TAHUN: '2014',
			BERANGKAT: 7,
			TOTAL: 3
		}, {
			TAHUN: '2015',
			BERANGKAT: 5,
			TOTAL: 10
		}, {
			TAHUN: '2016',
			BERANGKAT: 2,
			TOTAL: 12
		}, {
			TAHUN: '2017',
			BERANGKAT: 27,
			TOTAL: 12
		}]
	},
	axes: [{
		type: 'numeric',
		position: 'left',
		fields: 'TOTAL'
	}, {
		type: 'category',
		position: 'bottom',
		fields: 'TAHUN'
	}],
	series: {
		type: 'bar',
		stacked: true,
		xField: 'TAHUN',
		yField: ['TOTAL', 'BERANGKAT']
	},
	legend: {
		type: 'sprite',
		docked: 'bottom'
	}

});