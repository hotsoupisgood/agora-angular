module.exports =  function($scope, $routeParams, $location, submitUserService) {
    $scope.$params = $routeParams;
    $scope.username;
    $scope.password;
    $scope.remember = true;
    $scope.createdAccount;
    $scope.success = false;
    $scope.createAccount = function(inputUsername, inputPassword) {
      submitUserService.submit($scope.username, $scope.password, $scope.remember)
      .then(function (response) {
        $scope.success = response;
        if (response) {
          $location.url('/discover');
        }
      });
    };
};
