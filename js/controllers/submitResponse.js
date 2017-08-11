module.exports = function($scope, $routeParams, submitResponseService, getQuestionService, animationService) {
    $scope.name = 'submitResponseFormController';
    $scope.response = '';
    $scope.moduleTitle = [];
    $scope.moduleBody = [];
    $scope.moduleIterator = 0;
    $scope.modules = [];
    $scope.success = false;
    $scope.failed = false;
    $scope.questionId = $routeParams.questionId;
    $scope.question = {}
    $scope.getQuestion = function () {
      getQuestionService.getDetail($scope.questionId).then(function (response) {
        console.log("I went and got a question. " + response);
        $scope.question = response;
      });
    }
    $scope.getQuestion();
    $scope.addModule = function() {
      if ($scope.moduleIterator < 8) {
        $scope.modules.push({
            title: '',
            text: ''
        });
        ++$scope.moduleIterator;
      };
    };
    $scope.removeModule = function(id) {
      console.log(id);
      // $scope.re
      $scope.modules.splice(id, 1);

    }
    $scope.submit = function() {
      console.log("Testing if responses were passed: " + $scope.$parent.question.responses);
      animationService.fly();
      if($scope.response == ""){
        console.log("Nothing in the response.");
        $scope.noTitle=true;
        return;
      }
        submitResponseService.submit($scope.questionId, $scope.response, $scope.modules)
        .then(function(response) {
          $scope.success=response.success;
          if ($scope.success) {
            var responses = $scope.$parent.question.responses;
            $scope.$parent.responseSuccess();
            responses.push(response.data);
          }
        });
    };
};
