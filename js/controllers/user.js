module.exports = function($scope, $rootScope, $route, $routeParams, userService) {
    $scope.name = 'userController';
    $scope.$params = $routeParams;
    $scope.info = {};
    $scope.questions = {};
    $scope.populateSubmitedQuestions = function () {
      userService.get($routeParams.username).then(function(response) {
        $scope.info = response;
        $scope.questions = $scope.info.questions;
      });
    };
    $scope.populateSubmitedQuestions();

};
