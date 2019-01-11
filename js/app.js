var app = angular.module("core-app", []);
app.controller("CoreController",
    ["$scope", "$filter",  function ($scope, $filter) {

        var getDocById = function(id) {
            return $scope.docs.filter(function (d) {
                return d.id == id;
            })[0];
        }

        var getQueryParams = function (qs) {
            qs = qs.split("+").join(" ");
            var params = {}, tokens, re = /#[?&]?([^=]+)=([^&]*)/g;
            while (tokens = re.exec(qs)) {
                params[decodeURIComponent(tokens[1])]
                    = decodeURIComponent(tokens[2]);
            }
            return params;
        }

        $scope.clickDoc = function (url, id) {
            $scope.isTarget = true;
            $scope.docUrl = url;
            $scope.docContent = getDocById(id).content
            $scope.target = id;
            setActualHash();
        }

        $scope.backDoc = function () {
            $scope.isTarget = false;
            setActualHash();
        }

        var searchAny = function () {
            var urlParams = getQueryParams(document.location.hash);
            $scope.search = urlParams["s"];
            $scope.target = urlParams["target"]
        }

        var setActualHash = function () {
            if ($scope.isTarget) {
                document.location.hash = "?target=" + $scope.target;
            } else {
                document.location.hash = $scope.search ? "?s=" + $scope.search : "";
            }
        }

        $scope.changeSearch = function (search) {
            $scope.search = search;
            setActualHash();
        }

        $scope.homeRedirect = function () {
            $scope.isTarget = false;
            document.location.hash = "";
            document.location = document.location;
        }

        searchAny();

        window.onhashchange = function() {
            var params = getQueryParams(document.location.hash);
            if(!params.target) {
                setActualHash();
                $scope.backDoc();
            } else {
                var doc = getDocById(params.target);
                setActualHash();
                $scope.clickDoc(doc.full_content, doc.id);
            }
        }

        $scope.docs = contents;
        $scope.docs.forEach(function (doc) {
            doc.full_content = "content/topics/" + doc.uri;
            doc.updated_at = new Date(doc.updated_at) - 0;
        });
        if ($scope.target != null) {
            var doc = getDocById($scope.target)
            $scope.clickDoc(doc.full_content, doc.id);
        }
    }]);
