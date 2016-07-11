module.exports =  function($scope, accountService) {
    $scope.name = 'pagerController';
    $scope.totalItems = totalQueriedQuestions;
    $scope.currentPage = accountService.questionsAPage;

};
