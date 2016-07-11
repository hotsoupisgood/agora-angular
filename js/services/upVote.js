module.exports = function (accountService) {
  this.submit = function () {
    if (accountService.isLoggedIn) {
        //request
        $http({
            method: 'GET',
            url: 'https://startandselect.com/scripts/UpVote.php',
            params: {
                response_id: responseId,
                user_id: accountService.startQuestion
            }
        }).then(function successCallback(response) {
            // this callback will be called asynchronously
            // when the response is available

            //show response for debug
            console.log('successCallback unparsed response: ' + JSON.stringify(response.data));
        }, function errorCallback(response) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
            //show response for debug
            console.log('errorCallback unparsed response: ' + response);
        });
    } else {
      
    };
  }
};
