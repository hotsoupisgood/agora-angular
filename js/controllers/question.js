module.exports = function($scope, $routeParams, getSingleQuestionService, upVoteQuestionService) {
    $scope.name = 'questionController';

    $scope.question = {};
    $scope.responses = {};
    $scope.questionId = $routeParams.questionId;

    $scope.getQuestionFull = function () {
      getSingleQuestionService.get($scope.questionId).then(function (response) {
        $scope.question = response;
      });
    }
    $scope.getQuestionFull();
};
