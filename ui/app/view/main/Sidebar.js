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
       <div class="item"><a class="menu-link" href="#dashboard"><i class="fa fa-desktop"></i>Dashboard</a></div>       
       <div class="item">
         <a class="sub-btn"><i class="fa fa-list-alt"></i>Setup<i class="fa fa-angle-right dropdown"></i></a>
         <div class="sub-menu">
           <a href="#" class="menu-link sub-item">Kepala SKPD</a>
           <a href="#bidang" class="menu-link sub-item">Bidang</a>
           <a href="#kompetensi" class="menu-link sub-item">Kegiatan</a>
         </div>
       </div>
       <div class="item"><a class="menu-link" href="#tki"><i class="fa fa-pencil"></i>RKPBMD</a></div>       
       <div class="item">
         <a class="sub-btn"><i class="fa fa-search"></i>Referensi<i class="fa fa-angle-right dropdown"></i></a>
         <div class="sub-menu">
           <a href="#barang" class="menu-link sub-item">Daftar Barang</a>
           <a href="#" class="menu-link sub-item">Daftar Template</a>           
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