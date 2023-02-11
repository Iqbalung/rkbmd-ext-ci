var app =  angular.module('main-App',['ngRoute','angularUtils.directives.dirPagination']);
app.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider
		.when('/', {
           templateUrl: 'app/components/home/items_countdown.html',
            
		})
		.when('/profil', {
           templateUrl: 'app/components/profil_singkat/profil_singkat.html',
		})
		.when('/registration',{
			templateUrl: 'app/components/registration/registration.html',
		})
		.when('/registration_pekerja',{
			templateUrl: 'app/components/registration/form_registration.html',
			 controller: 'RegistrationController'
		})
		.when('/registration_pptkis',{
			templateUrl: 'app/components/registration/form_registration_pptkis.html',
			controller: 'RegistrationController'
		})
		.when('/profil',{
			templateUrl: 'app/components/profil_singkat/profil_singkat.html',
		})
		.when('/disclamier',{
			templateUrl: 'app/components/profil_singkat/Disclamier.html',
		})
		.when('/privacy',{
			templateUrl: 'app/components/profil_singkat/profil_privasi.html',
		})
		.when('/kontak',{
			templateUrl: 'app/components/profil_singkat/profil_kontak.html',
		})
		.when('/syarat',{
			templateUrl: 'app/components/profil_singkat/profil_syarat.html',
		})
		.when('/ketentuan',{
			templateUrl: 'app/components/profil_singkat/profil_ketentuan.html',
		})
		.when('/faq',{
			templateUrl: 'app/components/profil_singkat/profil_faq.html',
		})
		.when('/keanggotaan',{
			templateUrl: 'app/components/profil_singkat/profil_keanggotaan.html',
		})
		.when('/ketentuan',{
			templateUrl: 'app/components/profil_singkat/profil_ketentuan.html',
		})
		.when('/activate_success',{
			templateUrl: 'app/components/registration/activate_success.html',
		})
		.when('/activate_success',{
			templateUrl: 'app/components/registration/activate_success.html',
		})
		.when('/registration_success',{
			templateUrl: 'app/components/registration/registration_success.html',
		})
		.when('/activate_eror',{
			templateUrl: 'app/components/registration/activate_eror.html',
		})
		.when('/login',{
			templateUrl: 'app/components/login/login.html',
		})
}]);
