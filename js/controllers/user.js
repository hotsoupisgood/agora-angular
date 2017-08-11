module.exports = function($scope, $rootScope, $route, $routeParams, getUserService) {
    $scope.name = 'userController';
    $scope.$params = $routeParams;
    $scope.info = {};
    $scope.questions = {};
    $scope.noUser = false;
    $scope.showQuestions = true;
    $scope.showResponses = true;
    $scope.populateSubmitedQuestions = function () {
      getUserService.get($routeParams.username).then(function(response) {
        if (response) {
          $scope.info = response;
          $scope.questions = $scope.info.questions;
          $scope.responses = $scope.info.responses;
        }
        else {
          $scope.noUser = true;
        }
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
