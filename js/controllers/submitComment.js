module.exports = function($scope, submitCommentService, animationService) {
    $scope.question = '';
    $scope.questionTags = '';
    $scope.response = '';
    $scope.success = false;
    $scope.loading = false;
    $scope.submit = function() {
      $scope.loading = true;
      animationService.fly();
      submitCommentService.submit($scope.question, $scope.questionTags)
      .then(function (response) {
        if (response) {
          $scope.success = response;
          $scope.loading = false;
        }
      });
    };
};
