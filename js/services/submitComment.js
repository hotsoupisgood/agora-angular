module.exports = function($http, $cookies, $rootScope) {
    this.submit = function (moduleId, commentText) {
      console.log(moduleId + ": " + commentText)
            return $http({
                method: 'POST',
                url: 'https://api.iex.ist/full/comment/',
                data: {
                    text: commentText,
                    module_id: moduleId
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
                return true;
            }, function errorCallback(response) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
                console.log('errorCallback, response: ');
                console.log(response.data);
                return false;
            });
    };
};
