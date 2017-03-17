module.exports =  function($scope, $routeParams, getSingleQuestionService, editService) {
    // routing goodies
    $scope.name = 'editController'
    $scope.failed = false
    $scope.text = ''
    $scope.tags = ''

    $scope.getQuestionFull = function () {
      getSingleQuestionService.get($routeParams.id).then(function (response) {
        $scope.question = response
        $scope.text = response.text
        response.tags.forEach(function (item) {
          $scope.tags += item.slug + ', '
        })
      })
    }
    $scope.submit = function() {
      console.log($routeParams.id);
      editService.submitQuestion($scope.text, $scope.tags, $routeParams.id).then(function (response) {
          if (!response) {
            $scope.failed = true
          }
          else {
            //works
            $location.path('question/'+$routeParams.id);
          }
      })
    }
  //call on load
  $scope.getQuestionFull()
  }
