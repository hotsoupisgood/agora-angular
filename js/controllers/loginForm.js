module.exports =  function($scope, loginService) {
    $scope.name = 'loginFormController';
    $scope.username = '';
    $scope.password = '';
    $scope.remember = true;
    $scope.login = function() {
      loginService.login($scope.username, $scope.password, $scope.remember);
    };
    $scope.cookieLogin = function() {
      loginService.cookieLogin();
    }
};
