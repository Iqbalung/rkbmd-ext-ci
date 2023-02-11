Ext.define('Admin.store.search.Kegiatans', {
    extend: 'Ext.data.Store',

    alias: 'store.searchkegiatans',

    model: 'Admin.model.search.Kegiatan',

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
