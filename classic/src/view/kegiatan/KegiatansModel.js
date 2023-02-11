Ext.define('Admin.view.kegiatan.KegiatansModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.searchkegiatans',

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
            type: 'searchkegiatans'
        },

        usersResults: {
            type: 'searchusers'
        },
        
        inboxResults: {
            type: 'inbox'
        }
    }
});
