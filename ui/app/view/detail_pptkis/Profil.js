Ext.define('koyoku.view.detail_pptkis.Profil', {
    extend: 'Ext.form.Panel',
    xtype: 'profil',
    witdth: '100%',
    height: '100%',    
    bodyPadding: '20',
    autoScroll:true,
    defaults: {
        width: '100%',
        xtype: 'displayfield'
    },    
    items: [{        
        labelAlign:'top',
        xtype: 'displayfield',
        fieldLabel: 'Deskripsi Singkat',
        minHeight:150,
        name: 'PPTKIS_DES_PENDEK',
    }, {
        xtype: 'displayfield',        
        minHeight:350,
        name: 'PPTKIS_DES_PANJANG',
    }]
});