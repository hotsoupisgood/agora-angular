module.exports =  function($scope, $rootScope, $route,
    $routeParams, $location, $anchorScroll, $cookies, $timeout, scrollService) {
    $scope.name = 'mainController';
    $scope.minBanner = false;
    $scope.questions = {};
    $cookies.put('lastScrollLocation', 0);
    $scope.minimiseHeader = function (isMin) {
      $scope.minBanner = isMin;
      $scope.$apply()
    };
    window.addEventListener('scroll', function(e){
        var distanceY = window.pageYOffset,
            shrinkOn = 20,
            absOn = 70,
            banner = document.getElementById ('banner');
            
        // console.log($cookies.get('lastScrollLocation'));
        // $cookies.put('lastScrollLocation', distanceY);
        // scrollService.scrollToLastOpen();

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
