module.exports =  function($scope, $routeParams, createAccountService) {
    $scope.name = 'createAccountController';
    $scope.$params = $routeParams;
    $scope.username;
    $scope.password;
    $scope.createdAccount;

    $scope.createAccount = function(inputUsername, inputPassword) {
      createAccountService.submit($scope.username, $scope.password);
    };
};
