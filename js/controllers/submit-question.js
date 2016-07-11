module.exports = function($scope, submitQuestionService) {
    $scope.name = 'submitQuestionFormController';
    $scope.question = '';
    $scope.questionTags = '';
    $scope.submit = function() {
      submitQuestionService.submit($scope.question, $scope.questionTags);
    };
};
