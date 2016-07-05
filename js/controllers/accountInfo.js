module.exports = function($scope, $rootScope, $route, $routeParams, $cookies, $location) {
    $scope.name = 'accountInfoController';
    //routing goodies
    $scope.$params = $routeParams;
    //rechecks for change in account info
    $scope.refresh = function() {
        console.log($scope.accountInfo);
    };
    $scope.logout = function() {
        $rootScope.isLoggedIn = false;
        $rootScope.accountInfo = null;
        $cookies.remove('username');
        $cookies.remove('password');
        // $location.path('/login');
        console.log('logged out');
    };
};
