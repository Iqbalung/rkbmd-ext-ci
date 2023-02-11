Ext.define('Admin.view.category.Categories', {
    extend: 'Ext.container.Container',
    xtype: 'searchcategories',
    requires: [
        'Ext.grid.Panel',
        'Ext.toolbar.Paging',
        'Ext.grid.column.Date',
        'Admin.view.bidang.BidangsController',
        'Admin.view.bidang.Tree_bidang',
        'Admin.store.Bidangs',
        'Admin.view.bidang.Form_bidang',
    ],
    controller: 'searchcategories',
    viewModel: {
        type: 'searchcategories'
    },
    cls: 'shadow',
    activeTab: 0,
    margin: 20,
    items: [
        {
            xtype: 'tree_bidang',
            allowDeselect: true,
            tbar: [
            ],
        }
    ]
});
