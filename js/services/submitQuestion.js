module.exports = function($http) {
    this.submit = function(askedQuestion, questionsTags) {
        //logged/not
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
            return response.data;
        }, function errorCallback(response) {
            return false;
        });
    }
};
