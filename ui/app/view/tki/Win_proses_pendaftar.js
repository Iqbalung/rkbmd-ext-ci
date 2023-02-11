Ext.define('koyoku.view.tki.Win_proses_pendaftar', {
    extend: 'Ext.Window',
    alias: 'widget.window_proses_pendaftar',
    modal: true,
    controller : 'tki',
    
     bind : { title : '{language.verivikasi}', },
    bodyPadding: 10,    
    id:"win_verifikasi_pendaftar",
    items: [{
        xtype : 'form',
        width: 700,
        height: 400,
        defaults: {            
            xtype: 'hiddenfield'
        },
        items:[{
            name:"ID"
        },{
            name:"PEKERJA_ID"
        },{
            name:"JOB_ID"
        }],
        bind: {
            html: 
                
                '<div style="margin:0;padding:20px 0;width:700px;height:200px;background-image:url(../api/uploads/tki/identitas/{detail.COVER});background-size: cover;">'+
                    '<center>'+
                        '<div style="margin:10px 0;width:100px;height:100px;border-radius:100px;background-image:url(../api/uploads/tki/identitas/{detail.PHOTO});background-size: cover;">'+                    
                        '</div>'+
                        '<span style="margin:5px 0;font-size:20px;font-weight:bold;color:#eee;">{detail.NAMA_PEKERJA}</span><br>'+
                    '</center>'+
                '</div>'+                
                '<span style="float:left;padding:10px;">'+
                    '<img src="../api/uploads/tki/media/{detail.FILE_KTP}" style="width:150px;height:120px;"><br>'+
                    'KTP<br>'+
                    '<center    >'+
                    '<i class="fa fa-check-circle" aria-hidden="true" style="margin:5px 0;font-size:24px;color:{detail.STATUS_KTP};"></i>'+
                    '</center>'+
                '</span>'+
                '<span style="float:left;padding:10px;">'+
                    '<img src="../api/uploads/tki/media/{detail.FILE_AKTA}" style="width:150px;height:120px;"><br>'+
                    'AKTA<br>'+
                    '<center>'+
                    '<i class="fa fa-check-circle" aria-hidden="true" style="margin:5px 0;font-size:24px;color:{detail.STATUS_AKTA};"></i>'+
                    '</center>'+
                '</span>'+
                '<span style="float:left;padding:10px;">'+
                    '<img src="../api/uploads/tki/media/{detail.FILE_KK}" style="width:150px;height:120px;"><br>'+
                    'KK<br>'+
                    '<center>'+
                    '<i class="fa fa-check-circle" aria-hidden="true" style="margin:5px 0;font-size:24px;color:{detail.STATUS_KK};"></i>'+
                    '</center>'+
                '</span>'+
                '<span style="float:left;padding:10px;">'+
                    '<img src="../api/uploads/tki/media/{detail.FILE_SURAT_IZIN}" style="width:150px;height:120px;"><br>'+
                    'Surat Izin<br>'+
                    '<center>'+
                    '<i class="fa fa-check-circle" aria-hidden="true" style="margin:5px 0;font-size:24px;color:{detail.STATUS_SURAT_IZIN};"></i>'+
                    '</center>'+
                '</span>'+
                /*'<span style="float:left;padding:10px;">'+
                    '<img src="../api/uploads/tki/media/{detail.FILE_PASPOR}" style="width:120px;height:120px;"><br>'+
                    'Paspor<br>'+
                    '<center>'+
                    '<i class="fa fa-check-circle" aria-hidden="true" style="margin:5px 0;font-size:24px;color:{detail.STATUS_PASPOR};"></i>'+
                    '</center>'+
                '</span>'+ */               
            '</div>'+
            '',
        },
    }],
    bbar:[{
        text:"Tolak",
        width:'50%',
        glyph: 'xf057@fontAwesome',
        handler:'ditolak' 
    },{
        xtype:'button',
        text:"Terima",
        width:'50%',
        glyph: 'xf0c7@fontAwesome',
        handler:'diterima'
     }]
});
