module.exports = function($scope, $anchorScroll, scrollService,getSingleQuestionService) {
    $scope.name = 'questionController';
    //init
    $scope.isBodyHidden = false;
    $scope.isAddResponseHidden = false;
    $scope.responses;
    // getSingleQuestionService.get($scope.id).then(function (response) {
    //   $scope.responses = response;
    // });
    $scope.onClickOfQuestion = function (id) {
      $scope.isBodyHidden=!$scope.isBodyHidden;
      // if ($scope.isBodyHidden) {
      //   scrollService.storeLastOpen(id);
      // }else {
      //   scrollService.storeLastOpen('')
      // }
    };
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
