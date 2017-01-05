module.exports = function (userService) {
  this.submit = function () {
    if (userService.isLoggedIn) {
        //request
        $http({
            method: 'POST',
            url: 'http://startandselect.com/scripts/UpVote.php',
            params: {
                response_id: responseId,
                user_id: userService.startQuestion
            },
            headers: {
              'Content-type': 'application/json'
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
