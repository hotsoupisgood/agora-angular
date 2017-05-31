module.exports = function($scope, $routeParams, $route, $location, userService, questionsTopService, upVoteQuestionService, searchService, getSingleQuestionService) {
    // routing goodies
    $scope.name = 'questions';
    //manage questions
    $scope.currentPage = $routeParams.page;
    $scope.lastPage = 0;
    $scope.startQuestion;
    $scope.currentSearchTerm = '';
    $scope.isCurrentSearchTermEmpty = true;
    $scope.isQueryEmpty = false;
    $scope.couldNotConnect = false;
    $scope.order = '-date';
    $scope.gotQuestions = true;
    $scope.randomTags = {};
    //manage event listeners
    $scope.$on('$routeChangeSuccess', function(e) {
        if ($routeParams.query) {
            $scope.currentSearchTerm = $routeParams.query;
            $scope.isCurrentSearchTermEmpty = true;
            $scope.getSearchQuery();
        } else {
            $scope.getTopQuestions();
        }
    });
    // get request questions
    $scope.getSearchQuery = function() {
        searchService.get($scope.currentSearchTerm, $scope.currentPage).then(function(response) {
            // console.log(response);
            $scope.questions = response.objects;
            $scope.isQueryEmpty = false;
        });
    };
    $scope.getTopQuestions = function() {
        $scope.couldNotConnect=false;
        questionsTopService.get($scope.currentPage, $scope.order, 'min').then(function(response) {
            if (response) {
              $scope.questions = response.objects;
              // $scope.lastPage = 'lets fucking implement this'
                if ($scope.questions.length) {
                  console.log(response);
                  $scope.isQueryEmpty = false;
                  $scope.gotQuestions = true;
                }
                else {
                  // window.history.back();
                  $scope.isQueryEmpty = true;
                }
            } else {
                $scope.gotQuestions=false;
                $scope.couldNotConnect=true;
                //document.querySelector("#no-connection").style["background-color"]="#f00";
            }
        });
    };
    $scope.populateRandomTags = function() {
      questionsTopService.getRandomTags().then(function(response) {
          if (response) {
            $scope.randomTags = response;
          }
      });
    }
    $scope.populateRandomTags();
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
