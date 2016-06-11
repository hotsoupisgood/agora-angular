//misc global vars
var top30,
numIteratedPerPage = 30,
accountInfo,
isLoggedIn,
questionsAPage = 30,
totalQueriedQuestions;
//debug usr account
var usr = 'h', pass = 'fuck';
//app decrelation
var agoraApp = angular.module('agoraApp', ['ngRoute', 'ngAnimate', 'ui.bootstrap', 'angular-toArrayFilter']);
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
  //routing goodies
  $scope.$params = $routeParams;
  $scope.accountInfoTemp;
  //rechecks for change in account info
  $scope.refresh = function () {
      $scope.accountInfoTemp = accountInfo;
      console.log(accountInfo);
    }
    //event listener
    $scope.$on('loginEvent', function(event) {
      $scope.refresh();
      console.log(event);
    });
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
  //0 out username and password
  $scope.username = '';
  $scope.password = '';
  //init temp account info storage(probibly not neccissary)
  $scope.accountInfoTemp = [];

  $scope.loginList = function () {
    //shoot event to accountInfo controller
    $scope.$parent.$broadcast('loginEvent');
    //make log in var to true to hide login and display account info
    $scope.loginInfo.isLoggedIn = true;
    //set global var
    isLoggedIn =  $scope.loginInfo.isLoggedIn;
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
       $scope.loginList();
      //  //shoot event to accountInfo controller
      //  $scope.$emit('loginEvent');
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
agoraApp.controller('submitQuestionFormController', function ($scope, $http){
  $scope.name = 'submitQuestionFormController';
  $scope.question = '';
  $scope.submitTheFuckingQuestion = function() {
    $http({
     method: 'GET',
     url: 'https://startandselect.com/scripts/UploadQuestion.php',
     //production params
    params: {question: $scope.question,
             tags: 'fucking question'}
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
  };
});
agoraApp.controller('submitResponseFormController', function ($scope){
  $scope.name = 'submitResponseFormController';
  $scope.response = '';
  $scope.submitF = function(questionId, creatorId, res) {
    $http({
     method: 'GET',
     url: 'https://startandselect.com/scripts/UploadResponse.php',
     //production params
    params: {question_creator: creatorId,
            question_id: questionId,
            response: res}
   }).then(function successCallback(response) {
       // this callback will be called asynchronously
       // when the response is available
       $scope.$parent.refresh();
       console.log('successCallback, unparsed: ' + response.data);
     }, function errorCallback(response) {
       // called asynchronously if an error occurs
       // or server returns response with an error status.
       console.log('errorCallback, response: ' + response.data);
     });
  };
});
agoraApp.controller('createAccountContoller', function ($scope, $http, $route,
                                $routeParams, $location){
  $scope.name = 'createAccountContoller';
  $scope.$params = $routeParams;
  $scope.username;
  $scope.password;
  $scope.createdAccount;

  $scope.createAccount = function (usr, pass) {
    //request
    $http({
     method: 'POST',
     //Deprecated - url: 'http://startandselect.com/scripts/GetPopularQuestion.php',
     url: 'https://startandselect.com/scripts/MakeUser.php',
    //  url: 'https://startandselect.com/scripts/GetPopularQuestion.php',
     params: {username: usr,
              password: pass}
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
agoraApp.controller('pager', function ($scope){
  $scope.name = 'pager';
  $scope.totalItems = totalQueriedQuestions;
  $scope.currentPage = questionsAPage;

});
agoraApp.controller('top30', function ($scope, $http, $route, $routeParams, $location) {

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

  //search term
  $scope.currentSearchTerm = '';
  // get request questions
  $scope.getSearchedQuestions = function (pgN, searchTerm) {
    //multiply page number for first question desired
    $scope.startQuestion = pgN * numIteratedPerPage;
    if ($scope.currentSearchTerm == '') {
      console.log('no query, returning all questions');
      $scope.getTopQuestions($scope.pageNum);
      $scope.showSearch = false;
    }
    else {
      //request
      $http({
       method: 'GET',
       url: 'https://startandselect.com/scripts/Search.php',
      //  url: 'https://startandselect.com/scripts/GetPopularQuestion.php',
       params: {query: $scope.currentSearchTerm,
                offset: $scope.startQuestion}
     }).then(function successCallback(response) {
         // this callback will be called asynchronously
         // when the response is available
         top30 = response.data;
         console.log(top30);
         //hold global top30
        //  var questionTempGroup = angular.element( document.querySelector( '#questionContainer' ) );
        //  questionTempGroup.remove();
        $scope.showSearch = true;
         $scope.searchResultQuestions = top30;
         //set local total q/s in query
         $scope.totalQuestions = response.data.length;
         //set global total q/s in query
         totalQueriedQuestions = $scope.totalQuestions;
         //get num of pages
         $scope.totalPages = $scope.totalQuestions / questionsAPage;
         //show response for debug
         console.log('successCallback parsed response: ' + $scope.questions);
       }, function errorCallback(response) {
         // called asynchronously if an error occurs
         // or server returns response with an error status.
         //show response for debug
         console.log('errorCallback unparsed response: ' + response);
       });
    };
    }
  $scope.getTopQuestions = function (pgN) {
    //multiply page number for first question desired
    var startQuestion = pgN * numIteratedPerPage;
    //request
    $http({
     method: 'POST',

     url: 'https://startandselect.com/scripts/GetPopularQuestion.php',

     params: {offset: startQuestion}

   }).then(function successCallback(response) {
       // this callback will be called asynchronously
       // when the response is available
      //  top30 = JSON.parse(JSON.stringify(response.data.questions));
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
       console.log('successCallback unparsed response: ' + JSON.stringify(response.data.questions));
     }, function errorCallback(response) {
       // called asynchronously if an error occurs
       // or server returns response with an error status.
       //show response for debug
       console.log('errorCallback unparsed response: ' + response);
     });
  };
  //initial call
  $scope.getTopQuestions($scope.pageNum);
  //util
  $scope.refresh = function() {
    if ($scope.showSearch) {
      $scope.getSearchedQuestions($scope.pageNum, $scope.currentSearchTerm);
    }
    else {
      $scope.getTopQuestions($scope.pageNum);
    }
    scroll(0,0);
  };
  //go forward a page
  $scope.nextPage = function() {
    $scope.pageNum++;
    $scope.getTopQuestions($scope.pageNum);
    scroll(0,0);
  };
  //go back a page
  $scope.backPage = function() {
    if($scope.pageNum>0)
      $scope.pageNum--;
    $scope.getTopQuestions($scope.pageNum);
    scroll(0,0);
  };
  //get current page num
  $scope.getPageNum = function() {
    return $scope.pageNum;
  };
// //testest
  $scope.response = '';
  $scope.submitResponse = function (questionId, creatorId, res) {
    $http({
     method: 'GET',
     url: 'https://startandselect.com/scripts/UploadResponse.php',
     //production params
    params: {question_creator: creatorId,
            question_id: questionId,
            response: res}
   }).then(function successCallback(response) {
       // this callback will be called asynchronously
       // when the response is available
       $scope.refresh();
       console.log('successCallback, unparsed: ' + response.data);
     }, function errorCallback(response) {
       // called asynchronously if an error occurs
       // or server returns response with an error status.
       console.log('errorCallback, response: ' + response.data);
     });
  };

});
