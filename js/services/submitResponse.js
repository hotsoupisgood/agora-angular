module.exports = function($http, $cookies, $rootScope, userService) {
    this.submit = function (questionId, inputResponse, modules) {
            return $http({
                method: 'POST',
                url: 'https://api.iex.ist/full/response/',
                data: {
                    question_id: questionId,
                    text: inputResponse,
                    modules: modules
                },
                headers: {
                  'Content-type': 'application/json',
                  'Authorization': 'ApiKey ' + $rootScope.accountInfo.username + ':' + $rootScope.accountInfo.key
                }
            }).then(function successCallback(response) {
                // this callback will be called asynchronously
                // when the response is available
                // console.log('successCallback, response: ');
                // console.log(response.data);
                response.success=true;
                return response;
            }, function errorCallback(response) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
                console.log('errorCallback, response: ');
                console.log(response.data);
                response.success=false;
                return response;
            });
    };
};
