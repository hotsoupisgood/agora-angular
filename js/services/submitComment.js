module.exports = function($http, $cookies) {
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
                return response.data;
            }, function errorCallback(response) {
                return false;
            });
    };
};
