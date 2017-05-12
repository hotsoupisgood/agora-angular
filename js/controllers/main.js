module.exports =  function($scope, $rootScope, $route,
    $routeParams, $location, $cookies) {
    $scope.name = 'mainController';
    $scope.minBanner = true;//force min banner for development
    $scope.questions = {};
//
    $rootScope.rememberLogin = true;
    var reader = new commonmark.Parser();
    var writer = new commonmark.HtmlRenderer();

      $scope.mark = function (text) {
        var parsed = reader.parse(text);
        return $sce.trustAsHtml(writer.render(parsed));

      }
    $scope.back = function() {
      window.history.back();
    }
    $scope.minimiseHeader = function (isMin) {
      $scope.minBanner = isMin;
      $cookies.put('minBanner', $scope.minBanner)
      $scope.$apply()
    };
    $scope.tagSearch = function (tag) {
      $location.path('/search/').search(
        {query: tag,
        doQ: false,
        doR: false,
        doU: false,
        doT: true});
    }
    window.addEventListener('scroll', function(e){
        var distanceY = window.pageYOffset,
            shrinkOn = 20,
            absOn = 70,
            banner = document.getElementById ('banner');

        //listens for banner change
        if (distanceY > shrinkOn) {
            $scope.minimiseHeader(true);
        } else {
            $scope.smallHead = false;
        }
        if (distanceY > absOn) {
            $scope.minimiseHeader(true);
        } else {
            $scope.smallHead = false;
        }
    });
};
