Ext.define('Admin.view.search.Results', {
    extend: 'Ext.tab.Panel',
    xtype: 'searchresults',
    requires: [
        'Ext.grid.Panel',
        'Ext.toolbar.Paging',
        'Ext.grid.column.Date'
    ],
    controller: 'searchresults',
    viewModel: {
        type: 'searchresults'
    },
    cls: 'shadow',
    activeTab: 0,
    margin: 20,
    items: [
        {
            xtype: 'gridpanel',
            cls: 'user-grid',
            title: 'User Results',
            routeId: 'user',
            bind: '{usersResults}',
            scrollable: false,
            columns: [
                {
                    xtype: 'gridcolumn',
                    width: 40,
                    dataIndex: 'identifier',
                    text: '#'
                },
                {
                    xtype: 'gridcolumn',
                    renderer: function(value) {
                        return "<img src='resources/images/user-profile/" + value + "' alt='Profile Pic' height='40px' width='40px'>";
                    },
                    width: 75,
                    dataIndex: 'profile_pic',
                    text: 'User'
                },
                {
                    xtype: 'gridcolumn',
                    cls: 'content-column',
                    dataIndex: 'fullname',
                    text: 'Name',
                    flex: 1
                },
                {
                    xtype: 'gridcolumn',
                    cls: 'content-column',
                    dataIndex: 'email',
                    text: 'Email',
                    flex: 1
                },
                {
                    xtype: 'datecolumn',
                    cls: 'content-column',
                    width: 120,
                    dataIndex: 'joinDate',
                    text: 'Date'
                },
                {
                    xtype: 'gridcolumn',
                    cls: 'content-column',
                    dataIndex: 'subscription',
                    text: 'Subscription',
                    flex: 1
                },
                {
                    xtype: 'actioncolumn',
                    items: [
                        {
                            xtype: 'button',
                            iconCls: 'x-fa fa-pencil'
                        },
                        {
                            xtype: 'button',
                            iconCls: 'x-fa fa-close'
                        },
                        {
                            xtype: 'button',
                            iconCls: 'x-fa fa-ban'
                        }
                    ],

                    cls: 'content-column',
                    width: 120,
                    dataIndex: 'bool',
                    text: 'Actions',
                    tooltip: 'edit '
                }
            ],
            dockedItems: [
                {
                    xtype: 'pagingtoolbar',
                    dock: 'bottom',
                    itemId: 'userPaginationToolbar',
                    displayInfo: true,
                    bind: '{usersResults}'
                }
            ]
        }
    ]
});
