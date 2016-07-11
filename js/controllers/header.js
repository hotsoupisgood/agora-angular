module.exports = function($scope, logoutService) {
    $scope.name = 'headerController';
    $scope.logout = function () {
        logoutService.submit();
    };
};
