app.controller("CoreController",
[ "$scope", "$http", "$filter", function($scope, $http, $filter) {

  $http.get("content/docs.json").success(function(response){
    $scope.docs = response;
    if($scope.target != null) {
      var doc = $filter('filter')($scope.docs, function (d) {return d.id === ($scope.target - 0);})[0];
      for(var i  = 0; i < doc.buttons.length; i++) {
        var btn = doc.buttons[i];
        if(btn.isExternal) {

        } else {
          $scope.clickDoc(btn.url, doc.id);
          break;
        }
      }
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

  searchAny();
}]);
