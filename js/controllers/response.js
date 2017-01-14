module.exports = function($scope, upVoteQuestionService) {
    $scope.name = 'responseController';

    $scope.upVoted = false;
    $scope.upVote = function (id) {
      upVoteQuestionService.response(id).then(function (response) {
        if (response) {
          $scope.upVoted = true;
        }
        else {
          //donothing
        }
      })
    }
};
