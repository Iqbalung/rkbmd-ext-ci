Ext.define('Admin.view.kegiatan.BidangsModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.searchbidangs',

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
            type: 'bidangs'
        },
        
        inboxResults: {
            type: 'inbox'
        }
    }
});
