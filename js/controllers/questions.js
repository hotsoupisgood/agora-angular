module.exports = function($scope, $rootScope, $routeParams, $route, $location, getQuestionService, searchService) {
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
        }else {
            $scope.getTopQuestions();
        }
    });

    $rootScope.$on('discover_tag', function(e){
      $getQuestions();
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
        getQuestionService.getList($scope.currentPage, $scope.order, 'min').then(function(response) {
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
      getQuestionService.getRandomTags().then(function(response) {
          if (response) {
            $scope.randomTags = response;
          }
      });
    }
    $scope.populateRandomTags();

    $scope.orderBy=function(order){
      $scope.order=order;
      $scope.getTopQuestions();
    }
    $scope.orderByRecent=function(){$scope.orderBy('date');}
    $scope.orderByOldest=function(){$scope.orderBy('-date');}
    $scope.orderByAtoZ=function(){$scope.orderBy('text');}
    $scope.orderByZtoA=function(){$scope.orderBy('-text');}
    $scope.orderByMostResponses=function(){$scope.orderBy('-total_responses');}
    $scope.orderByLeastResponses=function(){$scope.orderBy('total_responses');}

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
    //regret having to not use anchor
    $scope.goToQuestion = function(clickedQuestionId) {
      $location.path('/question/' + clickedQuestionId);
    };
};
