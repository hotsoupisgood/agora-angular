module.exports = function($scope, submitResponseService) {
    $scope.name = 'submitResponseFormController';
    $scope.response = '';
    $scope.moduleTitle = [];
    $scope.moduleBody = [];
    $scope.moduleIterator = 0;
    $scope.modules = [];
    $scope.success = false;
    $scope.addModule = function() {
      if ($scope.moduleIterator < 8) {
        ++$scope.moduleIterator;
        $scope.modules.push({
            title: '',
            text: ''
        });
      };
    };
    $scope.submit = function(id) {
        submitResponseService.submit(id, $scope.response, $scope.modules)
        .then(function(response) {
          $scope.success = true;
        });
    };
};
