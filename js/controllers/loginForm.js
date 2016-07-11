module.exports =  function($scope, loginService) {
    $scope.name = 'loginFormController';
    $scope.username = '';
    $scope.password = '';
    $scope.login = function() {
      loginService.login($scope.username, $scope.password);
    };
    $scope.cookieLogin = function() {
      loginService.cookieLogin();
    }
};
