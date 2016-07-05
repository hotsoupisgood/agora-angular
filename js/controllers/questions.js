
module.exports =  function($scope, $rootScope, $http, $route, $routeParams, $location, $cookies) {
    // routing goodies
    $scope.name = 'top30';
    $scope.$params = $routeParams;
    //manage questions
    $scope.pageNum = 0;
    $scope.questions = {};
    $scope.searchResultQuestions = {};
    $scope.totalQuestions;
    $scope.totalPages;
    $scope.showSearch = false;
    $scope.startQuestion;
    $scope.currentSearchTerm = '';
    $rootScope.numIteratedPerPage = 15;
    //manage event listeners
    $scope.$on('searchQuestionEvent', function (e, query) {
      $scope.currentSearchTerm = query;
      $scope.getSearchedQuestions();
    });
    $scope.$on('searchTagsEvent', function (e, query) {
      // $scope.currentSearchTerm = query;
      // $scope.getSearchedQuestions(1, query);
      console.log('fuck off');
    });

    $scope.agree = function(responseId) {
            if ($rootScope.isLoggedIn) {
                //request
                $http({
                    method: 'GET',
                    url: 'https://startandselect.com/scripts/UpVote.php',
                    params: {
                        response_id: responseId,
                        user_id: $rootScope.startQuestion
                    }
                }).then(function successCallback(response) {
                    // this callback will be called asynchronously
                    // when the response is available

                    //show response for debug
                    console.log('successCallback unparsed response: ' + JSON.stringify(response.data));
                }, function errorCallback(response) {
                    // called asynchronously if an error occurs
                    // or server returns response with an error status.
                    //show response for debug
                    console.log('errorCallback unparsed response: ' + response);
                });
            } else {

            };
        };
    // get request questions
    $scope.getSearchedQuestions = function() {
        //multiply page number for first question desired
        $scope.startQuestion = $scope.pageNum * $rootScope.numIteratedPerPage;
        if ($scope.currentSearchTerm == '') {
            console.log('no query, returning all questions');
            $scope.getTopQuestions($scope.pageNum);
            $scope.showSearch = false;
        } else {
            $scope.resetFirstPage();

            //request
            $http({
                method: 'GET',
                url: 'https://startandselect.com/scripts/Search.php',
                params: {
                    query: $scope.currentSearchTerm,
                    offset: $scope.startQuestion
                }
            }).then(function successCallback(response) {
                // this callback will be called asynchronously
                // when the response is available
                top30 = response.data;
                console.log(top30);
                $scope.showSearch = true;
                $scope.searchResultQuestions = top30;
                //set local total q/s in query
                $scope.totalQuestions = response.data.length;
                //set global total q/s in query
                totalQueriedQuestions = $scope.totalQuestions;
                //get num of pages
                $scope.totalPages = $scope.totalQuestions / questionsAPage;
                //show response for debug
                //  console.log('successCallback parsed response: ' + $scope.questions);
            }, function errorCallback(response) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
                //show response for debug
                console.log('errorCallback unparsed response: ' + response);
            });
        };
    };
    $scope.getTopQuestions = function(pgN) {
        //multiply page number for first question desired
        var startQuestion = pgN * $rootScope.numIteratedPerPage;
        //request
        $http({
            method: 'POST',

            url: 'https://startandselect.com/scripts/GetPopularQuestion.php',

            params: {
                limit: $rootScope.numIteratedPerPage,
                offset: startQuestion
            }

        }).then(function successCallback(response) {
            // this callback will be called asynchronously
            // when the response is available
            top30 = response.data.questions;
            //hold global top30
            $scope.questions = top30;
            //set local total q/s in query
            $scope.totalQuestions = response.data.length;
            //set global total q/s in query
            totalQueriedQuestions = $scope.totalQuestions;
            //get num of pages
            $scope.totalPages = $scope.totalQuestions / questionsAPage;
            //show response for debug
            //  console.log('successCallback unparsed response: ' + JSON.stringify(response.data.questions));
        }, function errorCallback(response) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
            //show response for debug
            console.log('errorCallback unparsed response: ' + response);
        });
    };
    //inital event call
    $scope.getTopQuestions($scope.pageNum);
    // $rootScope.$broadcast('cookieLoginEvent');
    //util
    $scope.refresh = function() {
        console.log($scope.isLoggedIn);
        if ($scope.showSearch) {
            $scope.getSearchedQuestions();
        } else {
            $scope.getTopQuestions($scope.pageNum);
        }
        scroll(0, 0);
    };
    //go back to first page
    $scope.resetFirstPage = function() {
        $scope.pageNum = 0;
        $scope.startQuestion = 0;
        scroll(0, 0);
    };
    //go forward a page
    $scope.nextPage = function() {
        $scope.pageNum++;
        $scope.getTopQuestions($scope.pageNum);
        scroll(0, 0);
    };
    //go back a page
    $scope.backPage = function() {
        if ($scope.pageNum > 0)
            $scope.pageNum--;
        $scope.getTopQuestions($scope.pageNum);
        scroll(0, 0);
    };
    //get current page num
    $scope.getPageNum = function() {
        return $scope.pageNum;
    };
};
