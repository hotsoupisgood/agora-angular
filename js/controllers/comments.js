module.exports = function($scope, submitCommentService, getQuestionService) {
    $scope.comments = {};
    // $scope.commentOpen = true;
    $scope.commentText='';
    $scope.loading=false;
    $scope.currentLoadLimit=5;

    $scope.increaseLoadLimit=function () {
      $scope.currentLoadLimit+=5;
    };
    $scope.getCommentsFull = function () {
      getQuestionService.getDetail($scope.section.id).then(function (response) {
        $scope.question = response;
      });
    }
    $scope.submit = function() {
      $scope.loading = true;
      submitCommentService.submit($scope.section.id, $scope.commentText)
      .then(function (response) {
        if (response) {
          $scope.success = response;
          $scope.loading = false;
          $scope.addCommentOpen=false;
          $scope.section.comments.push(response)
          $scope.commentText=''
        }
      });
    };

};
