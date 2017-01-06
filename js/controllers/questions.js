module.exports = function($scope, $routeParams, $route, upVoteService, $location, userService, questionsTopService, questionsSearchService, getSingleQuestionService) {
    // routing goodies
    $scope.name = 'questions';
    //manage questions
    $scope.currentPage = $routeParams.page;
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
        questionsSearchService.get($scope.currentSearchTerm, $scope.currentPage).then(function(response) {
            // console.log(response);
            $scope.questions = response.objects;
            $scope.isQueryEmpty = false;
        });
    };
    $scope.getTopQuestions = function() {
        questionsTopService.get($scope.currentPage, $scope.order, 'min').then(function(response) {
            if (response) {
                console.log(response);
                $scope.questions = response.objects;
                $scope.isQueryEmpty = false;
                $scope.gotQuestions = true;
            } else {
                $scope.gotQuestions = false;
            }
        });
    };
    $scope.orderDate = function() {
        $scope.order = 'date';
        $scope.getTopQuestions();
    };
    $scope.orderAlphabet = function() {
        $scope.order = 'text';
        $scope.getTopQuestions();
    };
    //go forward a page
    $scope.goForwardOne = function() {
        $scope.currentPage = 1 + parseInt($routeParams.page, 10);
        $location.path('discover/'+$scope.currentPage);
    };
    //go back a page
    $scope.goBackOne = function() {
        if ($routeParams.page > 0) {
            $scope.currentPage =  parseInt($routeParams.page, 10) - 1;
            console.log($scope.currentPage);
            console.log('discover/'+$scope.currentPage);
            $location.path('discover/'+$scope.currentPage);
        } else {
          //do nothing
        }
    };
};
