app.controller("CoreController",
[ "$scope", function($scope) {
  $scope.news = [{
    heading: "Tut by here",
    content: "Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. ",
    url: "http://tut.by"
  }, {
    heading: "Wow whatcha",
    content: "Any other",
    url: "http://google.com"
  }]
}]);
