module.exports = function($scope, $routeParams, submitResponseService) {
    $scope.name = 'submitResponseFormController';
    $scope.response = '';
    $scope.moduleTitle = [];
    $scope.moduleBody = [];
    $scope.moduleIterator = 0;
    $scope.modules = [];
    $scope.success = false;
    $scope.questionId = $routeParams.questionId;
    $scope.addModule = function() {
      if ($scope.moduleIterator < 8) {
        ++$scope.moduleIterator;
        $scope.modules.push({
            title: '',
            text: ''
        });
      };
    };
    $scope.submit = function() {
        submitResponseService.submit($scope.questionId, $scope.response, $scope.modules)
        .then(function(response) {
          $scope.success = true;
        });
    };
};
