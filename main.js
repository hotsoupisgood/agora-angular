//every app that needs user data has acess to $rootscope
//misc global vars
var top30 = null,
    numIteratedPerPage = 15,
    // account info
    accountInfo = null,
    isLoggedIn = false,
    questionsAPage = 15,
    totalQueriedQuestions = null,
    //debug usr account
    usr = 'henry',
    pass = 'fuck';
//app decrelation
var agoraApp = angular.module('agoraApp', ['ngRoute', 'ngAnimate', 'ui.bootstrap', 'angular-toArrayFilter', 'ngCookies']);
// batchModule.factory('routeTemplateMonitor', ['$route', '$rootScope', function($route, batchLog, $rootScope) {
//     return {
//     };
//   }]);
//app routing(url minipulation)
agoraApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/questions', {
            templateUrl: 'top30.html',
            controller: 'top30'
        }).when('/account', {
            templateUrl: 'account.html',
            controller: 'accountController'
        }).otherwise({
            redirectTo: '/questions'
        }).when('/about', {
            templateUrl: 'about.html',
            controller: 'aboutController'
        }).when('/createaccount', {
            templateUrl: 'createaccount.html',
            controller: 'createAccountContoller'
        }).when('/login', {
            templateUrl: 'login.html',
            controller: 'loginController'
        }).otherwise({
            redirectTo: '/questions'
        });
}]);
agoraApp.controller('aboutController', function($scope) {
    $scope.name = 'aboutController';
});
agoraApp.controller('accountController', function($scope, $route, $routeParams) {
    $scope.name = 'accountController';
    $scope.$params = $routeParams;
    $scope.accountInfoTemp;
    $scope.refresh = function() {
        $scope.accountInfoTemp = accountInfo;
        console.log(accountInfo.id);
    }
});
agoraApp.controller('headerController', function($scope, $rootScope, $timeout) {
    $scope.name = 'headerController';
    $scope.logout = function() {
      //timeout required becuase we need to wait for ng-href
      //in the header.html to trigger before we trigger the logout funtion
        $timeout(function () {
          $rootScope.$broadcast('logoutEvent');
        }, 10);
    };
});
agoraApp.controller('accountInfoController', function($scope, $rootScope, $route, $routeParams, $cookies) {
    $scope.name = 'accountInfoController';
    //routing goodies
    $scope.$params = $routeParams;
    //rechecks for change in account info
    $scope.refresh = function() {
        console.log($scope.accountInfo);
    };
    $scope.logout = function() {
        $rootScope.isLoggedIn = false;
        $rootScope.accountInfo = null;
        $cookies.remove('username');
        $cookies.remove('password');
        console.log('logged out');
    };
    //event listener
    $scope.$on('loginEvent', function(event) {
        // $scope.refresh();
        console.log(event);
    });
    $scope.$on('logoutEvent', function(event) {
        $scope.logout();
        console.log(event);
    });
});
agoraApp.controller('loginController', function($scope, $rootScope, $route,
    $routeParams, $location) {
    $scope.name = 'loginController';
    $scope.$params = $routeParams;
    $scope.loginInfo = {};
    $scope.loginInfo.isLoggedIn = false;
    $scope.printLogged = function() {
        console.log('islogged?   ' + $scope.loginInfo.isLoggedIn);
    }
});
agoraApp.controller('loginForm', function($scope, $rootScope, $http, $cookies) {
    $scope.name = 'loginForm';
    //0 out username and password
    $scope.username = '';
    $scope.password = '';
    //event listener
    // $scope.$on('cookieLoginEvent', function(event) {
    //     $scope.cookieLogin();
    //     console.log('fuckyfuck');
    // });
    $scope.loginList = function() {
        //shoot event to accountInfo controller
        $scope.$parent.$broadcast('loginEvent');
        //make log in var to true to hide login and display account info
        $rootScope.isLoggedIn = true;
        // set cookie
        $cookies.put('username', $rootScope.accountInfo.username);
        $cookies.put('password', $rootScope.accountInfo.password);
    }
    $scope.cookieLogin = function() {
        $http({
            method: 'GET',
            url: 'https://startandselect.com/scripts/Login.php',
            params: {
                username: $cookies.get('username'),
                password: $cookies.get('password')
            }
        }).then(function successCallback(response) {
            // this callback will be called asynchronously
            // when the response is available

            //parsing response to local var
            $rootScope.accountInfo = JSON.parse(angular.toJson(response.data));
            //make log in var to true to hide login and display account info
            $rootScope.isLoggedIn = true;
            // set cookie
            $cookies.put('username', $rootScope.accountInfo.username);
            $cookies.put('password', $rootScope.accountInfo.password);
            //debug response callback logs
            console.log('successCallback, parsed: ' + $scope.accountInfo);
        }, function errorCallback(response) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
            console.log('errorCallback, response: ' + $scope.accountInfoTemp);
        });
    }
    $scope.submit = function() {
        accountInfo = '';
        $http({
            method: 'GET',
            url: 'https://startandselect.com/scripts/Login.php',
            //production params
            //  params: {username: $scope.username,
            //           password: $scope.password}
            //debug default account
            params: {
                username: usr,
                password: pass
            }
        }).then(function successCallback(response) {
            // this callback will be called asynchronously
            // when the response is available

            //parsing response to local var
            $rootScope.accountInfo = JSON.parse(angular.toJson(response.data));
            $scope.loginList();
            //debug response callback logs
            console.log('successCallback, parsed: ' + $scope.accountInfo);
        }, function errorCallback(response) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
            $scope.accountInfoTemp = JSON.parse(angular.toJson(response.data));
            console.log('errorCallback, response: ' + $scope.accountInfoTemp);
        });
    }
});
agoraApp.controller('submitQuestionFormController', function($scope, $http) {
    $scope.name = 'submitQuestionFormController';
    $scope.question = '';
    $scope.submitTheFuckingQuestion = function() {
        //logged/not
        if ($scope.isLoggedIn) {
            $http({
                method: 'GET',
                url: 'https://startandselect.com/scripts/UploadQuestion.php',
                //production params
                params: {
                    user_id: $scope.accountInfo.id,
                    question: $scope.question,
                    tags: 'fucking question'
                }
            }).then(function successCallback(response) {
                // this callback will be called asynchronously
                // when the response is available
                $scope.$parent.refresh();
                console.log('question successCallback, unparsed: ' + JSON.stringify(response.data));
            }, function errorCallback(response) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
                console.log('errorCallback, response: ' + response.data);
            });
        } else {
            $http({
                method: 'GET',
                url: 'https://startandselect.com/scripts/UploadQuestion.php',
                //production params
                params: {
                    question: $scope.question,
                    tags: 'fucking question'
                }
            }).then(function successCallback(response) {
                // this callback will be called asynchronously
                // when the response is available
                $scope.$parent.refresh();
                console.log('question successCallback, unparsed: ' + JSON.stringify(response.data));
            }, function errorCallback(response) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
                console.log('errorCallback, response: ' + response.data);
            });
        }
    };
});
agoraApp.controller('submitResponseFormController', function($scope, $http) {
    $scope.name = 'submitResponseFormController';
    $scope.response = '';
    $scope.submit = function(questionId, res) {
        if ($scope.isLoggedIn) {
            $http({
                method: 'GET',
                url: 'https://startandselect.com/scripts/UploadResponse.php',
                //production params
                params: {
                    user_id: $scope.accountInfo.id,
                    question_id: questionId,
                    response: res
                }
            }).then(function successCallback(response) {
                // this callback will be called asynchronously
                // when the response is available
                $scope.$parent.refresh();
            }, function errorCallback(response) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
                console.log('errorCallback, response: ' + response.data);
            });
        } else {
            $http({
                method: 'GET',
                url: 'https://startandselect.com/scripts/UploadResponse.php',
                //production params
                params: {
                    question_id: questionId,
                    response: res
                }
            }).then(function successCallback(response) {
                // this callback will be called asynchronously
                // when the response is available
                $scope.$parent.refresh();
            }, function errorCallback(response) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
                console.log('errorCallback, response: ' + response.data);
            });
        }
    };
});
agoraApp.controller('createAccountContoller', function($scope, $http, $route,
    $routeParams, $location) {
    $scope.name = 'createAccountContoller';
    $scope.$params = $routeParams;
    $scope.username;
    $scope.password;
    $scope.createdAccount;

    $scope.createAccount = function(usr, pass) {
        //request
        $http({
            method: 'POST',
            url: 'https://startandselect.com/scripts/MakeUser.php',
            params: {
                username: usr,
                password: pass
            }
        }).then(function successCallback(response) {
            // this callback will be called asynchronously
            // when the response is available
            $scope.createdAccount = response.data;
            accountInfo = $scope.createdAccount;
            isLoggedIn = true;
            //show response for debug
            console.log('usr: ' + usr + ' pass: ' + pass + ' successCallback unparsed response: ' + response.data);
        }, function errorCallback(response) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
            //show response for debug
            console.log('errorCallback unparsed response: ' + response.data);
        });
    };
});
agoraApp.controller('pageController', function($scope) {
    $scope.name = 'pager';
    $scope.totalItems = totalQueriedQuestions;
    $scope.currentPage = questionsAPage;

});
agoraApp.controller('top30', function($scope, $rootScope, $http, $route, $routeParams, $location, $cookies) {
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

            }
        }
        //search term
    $scope.currentSearchTerm = '';
    // get request questions
    $scope.getSearchedQuestions = function(pgN, searchTerm) {
        //multiply page number for first question desired
        $scope.startQuestion = pgN * numIteratedPerPage;
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
    }
    $scope.getTopQuestions = function(pgN) {
        //multiply page number for first question desired
        var startQuestion = pgN * numIteratedPerPage;
        //request
        $http({
            method: 'POST',

            url: 'https://startandselect.com/scripts/GetPopularQuestion.php',

            params: {
                limit: numIteratedPerPage,
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
            $scope.getSearchedQuestions($scope.pageNum, $scope.currentSearchTerm);
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
});
