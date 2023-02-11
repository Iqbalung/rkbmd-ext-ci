Ext.define('koyoku.view.portal.Profile', {
    extend: 'Ext.form.Panel',
    xtype: 'portal_profile',
    bodyPadding: '20',
    items: [{
        xtype: 'image',
        width: '100%',
        itemId: 'preview_pptkis_logo',
        //height: 100,
        bind: {
            src: '../api/uploads/pptkis/{INSTANSI.LOGO}'
        },
    }, {
        xtype: 'fieldcontainer',
        padding: 5,
        defaults: {
            width: '80%',
            xtype: 'displayfield'
        },
        items: [{
            //fieldLabel: 'PPTKIS',
            name: 'PPTKIS_NAMA',
            bind: '{INSTANSI.NAMA}'
        }, {
            //bind : { fieldLabel : '{language.deskripsi}', },
            rows: 6,
            name: 'PPTKIS_DES_PENDEK',
            bind: '{INSTANSI.DES_PENDEK}'
        }]
    }],
    tbar :[
        '->',
        {
            text :'Detail',
            bind : {
                href : '#detail_pptkis/{INSTANSI.ID}'
            }
        },{
            text :'Ubah',
            bind : {
                hidden : '{!akses.page_profile_pptkis}',
                href : '#profile_pptkis/{INSTANSI.ID}'
            }
        }
    ]
});
