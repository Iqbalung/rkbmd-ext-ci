Ext.define('koyoku.view.detail_pptkis.Struktur_organisai', {
    extend: 'Ext.panel.Panel',
    xtype: 'struktur_organisai',
    witdth: '100%',
    height: '100%',    
    bodyPadding: '20',    
    autoScroll:true,
    bind: {
        html:'<center><span style="color:red;font-weight:bold">STRUKTUR ORGANISASI {detail.PPTKIS_NAMA}</span></center><br>'+ 
            '<img src="../api/uploads/pptkis/{detail.PPTKIS_STRUKTUR_ORGANISASI}" style="margin:0;padding:20px 0;width:100%;">' +
            '',
    },
});