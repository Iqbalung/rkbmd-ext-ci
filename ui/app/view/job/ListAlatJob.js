Ext.define('koyoku.view.job.ListAlatJob', {
    extend: 'Ext.grid.Panel',
    xtype: 'alatListJob',

    requires: [
        'koyoku.store.job.Alat'
    ],
    store: {
        type: 'listAlatJob',
        storeId: 'listAlatJob',
        autoLoad: false,
    },
    features: [{
        groupHeaderTpl: '{name}',
        ftype: 'groupingsummary'
    }],
    initComponent: function() {
        var me = this;
        Ext.apply(me, {
            columns: [{
                text: 'No',
                xtype: 'rownumberer',
                width: 60,

            }, {
                text: 'Nama Alat',
                dataIndex: 'ALAT_KERJA_NAMA',
                flex: '1',
                editor: 'textfield',
            },{
                text: "BARANG_NAMA",
                dataIndex: 'BARANG_NAMA',
                renderer: function (bookIsbns) {
                    const bookTitles = [],
                        booksStore = Ext.create('koyoku.store.Barang');
                    Ext.Array.each(bookIsbns, function (bookIsbn) {
                        var bookRecord = booksStore.findRecord('AGEN_ID', bookIsbn);
                        bookRecord && bookTitles.push(bookRecord.get('BARANG_NAMA'));
                    }, this);
                    return bookTitles.join(", ");
                },
                editor: {
                    xtype: 'combobox',
                    store: 'BAEANG_NAMA',
                    queryMode: 'local',
                    multiSelect: true,
                    displayField: 'title',
                    valueField: 'bookIsbn',
                    editable: false,
                    forceSelection: true,
                    allowBlank: false,
                    displayTpl: Ext.create('Ext.XTemplate',
                        '<tpl for=".">',
                        '{BARANG_NAMA}',
                        '</tpl>'
                    )
                },
                flex: 1
            }],
            plugins: [{
                ptype: 'rowediting',
            }],
        });
        me.callParent([arguments]);
    },
    listeners: {
        itemdblclick: 'detail',
    },

});