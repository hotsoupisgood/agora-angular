module.exports = function($http, $cookies, $rootScope, accountService) {
    this.submit = function (questionId, inputResponse, modules) {
            return $http({
                method: 'POST',
                url: 'https://startandselect.com/api/full/response/',
                //production params
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
