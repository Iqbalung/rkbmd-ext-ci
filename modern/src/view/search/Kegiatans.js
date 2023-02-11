Ext.define('Admin.view.search.Results', {
    extend: 'Ext.tab.Panel',
    xtype:'searchkegiatan',

    viewModel: {
        type: 'searchkegiatan'
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
