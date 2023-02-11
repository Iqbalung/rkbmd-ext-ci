<script src='https://www.google.com/recaptcha/api.js'></script>
<main>
	<br>
	<div class="container center">
		<form class="col s12" method="post" id="regpptkisform">
		 <div class="row">
		 	<div class="col s12">
		 		<div class="row">
			 		<div class="col s12 red-text ">
			 			<h5 class="center">Daftar Sebagai PPTKIS</h5>
			 		</div>
			 	</div>
		 		<div class="col s12 l5">		 							    		      
				     <div class="row">
				        <div class="input-field col s12">
				          <input id="nama" name="PPTKIS_NAMA" type="text" class="validate">
				          <label for="nama">Nama PPTKIS</label>
				        </div>				        
				      </div>
				      <div class="row">
				        <div class="input-field col s12 l7">
				          <input id="no_ktp" name="PPTKIS_LEGALITAS" type="text" class="validate">
				          <label for="no_ktp">Legalitas</label>
				        </div>
				        <div class="input-field col s12 l5">
				          <input id="no_telp" name="PPTKIS_NO_TELPHONE" type="text" class="validate">
				          <label for="no_telp">No Telp</label>
				        </div>
				      </div>		
				      <div class="row">
				     	 <div class="input-field col s12">
				          <textarea id="deskripsi" name="PPTKIS_DES_PENDEK" class="materialize-textarea"></textarea>
				          <label for="deskripsi">Deskripsi</label>
				        </div>
				      </div>	
				      <div class="row">
				     	 <div class="input-field col s12">
				          <textarea id="deskripsi" name="PPTKIS_ALAMAT" class="materialize-textarea"></textarea>
				          <label for="deskripsi">Alamat</label>
				        </div>
				      </div>
		 		</div>
		 		<div class="col s12 l5 offset-l1">
		 			<div class="row">
				      <div class="row">
				        <div class="input-field col s12">
				          <input id="nama" type="text" name="NAMA" class="validate">
				          <label for="nama">Nama Pegawai</label>
				        </div>				        
				      </div> 
				     <div class="row">
				        <div class="input-field col s12 l7">
				          <input id="email" type="email" name="EMAIL" class="validate">
				          <label for="email">Email</label>
				        </div>
				        <div class="input-field col s12 l5">
				          <input id="no_hp" type="text"  name="NO_TELP" class="validate">
				          <label for="no_hp">No HP</label>
				        </div>
				      </div>
				      <div class="row">
				        <div class="input-field col s12 l6">
				          <input id="password" type="password" name="PASSWORD" class="validate">
				          <label for="password">Kata Sandi</label>
				        </div>
				        <div class="input-field col s12 l6">
				          <input id="ulangi_password" type="password" name="KONFIRMASI_PASSWORD" class="validate">
				          <label for="ulangi_password">Ulangi Sandi</label>
				        </div>
				      </div>	
				       <div class="g-recaptcha" data-sitekey="6LcXjy4UAAAAAOQ_HRrYUHKnhn-mCx4oH_HlE2LH"></div>
				      <div class="row left">
				      	<div class="col s12 ">
				      		<button class="waves-effect red btn" id="regpekerja">Daftar</button>
				      	</div>
				      </div>				      
		 		</div>		
		 		 		
		 	</div>		 	
		  </div>

		  </form>
	</div>
</main>

<script type="text/javascript">
  $(document).ready(function(){
  		$('#deskripsi').trigger('autoresize');
  		$('select').material_select();
  		$('.datepicker').pickadate({
		    selectMonths: true, // Creates a dropdown to control month
		    selectYears: 15, // Creates a dropdown of 15 years to control year,
		    today: 'Hari Ini',
		    clear: 'Bersihkan',
		    close: 'Pilih',
		    closeOnSelect: false // Close upon selecting a date,
		  });
  });

  $("#regpptkisform").submit(function(e) {
  e.preventDefault();
  var formData = new FormData($('#regpptkisform')[0]);
  $.ajax({
    method: 'POST',
    url: 'api/index.php/Registration/add_pptkis_chalange',
    dataType: 'json',
    data: formData,
    async: false,
    cache: false,
    contentType: false,
    processData: false,
    success: function(data) {
      if(data.success==true) {
        Materialize.toast(data.msg, 4000);
        window.location = "<?= base_url(); ?>registrasi-berhasil";
      } else {
         Materialize.toast(data.msg, 4000);
      }
    },
    beforeSend: function() {
       $("#add_err").html("<div class='alert alert-warning' role='alert'>Proses pencocokan</div>")
    }
  });
  return false;
});
</script>

