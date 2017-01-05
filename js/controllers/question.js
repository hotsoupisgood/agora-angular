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

    // $scope.onClickOfQuestion = function (id) {
      // $scope.isBodyHidden=!$scope.isBodyHidden;
      // if ($scope.isBodyHidden) {
      //   scrollService.storeLastOpen(id);
      // }else {
      //   scrollService.storeLastOpen('')
      // }
    // };
    // $scope.shouldOpen = function (id) {
    //   console.log('id: ' + scrollService.getLastOpen());
    //   if (scrollService.getLastOpen() == id) {
    //     return true;
    //   } else {
    //     return false;
    //   }
    // };
    // $anchorScroll();
};
