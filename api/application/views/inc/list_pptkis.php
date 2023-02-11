 <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>jQuery UI Autocomplete - Default functionality</title>
  <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
  <link rel="stylesheet" href="/resources/demos/style.css">
  <script src="https://code.jquery.com/jquery-1.12.4.js"></script>
  <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script> 
  <style>  
              .ui-menu {  
                list-style:none;  
                padding: 2px;  
                margin: 0;  
                display:block;  
            }  
            .ui-menu .ui-menu {  
                margin-top: -3px;  
            }  
            .ui-menu .ui-menu-item {  
                margin:0;  
                padding: 0;  
                zoom: 1;  
                float: left;  
                clear: left;  
                width: 100%;  
                font-size:80%;  
            }  
            .ui-menu .ui-menu-item a {  
                text-decoration:none;  
                display:block;  
                padding:.2em .4em;  
                line-height:1.5;  
                zoom:1;  
            }  
            .ui-menu .ui-menu-item a.ui-state-hover,  
            .ui-menu .ui-menu-item a.ui-state-active {  
                font-weight: normal;  
                margin: -1px;  
            }  

            img{
                width: 48px;
                cursor: pointer;
                /*padding: 10px;*/
               /* border:1px solid #fff;*/
              margin-right: 20px;
            }

            .box {
                position: relative;
                display: inline-block;
                width: 100px;
                height: 100px;
                background-color: #fff;
                border-radius: 5px;
                box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
                border-radius: 5px;
                -webkit-transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
                transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
              }

              .box::after {
                content: "";
                border-radius: 5px;
                position: absolute;
                z-index: -1;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
                opacity: 0;
                -webkit-transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
                transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
              }

              .box:hover {
                -webkit-transform: scale(1.25, 1.25);
                transform: scale(1.25, 1.25);
              }

              .box:hover::after {
                  opacity: 1;
              }

        </style>  
<script type="text/javascript">
        $(this).ready( function() {  
          console.log("test");  
            $("#id").autocomplete({  
                minLength: 1,  
                source:
                function(req, add){  
                  console.log("test");  
                    $.ajax({  
                        url: "<?php echo base_url(); ?>api/index.php/Publik_pptkis/lookup",  
                        dataType: 'json',  
                        type: 'POST',  
                        data: req,  
                        success:      
                        function(data){  
                            if(data){  
                                add(data.message);  
                                console.log(data);
                            }  
                        },  
                    });  
                },  
                    
            });  
        });  
          $(this).ready( function() {  
          console.log("test");  
            $("#idwilayah").autocomplete({  
                minLength: 1,  
                source:
                function(req, add){  
                  console.log("test");  
                    $.ajax({  
                        url: "<?php echo base_url(); ?>api/index.php/Publik_pptkis/lookup_wilayah",  
                        dataType: 'json',  
                        type: 'POST',  
                        data: req,  
                        success:      
                        function(data){  
                            if(data){  
                                add(data.message);  
                                console.log(data);
                            }  
                        },  
                    });  
                },  
                    
            });  
        });  
        </script>  

<main>
	<br>
  <div class="row">
<div class="col s12">
</div>
	<div class="container center">
    <div class="row">
    <div class="container-full">
      <form method="post" action="<?php echo base_url() ?>daftar-pptkis">
        
        <div class="row">

        <div class="input-field col s6">
        <label for="search"><i class="material-icons" style="vertical-align:middle;">search</i> Cari Perusahaan di wilayah anda</label>
        <input type="text" name="PPTKIS_NAMA" id="id" class="autocomplete">
        </div>
        </div>
           <ul>  
            <div class="well" id="result"></div>  
            </ul>         
          <!-- I've put "red-text" class to emphasize -->
      </form> 
    </div>
    <div class="row">
        <?php 
          $n=0;
          foreach ($pptkis as $key) {
          $n++;
        ?>
        <div class="col s12 m4 ">
        <table>
        <tr style="min-height: 200px;">
             <a href="#">
            <td>
              <?php if($key->PPTKIS_LOGO==""){?>
              <div class="box" style="margin:10px 0;width:50px;height:50px;border-radius:100px;background-image:url(https://www.ithsc.com/ciscohardwaremaintenance/images/no_product_image_large.png);background-size: cover;">
               </div>
              <?php }else { ?> 
              <div class="box" style="margin:0px 0;width:50px;height:50px;border-radius:100px;background-image:url(<?php echo base_url() ?>api/uploads/pptkis/<?php echo $key->PPTKIS_LOGO; ?>);background-size: cover;">
              </div>
              </td>
              <?php } ?>
              </a >
              <td>
                 <a href="<?php echo base_url() ?>detail-pptkis/<?php echo $key->PPTKIS_ID; ?>/<?php echo $key->PPTKIS_NAMA ?>"> <b style="vertical-align: middle;"><?php echo $key->PPTKIS_NAMA; ?></b> </a>
                  <p style="font-size: 10px"><?php echo $key->PPTKIS_DES_PENDEK; ?></p>
              </td>
        </tr>
        </table>      
        </div>

        <?php
            
          }

        ?>

      </div>
	</div>
  <br><br>
</main>