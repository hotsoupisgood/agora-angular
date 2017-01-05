module.exports = function($scope, $rootScope, $route, $routeParams, userService) {
    $scope.name = 'userController';
    $scope.$params = $routeParams;
    $scope.info = {};
    $scope.questions = {};
    $scope.showQuestions = false;
    $scope.showResponses = false;
    $scope.populateSubmitedQuestions = function () {
      userService.get($routeParams.username).then(function(response) {
        $scope.info = response;
        $scope.questions = $scope.info.questions;
      });
    };
    $scope.populateSubmitedQuestions();
    $scope.showQ = function () {
      $scope.showQuestions = !$scope.showQuestions;
    }
    $scope.showR = function () {
      $scope.showResponses = !$scope.showResponses;
    }
};
