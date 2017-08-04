module.exports = function($scope, $location, submitQuestionService, animationService) {
    $scope.name = 'submitQuestionFormController';
    $scope.question = '';
    $scope.questionTags = '';
    $scope.response = '';
    $scope.success = false;
    $scope.loading = false;
    $scope.submit = function() {
      $scope.loading = true;
      animationService.fly();
      submitQuestionService.submit($scope.question, $scope.questionTags)
      .then(function (response) {
        if (response) {
          $scope.success = response;
          $scope.loading = false;
          $location.url('/question/'+response.id);
        }
      });
    };
};
