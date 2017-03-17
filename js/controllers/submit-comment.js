module.exports = function($scope, submitCommentService) {
    $scope.question = '';
    $scope.questionTags = '';
    $scope.response = '';
    $scope.success = false;
    $scope.loading = false;
    $scope.submit = function() {
      $scope.loading = true;
      submitCommentService.submit($scope.question, $scope.questionTags)
      .then(function (response) {
        if (response) {
          $scope.success = response;
          $scope.loading = false;
        }
      });
    };
};
