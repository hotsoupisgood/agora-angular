module.exports =  function($scope, $rootScope, $route,
    $routeParams, $location, $anchorScroll, $cookies, $timeout) {
    $scope.name = 'mainController';
    $rootScope.minBanner = false;
    $scope.questions = {};
    // $cookies.put('lastScrollLocation', 0);
    $rootScope.rememberLogin = true;
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
