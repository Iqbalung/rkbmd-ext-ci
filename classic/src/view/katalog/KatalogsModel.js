Ext.define('Admin.view.katalog.KatalogsModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.searchkatalogs',

    requires: [
        'Ext.data.Store',
        'Ext.data.proxy.Memory',
        'Ext.data.field.Integer',
        'Ext.data.field.String',
        'Ext.data.field.Date',
        'Ext.data.field.Boolean',
        'Ext.data.reader.Json'
    ],

    stores: {
        allResults: {
            type: 'searchkatalogs'
        },

        usersResults: {
            type: 'searchusers'
        },
        
        inboxResults: {
            type: 'inbox'
        }
    }
});
