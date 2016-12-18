module.exports = function($scope, $routeParams, $route, upVoteService, $location,
    accountService, questionsTopService, questionsSearchService, scrollService, getSingleQuestionService) {
    // routing goodies
    $scope.name = 'top30';
    $scope.$params = $routeParams;
    //manage questions
    // if ($routeParams.page !=) {
    console.log($routeParams.page);
      $scope.currentPage = $routeParams.page;
      console.log($routeParams.page +'.....'+ $scope.currentPage);
    // }
    // else {
      // $scope.currentPage = 0;
    // }
    $scope.startQuestion;
    $scope.currentSearchTerm = '';
    $scope.isCurrentSearchTermEmpty = true;
    $scope.isQueryEmpty = false;
    $scope.order = 'date';
    $scope.gotQuestions = true;
    //manage event listeners
    $scope.$on('$routeChangeSuccess', function(e) {
        if ($routeParams.query) {
            $scope.currentSearchTerm = $routeParams.query;
            $scope.isCurrentSearchTermEmpty = true;
            $scope.getSearchQuery();
        } else {
            // $location.path('/questions');
            $scope.getTopQuestions();
        }
    });
    $scope.agree = function(responseId) {
        upVoteService.submit(responseId);
    };
    // get request questions
    $scope.getSearchQuery = function() {
        questionsSearchService.get($scope.currentSearchTerm, $scope.currentPage)
            .then(function(response) {
                // console.log(response);
                $scope.questions = response.objects;
                $scope.isQueryEmpty = false;
            });
    };
    $scope.getTopQuestions = function() {
        questionsTopService.get($scope.currentPage, $scope.order, 'min')
            .then(function(response) {
                if (response) {
                    $scope.questions = response.objects;
                    $scope.isQueryEmpty = false;
                    $scope.gotQuestions = true;
                } else {
                    $scope.gotQuestions = false;
                }
            });
    };
    // $scope.orderDate = function() {
    //     $scope.order = 'date';
    //     $scope.refresh();
    // };
    // $scope.orderAlphabet = function() {
    //     $scope.order = 'text';
    //     $scope.refresh();
    // };
    //util
    // $scope.refresh = function() {
    //     if ($scope.isCurrentSearchTermEmpty) {
    //         $scope.questions = {};
    //         $scope.getTopQuestions();
    //         //
    //     } else {
    //         $scope.questions = {};
    //         $scope.getSearchQuery();
    //     }
    //     $scope.isQueryEmpty = false;
    // };
    //go back to first page
    // $scope.resetFirstPage = function() {
    //     $scope.currentPage = 0;
    //     $scope.startQuestion = 0;
    //     $scope.isQueryEmpty = false;
    //     scroll(0, 0);
    // };
    //go forward a page
    $scope.nextPage = function() {
        // $scope.questions = {};
        $scope.currentPage++;
        // console.log($scope.currentPage);
        return $scope.currentPage;

        // $scope.getTopQuestions();
        // scroll(0, 0);
    };
    //go back a page
    $scope.backPage = function() {
        // $scope.questions = {};
        if ($scope.currentPage > 0){
          $scope.currentPage--;
          console.log($scope.currentPage);
          return $scope.currentPage;
        }
        // $scope.getTopQuestions();
        // scroll(0, 0);
    };
    //get current page num
    $scope.getcurrentPage = function() {
        return $scope.currentPage;
    };
};
