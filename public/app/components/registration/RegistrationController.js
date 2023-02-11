app.controller('RegistrationController', function(dataFactory, $scope, $http) {
  $scope.data = [];
  $scope.libraryTemp = {};
  $scope.totalItemsTemp = {};
  
  $("#btnpptkis").click(function(event) {
    $http({
        url: 'http://localhost/koyoku/api/index.php/Registration/add_pptkis_chalange',
        method: "POST",
        data: $scope.form
      })
      .then(function(response) {
          if (response.data.success) {
            console.log(response);
            window.location.href = '../public/#!/registration_success';
          } else {
            console.log(response);
            $('#register-modal').modal('show');
          }
        },
        function(response) { // optional
          console.log(response);
        });
  });

  $("#register").click(function(event) {
    $http({
        url: 'http://localhost/koyoku/api/index.php/Registration/add_pekerja_chalange',
        method: "POST",
        data: $scope.form
      })
      .then(function(response) {
          if (response.data.success) {
            console.log(response);
            window.location.href = '../public/#!/registration_success';
          } else {
            console.log(response);
            $('#register-modal').modal('show');
          }
        },
        function(response) { // optional
          console.log(response);
        });

  });



});