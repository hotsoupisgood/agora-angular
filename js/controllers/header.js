module.exports = function($scope, $cookies, $route, $location, logoutService, cookieService) {
    $scope.name = 'headerController';
    $scope.searchQuery = '';
    $scope.logout = function () {
        logoutService.submit();
    };
    $scope.search = function () {
      var urlSafeQuery = $scope.searchQuery.replace(/ /g, '+');
      $location.url('/search/'+urlSafeQuery);
    }
    cookieService.all();
};
