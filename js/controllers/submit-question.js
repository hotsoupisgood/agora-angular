module.exports = function($scope, $http) {
    $scope.name = 'submitQuestionFormController';
    $scope.question = '';
    $scope.submitTheFuckingQuestion = function() {
        //logged/not
        if ($scope.isLoggedIn) {
            $http({
                method: 'GET',
                url: 'https://startandselect.com/scripts/UploadQuestion.php',
                //production params
                params: {
                    user_id: $scope.accountInfo.id,
                    question: $scope.question,
                    tags: 'fucking question'
                }
            }).then(function successCallback(response) {
                // this callback will be called asynchronously
                // when the response is available
                $scope.$parent.refresh();
                console.log('question successCallback, unparsed: ' + JSON.stringify(response.data));
            }, function errorCallback(response) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
                console.log('errorCallback, response: ' + response.data);
            });
        } else {
            $http({
                method: 'GET',
                url: 'https://startandselect.com/scripts/UploadQuestion.php',
                //production params
                params: {
                    question: $scope.question,
                    tags: 'fucking question'
                }
            }).then(function successCallback(response) {
                // this callback will be called asynchronously
                // when the response is available
                $scope.$parent.refresh();
                console.log('question successCallback, unparsed: ' + JSON.stringify(response.data));
            }, function errorCallback(response) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
                console.log('errorCallback, response: ' + response.data);
            });
        }
    };
};
