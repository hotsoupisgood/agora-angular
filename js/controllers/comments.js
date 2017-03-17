module.exports = function($scope, submitCommentService) {
    $scope.comments = {};
    $scope.getCommentsFull = function () {
      getSingleQuestionService.get($scope.section.id).then(function (response) {
        $scope.question = response;
      });
    }
    // $scope.getCommentsFull();
    $scope.submit = function() {
      $scope.loading = true;
      submitCommentService.submit($scope.section.id, $scope.commentText)
      .then(function (response) {
        if (response) {
          $scope.success = response;
          $scope.loading = false;
        }
      });
    };
};
