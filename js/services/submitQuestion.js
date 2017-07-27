module.exports = function($http, $rootScope, userService) {
    this.submit = function(askedQuestion, questionsTags) {
        //logged/not
        $rootScope.$emit("overlay-submit");
        return $http({
            method: 'POST',
            url: 'https://api.iex.ist/full/question/',
            //production params
            data: {
                text: askedQuestion,
                tags: questionsTags
            },
            headers: {
                'Content-type': 'application/json',
                'Authorization': 'ApiKey ' + $rootScope.accountInfo.username + ':' + $rootScope.accountInfo.key
            }
        }).then(function successCallback(response) {
            // this callback will be called asynchronously
            // when the response is available
            console.log('successCallback, response: ');
            console.log(response.data);
            return response.data;
        }, function errorCallback(response) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
            console.log('errorCallback, response: ');
            console.log(response.data);
            return false;
        });
    }
};
