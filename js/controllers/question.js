module.exports = function($scope, $routeParams, getSingleQuestionService, upVoteQuestionService, editService) {
    $scope.name = 'questionController';
    $scope.question = {};
    $scope.responses = {};
    $scope.questionId = $routeParams.questionId;
    $scope.editQuestion=false;
    $scope.getQuestionFull = function () {
      getSingleQuestionService.get($scope.questionId).then(function (response) {
        $scope.question = response;
      });
    };
    $scope.getQuestionFull();
    $scope.saveText=function(question){
      if(!editService.editQuestion(question.id, question.text)){
        alert("Failed to update the question. Check your connection.");
      }
      $scope.editQuestion=false;
    };
};
