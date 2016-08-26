module.exports = function($scope, scrollService) {
    $scope.name = 'questionController';
    //init
    $scope.isBodyHidden = false;
    $scope.isAddResponseHidden = false;
    $scope.onClickOfQuestion = function (id) {
      $scope.isBodyHidden=!$scope.isBodyHidden;
      if ($scope.isBodyHidden) {
        scrollService.storeLastOpen(id);
      }else {
        scrollService.storeLastOpen('')
      }
    };
    $scope.shouldOpen = function (id) {
      console.log('id: ' + scrollService.getLastOpen());
      if (scrollService.getLastOpen() == id) {
        return true;
      } else {
        return false;
      }
    };
};
