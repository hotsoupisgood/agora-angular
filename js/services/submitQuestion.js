module.exports = function($http, $rootScope, accountService) {

    this.submit = function (askedQuestion, questionsTags) {
        //logged/not
        console.log($rootScope.isLoggedIn);
        if ($rootScope.isLoggedIn) {
            $http({
                method: 'POST',
                url: 'https://startandselect.com/api/full/question/',
                //production params
                data: {
                    // username: accountService.accountInfo.username,
                    // key: accountService.accountInfo.key,
                    question_text: askedQuestion
                    // , tags: questionsTags
                },
                headers: {
                  'Content-type': 'application/json',
                  'Authorization': 'ApiKey ' + $rootScope.accountInfo.username + ':'
                                             + $rootScope.accountInfo.key
                }
            }).then(function successCallback(response) {
                // this callback will be called asynchronously
                // when the response is available
                // accountService.$parent.refresh();
                console.log('successCallback, response: ' + response.data);
            }, function errorCallback(response) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
                console.log('errorCallback, response: ' + response.data);
            });
        } else {
            $http({
                method: 'POST',
                url: 'https://startandselect.com/scripts/UploadQuestion.php',
                //production params
                params: {
                    question: askedQuestion,
                    tags: questionsTags
                }
            }).then(function successCallback(response) {
                // this callback will be called asynchronously
                // when the response is available
                console.log(askedQuestion);
                console.log(questionsTags);
                // accountService.$parent.refresh();
                console.log('question successCallback, unparsed: ' + JSON.stringify(response.data));
            }, function errorCallback(response) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
                console.log('errorCallback, response: ' + response.data);
            });
        }
    }
};
