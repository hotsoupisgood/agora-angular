var top30, numIteratedPerPage=10;

var agoraApp = angular.module('agoraApp', ['ngRoute', 'ngAnimate', 'ui.bootstrap']);

agoraApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider
   .when('/questions', {
    templateUrl: 'top30.html',
    controller: 'top30'
  })
  .when('/account', {
    templateUrl: 'account.html',
    controller: 'Account'
  }).otherwise({
    redirectTo: '/questions'
  }).when('/about', {
    templateUrl: 'about.html',
    controller: 'About'
  }).otherwise({
    redirectTo: '/questions'
  });
}]);
agoraApp.controller('top30', function ($scope, $http, $route,
                                $routeParams, $location) {
// routing goodies
  $scope.name = 'top30';
  $scope.$params = $routeParams;
//manage questions
  var pageNum = 0;
  //get request questions
  function getTopQuestions(pgN) {
    //multiply page number for first question desired
    var startQuestion = pgN*numIteratedPerPage;
    //request
    $http({
     method: 'GET',
     url: 'http://startandselect.com/scripts/GetPopularQuestion.php',
     params: {offset: startQuestion}
   }).then(function successCallback(response) {
       // this callback will be called asynchronously
       // when the response is available
       top30 = JSON.parse(JSON.stringify(response.data));
       $scope.questions = top30;
     }, function errorCallback(response) {
       // called asynchronously if an error occurs
       // or server returns response with an error status.
       console.log('outta questions diggy dog');
     });
  };
  //initial call
  getTopQuestions(pageNum);
  //go forward a page
  $scope.nextPage = function() {
    pageNum++;
    getTopQuestions(pageNum);
    $scope.$apply();
  };
  //go back a page
  $scope.backPage = function() {
    if(pageNum>0)
      pageNum--;
    getTopQuestions(pageNum);
    $scope.$apply();
  };
  //get current page num
  $scope.getPageNum = function() {
    return pageNum;
  };
});
agoraApp.controller('Account', function ($scope, $http) {


});
