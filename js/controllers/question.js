module.exports = function($scope, $routeParams, getSingleQuestionService, voteService, editService) {
    $scope.name = 'questionController';
    $scope.question = {};
    $scope.responses = {};
    $scope.questionId = $routeParams.questionId;
    $scope.editQuestion=false;
    $scope.editText="Edit";
    $scope.getQuestionFull = function () {
      getSingleQuestionService.get($scope.questionId).then(function (response) {
        $scope.question = response;
        console.log($scope.question.responses);
      });
    };
    $scope.toggleEdit=function(){
      if($scope.editText == "Edit"){
        $scope.editText="Save";
        $scope.editQuestion=true;
      }else{
        $scope.editText="Edit";
        $scope.editQuestion=false;
      }
    }
    $scope.getQuestionFull();
    $scope.saveText=function(question){
      if(!editService.editQuestion(question.id, question.text)){
        alert("Failed to update the question. Check your connection.");
      }
      $scope.editQuestion=false;
    };
};
