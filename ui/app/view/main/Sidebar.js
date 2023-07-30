Ext.define('koyoku.view.main.Sidebar', {
  extend: 'Ext.Component',
  alias: 'widget.sideMenu',  
  width: 230,  
  id: 'sideMenu',
  html: [
    `
    <div class="side-bar">          
     <div class="menu">
      <div class="box-menu">
          <i class="fa fa-navicon btn-close-side-bar"></i>
          <div class="text-username"></div>
      </div>
       <div class="item"><a menuId="dashboard" class="menu-link" href="#dashboard"><i class="fa fa-desktop"></i>Dashboard</a></div>       
       <div class="item">
         <a class="sub-btn"><i class="fa fa-list-alt"></i>Setup<i class="fa fa-angle-right dropdown"></i></a>
         <div class="sub-menu">           
           <a menuId="pengguna" href="#pengguna" class="menu-link sub-item">Pengguna</a>
           <a menuId="bidang" href="#bidang" class="menu-link sub-item">OPD (Organisasi Perangkat Daerah)</a>
           <a menuId="program" href="#program" class="menu-link sub-item">Program</a>
           <a menuId="kegiatan" href="#kompetensi" class="menu-link sub-item">Kegiatan</a>
         </div>
       </div>
       <div class="item"><a class="menu-link" menuId="rkpbmd" href="#tki"><i class="fa fa-pencil"></i>RKBMD</a></div>       
       <div class="item">
         <a class="sub-btn"><i class="fa fa-search"></i>Referensi<i class="fa fa-angle-right dropdown"></i></a>
         <div class="sub-menu">
           <a menuId="barang" href="#barang" class="menu-link sub-item">Daftar Barang</a>           
         </div>
       </div>
     </div>
     </div>
    `
  ],
  listeners: {    
    afterrender: function() {
        var me  = this;
         //jquery for toggle sub menus
        $('.sub-btn').click(function(){
            $(this).next('.sub-menu').slideToggle();
            $(this).find('.dropdown').toggleClass('rotate');
        });
        
        //jquery for expand and collapse the sidebar
        $('.menu-btn').click(function(){
            $('.side-bar').addClass('active');
            $('.menu-btn').css("visibility", "hidden");
        });

        $('.btn-close-side-bar').click(function(){
            me.sideBarToggle();
        });
        
        $('.menu .item a.menu-link').click(function(){
            me.sideBarToggle();
        });

        $("#action_side_menu").click(function() {
            me.sideBarToggle();
        });

        let menuFitur = {
          "dashboard": "ft-dashboard",
          "pengguna": "ft-pengguna",
          "bidang": "ft-bidang",
          "program": "ft-program",
          "kegiatan": "ft-kegiatan",
          "rkpbmd": "ft-rkpbmd",
          "barang": "ft-barang"          
        };

        for(akses in menuFitur) {
          let menu = $(".side-bar .menu").find('.menu-link[menuId="' + akses +'"]');
          if (menu.length > 0) {
            if (__dtlg_.cek_akses(menuFitur[akses])) {
              $(menu[0]).removeClass("hidden");
            } else {
              $(menu[0]).addClass("hidden");
            }
          }
        }
    }
  },
  sideBarToggle: function() {
    var sideBar = Ext.getCmp("sideMenu");
            if (sideBar.hidden) {                
                sideBar.getEl().removeCls("menu-fade-out");
                sideBar.getEl().addCls("menu-fade-in");
                sideBar.setHidden(false);
            } else {                
                sideBar.getEl().removeCls("menu-fade-in");
                sideBar.getEl().addCls("menu-fade-out");                
                sideBar.setHidden(true);
            }
  }
});