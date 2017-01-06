module.exports = function($scope, $routeParams, getSingleQuestionService) {
    $scope.name = 'questionController';
    //init
    // $scope.isBodyHidden = false;
    // $scope.isAddResponseHidden = false;
    $scope.question = {};
    $scope.responses = {};
    $scope.questionId = $routeParams.questionId;

    $scope.getQuestionFull = function () {
      getSingleQuestionService.get($scope.questionId).then(function (response) {
        $scope.question = response;
      });
    }
    $scope.getQuestionFull();
};
