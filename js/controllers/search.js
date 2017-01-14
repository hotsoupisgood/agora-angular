module.exports = function($scope, $rootScope, $timeout, $location, $routeParams, $route,
  searchService) {
    $scope.name = 'searchController';
    $scope.question = '';
    $scope.tag = '';
    $scope.user = '';
    $scope.response = '';

    $scope.doSearchQuestions = true;
    $scope.doSearchResponses = true;
    $scope.doSearchUsers = true;
    $scope.doSearchTags = false;

    $scope.globalQuery = '';

    $scope.questions = {};
    $scope.tagResults = {};
    $scope.userResults = {};
    $scope.responseResults = {};

    $scope.setGlobalQuery = function () {
      if ($scope.doSearchQuestions) {
        $scope.question = $scope.globalQuery;
      }
      else {
        $scope.question = '';
        $scope.questions = {};
      }
      if ($scope.doSearchResponses) {
        $scope.response = $scope.globalQuery;
      }
      else {
        $scope.response = '';
        $scope.responseResults = {};
      }
      if ($scope.doSearchUsers) {
        $scope.user = $scope.globalQuery;
      }
      else {
        $scope.user = '';
        $scope.userResults = {};
      }
      if ($scope.doSearchTags) {
        $scope.tag = $scope.globalQuery;
      }
      else {
        $scope.tag = '';
        $scope.tagResults = {};
      }
    }
    $scope.searchQuestions = function () {
      searchService.questions($scope.question).then(function (response) {
        $scope.questions = response;
      })
    }
    $scope.searchResponses = function () {
      console.log($scope.response);
      searchService.responses($scope.response).then(function (response) {
        $scope.responseResults = response;
      })
    }
    $scope.searchTags = function () {
      console.log($scope.tag);
      searchService.tagz($scope.tag).then(function (response) {
        $scope.tagResults = response;
      })
    }
    $scope.searchUsers = function () {
      console.log($scope.user);
      searchService.users($scope.user).then(function (response) {
        console.log(response);
        $scope.userResults = response;
      })
    }
    $scope.submitQuery = function () {
      $scope.setGlobalQuery();
      if ($scope.question.length > 0) {
        $scope.searchQuestions();
      };if ($scope.tag.length > 0) {
        $scope.searchTags();
      };if ($scope.user.length > 0) {
        $scope.searchUsers();
      };if ($scope.response.length > 0) {
        $scope.searchResponses();
      }
    }
    $scope.submit = function () {
      $location.search(
        {query: $scope.globalQuery,
        doQ: $scope.doSearchQuestions,
        doR: $scope.doSearchResponses,
        doU: $scope.doSearchUsers,
        doT: $scope.doSearchTags});
    }
    //on page load logic
    if ($location.search().query) {
      $scope.globalQuery = $location.search().query;
      $scope.doSearchQuestions = $location.search().doQ;
      $scope.doSearchResponses = $location.search().doR;
      $scope.doSearchUsers = $location.search().doU;
      $scope.doSearchTags = $location.search().doT;
      $scope.submitQuery();
    }
};
