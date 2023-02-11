Ext.define('koyoku.view.detail_pptkis.Header', {
    extend: 'Ext.panel.Panel',
    xtype: 'header_detail',
    witdth: '100%',
    height: 200,
    bind: {
        html: '<div style="margin:0;padding:20px 0;width:100%;height:200px;background-image:url(../api/uploads/pptkis/{detail.PPTKIS_COVER});background-size: cover;">' +
            '<center>' +
            '<div style="margin:10px 0;width:100px;height:100px;border-radius:100px;background-image:url(../api/uploads/pptkis/{detail.PPTKIS_LOGO});background-size: cover;">' +
            '</div>' +
            '<span style="margin:5px 0;font-size:20px;font-weight:bold;color:#fff;">{detail.PPTKIS_NAMA}</span><br>' +
            '</center>' +
            '</div>' +
            '</div>' +
            '',
    }    
});