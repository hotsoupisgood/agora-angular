module.exports =  function($scope, $rootScope, $route,
    $routeParams, $location) {
    $scope.name = 'loginController';
    $scope.$params = $routeParams;
    $scope.loginInfo = {};
    $scope.loginInfo.isLoggedIn = false;
    $scope.printLogged = function() {
        console.log('islogged?   ' + $scope.loginInfo.isLoggedIn);
    }
};
