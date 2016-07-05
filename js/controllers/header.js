module.exports = function($scope, $rootScope, $timeout) {
    $scope.name = 'headerController';
    $scope.logout = function() {
        $timeout(function () {
          $rootScope.$broadcast('logoutEvent');
        }, 10);
    };
};
