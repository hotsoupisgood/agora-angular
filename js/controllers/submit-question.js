module.exports = function($scope, submitQuestionService) {
    $scope.name = 'submitQuestionFormController';
    $scope.question = '';
    $scope.questionTags = '';
    $scope.response = '';
    $scope.success = false;
    $scope.submit = function() {
      submitQuestionService.submit($scope.question, $scope.questionTags)
      .then(function (response) {
        $scope.success = response;
      });
    };
};
