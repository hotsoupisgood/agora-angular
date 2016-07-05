
module.exports = function($scope, $route, $routeParams) {
    $scope.name = 'accountController';
    $scope.$params = $routeParams;
    $scope.accountInfoTemp;
    $scope.refresh = function() {
        $scope.accountInfoTemp = accountInfo;
        console.log(accountInfo.id);
    }
};
