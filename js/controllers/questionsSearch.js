
module.exports =  function($scope, $routeParams, submitVoteService,
                            getUserService, searchService) {
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
    
    // get request questions
    $scope.getSearchedQuestions = function() {
        //multiply page number for first question desired
        $scope.startQuestion = $scope.currentPage * getUserService.numIteratedPerPage;
        searchService.get($scope.currentSearchTerm, $scope.startQuestion)
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
      $scope.questions = null;
      $scope.questions = {};
      console.log($scope.questions);
        $scope.currentPage++;
        $scope.getTopQuestions();
        scroll(0, 0);
    };
    //go back a page
    $scope.backPage = function() {
      $scope.questions = null;
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
