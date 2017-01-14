module.exports = function($scope, $cookies, $route, $location, logoutService, cookieService) {
    $scope.name = 'headerController';
    $scope.searchQuery = '';
    $scope.logout = function () {
        logoutService.submit();
    };
    $scope.search = function () {
      $location.path('/search/').search(
        {query: $scope.searchQuery,
        doQ: true,
        doR: true,
        doU: true,
        doT: false});
    }
    cookieService.all();
};
