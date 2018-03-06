var app = angular.module("core-app",[]);
app.controller("CoreController",
[ "$scope", "$http", "$filter", function($scope, $http, $filter) {

  $http.get("content/docs.json").success(function(response){
    $scope.docs = response;
    $scope.docs.forEach(function(doc) {
      doc.mini_content = "partials/docs/mini/" + doc.content;
      doc.full_content = "partials/docs/full/" + doc.content;
    });
    if($scope.target != null) {
      var doc = $filter('filter')($scope.docs, function (d) {return d.id === ($scope.target - 0);})[0];
      $scope.clickDoc(doc.full_content, doc.id);
    }
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

  $scope.clickDoc = function(url, id) {
    $scope.isTarget = true;
    $scope.docUrl = url;
    $scope.target = id;
    setActualHash();
  }

  $scope.backDoc = function() {
    $scope.isTarget = false;
    setActualHash();
  }

  var searchAny = function() {
    var urlParams = $scope.getQueryParams(document.location.hash);
    $scope.search = urlParams["s"];
    $scope.target = urlParams["target"]
  }

  var setActualHash = function() {
    if($scope.isTarget) {
      document.location.hash = "?target=" + $scope.target;
    } else {
      document.location.hash = $scope.search ? "?s=" + $scope.search : "";
    }
  }

  $scope.changeSearch = function(search) {
    $scope.search = search;
    setActualHash();
  }

  $scope.homeRedirect = function() {
    $scope.isTarget = false;
    document.location.hash = "";
    document.location = document.location;
  }

  searchAny();
}]);
