Ext.define('Admin.view.search.Results', {
    extend: 'Ext.tab.Panel',
    xtype:'searchresults2',

    viewModel: {
        type: 'searchresults'
    },

    items: [{
        xtype: 'allresults',
        title: 'All',
        bind: {
            store: '{results}'
        }
    }, {
        xtype: 'searchusers',
        title: 'Users',
        bind: {
            store: '{users}'
        }
    }, {
        xtype: 'inbox',
        title: 'Messages',
        hideHeaders: true,
        bind: '{inbox}'
    }]
});
