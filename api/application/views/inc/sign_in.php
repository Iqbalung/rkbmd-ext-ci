<main style="background: #a8a8a8 url(<?php echo base_url('api/media/images/bg-profil.png'); ?>) 100% ; background-size:cover; ">
<br>
<br>
<div class="row">
    <form class="col s12 l4 offset-l4 card " id="form_login">
      <div class="row">
        <br>
         <h5 class="center red-text"><?php  echo $this->lang->line('login_title'); ?></h5>
      </div>
      <div class="row">
        <div class="col s12">
           <span id='add_err'></span>
        </div>
      </div>
      <div class="row ">
        <div class="input-field col s12">
          <i class="material-icons prefix">email</i>
          <input id="email" type="email" name="email" class="validate">
          <label for="email">Email</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <i class="material-icons prefix">remove_red_eye</i>
          <input id="password" type="password" name="password" class="validate">
          <label for="password">Password</label>
        </div>
      </div>
      
      <div class="row">
        <btn class="waves-effect col s12 red btn" id="login">Login</btn>
      </div>
      <div class="row center">
        <?php  echo $this->lang->line('login_guide'); ?> <a href='http://www.koyoku.com/demo/sign_in'>di sini.</a>
      </div>
    </form>
</div>
<br>
<br>
</main>
<script type="text/javascript">
  $(document).ready(function(){
       $("#login").click(function() {
        $.ajax({
          type: 'POST',
          url: '<?php echo site_url('login/do_login'); ?>',
          dataType: 'json',
          data: $('#form_login').serialize(),
          success: function(data) {
            if(data.success == true) {
              localStorage.setItem("is_login", 'yes');
              window.location = "<?php echo base_url('ui'); ?>";
            } else {
              $("#add_err").removeClass("yellow-text");
              $("#add_err").addClass("red-text");
              $("#add_err").html("<div class='alert alert-danger' role='alert'>Email atau sandi tidak valid</div>")
            }
          },
          beforeSend: function() {
             $("#add_err").addClass("yellow-text");
             $("#add_err").html("<div class='alert alert-warning' role='alert'>Proses validasi akun</div>")
          }
        });
        return false;
      });
  });
</script>