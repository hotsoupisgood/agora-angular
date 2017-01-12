module.exports = function($scope, $rootScope, $timeout, $location, $routeParams,
  searchService) {
    $scope.name = 'searchController';
    $scope.question = '';
    $scope.tag = '';
    $scope.user = '';
    $scope.response = '';

    $scope.globalQuery = '';

    $scope.questions = {};
    $scope.tagResults = {};
    $scope.userResults = {};
    $scope.responseResults = {};
    
    $scope.searchQuestions = function () {
      searchService.questions($scope.question).then(function (response) {
        $scope.questions = response;
      })
    }
    $scope.searchResponses = function () {
      console.log($scope.response);
      searchService.responses($scope.question).then(function (response) {
        $scope.responseResults = response;
      })
    }
    $scope.searchTags = function () {
      console.log($scope.tag);
      searchService.tagz($scope.question).then(function (response) {
        $scope.tagResults = response;
      })
    }
    $scope.searchUsers = function () {
      console.log($scope.user);
      searchService.users($scope.question).then(function (response) {
        $scope.userResults = response;
      })
    }
    $scope.submitQuery = function () {
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
    //on page load logic
    if ($routeParams.searchQuery) {
      $scope.globalQuery = $routeParams.searchQuery.split('+').join(' ');
      $scope.question = $scope.globalQuery;
      $scope.tag = $scope.globalQuery;
      $scope.user = $scope.globalQuery;
      $scope.response = $scope.globalQuery;
      $scope.submitQuery();
    }
};
