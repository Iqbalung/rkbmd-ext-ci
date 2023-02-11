Ext.define('Admin.store.search.Katalogs', {
    extend: 'Ext.data.Store',

    alias: 'store.searchkatalogs',

    model: 'Admin.model.search.Katalog',

    proxy: {
        type: 'api',
        url: '~api/search/users'
    },

    autoLoad: 'true',

    sorters: {
        direction: 'ASC',
        property: 'fullname'
    }
});
