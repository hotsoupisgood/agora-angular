module.exports = function($http, $cookies) {
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
                response.success=true;
                return response;
            }, function errorCallback(response) {
                response.success=false;
                return response;
            });
    };
};
