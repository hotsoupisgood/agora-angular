
module.exports =  function($scope, $routeParams, upVoteService,
                            accountService, questionsTopService, questionsSearchService) {
    // routing goodies
    $scope.name = 'top30';
    $scope.$params = $routeParams;
    //manage questions
    $scope.currentPage = 0;
    $scope.questions = {};
    $scope.startQuestion;
    $scope.currentSearchTerm = '';
    $scope.isQueryEmpty = false;
    //manage event listeners
    $scope.$on('$viewContentLoaded', function() {
      $scope.getTopQuestions();
    });
    $scope.agree = function(responseId) {
      upVoteService.submit(responseId);
    };
    // get request questions
    $scope.getTopQuestions = function() {
      questionsTopService.get($scope.currentPage)
      .then(function (response) {
        console.log(response);
        $scope.questions = response.objects;
        $scope.isQueryEmpty = false;
      });
    };
    //util
    $scope.refresh = function() {
        console.log($scope.isLoggedIn);
        $scope.getTopQuestions();
        $scope.isQueryEmpty = false;
        scroll(0, 0);
    };
    //go back to first page
    $scope.resetFirstPage = function() {
        $scope.currentPage = 0;
        $scope.startQuestion = 0;
        $scope.isQueryEmpty = false;
        scroll(0, 0);
    };
    //go forward a page
    $scope.nextPage = function() {
        $scope.currentPage++;
        $scope.getTopQuestions();
        scroll(0, 0);
    };
    //go back a page
    $scope.backPage = function() {
        if ($scope.currentPage > 0)
            $scope.currentPage--;
        $scope.getTopQuestions();
        scroll(0, 0);
    };
    //get current page num
    $scope.getcurrentPage = function() {
        return $scope.currentPage;
    };
  };
