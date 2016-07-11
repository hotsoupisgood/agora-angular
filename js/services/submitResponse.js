module.exports = function($http, accountService) {

    this.submit = function (questionId, inputResponse) {
      var returnData;
        if (accountService.isLoggedIn) {
            returnData = $http({
                method: 'GET',
                url: 'https://startandselect.com/scripts/UploadResponse.php',
                //production params
                params: {
                    user_id: accountService.accountInfo.id,
                    question_id: questionId,
                    response: inputResponse
                }
            }).then(function successCallback(response) {
                // this callback will be called asynchronously
                // when the response is available
                // accountService.$parent.refresh();
                return response.data;
            }, function errorCallback(response) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
                console.log('errorCallback, response: ' + response.data);
            });
        } else {
          console.log(inputResponse);
            returnData = $http({
                method: 'GET',
                url: 'https://startandselect.com/scripts/UploadResponse.php',
                //production params
                params: {
                    question_id: questionId,
                    response: inputResponse
                }
            }).then(function successCallback(response) {
                // this callback will be called asynchronously
                // when the response is available
                // accountService.$parent.refresh();
                console.log('successCallback, response: ' + response.data);
                return response.data;
            }, function errorCallback(response) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
                console.log('errorCallback, response: ' + response.data);
            });
        };
        return returnData;
    };
};
