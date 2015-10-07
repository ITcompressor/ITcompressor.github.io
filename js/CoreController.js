app.controller("CoreController",
[ "$scope", "$http", function($scope, $http) {

  $http.get("content/docs.json").success(function(response){
        $scope.news = response;
    });
  $scope.isTarget = false;

}]);
