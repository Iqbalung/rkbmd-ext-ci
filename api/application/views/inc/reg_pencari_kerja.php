<main>
	<br>
	<div class="container center">
		<form method="POST" id="regpekerjaform" >
		 <div class="row">
		 	<div class="col s12">
		 		<div class="row">
			 		<div class="col s12 red-text ">
			 			<h5 class="left">Daftar Sebagai Pencari Kerja</h5>
			 		</div>
			 	</div>
		 		<div class="col s12 l5">		 							    		      
				     <div class="row">
				        <div class="input-field col s12">
				          <input id="nama" name="NAMA" type="text" class="validate">
				          <label for="nama">Nama</label>
				        </div>				        
				      </div>
				      <div class="row">
				        <div class="input-field col s12">
				          <input id="NO_KTP" name="NO_KTP" type="text" class="validate">
				          <label for="no_ktp">No. KTP/NIK</label>
				        </div>
				      </div>
				      <div class="row">
				       <div class="input-field col s12">
				          <textarea id="alamat" name="ALAMAT_KTP" class="materialize-textarea"></textarea>
				          <label for="alamat">Alamat KTP</label>
				        </div>
				      </div>
				      <div class="row">
				        <div class="input-field col s12 m6">
				          <input id="TEMPAT_LAHIR" name="TEMPAT_LAHIR" type="text" class="validate">
				          <label for="tempat_lahir">Tempat Lahir</label>
				        </div>
				        <div class="input-field col s12 m6">
				          <input id="TANGGAL_LAHIR" name="TANGGAL_LAHIR" type="text" class="datepicker" class="validate">
				          <label for="tgl_lahir">Tanggal Lahir</label>
				        </div>
				      </div>
				      <div class="row">
				      	<div class="input-field col s12 l6">
						    <select name="JENIS_KELAMIN">
						      <option value="" disabled selected>Pilih</option>
						      <option value="L">Laki - Laki</option>
						      <option value="P">Perampuan</option>
						    </select>
						    <label>Jenis Kelamin</label>
						  </div>
				      </div>	
		 		</div>
		 		<div class="col s12 l5 offset-l1">
		 			<div class="row">
				       <div class="input-field col s12">
				          <textarea id="alamat" name="ALAMAT_TINGGAL" class="materialize-textarea"></textarea>
				          <label for="alamat">Alamat</label>
				        </div>
				      </div>
				      <div class="row">
				        <div class="input-field col s12 l7">
				          <input id="email" type="email" name="EMAIL" class="validate">
				          <label for="email">Email</label>
				        </div>
				        <div class="input-field col s12 l5">
				          <input id="no_hp" type="text" name="NO_TELP" class="validate">
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
				      <div class="row left">
				      	<div class="col s12 ">
				      		<button class="waves-effect red btn " id="regpekerja">Daftar</button>
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
  		$('#alamat').trigger('autoresize');
  		$('select').material_select();
  		$('.datepicker').pickadate({
		    selectMonths: true, // Creates a dropdown to control month
		    selectYears: 15, // Creates a dropdown of 15 years to control year,
		    today: 'Hari Ini',
		    clear: 'Bersihkan',
		    format: 'yyyy-m-dd',
		    close: 'Pilih',
		    closeOnSelect: false // Close upon selecting a date,
		  });
  });

  $("#regpekerjaform").submit(function(e) {
  e.preventDefault();
  var formData = new FormData($('#regform')[0]);
  $.ajax({
    method: 'POST',
    url: 'api/index.php/Registration/add_pekerja_chalange',
    dataType: 'json',
    data: formData,
    async: false,
    cache: false,
    contentType: false,
    processData: false,
    success: function(data) {
      if(data.success == true) {
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

 