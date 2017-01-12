module.exports = function ($rootScope, $http, userService ) {
    if ($rootScope.isLoggedIn) {
        //request
        $http({
            method: 'POST',
            url: 'http://iex.ist/full/upVote' + 1,
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
  }
};
