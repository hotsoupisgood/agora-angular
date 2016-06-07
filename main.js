//misc global vars
var top30, numIteratedPerPage = 30,
accountInfo,
// isLoggedIn = false,
questionsAPage = 30, totalQueriedQuestions;
//default usr account
var usr = 'h', pass = 'fuck';
//app decrelation
var agoraApp = angular.module('agoraApp', ['ngRoute', 'ngAnimate', 'ui.bootstrap']);
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
    controller: 'About'
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
agoraApp.controller('accountController', function ($scope, $route, $routeParams) {
  $scope.name = 'accountController';
  $scope.$params = $routeParams;
  $scope.accountInfoTemp;
  $scope.refresh = function() {
      $scope.accountInfoTemp = accountInfo;
      console.log(accountInfo.id);
    }
});
agoraApp.controller('accountInfoController', function ($scope, $route, $routeParams) {
  $scope.name = 'accountInfoController';
  $scope.$params = $routeParams;
  $scope.accountInfoTemp;
  $scope.$on('loginEvent', function(event) {
    refresh();
    console.log(event);
  });
  $scope.refresh = function () {
      $scope.accountInfoTemp = accountInfo;
      console.log(accountInfo.id);
    }
});
agoraApp.controller('loginController', function ($scope, $route,
                                $routeParams, $location){
  $scope.name = 'loginController';
  $scope.$params = $routeParams;
  $scope.loginInfo = {};
  $scope.loginInfo.isLoggedIn = false;
  $scope.printLogged = function () {
    console.log('islogged?   ' + $scope.loginInfo.isLoggedIn);
  }
});
agoraApp.controller('loginForm', function ($scope, $http){
  $scope.name = 'loginForm';
  $scope.username = '';
  $scope.password = '';
  $scope.accountInfoTemp = [];
  $scope.submit = function() {
    accountInfo = '';
    $http({
     method: 'GET',
     url: 'https://startandselect.com/scripts/Login.php',
     //production params
    //  params: {username: $scope.username,
    //           password: $scope.password}
    //debug default account
    params: {username: usr,
             password: pass}
   }).then(function successCallback(response) {
       // this callback will be called asynchronously
       // when the response is available

       //parsing response to local var
       $scope.accountInfoTemp = JSON.parse(angular.toJson(response.data));
       //coping response in local var to global var,,,
       //try to eliminate ^this^ step with events
       accountInfo = $scope.accountInfoTemp;
       //make log in var to true to hide login and display account info
       $scope.loginInfo.isLoggedIn = true;

       //debug response callback logs
       console.log('successCallback, unparsed: ' + response);
       console.log('successCallback, parsed: ' + $scope.accountInfoTemp);
     }, function errorCallback(response) {
       // called asynchronously if an error occurs
       // or server returns response with an error status.
       $scope.accountInfoTemp = JSON.parse(angular.toJson(response.data));
       console.log('errorCallback, response: ' + $scope.accountInfoTemp);
     });
  }

});
agoraApp.controller('createAccountContoller', function ($scope, $http, $route,
                                $routeParams, $location){
  $scope.name = 'createAccountContoller';
  $scope.$params = $routeParams;

});
agoraApp.controller('pager', function ($scope){
  $scope.name = 'pager';
  $scope.totalItems = totalQueriedQuestions;
  $scope.currentPage = questionsAPage;

});
agoraApp.controller('top30', function ($scope, $http, $route,
                                $routeParams, $location) {
// routing goodies
  $scope.name = 'top30';
  $scope.$params = $routeParams;
//manage questions
  $scope.pageNum = 0;
  $scope.totalQuestions;
  $scope.totalPages;
  //search term
  $scope.currentSearchTerm = '';
  //get request questions
  function getTopQuestions(pgN) {
    //multiply page number for first question desired
    var startQuestion = pgN*numIteratedPerPage;
    //request
    $http({
     method: 'POST',
     //Deprecated - url: 'http://startandselect.com/scripts/GetPopularQuestion.php',
     url: 'http://startandselect.com/scripts/GetPopularQuestion.php',
    //  url: 'https://startandselect.com/scripts/GetPopularQuestion.php',
     params: {offset: startQuestion}
   }).then(function successCallback(response) {
       // this callback will be called asynchronously
       // when the response is available
       top30 = JSON.parse(JSON.stringify(response.data.questions));
       $scope.questions = top30;
       $scope.totalQuestions = response.data.length;
       totalQueriedQuestions = $scope.totalQuestions;
       $scope.totalPages = $scope.totalQuestions / questionsAPage;
       console.log(response);
     }, function errorCallback(response) {
       // called asynchronously if an error occurs
       // or server returns response with an error status.
       console.log("TF");
     });
  };
  //initial call
  getTopQuestions($scope.pageNum);
  //go forward a page
  $scope.nextPage = function() {
    $scope.pageNum++;
    getTopQuestions($scope.pageNum);
  };
  //go back a page
  $scope.backPage = function() {
    if($scope.pageNum>0)
      $scope.pageNum--;
    getTopQuestions($scope.pageNum);
  };
  //get current page num
  $scope.getPageNum = function() {
    return $scope.pageNum;
  };
});
