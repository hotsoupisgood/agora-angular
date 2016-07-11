
module.exports = function($scope, submitResponseService) {
    $scope.name = 'submitResponseFormController';
    $scope.response = '';
    $scope.submit = function(questionId, response) {
        submitResponseService.submit(questionId, response);
    };
};
