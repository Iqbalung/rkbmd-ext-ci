Ext.define('Admin.store.search.Categories', {
    extend: 'Ext.data.Store',

    alias: 'store.searchcategories',

    model: 'Admin.model.search.Category',

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
