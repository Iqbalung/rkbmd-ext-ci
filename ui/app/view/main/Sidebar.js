Ext.define('koyoku.view.main.Sidebar', {
  extend: 'Ext.Component',
  alias: 'widget.sideMenu',  
  width: 230,  
  id: 'sideMenu',
  html: [
    `
    <div class="side-bar">          
     <div class="menu">
       <div class="item"><a href="#dashboard"><i class="fa fa-desktop"></i>Dashboard</a></div>       
       <div class="item"><a href="#tki"><i class="fa fa-pencil"></i>Perencanaan Kebutuhan</a></div>
       <div class="item">
         <a class="sub-btn">Menu Dropdown<i class="fa fa-angle-right dropdown"></i></a>
         <div class="sub-menu">
           <a href="#" class="sub-item">Sub Item 01</a>
           <a href="#" class="sub-item">Sub Item 02</a>
           <a href="#" class="sub-item">Sub Item 03</a>
         </div>
       </div>
     </div>
     </div>
    `
  ],
  listeners: {    
    afterrender: function() {
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

        $('.close-btn').click(function(){
            $('.side-bar').removeClass('active');
            $('.menu-btn').css("visibility", "visible");
        });    

        $("#action_side_menu").click(function() {
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
        });
    }
  }
});