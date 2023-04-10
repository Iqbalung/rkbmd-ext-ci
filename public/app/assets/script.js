$("#login").click(function() {
  $.ajax({
    type: 'POST',
    url: 'http://karya-inovasi.com/beta-rkbmdapi/index.php/login/do_login',
    dataType: 'json',
    data: $('#Form').serialize(),
    success: function(data) {
      if(data.success == true) {
        localStorage.setItem("is_login", 'yes');
        window.location = "../ui#portal";
      } else {
        $("#add_err").html("<div class='alert alert-danger' role='alert'>Email atau sandi tidak valid</div>")
      }
    },
    beforeSend: function() {
       $("#add_err").html("<div class='alert alert-warning' role='alert'>Proses pencocokan</div>")
    }
  });
  return false;
});

$("#daftar").click(function() {
  $('#login-modal').modal('hide');
      $('body').removeClass('modal-open');
      $('.modal-backdrop').remove();
});