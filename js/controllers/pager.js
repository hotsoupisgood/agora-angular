module.exports =  function($scope, userService) {
    $scope.name = 'pagerController';
    $scope.totalItems = totalQueriedQuestions;
    $scope.currentPage = userService.questionsAPage;

};
