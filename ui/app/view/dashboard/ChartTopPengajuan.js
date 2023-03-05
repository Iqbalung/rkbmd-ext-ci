Ext.define('koyoku.view.dashboard.ChartTopPengajuan', {
	extend: 'Ext.chart.PolarChart',
	xtype: 'chart_top_pengajuan',
    interactions: ['rotate', 'itemhighlight'],
					store: {
						fields: ['name', 'data1'],
						data: [{
							name: 'metric one',
							data1: 14
						}, {
							name: 'metric two',
							data1: 16
						}, {
							name: 'metric three',
							data1: 14
						}, {
							name: 'metric four',
							data1: 6
						}, {
							name: 'metric five',
							data1: 36
						}]
					},
					series: {
						type: 'pie',						
						xField: 'data1',
						label: {
							field: 'data1',
							display: 'rotate'
						},
						donut: 0
					}

});