<html lang="en">
<head>
<title>KOYOKU</title>
	<script>
	var URL = "http://karya-inovasi.com/beta-rkbmdapi/index.php/";
	</script>
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta charset="utf-8">
	<meta name="description" content="Situs Tenaga Kerja, Penyalur Pekerjaan, Penyedia Pekerjaan terhubung dalam komunitas.
Koyoku mempermudah pencarian kerja dan penempatan serta perlindungan kerja diluar negeri, hemat waktu dan biaya.
Bergabunglah bersama kami dan dapatkan hasil yang terbaik.">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">

	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
	<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.4.1/js/bootstrap-datepicker.min.js"></script>
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.4.1/css/bootstrap-datepicker3.css"/>
	<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.7.1/locales/bootstrap-datepicker.id.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.10.3/moment.min.js"></script>
	<!-- Angular JS -->
	<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.4/angular.min.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.4/angular-route.js"></script>
	<!-- MY App -->
	<script src="app/packages/dirPagination.js?uniqecall=<?php echo date("YmdHis")?>"></script>
	<script src="app/routes.js?uniqecall=<?php echo date("YmdHis")?>"></script>
	<script src="app/services/myServices.js?uniqecall=<?php echo date("YmdHis")?>"></script>
	<script src="app/helper/myHelper.js?uniqecall=<?php echo date("YmdHis")?>"></script>
	<!-- App Controller -->
	
	<script src="app/assets/script.js?uniqecall=<?php echo date("YmdHis")?>"></script>
	<script src="app/components/home/ItemController.js?uniqecall=<?php echo date("YmdHis")?>"></script>
	<script src="app/components/registration/RegistrationController.js?uniqecall=<?php echo date("YmdHis")?>"></script>
	<script src="app/shared/navbar/navbarDirective.js?uniqecall=<?php echo date("YmdHis")?>"></script>
	<script src="app/shared/footer/footerDirective.js?uniqecall=<?php echo date("YmdHis")?>"></script>
	<link rel="stylesheet" href="app/assets/style.css?uniqecall=<?php echo date("YmdHis")?>" />
	<script type="text/javascript">
	function checkPasswordMatch() {
    	var password = $("#txtNewPassword").val();
    	var confirmPassword = $("#txtConfirmPassword").val();
    	if (password != confirmPassword){
    		$("#divCheckPasswordMatch").html("Passwords do not match!");
        	$("#btnpptkis").hide();
        	$("#register").hide();
    	}else{
        	$("#divCheckPasswordMatch").html("Passwords match.");
        	$("#btnpptkis").show();
        	$("#register").show();
		};
		$(document).ready(function () {
   			$("#txtConfirmPassword").keyup(checkPasswordMatch);
		});
	}


	</script>
</head>
<body ng-app="main-App">

		<ng-view>
			

		</ng-view>
</body>

</html>