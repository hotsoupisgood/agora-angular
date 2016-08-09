module.exports = function($scope, $rootScope, $timeout, $location) {
    $scope.name = 'searchController';
    $scope.searchQuery = {};

    $scope.searchQuestions = function () {
      $location.path( '/search');
      $timeout(function () {
        $location.search({query: $scope.searchQuery});
      }), 500;
      // $timeout(function () {
      //   $rootScope.$broadcast('searchQuestionEvent', $scope.searchQuery.question);
      // }, 500);
    }
    $scope.searchTags = function () {
      $timeout(function () {
        console.log($scope.searchQuery.tags);
        $rootScope.$broadcast('searchTagsEvent', $scope.searchQuery.tags);
      }, 10);
    }
};
