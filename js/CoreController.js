app.controller("CoreController",
[ "$scope", "$http", function($scope, $http) {

  $http.get("content/docs.json").success(function(response){
    $scope.docs = response;
  });

  $scope.getQueryParams = function (qs) {
    qs = qs.split("+").join(" ");
    var params = {}, tokens,
    re = /#[?&]?([^=]+)=([^&]*)/g;
    while (tokens = re.exec(qs)) {
      params[decodeURIComponent(tokens[1])]
      = decodeURIComponent(tokens[2]);
    }
    return params;
  }

  $scope.clickDoc = function(url) {
    $scope.isTarget = true;
    $scope.docUrl = url;
  }

  $scope.backDoc = function() {
    $scope.isTarget = false;
  }

  $scope.searchAny = function() {
    var urlParams = $scope.getQueryParams(document.location.hash);
    $scope.search = urlParams["s"];
  }

  $scope.changeSearch = function(search) {
    document.location.hash = "?s=" + search;
  }

  $scope.searchAny();
}]);
