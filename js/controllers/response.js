module.exports = function($scope, submitVoteService, removeService, animationService) {
    $scope.name = 'responseController';
    $scope.addCommentOpen = false
    $scope.deleted = false;
    $scope.upVoted = false;
    $scope.upVote = function(id) {
        submitVoteService.submit(id).then(function(response) {
            if (response.status == 201) {
                animationService.thumbsUp();
            } else if (response.status = 204) {
                animationService.thumbsDown();
            } else {
                cosnole.log("There was an error with this response: ");
                console.log(response);
            }
        })
    };

    $scope.delete = function(_response) {
        if (removeService.removeResponse(_response.id)) {
            $scope.deleted = true;
        }
    };
};
