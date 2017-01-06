module.exports =  function($scope, loginService) {
    $scope.name = 'loginFormController';
    $scope.username = '';
    $scope.password = '';
    $scope.remember = true;
    $scope.failed = false;
    $scope.login = function() {
      loginService.login($scope.username, $scope.password, $scope.remember)
      .then(function (response) {
          if (!response) {
            $scope.failed = true;
          }
          else {
            //works
          }
      })
    };
    $scope.cookieLogin = function() {
      loginService.cookieLogin();
    }
};
