
module.exports =  function($scope, $routeParams, upVoteService,
                            accountService, questionsTopService, questionsSearchService) {
    // routing goodies
    $scope.name = 'questionSearchController';
    $scope.$params = $routeParams;
    //manage questions
    $scope.currentPage = 0;
    $scope.questions = {};
    $scope.startQuestion;
    $scope.currentSearchTerm = '';
    $scope.isQueryEmpty = false;
    //manage event listeners
    // $scope.$on('searchQuestionEvent', function (e, query) {
    //   $scope.currentSearchTerm = query;
    //   $scope.getSearchedQuestions();
    // });
    $scope.$on('$routeUpdate', function(){
      $scope.query = $location.search().query;
      $scope.sort = $location.search().sort;
      $scope.order = $location.search().order;
      $scope.offset = $location.search().offset;
    });
    // $scope.$on('searchTagsEvent', function (e, query) {
    //   // $scope.currentSearchTerm = query;
    //   // $scope.getSearchedQuestions(1, query);
    //   console.log('unfinished');
    // });
    $scope.agree = function(responseId) {
      upVoteService.submit(responseId);
    };
    // get request questions
    $scope.getSearchedQuestions = function() {
        //multiply page number for first question desired
        $scope.startQuestion = $scope.currentPage * accountService.numIteratedPerPage;
        questionsSearchService.get($scope.currentSearchTerm, $scope.startQuestion)
        .then(function (response) {
          $scope.questions = response;
          console.log($scope.questions);
          if ($scope.questions == undefined || $scope.questions.length == 0) {
            $scope.isQueryEmpty = true;
          } else {
            $scope.isQueryEmpty = false;
          }
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
