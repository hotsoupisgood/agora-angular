
module.exports = function($scope, $route, $routeParams) {
    $scope.name = 'accountController';
    $scope.$params = $routeParams;
    this.refresh = function() {
        $scope.accountInfoTemp = accountInfo;
        console.log(accountInfo.id);
    }
};
