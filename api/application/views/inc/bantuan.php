<main>
	<div style="height: 200px;background:url(<?php echo base_url('api/media/images/bg-profil.png'); ?>) 100% center;background-size:cover;">
	</div>
	<div class="red">
		<div class="container">
			<div class="row">
				<div class="col l12">
					<h5 class="white-text center">Bantuan</h5 class="red-text">
				</div>
			</div>
		</div>
	</div>		
	<div class="container"></div>
	<div class="container">
		<div class="row">
			<div class="col s12">
				 <ul class="collapsible" data-collapsible="accordion">
				    <li>
				      <div class="collapsible-header"><i class="material-icons">filter_drama</i><?php  echo $this->lang->line('requirment'); ?>/div>
				      <div class="collapsible-body"><?php echo $bantuan['syarat_ketentuan']; ?></div>
				    </li>
				    <li>
				      <div class="collapsible-header"><i class="material-icons">place</i><?php  echo $this->lang->line('privacy_policy'); ?></div>
				      <div class="collapsible-body"><?php echo $bantuan['privasi']; ?></div>
				    </li>
				    <li>
				      <div class="collapsible-header"><i class="material-icons">whatshot</i><?php  echo $this->lang->line('faq'); ?></div>
				      <div class="collapsible-body"><?php echo $bantuan['faq']; ?></div>
				    </li>
				  </ul>
			</div>	
		</div>
	</div>
</main>
<script type="text/javascript">
	$(document).ready(function(){
	   $('.collapsible').collapsible();
	});
</script>