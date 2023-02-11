Ext.define('Admin.view.kegiatan.Kegiatans', {
    extend: 'Ext.container.Container',
    xtype: 'searchkegiatans',
    requires: [
        'Ext.grid.Panel',
        'Ext.toolbar.Paging',
        'Ext.grid.column.Date'
    ],
    controller: 'searchkegiatans',
    viewModel: {
        type: 'searchkegiatans'
    },
    cls: 'shadow',
    activeTab: 0,
    margin: 20,
    items: [
        {
            xtype: 'treelist',
            style:'height:100px;',
            store: {
                rootVisible: true,
                hideHeaders: true,
                columns: [{
                    dataIndex: 'BIDANG_NAMA',
                    xtype: 'treecolumn',
                    flex: 1
                }],
                store: Ext.create('Admin.store.Bidangs',{
                    storeId:"store_bidang",
                })
            }
        },
        {
            xtype: 'form',
            defaultType: 'textfield',
            layout: 'hbox',
            items:[
                {
                    xtype:'textfield',
                    emptyText : 'Cari',
                    style: 'margin:10px'
                },
                {
                    xtype:'button',
                    iconCls: 'x-fa fa-pencil',
                    style: 'margin:10px'
                }
            ],
            
        },
        {
            xtype: 'grid',
            cls: 'user-grid',
            title: 'User Results',
            routeId: 'user',
            bind: '{usersResults}',
            scrollable: false,
            tools: [
                {
                    iconCls: 'x-fa fa-pencil',
                    toggleValue: false,
                    listeners: {
                        click: 'onRefreshToggle'
                    }
                },
                {
                    iconCls: 'x-fa fa-pencil',
                    toggleValue: false,
                    listeners: {
                        click: 'onRefreshToggle'
                    }
                },
                {
                    iconCls: 'x-fa fa-pencil',
                    toggleValue: false,
                    listeners: {
                        click: 'onRefreshToggle'
                    }
                }
            ],
            columns: [
                {
                    xtype: 'gridcolumn',
                    width: 140,
                    dataIndex: 'identifier',
                    text: '#Kode Subkegiatan'
                },
                {
                    xtype: 'gridcolumn',
                    cls: 'content-column',
                    dataIndex: 'fullname',
                    text: 'Nomenklatur Subkegiatan',
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
