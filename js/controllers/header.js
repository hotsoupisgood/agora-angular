module.exports = function($scope, $cookies, $route, $location, logoutService, loginService) {
    $scope.name = 'headerController';
    // $scope.radioStyle = 'light';
    $scope.logout = function () {
        logoutService.submit();
    };
    $location.path('/questions')
    // $scope.switchStyle = function () {
    //   if ($scope.radioStyle == 'light') {
    //     document.getElementById('bootstrapStylesheet').href ='node_modules/bootstrap/dist/css/bootstrap-light.css';
    //   }
    //   else {
    //     document.getElementById('bootstrapStylesheet').href = 'node_modules/bootstrap/dist/css/bootstrap-dark.css';
    //   }
    // };
    loginService.cookieLogin();
};
