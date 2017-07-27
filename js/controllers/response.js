module.exports = function($scope,$rootScope, voteService, removeService) {
    $scope.name = 'responseController';
    $scope.addCommentOpen=false
    $scope.deleted=false;
    $scope.upVoted = false;
    $scope.upVote = function (id) {


      voteService.response(id).then(function (response) {
        if (response.status==201) {
          $rootScope.$emit("overlay-vote");
        }else if(response.status=204){
          $rootScope.$emit("overlay-unvote");
        }else{
          cosnole.log("There was an error with this response: ");
          console.log(response);
          $rootScope.$emit("error-vote");
        }
      })
    };

    $scope.delete = function(_response){
      if(removeService.removeResponse(_response.id)){
        $scope.deleted=true;
      }
    };
};
