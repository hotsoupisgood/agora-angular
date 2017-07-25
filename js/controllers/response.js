module.exports = function($scope, voteService, removeService) {
    $scope.name = 'responseController';
    $scope.addCommentOpen=false
    $scope.deleted=false;
    $scope.upVoted = false;
    $scope.upVote = function (id) {
      voteService.response(id);
      /*.then(function (response) {
        if (response) {
          $scope.upVoted = true;
        }
        else {
          //donothing
        }
      })*/
    };

    $scope.delete = function(_response){
      if(removeService.removeResponse(_response.id)){
        $scope.deleted=true;
      }
    };
};
