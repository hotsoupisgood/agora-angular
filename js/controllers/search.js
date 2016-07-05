module.exports = function($scope, $rootScope, $timeout, $location) {
    $scope.name = 'searchController';
    $scope.searchQuery = {};

    $scope.searchQuestions = function () {
      console.log($scope.searchQuery.question);
      $location.path( '#questions');
      $timeout(function () {
        $rootScope.$broadcast('searchQuestionEvent', $scope.searchQuery.question);
      }, 10);
    }
    $scope.searchTags = function () {
      $timeout(function () {
        console.log($scope.searchQuery.tags);
        $rootScope.$broadcast('searchTagsEvent', $scope.searchQuery.tags);
      }, 10);
    }
};
