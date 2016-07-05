module.exports =  function () {
  $scope.name = 'submitResponseService';
  function submit(questionId, res) {
    if ($scope.isLoggedIn) {
        $http({
            method: 'GET',
            url: 'https://startandselect.com/scripts/UploadResponse.php',
            //production params
            params: {
                user_id: $scope.accountInfo.id,
                question_id: questionId,
                response: res
            }
        }).then(function successCallback(response) {
            // this callback will be called asynchronously
            // when the response is available
            $scope.$parent.refresh();
        }, function errorCallback(response) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
            console.log('errorCallback, response: ' + response.data);
        });
    } else {
        $http({
            method: 'GET',
            url: 'https://startandselect.com/scripts/UploadResponse.php',
            //production params
            params: {
                question_id: questionId,
                response: res
            }
        }).then(function successCallback(response) {
            // this callback will be called asynchronously
            // when the response is available
            $scope.$parent.refresh();
        }, function errorCallback(response) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
            console.log('errorCallback, response: ' + response.data);
        });
    }
  }
};
