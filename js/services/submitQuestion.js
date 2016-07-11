module.exports = function($http, accountService) {

    this.submit = function (askedQuestion, questionsTags) {
        //logged/not
        if (accountService.isLoggedIn) {
            $http({
                method: 'GET',
                url: 'https://startandselect.com/scripts/UploadQuestion.php',
                //production params
                params: {
                    user_id: accountService.accountInfo.id,
                    question: askedQuestion,
                    tags: questionsTags
                }
            }).then(function successCallback(response) {
                // this callback will be called asynchronously
                // when the response is available
                // accountService.$parent.refresh();
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
