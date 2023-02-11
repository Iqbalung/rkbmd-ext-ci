
app.controller('ItemController', function(dataFactory,$scope,$http){
  $scope.data = [];
  $scope.libraryTemp = {};
  $scope.totalItemsTemp = {};
  $scope.login = function(id){
     dataFactory.httpRequest('../api/login/do_login','POST',{},$scope.form).then(function(data) {
      $scope.data.push(data);
      
      $(".modal").modal("hide");
    });
  }   
});