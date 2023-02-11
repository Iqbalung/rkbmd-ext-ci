Ext.define('Admin.view.dashboard.Network', {
    extend: 'Ext.panel.Panel',
    xtype: 'network',

    requires: [
        'Ext.chart.CartesianChart',
        'Ext.chart.axis.Category',
        'Ext.chart.axis.Numeric',
        'Ext.chart.series.Line',
        'Ext.chart.interactions.PanZoom',
        'Ext.ProgressBar'
    ],

    cls: 'dashboard-main-chart shadow',
   
    bodyPadding: 15,

    tools: [
        {
            type: 'refresh',
            toggleValue: false,
            listeners: {
                click: 'onRefreshToggle'
            }
        }
    ],

    items: []
});
