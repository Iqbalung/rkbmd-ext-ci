 <!DOCTYPE html>
  <html>
    <head>
    	<title>KOYOKU</title>

      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <meta name="apple-mobile-web-app-capable" content="yes"/>
      <meta name="msapplication-TileImage" content="<?php echo base_url('api/media/images/logo.png'); ?>" />
      <meta name='description' content="Tenaga Kerja, Penyalur Pekerjaan, Penyedia Pekerjaan terhubung dalam komunitas.
      Koyoku mempermudah pencarian kerja dan penempatan serta perlindungan kerja diluar negeri, hemat waktu dan biaya.
      Bergabunglah bersama kami dan dapatkan hasil yang terbaik."/>
      <meta name='keywords' content="koyoku, pptkis, tki, pekerjaan diluar negeri, blkln, cari pekerjaan diluar negeri, kerja diluar negeri"/>
      <meta name="country" content="Indonesia">

      <link rel="shortcut icon" type="image/png" href="<?php echo base_url('api/media/images/favicon.png'); ?>"/>
      <!--Import Google Icon Font-->
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
      <!--Import materialize.css-->
      <link type="text/css" rel="stylesheet" href="<?php echo base_url('api/media/materialize/css/materialize.min.css'); ?>"  media="screen,projection"/>
      <link type="text/css" rel="stylesheet" href="<?php echo base_url('api/media/style.css'); ?>"  media="screen,projection"/>

      <!--Let browser know website is optimized for mobile-->
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

      <script type="text/javascript" src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
      <script type="text/javascript" src="https://gojs.net/latest/release/go-debug.js"></script>
      <script type="text/javascript" src="<?php echo base_url('api/media/materialize/js/materialize.min.js'); ?>"></script>
      <script type="text/javascript">
      $(document).ready(function(){
        // $(".drop_daftar").dropdown();
         $(".button-collapse").sideNav();
      });
    </script>
       <!--This js for functional-->


    </head>

    <body>
    <script>
      (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
      })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

      ga('create', 'UA-105613456-1', 'auto');
      ga('send', 'pageview');

    </script>
    <header>
      <div class="navbar-fixed">
      <ul id="drop_daftar" class="dropdown-content">
        <li><a href="<?php echo base_url('registrasi-pencari-kerja'); ?>">Pencari Kerja</a></li>
        <li><a href="<?php echo base_url('registrasi-pptkis'); ?>">PPTKIS</a></li>        
      </ul> 
	    <nav class="white">
    		<div class="container">
			    <div class="nav-wrapper">
			      <a href="<?php echo base_url(); ?>" class="brand-logo"><img class="responsive-img" style="height: 30px" src="<?php echo base_url('api/media/images/logo.png'); ?>"></a>
            <a href="#" data-activates="mobile-demo" class="button-collapse right red-text"><i class="material-icons">menu</i></a>
			      <ul id="nav-mobile" class="right hide-on-med-and-down">
              <li><a class="drop_daftar red-text hide" href="#!" data-activates="drop_daftar">
                 Daftar<i class="material-icons right">arrow_drop_down</i>
                </a></li>
              <li><a href="<?php echo base_url('sign_up'); ?>" class="red-text"><?php   echo $this->lang->line('reg'); ?></a></li>
              <li><a href="<?php echo base_url('sign_in'); ?>" class="red-text"><?php   echo $this->lang->line('login'); ?></a></li>
			      </ul>            
			    </div>
    		</div>
			 </nav>       
      </div>
      <ul class="side-nav" id="mobile-demo">
              <li><a href="<?php echo base_url('sign_in'); ?>">Masuk</a></li>
              <li><a href="<?php echo base_url('sign_up'); ?>">Daftar</a></li>
              <li><a href="<?php echo base_url('profil'); ?>">Tentang Kami</a></li>
              <li><a href="<?php echo base_url('bantuan'); ?>">Bantuan</a></li>
              <li><a href="<?php echo base_url('ketentuan_umum'); ?>">Ketentuan Umum</a></li>
            </ul>
    </header>
  
